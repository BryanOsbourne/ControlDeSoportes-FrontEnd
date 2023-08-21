export interface Cliente {
    id : number;
    codigo: number;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    razonSocial: string;
    tipoIdentificacion: string;
    identificacion: string;
    email: string;
    versionSistema: Date;
    estado: boolean;
}