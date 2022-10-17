import { logarTempoDeExecução } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _mensagemView = new MensagemView("#mensagemView");

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');

    constructor() {
        this._inputData = document.querySelector("#data") as HTMLInputElement;
        this._inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this._inputValor = document.querySelector("#valor") as HTMLInputElement;
        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoDeExecução()
    public adicionar() {
       
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputValor.value, this._inputQuantidade.value);

        if(!this.isDiaUtil(negociacao.data)){ 
            this._mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return ;
        }

            this._negociacoes.adicionarNegociacao(negociacao);
            this.atualizarView();
            this.limparFormulario();
            
    }

    private limparFormulario(): void {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";

        this._inputData.focus();
    }


    private atualizarView() : void {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso");
    }

    private isDiaUtil(data : Date) : boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}