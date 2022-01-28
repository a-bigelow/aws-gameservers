import { RemovalPolicy } from "aws-cdk-lib";
import { Construct } from "constructs";
import {
    AmazonLinuxEdition,
    AmazonLinuxGeneration,
    AmazonLinuxImage,
    AmazonLinuxStorage,
    BlockDeviceVolume,
    CfnEIP,
    EbsDeviceVolumeType,
    IInstance,
    Instance,
    InstanceType,
    IVpc,
    SubnetType,
    UserData,
    Vpc,
} from "aws-cdk-lib/aws-ec2";
import { BackupPlan, BackupResource, BackupSelection } from "aws-cdk-lib/aws-backup";

/**
 * Constructor properties that define the GameServer object.
 * @experimental
 */
export interface GameServerProps {
    /**
     * The name of the game being hosted on this GameServer. This is used for LogicalId sugar throughout the object.
     */
    readonly game?: string;

    /**
     * Optional: The VPC ID of the existing VPC in which to deploy the GameServer.
     * @default A new VPC is created with 2 public subnets.
     */
    readonly vpcId?: string;

    /**
     * Optional: The GameServer's EC2 Instance type.
     * @see https://aws.amazon.com/ec2/instance-types/
     * @default InstanceType("t3.medium")
     */
    readonly instanceType?: InstanceType;

    /**
     * Optional: The desired size of the GameServer's root volume, in GB. Given value must be >= 15 to prevent the need for future volume expansion.
     * @default 50
     */
    readonly rootVolumeSize?: number;

    /**
     * Optional: Whether to automatically release the GameServer's elastic IP address when the stack is torn down.
     * Elastic IPs cost a nominal fee when reserved but unallocated.
     * If you release an elastic IP, there is no way to guarantee that you'll ever get it back.
     * @see https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html
     * @default false
     */
    readonly releaseIPOnDelete?: boolean;

    /**
     * Optional: Whether to back up the GameServer. When true, the AWS Backup settings for the GameServer follow the "dailyMonthly1YearRetention" plan.
     * @default true
     */
    readonly backupGameServer?: boolean;
}

/**
 * Defines the overall expected shape of GameServer objects.
 * @experimental
 */
export interface IGameServer {
    /**
     * The name of the game being hosted on this GameServer.
     */
    readonly game: string;

    /**
     * The VPC where the GameServer is deployed.
     */
    readonly vpc: IVpc;

    /**
     * The EC2 Instance Object representing the GameServer itself.
     */
    readonly server: IInstance;

    /**
     * The Elastic IP Address attached to the GameServer.
     */
    readonly elasticIp: CfnEIP;

    /**
     * The modifiable UserData object attached to the GameServer Instance object.
     */
    userData: UserData;
}

/**
 * An abstract class representing an EC2 instance with an optional AWS Backup Plan, Elastic IP Address, and new or imported VPC.
 * The GameServer abstract class is meant to be *extended* via the creation of child classes, e.g. ValheimServer, SatisfactoryServer.
 * @experimental
 */
export abstract class GameServer extends Construct implements IGameServer {
    public readonly game: string;
    public readonly vpc: IVpc;
    public readonly server: IInstance;
    public readonly elasticIp: CfnEIP;
    public userData: UserData;

    constructor(scope: Construct, id: string, props: GameServerProps) {
        super(scope, id);

        this.game = props.game!;

        this.vpc = props.vpcId
            ? Vpc.fromLookup(this, "importedVpc", { vpcId: props.vpcId })
            : new Vpc(this, `${this.game}ServerVpc`, {
                  maxAzs: 2,
                  subnetConfiguration: [
                      {
                          name: `${this.game}PublicSubnet1`,
                          subnetType: SubnetType.PUBLIC,
                      },
                      {
                          name: `${this.game}PublicSubnet2`,
                          subnetType: SubnetType.PUBLIC,
                      },
                  ],
              });

        // Create a simple UserData object and expose it for expansion by child classes.
        this.userData = UserData.forLinux();

        this.server = new Instance(this, `${this.game}Server`, {
            blockDevices: [
                {
                    deviceName: "/dev/sda1",
                    volume: BlockDeviceVolume.ebs(props.rootVolumeSize && props.rootVolumeSize >= 15 ? props.rootVolumeSize! : 50, {
                        volumeType: EbsDeviceVolumeType.GP3,
                    }),
                },
            ],
            instanceName: `CDK-GameServer-${this.game}`,
            instanceType: props.instanceType ?? new InstanceType("t3.medium"),
            machineImage: new AmazonLinuxImage({
                edition: AmazonLinuxEdition.STANDARD,
                generation: AmazonLinuxGeneration.AMAZON_LINUX_2022,
                storage: AmazonLinuxStorage.EBS,
            }),
            propagateTagsToVolumeOnCreation: true,
            userData: this.userData,
            vpc: this.vpc,
        });

        this.elasticIp = new CfnEIP(this, `${this.game}ElasticIP`, {
            domain: "vpc",
            instanceId: this.server.instanceId,
        });

        this.elasticIp.applyRemovalPolicy(
            props.releaseIPOnDelete !== false ? RemovalPolicy.DESTROY : RemovalPolicy.RETAIN
        );

        if (props.backupGameServer !== false) {
            const backupPlan = BackupPlan.dailyMonthly1YearRetention(this, `${this.game}ServerBackupPlan`);
            // @ts-ignore
            const backupSelection = new BackupSelection(this, `${this.game}BackupSelection`, {
                backupPlan,
                resources: [BackupResource.fromEc2Instance(this.server)],
            });
        }
    }
}
