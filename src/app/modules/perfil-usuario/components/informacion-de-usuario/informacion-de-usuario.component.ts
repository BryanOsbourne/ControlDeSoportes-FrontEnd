import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agent } from 'src/app/core/models/agent';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ArchivoService } from 'src/app/services/archivos/archivo.service';

@Component({
  selector: 'app-informacion-de-usuario',
  templateUrl: './informacion-de-usuario.component.html',
  styleUrls: ['./informacion-de-usuario.component.css']
})
export class InformacionDeUsuarioComponent implements OnInit {

  public formGroup: FormGroup;
  public agentConnected: Agent;
  public isBlocked = false;
  private formData = new FormData();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private archivoService: ArchivoService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) { }

  public ngOnInit() {
    this.loadUserData();
  }

  private loadUserData() {
    this.agentConnected = this.authenticationService.getUserToken();
    this.formInit();

  }

  private formInit() {
    this.formGroup = this.formBuilder.group({
      id: [this.agentConnected.id, Validators.required],
      username: [this.agentConnected.username, Validators.required],
      password: [],
      password2: [],
      firstName: [this.agentConnected.firstName, Validators.required],
      secondName: [this.agentConnected.secondName],
      lastName: [this.agentConnected.lastName, Validators.required],
      secondSurname: [this.agentConnected.secondSurname, Validators.required],
      idType: [this.agentConnected.idType, Validators.required],
      ccNit: [this.agentConnected.ccNit, Validators.required],
      email: [this.agentConnected.email],
      state: [this.agentConnected.state == true ? "Activo" : "Desactivado", Validators.required],
      role: [this.agentConnected.role, Validators.required],
      photo: [this.agentConnected.photo]
    });
  }

  public unlockForm() {
    this.isBlocked = !this.isBlocked;
  }

  //TODO: Cuando se desea guardar los datos sin imagen genera error
  public saveData() {
    if (this.matchPassword()) {
      this.archivoService.uploadUSerPhoto(this.formData).subscribe((response) => {
        this.formGroup.value.photo = response.url;
        this.formGroup.value.state = this.formGroup.value.state === 'Activo' ? true : false;
        this.authenticationService.updateProfile(this.formGroup.value).subscribe(() => {
          this.matSnackBar.open('Asesor Registrado Exitosamente', '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
          this.authenticationService.logout();
          this.router.navigate(['login']);
        })
      });
    }
  }

  private matchPassword() {
    const password1 = this.formGroup.get('password')?.value;
    const password2 = this.formGroup.get('password2')?.value;
    if (password1 != password2) {
      this.matSnackBar.open('Las contraseñas no coinciden', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      return false;
    }
    return true;
  }

  public onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.formData.append('file', fileInput.files[0]);
    };
  }

}
