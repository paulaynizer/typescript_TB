import ILand from "./interfaces/ILand";

export default class Scooter implements ILand{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: iniciando trajeto");
    }
    getCargo(): void {
        console.log("Scooter: encomenda embarcada");
    }

}