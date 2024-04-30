import { logarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {
    protected element: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const element = document.querySelector(seletor);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`)
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace("/<script>[\s\S]*?/<\/script>/", '')
        }
        this.element.innerHTML = template;
    };

    protected abstract template(model: T): string;
}