import { Negociacao } from "./negotiation.js";

export class Negotiations {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista():ReadonlyArray<Negociacao> {
        return this.negociacoes
    }
}