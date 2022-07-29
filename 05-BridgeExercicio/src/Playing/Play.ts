import IPlatform from "../consoles/IConsole";
import IPlay from "./IPlay";

export default class Play implements IPlay{
    //bridge
    constructor(platform : IPlatform){}

    playing(): void {
        console.log("Iniciando");
    }
    result(): void {
        console.log("****** Play ******");
    }

}