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
    paraString() {
        return JSON.stringify(this, null, 2);
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes);
    }
}
