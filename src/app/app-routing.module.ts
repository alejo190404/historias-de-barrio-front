import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConoceMasComponent } from './conoce-mas/conoce-mas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContarHistoriaComponent } from './contar-historia/contar-historia.component';
import { DatosComponent } from './datos/datos.component';
import { RevisionDocumentalComponent } from './revision-documental/revision-documental.component';

const routes: Routes = [
  {path: "inicio", component: LandingPageComponent},
  {path: "conocenos", component: ConoceMasComponent},
  {path: "quiero-contar-mi-historia", component: ContarHistoriaComponent},
  {path: "datos-cuantitativos", component: DatosComponent},
  {path: "revision-documental", component: RevisionDocumentalComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
