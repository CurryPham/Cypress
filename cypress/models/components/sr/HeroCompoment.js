export class HeroComponent {

    static COMP_SEL = '.homepage-showcase';

    constructor(component) {
        this.component = component;
    }

    get cardTitle(){
        return this.component.find('.card__title');
    }
}