import Endereco from "./Endereco";
import { Sexo } from "./Enum";


export default class Usuario{
    private _nome : string; 
    private _cpf : number;
    private _rg : number;
    private _sexo : Sexo;
    private _endereco: Endereco;

    constructor(nome : string, cpf : number, rg : number, sexo : Sexo, endereco: Endereco){
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._sexo = sexo;
        this._endereco = endereco;
    }
    get nome(): string {
        return this._nome;
    } 
    get cpf(): number {
        return this._cpf;
    } 
    get rg(): number {
        return this._rg;
    } 
    get sexo(): Sexo {
        return this._sexo;
    } 
    get endereco(): Endereco {
        return this._endereco;
    } 
}