import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/clients/customer.service';
import { DialogsService } from 'src/app/services/dialogs/dialogs.service';

@Component({
  selector: 'app-formulario-de-clientes',
  templateUrl: './formulario-de-clientes.component.html',
  styleUrls: ['./formulario-de-clientes.component.css']
})
export class FormularioDeClientesComponent implements OnInit {

  formGroup: FormGroup;
  subscriptions: Array<Subscription> = new Array();

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialogsService: DialogsService
  ) { }

  ngOnInit() {
    this.formInit();
    const codigo = this.activatedRoute.snapshot.params['codigo'];
    this.findCustomerByCodigo(codigo);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  formInit() {
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

  findCustomerByCodigo(codigo: number) {
    if (codigo) {
      this.subscriptions.push(
        this.customerService.findByCodigo(codigo).subscribe((customer) => {
          this.formGroup.setValue(customer);
        })
      );
    }
  }

  openConfirmedDialog() {
    this.dialogsService.confirmationDialog().then((confirmed) => {
      if (confirmed) {
        this.saveCustomer();
      }
    });
  }

  saveCustomer() {
    this.subscriptions.push(
      this.customerService.saveCustomer(this.formGroup.value).subscribe((customer) => {
        if (customer) {
          this.dialogsService.saveDialog();
          this.router.navigate(["/Dashboard/Clientes"])
        } else {
          this.dialogsService.errorDialog();
        }
      }, () => this.dialogsService.errorDialog())
    );
  }

}
