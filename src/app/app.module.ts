import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ModificaCorreuComponent } from './modifica-correu/modifica-correu.component';
import { DepartamentoComponent } from './departamento/departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ModificaCorreuComponent,
    DepartamentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
