import cloneDeep from 'lodash.clonedeep';
export default class no {
    private estado ;
    private filho ;
   
    
    constructor(estado : Array<any>=[]){
        this.estado = estado;
        this.filho = [];
    }
    
    movimento(){
        let valor ;
        let temp;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(i != j){
                    if(this.estado[i]){
                        temp = cloneDeep(this.estado);
                        valor = temp[i].pop();
                        temp[j].push(valor);
                        if (!(temp in this.filho)){
                            this.filho.push( new no(temp));
                            
                        } 
                        console.log(this.filho)
                    }
                }
            }
        }
    }
    bfs(objetivo, fila){
        let atual ;
        let resultado;
        let temp ;
        let estado ;
        if (this.estado == objetivo){//estado final atingido
            console.log("Alcançou o objetivo");
            return true;
        }
        this.filho.forEach(function(atual){

            if(atual.estado ! in fila){
                console.log("SUCESSO", atual.estado);
                atual.movimento();
                temp = cloneDeep(atual.estado);
                fila.push(temp)
                resultado = atual.bfs(objetivo, fila)

                if(resultado){
                    return resultado;
                }
    
                return this.bfs(objetivo, fila);
            }
        });
        console.log("FALHA");
        return false;
    }

}