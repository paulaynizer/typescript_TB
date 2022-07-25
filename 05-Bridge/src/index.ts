import Facebook from "./Platforms/Facebook";
import IPlatform from "./Platforms/IPlataform";
import Twitch from "./Platforms/Twitch";
import Youtube from "./Platforms/Youtube";
import AdvancedLive from "./Transmissions/AdvancedLive";
import Live from "./Transmissions/Live";

function startLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
    
}
function startAdvancedLive(platform : IPlatform){
    console.log("Aguarde...");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.coments();
    
}
startAdvancedLive(new Youtube());
startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());