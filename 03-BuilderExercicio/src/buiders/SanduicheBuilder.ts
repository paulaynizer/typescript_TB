
import IBuilder from "./IBuilder";
import Sanduiche from "../products/Sanduiche";
import Sauce from "../components/Sauce";
import Bread from "../components/Bread";
import Salad from "../components/Salad";
import Protein from "../components/Protein";
import SanduicheType from "../components/SanduicheType";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche();
    reset(): void {
        this.sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        return this.sanduiche;
    }
    setSanduicheType(value: SanduicheType) {
       this.sanduiche.sanduicheType = value;
    }
    setBread(bread : Bread) {
       this.sanduiche.bread=bread;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad =salad
    }
    setSauces(sauce: Sauce) {
        this.sanduiche.sauce = sauce;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }

}