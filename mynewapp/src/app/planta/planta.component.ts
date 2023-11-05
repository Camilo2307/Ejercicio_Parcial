import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service';
import { dataPlantas } from 'src/app/planta/dataPlantas';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  constructor(private plantaService: PlantaService) { }
  plantas: Array<Planta> = [];
  
  cantidadInterior:number = 0;
  cantidadExterior:number = 0;

  getPlantas() {
    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.contarPlantasPorTipo();
    });
  }



  contarPlantasPorTipo() {
    this.cantidadInterior = this.plantas.filter(planta => planta.tipo === 'Interior').length;
    this.cantidadExterior = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
  }

  ngOnInit() {
    this.getPlantas();
  }

}
