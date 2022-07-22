
import ICorreios from "../correios/ICorreios";
import Transportadora from "../transportadora/Transportadora";
import Token from "../utils/Token";

export default class TransportadoraAdapter implements ICorreios{
    private _token :Token;
    constructor(private transportadora : Transportadora){
        console.log("Adaptando payoneer em paypal");
    }
    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        return this.transportadora.send();
    }
    receiveCorreios(): void {
        return this.transportadora.receive();
    }

}