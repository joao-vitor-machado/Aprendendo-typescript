export class View {
    constructor(seletor, escapar = false) {
        this._elemento = document.querySelector(seletor);
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
