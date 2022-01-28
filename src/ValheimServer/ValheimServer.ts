import { GameServer, GameServerProps, IGameServer } from '../GameServer/GameServer';
import { Construct } from 'constructs';

/**
 * Constructor properties that define the ValheimServer object.
 * @experimental
 */
export interface ValheimServerProps extends GameServerProps {}

/**
 * Defines the overall expected shape of ValheimServer objects.
 * @experimental
 */
export interface IValheimServer extends IGameServer {}

/**
 * A static EC2 instance with an elastic IP address, running a Valheim dedicated server.
 * @experimental
 */
export class ValheimServer extends GameServer {
    constructor(scope: Construct, id: string, props: ValheimServerProps) {
        super(scope, id, {...props, game: 'Valheim'});

        this.userData.addCommands('yum install curl wget tar bzip2 gzip unzip python3 binutils bc jq tmux glibc.i686 libstdc++ libstdc++.i686')
        this.userData.addCommands('adduser vhserver')
        this.userData.addCommands('su - vhserver')
        this.userData.addCommands('wget -O linuxgsm.sh https://linuxgsm.sh && chmod +x linuxgsm.sh && bash linuxgsm.sh vhserver')
        this.userData.addCommands('./vhserver install')
    }
}