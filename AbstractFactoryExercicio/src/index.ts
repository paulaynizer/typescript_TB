import Client from "./vehicles/clients/Client";
import Company from "./vehicles/consts/Company";
import AiqfomeDelivery from "./vehicles/factories/AiqfomeDelivery";
import IFoodDelivery from "./vehicles/factories/IFoodDelivery";
import IDeliveryFactory from "./vehicles/factories/interfaces/IDeliveryFactory";

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