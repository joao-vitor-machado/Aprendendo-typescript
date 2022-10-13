
import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private _elemento : HTMLAnchorElement;

    constructor(seletor : string) {
        this._elemento = document.querySelector(seletor);
    }

    template(model : Negociacoes) : string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.getAllNegociacoes().map<string>(negociacao => {
                        return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        
                        `
                    }).join('')}
                </tbody>
            </table>
            `
    }

    update(negociacoes : Negociacoes) : void {
        this._elemento.innerHTML = this.template(negociacoes);
    }
}