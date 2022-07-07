import Client from "./vehicles/clients/Client";
import Company from "./vehicles/consts/Company";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";
import UberTransport from "./vehicles/factories/UberTransport";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import LimeTransport from "./vehicles/factories/LimeTransport";
import VehicleType from "./vehicles/consts/VehicleType";

const currentCompany = Company.UBER;
let factory :ITransportFactory;

const escolhaVeiculo = VehicleType.TERRESTRE;

switch(currentCompany){
    case Company.UBER :
        factory = new UberTransport();
        break;
    case Company.NINENINE :
        factory = new NineNineTransport();
        break;
    case Company.LIME:
        factory = new LimeTransport();
        break;
    default:
        console.log("Companhia nao definida");   
}
const cliente = new Client(factory!, escolhaVeiculo);
cliente.startRoute(escolhaVeiculo);