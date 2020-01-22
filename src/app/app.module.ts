import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CardComponent } from './card.component';
import { CardTriggerDirective } from './card-trigger.directive';
import { CardTemplateDirective } from './card-template.directive';

@NgModule({
  declarations: [AppComponent, CardComponent, CardTriggerDirective, CardTemplateDirective],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
