import IDrink from "../../drink/interfaces/IDrink";
import IFood from "../../food/interfaces/IFood";

export default interface ITransportFactory{
    createDeliveryDrink() : IDrink;
    createDeliveryFood() : IFood;
}