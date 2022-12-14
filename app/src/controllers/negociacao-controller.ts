import { logarTempoDeExecução } from "../decorators/logar-tempo-de-execucao.js";
import { inspect } from "../decorators/inspect.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { domInjector } from "../decorators/domInjector.js";
import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utilis/imprimir.js";

export class NegociacaoController {
    @domInjector("#data")
    private _inputData: HTMLInputElement;
    @domInjector("#quantidade")
    private _inputQuantidade: HTMLInputElement;
    @domInjector("#valor")
    private _inputValor: HTMLInputElement;
    private _mensagemView = new MensagemView("#mensagemView");

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _negociacaoService = new NegociacoesService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @inspect
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

        imprimir(this._negociacoes, this._negociacoes.getAllNegociacoes()[0]);
    }

    private isDiaUtil(data : Date) : boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    importaDados() : void{
        this._negociacaoService.obterNegociacoes().
        then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacaoDeHoje => {
                return !this._negociacoes.getAllNegociacoes().some(negociacao => negociacao.ehIgual(negociacaoDeHoje))
            })
            })
        .then(negociacoesDeHoje => {
            for(let negociacao of negociacoesDeHoje){
                this._negociacoes.adicionarNegociacao(negociacao);
            }

            this._negociacoesView.update(this._negociacoes);
        })
    }
}