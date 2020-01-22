import {Directive, HostListener, Optional} from '@angular/core';
import {CardComponent} from "./card.component";

@Directive({
  selector: '[appCardTrigger]'
})
export class CardTriggerDirective {
  readonly  cardComponent:CardComponent;

  // try to inject a CardComponent if exist
  constructor(@Optional() cardComponent:CardComponent) {
    this.cardComponent = cardComponent;
  }

  // the "host" is the element that "hosts" this directive
  @HostListener('focus')
  setBgColor(){
    if(this.cardComponent) {
      this.cardComponent.setBackgroundColor(true);
    }
  }

  @HostListener('blur')
  removeBgColor(){
    if(this.cardComponent) {
      this.cardComponent.setBackgroundColor(false);
    }
  }
}
