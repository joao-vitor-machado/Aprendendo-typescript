import { View } from "./view.js";


export class MensagemView extends View<String>{

    template (mensagem : string) : string {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }




}