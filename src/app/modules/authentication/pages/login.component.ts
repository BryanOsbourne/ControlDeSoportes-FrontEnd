import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/core/models/AuthenticationRequest';
import { AuthenticationServiceService } from 'src/app/services/authentication/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  authenticationRequest: AuthenticationRequest;

  constructor(
    private formBuild: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationServiceService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuild.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  acceder() {
    this.authenticationRequest = {
      username: this.loginForm.value.usuario,
      password: this.loginForm.value.contraseña
    };

    this.authenticationService.login(this.authenticationRequest).subscribe((AuthenticationResponse) => {
      this.authenticationService.setToken(AuthenticationResponse);
      this.loadin();
    },
      (error) => {
        console.log(error)
        this.error();
        this.loginForm.reset();
      })
  }

  error() {
    this._snackBar.open('Usuario y/o Contraseña Invalido', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  loadin() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['Dashboard']);
      this.loading = false;
      this.loginForm.reset();
    }, 1500);
  }

}
