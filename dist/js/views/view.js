export class View {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template(model) {
        throw Error("Classe filha precisa implementar  método template");
    }
    ;
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
    ;
}
