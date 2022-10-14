export abstract class View<T> {
    protected _elemento : HTMLElement;
    private _escapar;

    constructor(seletor : string, escapar : boolean = false) { 
        this._elemento = document.querySelector(seletor);
        this._escapar = escapar;
    }

    protected abstract template(model : T) : string;

    public update (model : T) : void {

        let template = this.template(model);

        if(this._escapar){
            template = template.replace(/<script>[\S\s]*?<\/script>/, '');
        }

        this._elemento.innerHTML = template;
    }


}