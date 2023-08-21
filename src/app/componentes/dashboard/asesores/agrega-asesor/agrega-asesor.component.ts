import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AsesoresService } from 'src/app/services/asesor/asesores.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeConfirmacionComponent } from '../../dialogs/dialog-de-confirmacion/dialog-de-confirmacion.component';
import { Asesor } from 'src/app/models/asesor';

@Component({
  selector: 'app-agrega-asesor',
  templateUrl: './agrega-asesor.component.html',
  styleUrls: ['./agrega-asesor.component.css']
})
export class AgregaAsesorComponent implements OnInit {

  asesorForm: FormGroup;
  private originPassword: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private asesoresService: AsesoresService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.asesorForm = this.formBuilder.group({
      id: [0],
      username: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      tipoIdentificacion: ['', Validators.required],
      identificacion: [undefined, Validators.required],
      email: [''],
      estado: ['', Validators.required],
      role: ['', Validators.required],
    })
    this.asesorForm.value.id = this.route.snapshot.params['id'];
    this.buscarAsesorPorCodigo(this.asesorForm.value.id);
  }

  buscarAsesorPorCodigo(id: number) {
    if (!id) {
      return;
    }
    this.asesoresService.buscarPorCodigo(id).subscribe(asesoreEncontrado => {
      this.originPassword = asesoreEncontrado.password;
      this.setAsesor(asesoreEncontrado);
    });
  }

  setAsesor(asesor: Asesor) {
    this.asesorForm.patchValue({
      id: asesor.id,
      username: asesor.username,
      password: asesor.password,
      password2: asesor.password,
      primerNombre: asesor.primerNombre,
      segundoNombre: asesor.segundoNombre,
      primerApellido: asesor.primerApellido,
      segundoApellido: asesor.segundoApellido,
      tipoIdentificacion: asesor.tipoIdentificacion,
      identificacion: asesor.identificacion,
      email: asesor.email,
      estado: asesor.estado,
      role: asesor.role
    });
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(DialogDeConfirmacionComponent, {
      width: '30%',
      height: '22%',
      data: { message: '¿Está seguro de realizar esta operacion?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.registrarAsesor();
      }
    });

  }

  registrarAsesor() {
    if (this.validarCampos()) {
      this.asesoresService.registrarAsesor(this.getAsesor()).subscribe(() => {
        this._snackBar.open('Asesor Registrado Exitosamente', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        })
        this.router.navigate(["/Dashboard/Asesores"])
      },
        error => console.log(error))
    }
  }

  validarCampos() {

    if (this.asesorForm.value.password != this.asesorForm.value.password2) {
      this._snackBar.open('Las contraseñas no coinciden', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      return false;
    }

    //SI EL USUARIO EXISTE Y LA CONTRASEÑA NO FUE MODIFICADA, SE ENVIA NULL PARA MANTENER LA CONTRASEÑA ACTUAL
    if (this.asesorForm.value.id != 0) {
      if (this.originPassword == this.asesorForm.value.password) {
        this.asesorForm.value.password = null;
      }
    }

    return true;
  }

  getAsesor() {
    const asesor: Asesor = {
      id: this.asesorForm.value.id,
      username: this.asesorForm.value.username,
      password: this.asesorForm.value.password,
      primerNombre: this.asesorForm.value.primerNombre,
      segundoNombre: this.asesorForm.value.segundoNombre,
      primerApellido: this.asesorForm.value.primerApellido,
      segundoApellido: this.asesorForm.value.segundoApellido,
      tipoIdentificacion: this.asesorForm.value.tipoIdentificacion,
      identificacion: this.asesorForm.value.identificacion,
      email: this.asesorForm.value.email,
      estado: this.asesorForm.value.estado,
      role: this.asesorForm.value.role
    };
    return asesor;
  }

}
