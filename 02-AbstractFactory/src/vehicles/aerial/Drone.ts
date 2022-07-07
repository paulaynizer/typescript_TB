import IAirCraft from "./interfaces/IAirCraft";

export default class Drone implements IAirCraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: iniciando decolagem");
    }
    getCargo(): void {
        console.log("Drone: passageiros embarcando");
    }
    checkWind(): void {
        console.log("Drone: ventos ok");
    }

}