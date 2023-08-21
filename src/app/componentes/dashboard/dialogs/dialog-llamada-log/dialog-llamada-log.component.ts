import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Llamada } from 'src/app/models/llamada';

@Component({
  selector: 'app-dialog-llamada-log',
  templateUrl: './dialog-llamada-log.component.html',
  styleUrls: ['./dialog-llamada-log.component.css']
})

export class DialogLlamadaLogComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogLlamadaLogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
