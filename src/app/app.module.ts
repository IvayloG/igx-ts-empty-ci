import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from "./select/select.component";
import { IgxSelectModule, IgxButtonModule, IgxToggleModule } from "@infragistics/igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxSelectModule,
    IgxButtonModule,
    IgxToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
