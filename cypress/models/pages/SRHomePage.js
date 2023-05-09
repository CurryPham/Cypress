import { HeroComponent } from "../components/sr/HeroCompoment";

export class SRHomePage {

    heroComponent(){
        return new HeroComponent(cy.get(HeroComponent.COMP_SEL));
    }
}