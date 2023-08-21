import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/core/models/authenticationRequest';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public isLogged = false;
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  public ngOnInit() {
    this.formInit();
  }

  private formInit() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public login() {
    this.authenticationService.login(this.formGroup.value).subscribe((AuthenticationResponse) => {
      this.authenticationService.setToken(AuthenticationResponse);
      this.loading();
    },
      (error) => {
        console.log(error)
        this.error();
        this.formGroup.reset();
      })
  }

  private loading() {
    this.isLogged = true;
    setTimeout(() => {
      this.router.navigate(['Dashboard']);
      this.isLogged = false;
      this.formGroup.reset();
    }, 1500);
  }

  private error(): void {
    this.matSnackBar.open('Usuario y/o Contraseña Invalido', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
