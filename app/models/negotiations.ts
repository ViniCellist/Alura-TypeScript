import { Negociacao } from "./negotiation.js";

export class Negotiations {
    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista():ReadonlyArray<Negociacao> {
        return this.negociacoes
    }
}