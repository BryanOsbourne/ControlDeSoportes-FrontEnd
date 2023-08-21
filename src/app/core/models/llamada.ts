import { Asesor } from "./asesor";
import { Cliente } from "./cliente";

export class Llamada {
   consecutivo: number;
   fechaInicio: Date;
   horaInicio : string;
   asesor: Asesor;
   cliente: Cliente;
   tipoSoporte: string;
   contacto: string;
   telefono: string;
   detalle: string;
   observacion: string;
   fechaFin: Date;
   horaFin: string;
   estado: string;
}