export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    ;
    get data() {
        return this._data;
    }
    ;
    get quantidade() {
        return this._quantidade;
    }
    ;
    get valor() {
        return this._valor;
    }
    ;
    get volume() {
        return this._quantidade;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
;
