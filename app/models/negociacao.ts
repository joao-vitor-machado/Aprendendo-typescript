export class Negociacao {

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

}