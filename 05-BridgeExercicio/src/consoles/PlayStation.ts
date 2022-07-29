import IPlatform from "./IConsole";

export default class PlayStation implements IPlatform{
    constructor(){
        this.configureGame();
        console.log("PlayStation:Plataforma Iniciada.")
    }
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando.")
    }
    authToken(): void {
        console.log("PlayStation: Autorizando a aplicação.")
    }

}