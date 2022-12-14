import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();

const form : HTMLInputElement = document.querySelector(".form")!;
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adicionar();


});

const botaoImporta = document.querySelector("#botao-importa");

if(botaoImporta){
    botaoImporta.addEventListener("click", () => {
        controller.importaDados();
    });
}else{
    throw Error("Botão não encontrado");
}