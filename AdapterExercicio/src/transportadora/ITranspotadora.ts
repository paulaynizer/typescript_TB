import Token from "../utils/Token";

export default interface ITransportadora{
    authToken() : Token;
    send() : void;
    receive() : void;
}