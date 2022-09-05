import { Injectable } from '@angular/core';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private _disciplinas: Disciplina[] = []

  constructor() { 
    let disciplina = new Disciplina("Programação III", 68, "optativa", "1985-12-20", "1985-12-20",
    30, "online", "Marcos Paulo" );
    let disciplina2 = new Disciplina("Algoritmos", 68, "optativa", "1985-12-20", "1985-12-20",
    30, "online", "Luciane L." );
    this.inserir(disciplina);
    this.inserir(disciplina2);
    this.inserir(disciplina);
    this.inserir(disciplina2);
    this.inserir(disciplina2);
    this.inserir(disciplina2);
  }

  public get disciplinas(): Disciplina[]{
    return this._disciplinas;
  }

  public inserir(disciplina : Disciplina){
    this._disciplinas.push(disciplina);
  }

  public editar(disciplina: Disciplina, nome : string, cargaHoraria: number,
    natureza: string, dataInicio : string,
    dataFim : string, vagas : number,
    modalidade : string, professor : string) : boolean{
    for(let i=0; i<this._disciplinas.length; i++){
      if(this._disciplinas[i].id == disciplina.id){
        this._disciplinas[i].nome = nome;
        this._disciplinas[i].cargaHoraria = cargaHoraria;
        this._disciplinas[i].natureza = natureza;
        this._disciplinas[i].dataInicio = dataInicio;
        this._disciplinas[i].dataFim = dataFim;
        this._disciplinas[i].vagas = vagas;
        this._disciplinas[i].modalidade = modalidade;
        this._disciplinas[i].professor = professor;
        return true;
      }
    }
    return false;
  }
  public excluir(disciplina: Disciplina):boolean{
    for(let i=0; i<this._disciplinas.length; i++){
      if(this._disciplinas[i].id == disciplina.id){
        this._disciplinas.splice(i,1);
        return true;
      }
    }
    return false;
  }
}
