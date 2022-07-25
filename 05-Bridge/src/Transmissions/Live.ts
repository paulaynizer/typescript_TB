import IPlatform from "../Platforms/IPlataform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission{
    //bridge
    constructor(platform : IPlatform){}

    broadcasting(): void {
        console.log("Iniciando a transmissão");
    }
    result(): void {
        console.log("****** No Ar ******");
    }

}