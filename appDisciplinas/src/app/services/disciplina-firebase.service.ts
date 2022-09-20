import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaFirebaseService {
  private PATH : string = 'disciplinas';
  constructor(private angularFirestore : AngularFirestore) { }

  getDisciplina(id : string){
    return this.angularFirestore
    .collection(this.PATH)
    .doc(id)
    .valueChanges();
  }
  getDisciplinas(){
    return this.angularFirestore
    .collection(this.PATH)
    .snapshotChanges();
  }
  inserirDisciplina(disciplina : Disciplina){
    return this.angularFirestore
    .collection(this.PATH)
    .add({nome : disciplina.nome,
          cargaHoraria : disciplina.cargaHoraria,
          natureza : disciplina.natureza,
          dataInicio: disciplina.dataInicio,
          dataFim: disciplina.dataFim,
          professor: disciplina.professor,
          vagas: disciplina.vagas,
          modalidade: disciplina.modalidade});
  }
  editarDisciplina(disciplina : Disciplina, id : string){
    return this.angularFirestore
    .collection(this.PATH)
    .doc(id)
    .update({nome : disciplina.nome,
        cargaHoraria : disciplina.cargaHoraria,
        natureza : disciplina.natureza,
        dataInicio: disciplina.dataInicio,
        dataFim: disciplina.dataFim,
        vagas: disciplina.vagas,
        professor: disciplina.professor,
        modalidade: disciplina.modalidade});
  }
  excluirDisciplina(disciplina : Disciplina){
    return this.angularFirestore
    .collection(this.PATH)
    .doc(disciplina.id)
    .delete();
  }
}