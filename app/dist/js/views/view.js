export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this._elemento = elemento;
        }
        else {
            throw Error("Esse é um objeto nulo. Envie um objeto HTMLElement válido");
        }
    }
    update(model) {
        let template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
