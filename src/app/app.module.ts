import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DefinitionCreationPageComponent } from './pages/definition-creation-page/definition-creation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    MainPageComponent,
    DefinitionCreationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
