import Token from "../utils/Token";
import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    private _token : Token;

    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
       this._token = this.authToken();
       console.log("token:" + this._token.token);
       console.log("enviando com correios" );
    }
    receiveCorreios(): void {
        console.log("recebendo com correios" );
    }

}