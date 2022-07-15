import IBuilder from "../buiders/IBuilder";
import Bread from "../components/Bread";
import SanduicheType from "../components/SanduicheType";
import Protein from "../components/Protein";
import Sauce from "../components/Sauce";
import Salad from "../components/Salad";

export default class Director{
    constructor(private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.SIMPLES);
        this.builder.setBread(Bread.BRANCO);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.setSauces(Sauce.BARBECUE);
    }
    constructHamburguer(){
        this.builder.setSanduicheType(SanduicheType.DUPLO);
        this.builder.setBread(Bread.BRANCO);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.setSauces(Sauce.BARBECUE);
        this.builder.setSalad(Salad.ALFACE);
    }
}