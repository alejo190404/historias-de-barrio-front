import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConoceMasComponent } from './conoce-mas/conoce-mas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "cono", component: ConoceMasComponent},
  {path: "**", component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
