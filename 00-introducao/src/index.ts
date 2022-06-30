import Endereco from "./Endereco";
import { Sexo } from "./Enum";
import Usuario from "./Usuario";



let endereco1 = new Endereco("Padre Chagas", 3150, 85010020, "centro", "Guarapuava");
let endereco2 = new Endereco("XV de Novembro", 1010, 85015250, "centro", "Guarapuava");

let usuario1 = new Usuario("Winicius", 123456, 12444694, Sexo.MASCULINO,endereco1 );
let usuario2 = new Usuario("Paula", 54321, 12444694, Sexo.FEMININO, endereco2 );

console.log(usuario1);
console.log(usuario2);