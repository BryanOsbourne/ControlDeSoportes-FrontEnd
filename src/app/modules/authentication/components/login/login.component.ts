import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLogged = false;
  formGroup: FormGroup;
  subscriptions: Array<Subscription> = new Array();

  constructor(
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationService) {
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
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  /*
    login() {
      this.subscriptions.push(
        this.authenticationService.login(this.formGroup.value).subscribe((AuthenticationResponse) => {
          this.authenticationService.setToken(AuthenticationResponse);
          this.loading();
        },
          () => {
            this.error();
            this.formGroup.reset();
          })
      );
    }
  */
  login() {
    this.loading();
  }
  
  loading() {
    this.isLogged = true;
    setTimeout(() => {
      this.router.navigate(['Dashboard']);
      this.isLogged = false;
      this.formGroup.reset();
    }, 1500);
  }

  error(): void {
    this.matSnackBar.open('Usuario y/o Contraseña Invalido', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
