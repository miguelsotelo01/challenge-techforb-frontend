import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { ProyectosComponent } from './clima/proyectos.component';
import { ExperiencialaboralComponent } from './plantas/experiencialaboral.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './security/auth/login/login.component';
import { RegistroComponent } from './security/auth/registro/registro.component';
import { IndexComponent } from './security/index/index.component';
import { MenuComponent } from './security/menu/menu.component';
import { PortInterceptorService } from './security/interceptors/portfolio-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ProyectosComponent,
    ExperiencialaboralComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule,
  ],
  providers: [PortInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
