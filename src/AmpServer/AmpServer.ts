import { GameServer, GameServerProps, IGameServer } from '../GameServer/GameServer';
import { Construct } from 'constructs';
import { Peer, Port } from 'aws-cdk-lib/aws-ec2';

/**
 * Constructor properties that define the AmpServer object.
 * @experimental
 */
export interface AmpServerProps extends GameServerProps {}

/**
 * Defines the overall expected shape of AmpServer objects.
 * @experimental
 */
export interface IAmpServer extends IGameServer {}

/**
 * A static EC2 instance with an elastic IP address, running an Amp dedicated server.
 * @experimental
 */
export class AmpServer extends GameServer {
    constructor(scope: Construct, id: string, props: AmpServerProps) {
        super(scope, id, {...props, game: 'Amp'});

        this.securityGroup.addIngressRule(Peer.anyIpv4(),Port.tcp(443), 'HTTPS Inbound Traffic for the AmpServer')

        this.userData.addCommands('bash <(wget -qO- getamp.sh)')

    }
}