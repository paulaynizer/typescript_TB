import Token from "../utils/Token";

export default interface IPayoneer{
    authToken() : Token;
    sendPayment() : void;
    receivePayment() : void;
}