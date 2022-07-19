import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { PrimeNgModule } from './primeng.module'

@NgModule({
  imports: [BrowserAnimationsModule,BrowserModule, FormsModule, ReactiveFormsModule, PrimeNgModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
