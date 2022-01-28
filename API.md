# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

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

##### `userData`<sup>Required</sup> <a name="userData" id="aws-gameservers.GameServer.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

The modifiable UserData object attached to the GameServer Instance object.

---


## Structs <a name="Structs" id="Structs"></a>

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
| <code><a href="#aws-gameservers.GameServerProps.property.game">game</a></code> | <code>string</code> | The name of the game being hosted on this GameServer. |
| <code><a href="#aws-gameservers.GameServerProps.property.backupGameServer">backupGameServer</a></code> | <code>boolean</code> | Optional: Whether to back up the GameServer. |
| <code><a href="#aws-gameservers.GameServerProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | Optional: The GameServer's EC2 Instance type. |
| <code><a href="#aws-gameservers.GameServerProps.property.releaseIPOnDelete">releaseIPOnDelete</a></code> | <code>boolean</code> | Optional: Whether to automatically release the GameServer's elastic IP address when the stack is torn down. |
| <code><a href="#aws-gameservers.GameServerProps.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | Optional: The desired size of the GameServer's root volume, in GB. |
| <code><a href="#aws-gameservers.GameServerProps.property.vpcId">vpcId</a></code> | <code>string</code> | Optional: The VPC ID of the existing VPC in which to deploy the GameServer. |

---

##### `game`<sup>Required</sup> <a name="game" id="aws-gameservers.GameServerProps.property.game"></a>

```typescript
public readonly game: string;
```

- *Type:* string

The name of the game being hosted on this GameServer.

This is used for LogicalId sugar throughout the object.

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


## Protocols <a name="Protocols" id="Protocols"></a>

### IGameServer <a name="IGameServer" id="aws-gameservers.IGameServer"></a>

- *Implemented By:* <a href="#aws-gameservers.GameServer">GameServer</a>, <a href="#aws-gameservers.IGameServer">IGameServer</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-gameservers.IGameServer.property.elasticIp">elasticIp</a></code> | <code>aws-cdk-lib.aws_ec2.CfnEIP</code> | The Elastic IP Address attached to the GameServer. |
| <code><a href="#aws-gameservers.IGameServer.property.game">game</a></code> | <code>string</code> | The name of the game being hosted on this GameServer. |
| <code><a href="#aws-gameservers.IGameServer.property.server">server</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | The EC2 Instance Object representing the GameServer itself. |
| <code><a href="#aws-gameservers.IGameServer.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the GameServer is deployed. |
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

##### `userData`<sup>Required</sup> <a name="userData" id="aws-gameservers.IGameServer.property.userData"></a>

```typescript
public readonly userData: UserData;
```

- *Type:* aws-cdk-lib.aws_ec2.UserData

The modifiable UserData object attached to the GameServer Instance object.

---
