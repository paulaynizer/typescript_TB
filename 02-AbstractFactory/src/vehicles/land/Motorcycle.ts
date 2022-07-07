import ILand from "./interfaces/ILand";

export default class Motorcycle implements ILand{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: iniciando trajeto");
    }
    getCargo(): void {
        console.log("Moto: encomenda embarcada");
    }

}