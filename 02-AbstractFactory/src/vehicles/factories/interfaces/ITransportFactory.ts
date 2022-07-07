import IAirCraft from "../../aerial/interfaces/IAirCraft";
import ILand from "../../land/interfaces/ILand";

export default interface ITransportFactory{
    createTransportVehicle() : ILand;
    createTransportAircraft() : IAirCraft;
}