import { Component } from '@angular/core';
import { Support } from 'src/app/core/models/support';

@Component({
  selector: 'app-cards-llamadas',
  templateUrl: './cards-llamadas.component.html',
  styleUrls: ['./cards-llamadas.component.css']
})
export class CardsLlamadasComponent {

  public countSupport = {
    finalizadas: 0,
    pendientes: 0,
    totales: 0,
  };

  public getCountSupports(supports: Support[]) {
    this.countSupport.finalizadas = 0;
    this.countSupport.pendientes = 0;
    this.countSupport.totales = 0;
    supports.forEach((llamada) => {
      if (llamada.state === "Finalizado") {
        this.countSupport.finalizadas++;
      } else if (llamada.state === "Pendiente") {
        this.countSupport.pendientes++;
      }
      this.countSupport.totales++;
    });
  }

}
