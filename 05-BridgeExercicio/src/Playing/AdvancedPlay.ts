import IPlatform from "../consoles/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(platform : IPlatform){
        super(platform);
    }
    chalenges() : void{
        console.log("chalenge ativado");
    }
    
}