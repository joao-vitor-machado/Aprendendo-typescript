import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utilis/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes>{
    private _negociacoes : Array<Negociacao> = new Array(); 

    adicionarNegociacao(negociacao : Negociacao) : void {
        this._negociacoes.push(negociacao);
    }

    getAllNegociacoes() : ReadonlyArray<Negociacao> {
        return this._negociacoes;
    }

    public paraString() : string {
        return JSON.stringify(this, null, 2);
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes);
    }
}