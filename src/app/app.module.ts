import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateFormComponent } from './create-form/create-form.component';
import { CreatePopupComponent } from './create-popup/create-popup.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    CreatePopupComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
