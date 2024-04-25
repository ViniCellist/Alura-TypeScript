import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { MessageView } from '../views/message-view.js';
import { NegociacoesView } from '../views/negotiation-view.js';
import { Negociacao } from './../models/negotiation.js';
import { Negotiations } from './../models/negotiations.js';
export class NegotiationController {
    constructor() {
        this.negociacoes = new Negotiations();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MessageView('#mensagemView', false);
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    ;
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizarView();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizarView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adicionada com sucesso!');
    }
}
