import Client from "./delivery/clients/Client";
import Company from "./delivery/consts/Company";
import AiqfomeDelivery from "./delivery/factories/AiqfomeDelivery";
import IFoodDelivery from "./delivery/factories/IFoodDelivery";
import IDeliveryFactory from "./delivery/factories/interfaces/IDeliveryFactory";

const currentCompany = Company.AIQFOME;
let factory :IDeliveryFactory;

switch(currentCompany){
    case Company.AIQFOME :
        factory = new AiqfomeDelivery();
        break;
    case Company.IFOOD :
        factory = new IFoodDelivery();
        break;
    
    default:
        console.log("Companhia nao definida");   
}
const cliente = new Client(factory!);
cliente.startRoute();