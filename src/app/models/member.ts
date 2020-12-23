import { Game } from "./game";

export class Member {

    id: string;
    username: string;
    discriminator: string;
    avatar?: any;
    status: string;
    game: Game;
    avatar_url: string;
}
