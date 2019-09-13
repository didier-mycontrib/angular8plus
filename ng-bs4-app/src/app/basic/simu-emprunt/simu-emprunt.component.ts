import { Component, OnInit } from '@angular/core';
import { Emprunt } from './emprunt';

@Component({
  selector: 'app-simu-emprunt',
  templateUrl: './simu-emprunt.component.html',
  styleUrls: ['./simu-emprunt.component.scss']
})
export class SimuEmpruntComponent implements OnInit {

  emprunt = new Emprunt(); //avec sous parties .nbMois .montant .tauxAnnuel ...

  onCompute(){
    this.emprunt.calculerMensualite();
  }
  onComputeAssurance(){
    this.emprunt.calculerAssurance();
  }
  constructor() { }

  ngOnInit() {
  }

}
