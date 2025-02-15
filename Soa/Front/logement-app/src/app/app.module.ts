import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogementsComponent } from './logements/logements.component';
import { LogementAddComponent } from './logement-add/logement-add.component';
import {FormsModule} from "@angular/forms";
//import { LogementsComponent } from './components/logement-list/logement-list.component';  // Corrigez le nom du composant

@NgModule({
  declarations: [
    AppComponent,
    LogementsComponent,
    LogementAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
