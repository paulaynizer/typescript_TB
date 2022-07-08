import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startDelivery(): void {
        console.log(" HotDog");
    }

}