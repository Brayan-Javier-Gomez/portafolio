import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [

{
  path: '',
  children: [
    { path: 'contacto', component: ContactoComponent},
    { path: 'home', component: HomeComponent},
    { path: 'proyectos', component: ProyectosComponent},
    { path: 'skills', component: SkillsComponent},
    { path: '**', redirectTo: 'home'}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
