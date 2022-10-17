import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private _negociacoes : Array<Negociacao> = new Array(); 

    adicionarNegociacao(negociacao : Negociacao) : void {
        this._negociacoes.push(negociacao);
    }

    getAllNegociacoes() : ReadonlyArray<Negociacao> {
        return this._negociacoes;
    }
}