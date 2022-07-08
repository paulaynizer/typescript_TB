import IDrink from "../drink/interfaces/IDrink";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import IFood from "../food/interfaces/IFood";


export default class Client{
    private vehicle : IDrink;
    private aircraft : IFood;

    constructor(factory: IDeliveryFactory){
        this.vehicle = factory.createDeliveryDrink();
        this.aircraft = factory.createDeliveryFood();
    }
    startRoute():void{
        this.vehicle.startDelivery();
        this.aircraft.startDelivery();
    }
    
}