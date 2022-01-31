# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmpServer <a name="AmpServer" id="aws-gameservers.AmpServer"></a>

A static EC2 instance with an elastic IP address, running an Amp dedicated server.

#### Initializers <a name="Initializers" id="aws-gameservers.AmpServer.Initializer"></a>

```typescript
import { AmpServer } from 'aws-gameservers'

new AmpServer(scope: Construct, id: string, props: AmpServerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.AmpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-gameservers.AmpServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-gameservers.AmpServer.Initializer.parameter.props">props</a></code> | <code><a href="#aws-gameservers.AmpServerProps">AmpServerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-gameservers.AmpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-gameservers.AmpServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-gameservers.AmpServer.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-gameservers.AmpServerProps">AmpServerProps</a>

---





### GameServer <a name="GameServer" id="aws-gameservers.GameServer"></a>

- *Implements:* <a href="#aws-gameservers.IGameServer">IGameServer</a>

An abstract class representing an EC2 instance with an optional AWS Backup Plan, Elastic IP Address, and new or imported VPC.

The GameServer abstract class is meant to be *extended* via the creation of child classes, e.g. ValheimServer, SatisfactoryServer.

#### Initializers <a name="Initializers" id="aws-gameservers.GameServer.Initializer"></a>

```typescript
import { GameServer } from 'aws-gameservers'

new GameServer(scope: Construct, id: string, props: GameServerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.GameServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-gameservers.GameServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-gameservers.GameServer.Initializer.parameter.props">props</a></code> | <code><a href="#aws-gameservers.GameServerProps">GameServerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-gameservers.GameServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-gameservers.GameServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-gameservers.GameServer.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-gameservers.GameServerProps">GameServerProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.GameServer.property.elasticIp">elasticIp</a></code> | <code>aws-cdk-lib.aws_ec2.CfnEIP</code> | The Elastic IP Address attached to the GameServer. |
| <code><a href="#aws-gameservers.GameServer.property.game">game</a></code> | <code>string</code> | The name of the game being hosted on this GameServer. |
| <code><a href="#aws-gameservers.GameServer.property.server">server</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | The EC2 Instance Object representing the GameServer itself. |
| <code><a href="#aws-gameservers.GameServer.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the GameServer is deployed. |
| <code><a href="#aws-gameservers.GameServer.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group attached to the GameServer Instance. |
| <code><a href="#aws-gameservers.GameServer.property.serverRole">serverRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role associated with the GameServer's instance profile. |
| <code><a href="#aws-gameservers.GameServer.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | The modifiable UserData object attached to the GameServer Instance object. |

---

##### `elasticIp`<sup>Required</sup> <a name="elasticIp" id="aws-gameservers.GameServer.property.elasticIp"></a>

```typescript
public readonly elasticIp: CfnEIP;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnEIP

The Elastic IP Address attached to the GameServer.

---

##### `game`<sup>Required</sup> <a name="game" id="aws-gameservers.GameServer.property.game"></a>

```typescript
public readonly game: string;
```

- *Type:* string

The name of the game being hosted on this GameServer.

---

##### `server`<sup>Required</sup> <a name="server" id="aws-gameservers.GameServer.property.server"></a>

```typescript
public readonly server: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

The EC2 Instance Object representing the GameServer itself.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-gameservers.GameServer.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the GameServer is deployed.

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="aws-gameservers.GameServer.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The security group attached to the GameServer Instance.

---

##### `serverRole`<sup>Required</sup> <a name="serverRole" id="aws-gameservers.GameServer.property.serverRole"></a>

```typescript
public readonly serverRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role associated with the GameServer's instance profile.

---

##### `userData`<sup>Required</sup> <a name="userData" id="aws-gameservers.GameServer.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

The modifiable UserData object attached to the GameServer Instance object.

---


### ValheimServer <a name="ValheimServer" id="aws-gameservers.ValheimServer"></a>

A static EC2 instance with an elastic IP address, running a Valheim dedicated server.

#### Initializers <a name="Initializers" id="aws-gameservers.ValheimServer.Initializer"></a>

```typescript
import { ValheimServer } from 'aws-gameservers'

new ValheimServer(scope: Construct, id: string, props: ValheimServerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.ValheimServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-gameservers.ValheimServer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-gameservers.ValheimServer.Initializer.parameter.props">props</a></code> | <code><a href="#aws-gameservers.ValheimServerProps">ValheimServerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-gameservers.ValheimServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-gameservers.ValheimServer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-gameservers.ValheimServer.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-gameservers.ValheimServerProps">ValheimServerProps</a>

---





## Structs <a name="Structs" id="Structs"></a>

### AmpServerProps <a name="AmpServerProps" id="aws-gameservers.AmpServerProps"></a>

Constructor properties that define the AmpServer object.

#### Initializer <a name="Initializer" id="aws-gameservers.AmpServerProps.Initializer"></a>

```typescript
import { AmpServerProps } from 'aws-gameservers'

const ampServerProps: AmpServerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.AmpServerProps.property.backupGameServer">backupGameServer</a></code> | <code>boolean</code> | Optional: Whether to back up the GameServer. |
| <code><a href="#aws-gameservers.AmpServerProps.property.game">game</a></code> | <code>string</code> | The name of the game being hosted on this GameServer. |
| <code><a href="#aws-gameservers.AmpServerProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Optional: The GameServer's EC2 Instance type. |
| <code><a href="#aws-gameservers.AmpServerProps.property.releaseIPOnDelete">releaseIPOnDelete</a></code> | <code>boolean</code> | Optional: Whether to automatically release the GameServer's elastic IP address when the stack is torn down. |
| <code><a href="#aws-gameservers.AmpServerProps.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | Optional: The desired size of the GameServer's root volume, in GB. |
| <code><a href="#aws-gameservers.AmpServerProps.property.vpcId">vpcId</a></code> | <code>string</code> | Optional: The VPC ID of the existing VPC in which to deploy the GameServer. |

---

##### `backupGameServer`<sup>Optional</sup> <a name="backupGameServer" id="aws-gameservers.AmpServerProps.property.backupGameServer"></a>

```typescript
public readonly backupGameServer: boolean;
```

- *Type:* boolean
- *Default:* true

Optional: Whether to back up the GameServer.

When true, the AWS Backup settings for the GameServer follow the "dailyMonthly1YearRetention" plan.

---

##### `game`<sup>Optional</sup> <a name="game" id="aws-gameservers.AmpServerProps.property.game"></a>

```typescript
public readonly game: string;
```

- *Type:* string

The name of the game being hosted on this GameServer.

This is used for LogicalId sugar throughout the object.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="aws-gameservers.AmpServerProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* InstanceType("t3.medium")

Optional: The GameServer's EC2 Instance type.

> [https://aws.amazon.com/ec2/instance-types/](https://aws.amazon.com/ec2/instance-types/)

---

##### `releaseIPOnDelete`<sup>Optional</sup> <a name="releaseIPOnDelete" id="aws-gameservers.AmpServerProps.property.releaseIPOnDelete"></a>

```typescript
public readonly releaseIPOnDelete: boolean;
```

- *Type:* boolean
- *Default:* false

Optional: Whether to automatically release the GameServer's elastic IP address when the stack is torn down.

Elastic IPs cost a nominal fee when reserved but unallocated. If you release an elastic IP, there is no way to guarantee that you'll ever get it back.

> [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)

---

##### `rootVolumeSize`<sup>Optional</sup> <a name="rootVolumeSize" id="aws-gameservers.AmpServerProps.property.rootVolumeSize"></a>

```typescript
public readonly rootVolumeSize: number;
```

- *Type:* number
- *Default:* 50

Optional: The desired size of the GameServer's root volume, in GB.

Given value must be >= 15 to prevent the need for future volume expansion.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="aws-gameservers.AmpServerProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string
- *Default:* A new VPC is created with 2 public subnets.

Optional: The VPC ID of the existing VPC in which to deploy the GameServer.

---

### GameServerProps <a name="GameServerProps" id="aws-gameservers.GameServerProps"></a>

Constructor properties that define the GameServer object.

#### Initializer <a name="Initializer" id="aws-gameservers.GameServerProps.Initializer"></a>

```typescript
import { GameServerProps } from 'aws-gameservers'

const gameServerProps: GameServerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.GameServerProps.property.backupGameServer">backupGameServer</a></code> | <code>boolean</code> | Optional: Whether to back up the GameServer. |
| <code><a href="#aws-gameservers.GameServerProps.property.game">game</a></code> | <code>string</code> | The name of the game being hosted on this GameServer. |
| <code><a href="#aws-gameservers.GameServerProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Optional: The GameServer's EC2 Instance type. |
| <code><a href="#aws-gameservers.GameServerProps.property.releaseIPOnDelete">releaseIPOnDelete</a></code> | <code>boolean</code> | Optional: Whether to automatically release the GameServer's elastic IP address when the stack is torn down. |
| <code><a href="#aws-gameservers.GameServerProps.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | Optional: The desired size of the GameServer's root volume, in GB. |
| <code><a href="#aws-gameservers.GameServerProps.property.vpcId">vpcId</a></code> | <code>string</code> | Optional: The VPC ID of the existing VPC in which to deploy the GameServer. |

---

##### `backupGameServer`<sup>Optional</sup> <a name="backupGameServer" id="aws-gameservers.GameServerProps.property.backupGameServer"></a>

```typescript
public readonly backupGameServer: boolean;
```

- *Type:* boolean
- *Default:* true

Optional: Whether to back up the GameServer.

When true, the AWS Backup settings for the GameServer follow the "dailyMonthly1YearRetention" plan.

---

##### `game`<sup>Optional</sup> <a name="game" id="aws-gameservers.GameServerProps.property.game"></a>

```typescript
public readonly game: string;
```

- *Type:* string

The name of the game being hosted on this GameServer.

This is used for LogicalId sugar throughout the object.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="aws-gameservers.GameServerProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* InstanceType("t3.medium")

Optional: The GameServer's EC2 Instance type.

> [https://aws.amazon.com/ec2/instance-types/](https://aws.amazon.com/ec2/instance-types/)

---

##### `releaseIPOnDelete`<sup>Optional</sup> <a name="releaseIPOnDelete" id="aws-gameservers.GameServerProps.property.releaseIPOnDelete"></a>

```typescript
public readonly releaseIPOnDelete: boolean;
```

- *Type:* boolean
- *Default:* false

Optional: Whether to automatically release the GameServer's elastic IP address when the stack is torn down.

Elastic IPs cost a nominal fee when reserved but unallocated. If you release an elastic IP, there is no way to guarantee that you'll ever get it back.

> [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)

---

##### `rootVolumeSize`<sup>Optional</sup> <a name="rootVolumeSize" id="aws-gameservers.GameServerProps.property.rootVolumeSize"></a>

```typescript
public readonly rootVolumeSize: number;
```

- *Type:* number
- *Default:* 50

Optional: The desired size of the GameServer's root volume, in GB.

Given value must be >= 15 to prevent the need for future volume expansion.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="aws-gameservers.GameServerProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string
- *Default:* A new VPC is created with 2 public subnets.

Optional: The VPC ID of the existing VPC in which to deploy the GameServer.

---

### ValheimServerProps <a name="ValheimServerProps" id="aws-gameservers.ValheimServerProps"></a>

Constructor properties that define the ValheimServer object.

#### Initializer <a name="Initializer" id="aws-gameservers.ValheimServerProps.Initializer"></a>

```typescript
import { ValheimServerProps } from 'aws-gameservers'

const valheimServerProps: ValheimServerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.ValheimServerProps.property.backupGameServer">backupGameServer</a></code> | <code>boolean</code> | Optional: Whether to back up the GameServer. |
| <code><a href="#aws-gameservers.ValheimServerProps.property.game">game</a></code> | <code>string</code> | The name of the game being hosted on this GameServer. |
| <code><a href="#aws-gameservers.ValheimServerProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Optional: The GameServer's EC2 Instance type. |
| <code><a href="#aws-gameservers.ValheimServerProps.property.releaseIPOnDelete">releaseIPOnDelete</a></code> | <code>boolean</code> | Optional: Whether to automatically release the GameServer's elastic IP address when the stack is torn down. |
| <code><a href="#aws-gameservers.ValheimServerProps.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | Optional: The desired size of the GameServer's root volume, in GB. |
| <code><a href="#aws-gameservers.ValheimServerProps.property.vpcId">vpcId</a></code> | <code>string</code> | Optional: The VPC ID of the existing VPC in which to deploy the GameServer. |

---

##### `backupGameServer`<sup>Optional</sup> <a name="backupGameServer" id="aws-gameservers.ValheimServerProps.property.backupGameServer"></a>

```typescript
public readonly backupGameServer: boolean;
```

- *Type:* boolean
- *Default:* true

Optional: Whether to back up the GameServer.

When true, the AWS Backup settings for the GameServer follow the "dailyMonthly1YearRetention" plan.

---

##### `game`<sup>Optional</sup> <a name="game" id="aws-gameservers.ValheimServerProps.property.game"></a>

```typescript
public readonly game: string;
```

- *Type:* string

The name of the game being hosted on this GameServer.

This is used for LogicalId sugar throughout the object.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="aws-gameservers.ValheimServerProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* InstanceType("t3.medium")

Optional: The GameServer's EC2 Instance type.

> [https://aws.amazon.com/ec2/instance-types/](https://aws.amazon.com/ec2/instance-types/)

---

##### `releaseIPOnDelete`<sup>Optional</sup> <a name="releaseIPOnDelete" id="aws-gameservers.ValheimServerProps.property.releaseIPOnDelete"></a>

```typescript
public readonly releaseIPOnDelete: boolean;
```

- *Type:* boolean
- *Default:* false

Optional: Whether to automatically release the GameServer's elastic IP address when the stack is torn down.

Elastic IPs cost a nominal fee when reserved but unallocated. If you release an elastic IP, there is no way to guarantee that you'll ever get it back.

> [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)

---

##### `rootVolumeSize`<sup>Optional</sup> <a name="rootVolumeSize" id="aws-gameservers.ValheimServerProps.property.rootVolumeSize"></a>

```typescript
public readonly rootVolumeSize: number;
```

- *Type:* number
- *Default:* 50

Optional: The desired size of the GameServer's root volume, in GB.

Given value must be >= 15 to prevent the need for future volume expansion.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="aws-gameservers.ValheimServerProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string
- *Default:* A new VPC is created with 2 public subnets.

Optional: The VPC ID of the existing VPC in which to deploy the GameServer.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAmpServer <a name="IAmpServer" id="aws-gameservers.IAmpServer"></a>

- *Extends:* <a href="#aws-gameservers.IGameServer">IGameServer</a>

- *Implemented By:* <a href="#aws-gameservers.IAmpServer">IAmpServer</a>

Defines the overall expected shape of AmpServer objects.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.IAmpServer.property.elasticIp">elasticIp</a></code> | <code>aws-cdk-lib.aws_ec2.CfnEIP</code> | The Elastic IP Address attached to the GameServer. |
| <code><a href="#aws-gameservers.IAmpServer.property.game">game</a></code> | <code>string</code> | The name of the game being hosted on this GameServer. |
| <code><a href="#aws-gameservers.IAmpServer.property.server">server</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | The EC2 Instance Object representing the GameServer itself. |
| <code><a href="#aws-gameservers.IAmpServer.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the GameServer is deployed. |
| <code><a href="#aws-gameservers.IAmpServer.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group attached to the GameServer Instance. |
| <code><a href="#aws-gameservers.IAmpServer.property.serverRole">serverRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role associated with the GameServer's instance profile. |
| <code><a href="#aws-gameservers.IAmpServer.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | The modifiable UserData object attached to the GameServer Instance object. |

---

##### `elasticIp`<sup>Required</sup> <a name="elasticIp" id="aws-gameservers.IAmpServer.property.elasticIp"></a>

```typescript
public readonly elasticIp: CfnEIP;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnEIP

The Elastic IP Address attached to the GameServer.

---

##### `game`<sup>Required</sup> <a name="game" id="aws-gameservers.IAmpServer.property.game"></a>

```typescript
public readonly game: string;
```

- *Type:* string

The name of the game being hosted on this GameServer.

---

##### `server`<sup>Required</sup> <a name="server" id="aws-gameservers.IAmpServer.property.server"></a>

```typescript
public readonly server: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

The EC2 Instance Object representing the GameServer itself.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-gameservers.IAmpServer.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the GameServer is deployed.

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="aws-gameservers.IAmpServer.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The security group attached to the GameServer Instance.

---

##### `serverRole`<sup>Required</sup> <a name="serverRole" id="aws-gameservers.IAmpServer.property.serverRole"></a>

```typescript
public readonly serverRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role associated with the GameServer's instance profile.

---

##### `userData`<sup>Required</sup> <a name="userData" id="aws-gameservers.IAmpServer.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

The modifiable UserData object attached to the GameServer Instance object.

---

### IGameServer <a name="IGameServer" id="aws-gameservers.IGameServer"></a>

- *Implemented By:* <a href="#aws-gameservers.AmpServer">AmpServer</a>, <a href="#aws-gameservers.GameServer">GameServer</a>, <a href="#aws-gameservers.ValheimServer">ValheimServer</a>, <a href="#aws-gameservers.IAmpServer">IAmpServer</a>, <a href="#aws-gameservers.IGameServer">IGameServer</a>, <a href="#aws-gameservers.IValheimServer">IValheimServer</a>

Defines the overall expected shape of GameServer objects.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.IGameServer.property.elasticIp">elasticIp</a></code> | <code>aws-cdk-lib.aws_ec2.CfnEIP</code> | The Elastic IP Address attached to the GameServer. |
| <code><a href="#aws-gameservers.IGameServer.property.game">game</a></code> | <code>string</code> | The name of the game being hosted on this GameServer. |
| <code><a href="#aws-gameservers.IGameServer.property.server">server</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | The EC2 Instance Object representing the GameServer itself. |
| <code><a href="#aws-gameservers.IGameServer.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the GameServer is deployed. |
| <code><a href="#aws-gameservers.IGameServer.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group attached to the GameServer Instance. |
| <code><a href="#aws-gameservers.IGameServer.property.serverRole">serverRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role associated with the GameServer's instance profile. |
| <code><a href="#aws-gameservers.IGameServer.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | The modifiable UserData object attached to the GameServer Instance object. |

---

##### `elasticIp`<sup>Required</sup> <a name="elasticIp" id="aws-gameservers.IGameServer.property.elasticIp"></a>

```typescript
public readonly elasticIp: CfnEIP;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnEIP

The Elastic IP Address attached to the GameServer.

---

##### `game`<sup>Required</sup> <a name="game" id="aws-gameservers.IGameServer.property.game"></a>

```typescript
public readonly game: string;
```

- *Type:* string

The name of the game being hosted on this GameServer.

---

##### `server`<sup>Required</sup> <a name="server" id="aws-gameservers.IGameServer.property.server"></a>

```typescript
public readonly server: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

The EC2 Instance Object representing the GameServer itself.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-gameservers.IGameServer.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the GameServer is deployed.

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="aws-gameservers.IGameServer.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The security group attached to the GameServer Instance.

---

##### `serverRole`<sup>Required</sup> <a name="serverRole" id="aws-gameservers.IGameServer.property.serverRole"></a>

```typescript
public readonly serverRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role associated with the GameServer's instance profile.

---

##### `userData`<sup>Required</sup> <a name="userData" id="aws-gameservers.IGameServer.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

The modifiable UserData object attached to the GameServer Instance object.

---

### IValheimServer <a name="IValheimServer" id="aws-gameservers.IValheimServer"></a>

- *Extends:* <a href="#aws-gameservers.IGameServer">IGameServer</a>

- *Implemented By:* <a href="#aws-gameservers.IValheimServer">IValheimServer</a>

Defines the overall expected shape of ValheimServer objects.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.IValheimServer.property.elasticIp">elasticIp</a></code> | <code>aws-cdk-lib.aws_ec2.CfnEIP</code> | The Elastic IP Address attached to the GameServer. |
| <code><a href="#aws-gameservers.IValheimServer.property.game">game</a></code> | <code>string</code> | The name of the game being hosted on this GameServer. |
| <code><a href="#aws-gameservers.IValheimServer.property.server">server</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | The EC2 Instance Object representing the GameServer itself. |
| <code><a href="#aws-gameservers.IValheimServer.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the GameServer is deployed. |
| <code><a href="#aws-gameservers.IValheimServer.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group attached to the GameServer Instance. |
| <code><a href="#aws-gameservers.IValheimServer.property.serverRole">serverRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role associated with the GameServer's instance profile. |
| <code><a href="#aws-gameservers.IValheimServer.property.userData">userData</a></code> | <code>aws-cdk-lib.aws_ec2.UserData</code> | The modifiable UserData object attached to the GameServer Instance object. |

---

##### `elasticIp`<sup>Required</sup> <a name="elasticIp" id="aws-gameservers.IValheimServer.property.elasticIp"></a>

```typescript
public readonly elasticIp: CfnEIP;
```

- *Type:* aws-cdk-lib.aws_ec2.CfnEIP

The Elastic IP Address attached to the GameServer.

---

##### `game`<sup>Required</sup> <a name="game" id="aws-gameservers.IValheimServer.property.game"></a>

```typescript
public readonly game: string;
```

- *Type:* string

The name of the game being hosted on this GameServer.

---

##### `server`<sup>Required</sup> <a name="server" id="aws-gameservers.IValheimServer.property.server"></a>

```typescript
public readonly server: IInstance;
```

- *Type:* aws-cdk-lib.aws_ec2.IInstance

The EC2 Instance Object representing the GameServer itself.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aws-gameservers.IValheimServer.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the GameServer is deployed.

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="aws-gameservers.IValheimServer.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The security group attached to the GameServer Instance.

---

##### `serverRole`<sup>Required</sup> <a name="serverRole" id="aws-gameservers.IValheimServer.property.serverRole"></a>

```typescript
public readonly serverRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role associated with the GameServer's instance profile.

---

##### `userData`<sup>Required</sup> <a name="userData" id="aws-gameservers.IValheimServer.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

The modifiable UserData object attached to the GameServer Instance object.

---

