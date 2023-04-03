import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppViewComponent } from './app-view/app-view.component';
import { TopNavComponent } from './app-view/components/top-nav/top-nav.component';
import { LeftNavComponent } from './app-view/components/left-nav/left-nav.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    AppViewComponent,
    TopNavComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
