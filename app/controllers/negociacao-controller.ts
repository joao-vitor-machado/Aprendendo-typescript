import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }

    adicionar() {
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ",")),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this.limparFormulario();
    }

    limparFormulario(): void {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";

        this._inputData.focus();
    }

}