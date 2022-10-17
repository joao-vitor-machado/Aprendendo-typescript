var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecução } from "../decorators/logar-tempo-de-execucao.js";
export class View {
    constructor(seletor, escapar = false) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = elemento;
        }
        else {
            throw Error("Esse é um objeto nulo. Envie um objeto HTMLElement válido");
        }
        this._escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\S\s]*?<\/script>/, '');
        }
        this._elemento.innerHTML = template;
    }
}
__decorate([
    logarTempoDeExecução()
], View.prototype, "update", null);