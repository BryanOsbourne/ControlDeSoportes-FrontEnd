import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDeConfirmacionComponent } from 'src/app/core/components/dialog-de-confirmacion/dialog-de-confirmacion.component';
import { CustomerService } from 'src/app/services/clients/customer.service';

@Component({
  selector: 'app-formulario-de-clientes',
  templateUrl: './formulario-de-clientes.component.html',
  styleUrls: ['./formulario-de-clientes.component.css']
})
export class FormularioDeClientesComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog
  ) { }

  public ngOnInit() {
    this.formInit();
    const codigo = this.activatedRoute.snapshot.params['codigo'];
    this.findCustomerByCodigo(codigo);
  }

  private formInit() {
    this.formGroup = this.formBuilder.group({
      id: [],
      codigo: ['', Validators.required],
      firstName: [''],
      secondName: [''],
      lastName: [''],
      secondSurname: [''],
      bussinesName: ['', Validators.required],
      idType: ['', Validators.required],
      ccNit: ['', Validators.required],
      email: [''],
      version: [''],
      state: ['', Validators.required]
    })
  }

  private findCustomerByCodigo(codigo: number) {
    if (!codigo) {
      return;
    }
    this.customerService.findByCodigo(codigo).subscribe((customer) => {
      this.formGroup.setValue(customer);
    });
  }

  public openConfirmationDialog() {
    const dialogRef = this.matDialog.open(DialogDeConfirmacionComponent, {
      width: '30%',
      height: '25%',
      data: { message: '¿Estás seguro que deseas realizar esta acción?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveCustomer();
      }
    });
  }

  public saveCustomer() {
    this.customerService.saveCustomer(this.formGroup.value).subscribe(() => {
      this.matSnackBar.open('Cliente Registrado Exitosamente', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      this.router.navigate(["/Dashboard/Clientes"])
    })
  }
}
