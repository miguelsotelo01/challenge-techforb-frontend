import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencialaboralComponent } from './plantas/experiencialaboral.component';
import { PersonaComponent } from './persona/persona.component';
import { ProyectosComponent } from './clima/proyectos.component';
import { LoginComponent } from './security/auth/login/login.component';
import { RegistroComponent } from './security/auth/registro/registro.component';
import { IndexComponent } from './security/index/index.component';
import { PortfolioGuardService as guard } from './security/guards/portfolio-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'index', component: IndexComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}},
  {path: 'experiencialaboral', component: ExperiencialaboralComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}},
  {path: 'proyectos', component: ProyectosComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}},
  {path: 'user', component: PersonaComponent, canActivate:[guard], data: {expectedRole: ['admin', 'user']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
