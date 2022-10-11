export class Negociacao {

    constructor(
        private  _data : Date,
        private readonly quantidade : number,
        private readonly valor : number,
          ){}

    get data() : Date {
        return new Date(this._data.getTime());
    }

    get volume() {
        return this.quantidade * this.valor;
    }

}