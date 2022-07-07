import IAirCraft from "../aerial/interfaces/IAirCraft";
import ITransportFactory from "../factories/interfaces/ITransportFactory";
import ILand from "../land/interfaces/ILand";

export default class Client{
    private vehicle : ILand;
    private aircraft : IAirCraft;

    constructor(factory: ITransportFactory, transp : string){
        if(transp=="TERRESTRE"){
            this.vehicle = factory.createTransportVehicle();
        }
        else if(transp=="AEREO"){
            this.aircraft = factory.createTransportAircraft();
        }
        else{
            this.vehicle = factory.createTransportVehicle();
            this.aircraft = factory.createTransportAircraft();
        }
        
    }
    startRoute(transp : string):void{
        if(transp=="TERRESTRE"){
            this.vehicle.startRoute();
        }
        else if(transp=="AEREO"){
            this.aircraft.startRoute();
        }
        else{
            this.vehicle.startRoute();
            this.aircraft.startRoute();
        }
        
    }
    
}