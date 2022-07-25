import IPlatform from "./IPlataform";

export default class Youtube implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("YouTube:Plataforma Iniciada.")
    }
    configureRMTP(): void {
        this.authToken();
        console.log("YouTube: Configurando Broadcastring.")
    }
    authToken(): void {
        console.log("YouTube: Autorizando a aplicação.")
    }

}