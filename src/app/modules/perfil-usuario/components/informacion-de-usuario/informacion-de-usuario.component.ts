import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agent } from 'src/app/core/models/agent';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogsService } from 'src/app/services/dialogs/dialogs.service';
import { AgentService } from 'src/app/services/asesores/agent.service';

@Component({
  selector: 'app-informacion-de-usuario',
  templateUrl: './informacion-de-usuario.component.html',
  styleUrls: ['./informacion-de-usuario.component.css']
})
export class InformacionDeUsuarioComponent implements OnInit {

  formGroup: FormGroup;
  agentConnected: Agent;
  isBlocked = false;
  formData = new FormData();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private agentService: AgentService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private dialogsService: DialogsService
  ) { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.agentConnected = this.authenticationService.getUserToken();
    this.formInit();
  }

  formInit() {
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

  unlockForm() {
    this.isBlocked = !this.isBlocked;
  }

  openConfirmedDialog() {
    this.dialogsService.confirmationDialog().then((confirmed) => {
      if (confirmed) {
        this.saveData();
      }
    });
  }

  saveData() {
    if (this.matchPassword()) {
      this.formGroup.value.state = this.formGroup.value.state === 'Activo' ? true : false;
      this.authenticationService.updateProfile(this.formGroup.value).subscribe((agent) => {
        if (agent) {
          this.dialogsService.saveDialog();
          this.authenticationService.logout();
          this.router.navigate(['login']);
        } else {
          this.dialogsService.errorDialog();
        }
      },() => this.dialogsService.errorDialog());
    }
  }

  matchPassword() {
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

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.formData.append('file', fileInput.files[0]);
      this.agentService.uploadUSerPhoto(this.formData, this.agentConnected.id).subscribe((response) => {
        if (response) {
          this.dialogsService.saveDialog();
          this.authenticationService.logout();
          this.router.navigate(['login']);
        }
      })
    }
  }

}
