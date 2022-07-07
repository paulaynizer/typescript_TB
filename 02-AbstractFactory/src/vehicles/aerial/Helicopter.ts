
import IAirCraft from "./interfaces/IAirCraft";

export default class Helicopter implements IAirCraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicoptero: iniciando decolagem");
    }
    getCargo(): void {
        console.log("Helicoptero: passageiros embarcando");
    }
    checkWind(): void {
        console.log("Helicoptero: ventos ok");
    }

}