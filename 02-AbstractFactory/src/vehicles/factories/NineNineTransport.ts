import Helicopter from "../aerial/Helicopter";
import IAirCraft from "../aerial/interfaces/IAirCraft";
import ILand from "../land/interfaces/ILand";
import Motorcycle from "../land/Motorcycle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory{
    createTransportVehicle(): ILand {
        return new Motorcycle();
    }
    createTransportAircraft(): IAirCraft {
        return new Helicopter();
    }

}