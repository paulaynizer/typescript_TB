import Drone from "../aerial/Drone";
import Helicopter from "../aerial/Helicopter";
import IAirCraft from "../aerial/interfaces/IAirCraft";
import ILand from "../land/interfaces/ILand";

import Scooter from "../land/Scooter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeTransport implements ITransportFactory{
    createTransportVehicle(): ILand {
        return new Scooter();
    }
    createTransportAircraft(): IAirCraft {
        return new Drone();
    }

}