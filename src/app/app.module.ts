import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppViewComponent } from './app-view/app-view.component';
import { SharedModule } from './shared/shared.module';
import { TopNavComponent } from './app-view/components/top-nav/top-nav.component';
import { LeftNavComponent } from './app-view/components/left-nav/left-nav.component';

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
