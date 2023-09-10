import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  subscriptions: Array<Subscription> = new Array();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private agentService: AgentService,
    private dialogsService: DialogsService
  ) { }

  ngOnInit() {
    this.formInit();
    const id = this.activatedRoute.snapshot.params['id'];
    this.findById(id);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
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
      this.subscriptions.push(
        this.agentService.findById(id).subscribe((agent) => {
          this.formGroup.setValue({
            id : agent.id,
            username : agent.username,
            password : agent.password,
            firstName : agent.firstName,
            secondName : agent.secondName,
            lastName : agent.lastName,
            secondSurname : agent.secondSurname,
            idType : agent.idType,
            ccNit : agent.ccNit,
            email : agent.email,
            state : agent.state,
            role : agent.role,
            photo : agent.photo
          });
        })
      );
    }
  }

  openConfirmationDialog() {
    this.dialogsService.confirmationDialog().then((confirmed) => {
      if (confirmed) {
        this.save();
      }
    });
  }

  save() {
    this.formGroup.value.password = '';
    this.subscriptions.push(
      this.agentService.save(this.formGroup.value).subscribe((agent) => {
        if (agent) {
          this.dialogsService.saveDialog();
          this.router.navigate(["/Dashboard/Asesores"])
        } else {
          this.dialogsService.errorDialog();
        }
      }, () => this.dialogsService.errorDialog())
    );
  }

  unlockForm() {
    this.isBlocked = !this.isBlocked;
  }

}
