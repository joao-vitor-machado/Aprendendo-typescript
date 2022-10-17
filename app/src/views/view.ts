import { logarTempoDeExecução } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected _elemento : HTMLElement;
    private _escapar;

    constructor(seletor : string, escapar : boolean = false) { 

        const elemento = document.querySelector(seletor);

        if(elemento){
            this._elemento = elemento as HTMLElement;
        }else{
            throw Error("Esse é um objeto nulo. Envie um objeto HTMLElement válido");
        }
         
        this._escapar = escapar;
        
    }

    protected abstract template(model : T) : string;

    @logarTempoDeExecução()
    public update (model : T) : void {

        let template = this.template(model);

        if(this._escapar){
            template = template.replace(/<script>[\S\s]*?<\/script>/, '');
        }

        this._elemento.innerHTML = template;
    }


}