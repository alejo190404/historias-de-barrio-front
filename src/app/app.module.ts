import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConoceMasComponent } from './conoce-mas/conoce-mas.component';
import { ContarHistoriaComponent } from './contar-historia/contar-historia.component';
import { DatosComponent } from './datos/datos.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './general/popup/popup.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    ConoceMasComponent,
    DatosComponent,
    ContarHistoriaComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
