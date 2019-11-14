import { ProveedoresService } from './../../services/proveedores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any[] = [];

  constructor(private proveedoresService: ProveedoresService) {
    this.proveedoresService.getProveedores().subscribe(proveedores => {
      for (const id$ in proveedores) {
        this.proveedores.push(proveedores[id$]);
      }
    })
  }

  ngOnInit() { }

  eliminarProveedor(id$) {
    this.proveedoresService.delProveedor(id$)
      .subscribe(res => {
        this.proveedores = [];
        this.proveedoresService.getProveedores()
          .subscribe(presupuestos => {
          });
      });
  }

}
