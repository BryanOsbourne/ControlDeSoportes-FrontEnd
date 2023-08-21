import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDeConfirmacionComponent } from '../../dialogs/dialog-de-confirmacion/dialog-de-confirmacion.component'; 
import { ClientService } from 'src/app/services/cliente/client.service';


@Component({
  selector: 'app-agrega-cliente',
  templateUrl: './agrega-cliente.component.html',
  styleUrls: ['./agrega-cliente.component.css']

})
export class AgregaClienteComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClientService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      id: [''],
      codigo: ['', Validators.required],
      primerNombre: [''],
      segundoNombre: [''],
      primerApellido: [''],
      segundoApellido: [''],
      razonSocial: ['', Validators.required],
      tipoIdentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      email: [''],
      versionSistema: [''],
      estado: ['', Validators.required]
    })
    this.clienteForm.value.id = this.route.snapshot.params['id'];
    this.buscarClientePorCodigo(this.clienteForm.value.id);
  }

  buscarClientePorCodigo(id: number) {
    if (!id) {
      return;
    }
    this.clienteService.buscarPorCodigo(id).subscribe(clienteEncontrado => {
      this.clienteForm.setValue(clienteEncontrado);
    });
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(DialogDeConfirmacionComponent, {
      width: '30%',
      height: '25%',
      data: { message: '¿Estás seguro que deseas realizar esta acción?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.registrarCliente();
      }
    });
  }

  registrarCliente() {
    this.clienteService.registrarCliente(this.clienteForm.value).subscribe(() => {
      this._snackBar.open('Cliente Registrado Exitosamente', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      this.router.navigate(["/Dashboard/Clientes"])
    },
      error => console.log(error))
  }


}
