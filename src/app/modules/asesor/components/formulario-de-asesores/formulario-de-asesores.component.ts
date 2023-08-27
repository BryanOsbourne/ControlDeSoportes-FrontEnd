import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/services/asesores/agent.service';
import { DialogsService } from 'src/app/services/dialogs/dialogs.service';

@Component({
  selector: 'app-formulario-de-asesores',
  templateUrl: './formulario-de-asesores.component.html',
  styleUrls: ['./formulario-de-asesores.component.css']
})

export class FormularioDeAsesoresComponent implements OnInit {

  formGroup: FormGroup;
  isBlocked = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private agentService: AgentService,
    private matSnackBar: MatSnackBar,
    private dialogsService: DialogsService
  ) { }

  ngOnInit() {
    this.formInit();
    const id = this.activatedRoute.snapshot.params['id'];
    this.findById(id);
  }

  formInit() {
    this.formGroup = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: [''],
      firstName: ['', Validators.required],
      secondName: [''],
      lastName: ['', Validators.required],
      secondSurname: ['', Validators.required],
      idType: ['', Validators.required],
      ccNit: ['', Validators.required],
      email: [''],
      state: ['', Validators.required],
      role: ['', Validators.required],
      photo: ['']
    })
  }

  findById(id: number) {
    if (id) {
      this.agentService.findById(id).subscribe((agent) => {
        this.formGroup.setValue(agent);
      });
    }
  }

  openConfirmationDialog() {
    this.dialogsService.successConfirmedDialog().then((confirmed) => {
      if (confirmed) {
        this.save();
      }
    });
  }

  save() {
    this.formGroup.value.password = '';
    this.agentService.save(this.formGroup.value).subscribe(() => { this.router.navigate(["/Dashboard/Asesores"]) })
  }

  unlockForm() {
    this.isBlocked = !this.isBlocked;
  }

}
