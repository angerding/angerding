import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    children:[
      {path:'', component:DashboardComponent},
      {path:'cursos', component:CursosComponent},
      {path:'notas', component:NotasComponent},
    ]     
  },
  { path:'',component:LoginComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
