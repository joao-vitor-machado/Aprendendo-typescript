import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utilis/imprimivel.js";

export class Negociacao implements Imprimivel, Comparavel<Negociacao>{
    constructor(
        private  _data : Date,
        public readonly quantidade : number,
        public readonly valor : number,
          ){}

    get data() : Date {
        return new Date(this._data.getTime());
    }

    get volume() {
        return this.quantidade * this.valor;
    }

    public static criaDe(data : string, quantidade : string, valor : string) : Negociacao {
        return new Negociacao(
            new Date(data.replace(/-/g, ",")),
            parseInt(quantidade),
            parseFloat(valor)
        );
    }

    public paraString() : string {
        return JSON.stringify(this, null, 2);
    }

    public ehIgual(negociacao : Negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
        && this.data.getMonth() === negociacao.data.getMonth()
        && this.data.getFullYear() === negociacao.data.getFullYear()
    }

}