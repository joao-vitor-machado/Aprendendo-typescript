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
