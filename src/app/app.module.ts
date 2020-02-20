import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsentsModule } from './consents/consents.module';
import { usageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    AppComponent,
    usageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConsentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
