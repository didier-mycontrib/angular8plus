import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {

  ht : number=null;
  listeTaux = [ 5, 10, 20];
  taux : number=20;
  tva : number=0;
  ttc : number=0;

  onCompute(){
    this.tva = this.ht * this.taux / 100;
    this.ttc = Number(this.ht) + this.tva;
  }

  constructor() { }

  ngOnInit() {
  }

}
