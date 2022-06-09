import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTurmaComponent } from './list-turma/list-turma.component';
import { CreateTurmaComponent } from './create-turma/create-turma.component';
import { DetalheTurmaComponent } from './detalhe-turma/detalhe-turma.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTurmaComponent,
    CreateTurmaComponent,
    DetalheTurmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
