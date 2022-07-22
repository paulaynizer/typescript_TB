import Token from "../utils/Token";
import ITransportadora from "./ITranspotadora";


export default class Transportadora implements ITransportadora{
    private _token : Token;

    authToken(): Token {
        return new Token();
    }
    send(): void {
       this._token = this.authToken();
       console.log("token:" + this._token.token);
       console.log("enviando com transportadora" );
    }
    receive(): void {
        console.log("Recebendo com transportadora" );
    }

}