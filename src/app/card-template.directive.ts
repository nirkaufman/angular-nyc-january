import {Directive, Input, TemplateRef} from '@angular/core';
import {CardTemplatesType} from "./type";

@Directive({
  selector: '[appCardTemplate]'
})
export class CardTemplateDirective {
  // reusing the component selector as an input.
  @Input('appCardTemplate') type: CardTemplatesType;

  private readonly template:TemplateRef<any>;

  // this directive called with "*" which
  // create a template that we can inject
  constructor(template: TemplateRef<any>) {
    this.template = template;
  }

  getType(){
    return this.type;
  }

  getTemplate(){
   return this.template;
  }
}
