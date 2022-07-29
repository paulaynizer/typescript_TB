import IPlatform from "./IConsole";

export default class Xbox implements IPlatform{
    constructor(){
        this.configureGame();
        console.log("Xbox:Plataforma Iniciada.")
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: Configurando")
    }
    authToken(): void {
        console.log("Xbox: Autorizando a aplicação.")
    }

}