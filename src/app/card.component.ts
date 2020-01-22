import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostBinding,
  QueryList,
  Renderer2,
  TemplateRef
} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {CardTemplateDirective} from "./card-template.directive";
import {CardTemplatesType} from "./type";

@Component({
  selector: 'app-card',
  template: `
    <!-- complete syntax of NgIf  -->
    <ng-container *ngIf="header; then header else defaultHeader"></ng-container>

    <!-- default template for the header   -->
    <ng-template #defaultHeader>
        <h5 class="card-header">Featured</h5>
    </ng-template>

    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>

      <ng-content></ng-content>

      <!-- show the submit button if a form exist -->
      <button (click)="handleClick()"
              *ngIf="form"
              class="btn btn-primary">submit
      </button>
    </div>
  `,
})
export class CardComponent implements AfterContentInit{
  header: TemplateRef<any>;
  footer: TemplateRef<any>;

  // look for a form in the provided content
  @ContentChild(NgForm, null) form: FormGroup;

  // look for a CardTemplateDirective in the provided content
  @ContentChildren(CardTemplateDirective, null) templates: QueryList<CardTemplateDirective>;

  // the host is the <app-card> element
  @HostBinding('class')
  wrapperClass: string = 'card';

  private hostElement: ElementRef;
  private renderer: Renderer2;

  // the "ElementRef" is the <app-card> element
  // the Renderer provides abstraction for DOM manipulation
  constructor(hostElement: ElementRef, renderer: Renderer2) {
    this.hostElement = hostElement;
    this.renderer = renderer;
  }

  ngAfterContentInit(): void {
    // loop over the provided template
    this.templates.forEach( providedTemplate => {
     // on each one check the type and initialize the template
     if(providedTemplate.getType() === CardTemplatesType.Header) {
       this.header = providedTemplate.getTemplate()
     }
     if(providedTemplate.getType() === CardTemplatesType.Footer) {
       this.footer = providedTemplate.getTemplate()
     }
    })
  }

  // use the renderer to dynamically add and remove
  // css classes on the host element
  setBackgroundColor(flag: boolean) {
    if (flag) {
      this.renderer.addClass(this.hostElement.nativeElement, 'bg-dark');
      this.renderer.addClass(this.hostElement.nativeElement, 'text-white');
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, 'bg-dark');
      this.renderer.removeClass(this.hostElement.nativeElement, 'text-white');
    }
  }

  // if a form is exist - the button that trigger this
  // method that handle css classes on the host element
  handleClick() {
    if (this.form.valid) {
      this.renderer.addClass(this.hostElement.nativeElement, 'border-success');
      this.renderer.removeClass(this.hostElement.nativeElement, 'border-danger');
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'border-danger');
      this.renderer.removeClass(this.hostElement.nativeElement, 'border-success');
    }
  }
}
