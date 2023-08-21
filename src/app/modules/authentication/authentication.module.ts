import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperacionDeContrasenaComponent } from './pages/recuperacion-de-contrasena/recuperacion-de-contrasena.component';
import { FormularioDeCambioDeContrasenaComponent } from './components/formulario-de-cambio-de-contrasena/formulario-de-cambio-de-contrasena.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RecuperacionDeContrasenaComponent,
    FormularioDeCambioDeContrasenaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class AuthenticationModule { }
