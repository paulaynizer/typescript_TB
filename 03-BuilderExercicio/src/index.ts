import VehicleBuilder from "./buiders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";


const builder :VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
let simples : Sanduiche = builder.getSanduiche();
console.log("Criando um sanduiche do tipo " +simples.sanduicheType);
console.log("pao: " +simples.bread);
console.log("proteina: " +simples.protein);
console.log("molho: " +simples.sauce);

builder.reset();

director.constructHamburguer();
let duplo : Sanduiche= builder.getSanduiche();
console.log("Criando um sanduiche do tipo " +duplo.sanduicheType);
console.log("pao: " +duplo.bread);
console.log("proteina: " +duplo.protein);
console.log("molho: " +duplo.sauce);
console.log("salada: " +duplo.salad);
