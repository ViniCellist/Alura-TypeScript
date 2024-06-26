import { NegotiationController } from "./controllers/negotiation-controller.js";
const controller = new NegotiationController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possivel inicialiazar a aplicação. Verifique se o <form> existe");
}
const botaoImporta = document.querySelector('#botao-importar');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw new Error('Botão importa não foi encontrado');
}
