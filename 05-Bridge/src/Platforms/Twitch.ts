import IPlatform from "./IPlataform";

export default class Twitch implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Twitch:Plataforma Iniciada.")
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Configurando Broadcastring.")
    }
    authToken(): void {
        console.log("Twitch: Autorizando a aplicação.")
    }

}