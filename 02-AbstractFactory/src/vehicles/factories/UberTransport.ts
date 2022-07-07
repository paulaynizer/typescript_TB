import Airplane from "../aerial/Airplane";
import IAirCraft from "../aerial/interfaces/IAirCraft";
import Car from "../land/Car";
import ILand from "../land/interfaces/ILand";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory{
    createTransportVehicle(): ILand {
        return new Car();
    }
    createTransportAircraft(): IAirCraft {
        return new Airplane();
    }

}