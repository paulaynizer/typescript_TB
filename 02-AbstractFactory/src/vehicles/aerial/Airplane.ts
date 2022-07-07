
import IAirCraft from "./interfaces/IAirCraft"

export default class Airplane implements IAirCraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Aviao iniciando decolagem");
    }
    getCargo(): void {
        console.log("Aviao passageiros embarcando");
    }
    checkWind(): void {
        console.log("Aviao: ventos ok");
    }
}