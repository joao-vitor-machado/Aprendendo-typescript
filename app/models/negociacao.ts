export class Negociacao {

    constructor(
        private readonly data : Date,
        private readonly quantidade : number,
        private readonly valor : number,
          ){}

    
    get volume() {
        return this.quantidade * this.valor;
    }

}