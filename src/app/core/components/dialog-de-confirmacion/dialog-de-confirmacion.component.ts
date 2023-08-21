import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-de-confirmacion',
  templateUrl: './dialog-de-confirmacion.component.html',
  styleUrls: ['./dialog-de-confirmacion.component.css']
})
export class DialogDeConfirmacionComponent {
  public data: string = '¿Esta seguro de realizar esta operacion?';
  constructor(
    private dialogRef: MatDialogRef<DialogDeConfirmacionComponent>,
  ) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
