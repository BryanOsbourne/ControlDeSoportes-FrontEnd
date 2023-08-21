import { Asesor } from "./asesor";
import { Cliente } from "./cliente";
import { Llamada } from "./llamada"

export class LlamadaLogs {
   id: number;
   fechaInicio: Date;
   asesor: Asesor;
   cliente: Cliente;
   tipoSoporte: string;
   contacto: string;
   telefono: string;
   detalle: string;
   observacion: string;
   fechaFin: Date;
   estado: string;
   llamadas: Llamada[];
}