import IMercadoPagoPayment from "../mercadoPago/IMercadoPagoPayment";
import MercadoPago from "../mercadoPago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{
    private _token :Token;
    constructor(private mercadoPago : MercadoPago){
        console.log("Adaptando mercado pago em mercado pago");
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.mercadoPago.sendPayment();
    }
    paypalReceive(): void {
        return this.mercadoPago.receivePayment();
    }

}