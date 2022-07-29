import no from "./no";


//*****Gera valor inicial aleatorio******/
/*
var arr = ['a', 'b', 'c'];
for (let i = arr.length - 1; i >= 0; i--) {
    // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
[arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
*/
let inicio =[['A'], ['B'], ['C']];
let raiz = new no(inicio);
raiz.movimento();

let objetivo = [[], ['C', 'B', 'A'], []];

let fila = [];

raiz.bfs(objetivo,raiz);
console.log("Estado inicial" + inicio);
console.log("Objetivo" + objetivo);