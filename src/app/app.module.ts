import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent  } from './app.component';

import  { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
//  i am importing the formmodule class from the @angular forms package.

@NgModule({
  declarations: [
    AppComponent,
    ReactiveApproachComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
