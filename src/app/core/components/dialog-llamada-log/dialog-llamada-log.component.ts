import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-llamada-log',
  templateUrl: './dialog-llamada-log.component.html',
  styleUrls: ['./dialog-llamada-log.component.css']
})

export class DialogLlamadaLogComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogLlamadaLogComponent>,
    @Inject(MAT_DIALOG_DATA) public logSupport: any
  ) { }

  onNoClick() {
    this.dialogRef.close();
  }

}
