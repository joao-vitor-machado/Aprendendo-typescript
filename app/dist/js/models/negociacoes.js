export class Negociacoes {
    constructor() {
        this._negociacoes = new Array();
    }
    adicionarNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    getAllNegociacoes() {
        return this._negociacoes;
    }
}
