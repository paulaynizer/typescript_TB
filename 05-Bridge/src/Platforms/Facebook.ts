import IPlatform from "./IPlataform";

export default class Facebook implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Facebook:Plataforma Iniciada.")
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Configurando Broadcastring.")
    }
    authToken(): void {
        console.log("Facebook: Autorizando a aplicação.")
    }

}