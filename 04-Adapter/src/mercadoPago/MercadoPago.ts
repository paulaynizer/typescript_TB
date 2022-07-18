import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";



export default class MercadoPago implements IMercadoPagoPayment{
    private _token : Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
       this._token = this.authToken();
       console.log("token:" + this._token.token);
       console.log("Realizando pagamento com mercado pago" );
    }
    receivePayment(): void {
        console.log("Recebendo pagamento com mercado pago" );
    }

}