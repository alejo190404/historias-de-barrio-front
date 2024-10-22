import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConoceMasComponent } from './conoce-mas/conoce-mas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: "inicio", component: LandingPageComponent},
  {path: "conocenos", component: ConoceMasComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
