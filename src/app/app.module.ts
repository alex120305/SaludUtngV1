import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { DiagnosticoComponent } from './componentes/diagnostico/diagnostico.component';
import { JustificanteComponent } from './componentes/justificante/justificante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatosComponent,
    DiagnosticoComponent,
    JustificanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
