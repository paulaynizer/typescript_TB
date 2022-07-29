import Facebook from "./consoles/PlayStation";
import IConsole from "./consoles/IConsole";
import Play from "./Playing/Play";
import AdvancedPlay from "./Playing/AdvancedPlay";
import Xbox from "./consoles/Xbox";
import PlayStation from "./consoles/PlayStation";

function startPlay(platform : IConsole){
    console.log("Aguarde...");
    const game = new Play(platform);
    game.playing();
    game.result();
    
}
function startAdvancedPlay(platform : IConsole){
    console.log("Aguarde...");
    const game = new AdvancedPlay(platform);
    game.playing();
    game.result();
    game.chalenges();
    
}
startAdvancedPlay(new Xbox());
startAdvancedPlay(new PlayStation());
