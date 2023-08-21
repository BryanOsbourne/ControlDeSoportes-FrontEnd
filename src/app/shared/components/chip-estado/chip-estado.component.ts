import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-estado',
  templateUrl: './chip-estado.component.html',
  styleUrls: ['./chip-estado.component.css']
})
export class ChipEstadoComponent {

  @Input() stateSupport: string;
  @Input() stateEntity: boolean;

}
