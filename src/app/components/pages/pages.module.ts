import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {HttpClientModule} from '@angular/common/http';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProyectosComponent,
    SkillsComponent,
    ContactoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    // HttpClientModule
  ]
})
export class PagesModule { }
