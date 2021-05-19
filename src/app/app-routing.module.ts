import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { NavComponent } from './components/nav/nav.component';


const routes: Routes = [
  {path:'nav' , component: NavComponent},
  {path: 'portafolio' , component: PortafolioComponent},
  {path:'**', redirectTo: 'portafolio'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
