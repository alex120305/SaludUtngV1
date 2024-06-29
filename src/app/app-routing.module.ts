import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { DiagnosticoComponent } from './componentes/diagnostico/diagnostico.component';
import { JustificanteComponent } from './componentes/justificante/justificante.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'datos',component:DatosComponent},
  {path:'diagnostico',component:DiagnosticoComponent},
  {path:'justificante',component:JustificanteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
