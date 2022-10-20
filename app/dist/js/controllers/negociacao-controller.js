var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecução } from "../decorators/logar-tempo-de-execucao.js";
import { inspect } from "../decorators/inspect.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { domInjector } from "../decorators/domInjector.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utilis/imprimir.js";
export class NegociacaoController {
    constructor() {
        this._mensagemView = new MensagemView("#mensagemView");
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._negociacaoService = new NegociacoesService();
        this._negociacoesView.update(this._negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.criaDe(this._inputData.value, this._inputValor.value, this._inputQuantidade.value);
        if (!this.isDiaUtil(negociacao.data)) {
            this._mensagemView.update("Apenas negociações em dias úteis são aceitas");
            return;
        }
        this._negociacoes.adicionarNegociacao(negociacao);
        this.atualizarView();
        this.limparFormulario();
    }
    limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
    atualizarView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso");
        imprimir(this._negociacoes, this._negociacoes.getAllNegociacoes()[0]);
    }
    isDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    importaDados() {
        this._negociacaoService.obterNegociacoes().
            then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacaoDeHoje => {
                return !this._negociacoes.getAllNegociacoes().some(negociacao => negociacao.ehIgual(negociacaoDeHoje));
            });
        })
            .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this._negociacoes.adicionarNegociacao(negociacao);
            }
            this._negociacoesView.update(this._negociacoes);
        });
    }
}
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "_inputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "_inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "_inputValor", void 0);
__decorate([
    inspect,
    logarTempoDeExecução()
], NegociacaoController.prototype, "adicionar", null);
//# sourceMappingURL=negociacao-controller.js.map