import { GameServer, GameServerProps } from '../src';
import { Construct } from 'constructs';

describe("GameServer", () => {
    test("GameServer can be extended to create a new base class.", () => {

        // @ts-ignore
        class QuakeGameServer extends GameServer {
            constructor(scope: Construct, id: string, props: GameServerProps) {
                super(scope, id, {...props, game: 'Quake'});

                this.userData.addCommands('echo "let\'s play quake bro"')
            }
        }
    });
});