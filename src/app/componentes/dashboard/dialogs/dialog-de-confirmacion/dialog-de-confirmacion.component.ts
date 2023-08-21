import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-de-confirmacion',
  templateUrl: './dialog-de-confirmacion.component.html',
  styleUrls: ['./dialog-de-confirmacion.component.css']
})
export class DialogDeConfirmacionComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogDeConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
