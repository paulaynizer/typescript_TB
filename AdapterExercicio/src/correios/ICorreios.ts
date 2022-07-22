import Token from "../utils/Token";

export default interface ICorreios{
    authToken() : Token;
    sendCorreios() : void;
    receiveCorreios() : void;
}