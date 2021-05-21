import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivasNgifComponent } from './diretivas/diretivas-ngif/diretivas-ngif.component';
import { DiretivasNgforComponent } from './diretivas/diretivas-ngfor/diretivas-ngfor.component';
import { DiretivasNgswitchComponent } from './diretivas/diretivas-ngswitch/diretivas-ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasNgifComponent,
    DiretivasNgforComponent,
    DiretivasNgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
