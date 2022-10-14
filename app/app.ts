import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();

const form : HTMLInputElement = document.querySelector(".form")!;
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adicionar();


});