import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-formulario-de-cambio-de-contrasena',
  templateUrl: './formulario-de-cambio-de-contrasena.component.html',
  styleUrls: ['./formulario-de-cambio-de-contrasena.component.css']
})
export class FormularioDeCambioDeContrasenaComponent implements OnInit {

  isRecover = false;
  formGroup: FormGroup;
  subscriptions: Array<Subscription> = new Array();

  constructor(
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.formInit();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  formInit() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required]
    })
  }

  recoverAccount() {
    const username = this.formGroup.value.username;
    this.subscriptions.push(
      this.authenticationService.recoverByUsername(username).subscribe((peticionEnviada) => {
        if (peticionEnviada) {
          this.findUser();
        }
      },
        () => {
          this.matSnackBar.open('Error Al Enviar La Solicitud', '', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          this.formGroup.reset();
        })
    );
  }

  findUser() {
    this.matSnackBar.open('Solicitud Enviada', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    this.formGroup.reset();
    this.router.navigate(['login']);
  }
}
