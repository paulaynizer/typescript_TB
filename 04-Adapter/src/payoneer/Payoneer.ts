import Token from "../utils/Token";
import IPayoneer from "./IPayoneerPayment";


export default class Payoneer implements IPayoneer{
    private _token : Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
       this._token = this.authToken();
       console.log("token:" + this._token.token);
       console.log("Realizando pagamento com payoneer" );
    }
    receivePayment(): void {
        console.log("Recebendo pagamento com payoneer" );
    }

}