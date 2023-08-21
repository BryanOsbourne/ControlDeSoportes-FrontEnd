import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDeConfirmacionComponent } from 'src/app/core/components/dialog-de-confirmacion/dialog-de-confirmacion.component';
import { AgentService } from 'src/app/services/asesores/agent.service';

@Component({
  selector: 'app-formulario-de-asesores',
  templateUrl: './formulario-de-asesores.component.html',
  styleUrls: ['./formulario-de-asesores.component.css']
})

export class FormularioDeAsesoresComponent implements OnInit {

  public formGroup: FormGroup;
  public isBlocked = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private agentService: AgentService,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  public ngOnInit() {
    this.formInit();
    const id = this.activatedRoute.snapshot.params['id'];
    this.findById(id);
  }

  private formInit() {
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

  private findById(id: number) {
    if (!id) {
      return;
    }
    this.agentService.findById(id).subscribe((agent) => {
      this.formGroup.setValue(agent);
    });
  }

  public openConfirmationDialog() {
    const dialogRef = this.matDialog.open(DialogDeConfirmacionComponent, {
      width: '30%',
      height: '22%',
      data: { message: '¿Está seguro de realizar esta operacion?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.save();
      }
    });
  }

  private save() {
    this.formGroup.value.password = '';
    this.agentService.save(this.formGroup.value).subscribe(() => {
      this.matSnackBar.open('Asesor Registrado Exitosamente', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      this.router.navigate(["/Dashboard/Asesores"])
    })
  }

  public unlockForm() {
    this.isBlocked = !this.isBlocked;
  }

}
