import Protein from "../components/Protein";
import SanduicheType from "../components/SanduicheType";
import Salad from "../components/Salad";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";
import Bread from "../components/Bread";

export default interface IBuilder{
    reset() : void;
    getSanduiche()  :Sanduiche;
    setSauces(sauce : Sauce);
    setBread(bread : Bread);
    setSanduicheType(value : SanduicheType);
    setProtein(protein : Protein);
    setSalad(salad : Salad);
  
}