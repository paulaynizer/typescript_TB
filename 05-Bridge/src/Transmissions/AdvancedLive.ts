import IPlatform from "../Platforms/IPlataform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(platform : IPlatform){
        super(platform);
    }
    subtitles() : void{
        console.log("Legendas ativadas");
    }
    coments() : void{
        console.log("Comentarios liberados");
    }
}