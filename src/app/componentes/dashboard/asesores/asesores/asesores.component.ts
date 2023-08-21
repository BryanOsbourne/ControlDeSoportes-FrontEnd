import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Asesor } from 'src/app/models/asesor';
import { AsesoresService } from 'src/app/services/asesor/asesores.service';

@Component({
  selector: 'app-asesores',
  templateUrl: './asesores.component.html',
  styleUrls: ['./asesores.component.css']
})
export class AsesoresComponent {

  displayedColumns: string[] = ['Codigo', 'Primer Nombre', 'Primer Apellido', 'Segundo Apellido', 'Tipo Identificacion','Identificacion','Email','Tipo De Usuario','Estado', 'Acciones'];
  datasource: MatTableDataSource<Asesor>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private asesoresService: AsesoresService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla() {
    this.asesoresService.listarAsesores().subscribe(asesoresEncontrados => {
      this.datasource = new MatTableDataSource(asesoresEncontrados);
      this.datasource.paginator = this.paginator;
    });
  }

  filtrarAsesores(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  eliminarAsesor(id: number) {
    this._snackBar.open('No esta autorizado para realizar esta operacion', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  verDetalleDeAsesor(id: number) {
    this.router.navigate(["/Dashboard/VerDetalleDeAsesor/", id]);
  }

}
