import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment{
    private _token : Token;

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
       this._token = this.authToken();
       console.log("token:" + this._token.token);
       console.log("Realizando pagamento com paypal" );
    }
    paypalReceive(): void {
        console.log("Recebendo pagamento com paypal" );
    }

}