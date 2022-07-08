

import Beer from "../drink/Beer";
import IDrink from "../drink/interfaces/IDrink";
import Hamburguer from "../food/Hamburger";
import IFood from "../food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }

}