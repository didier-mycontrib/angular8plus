import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../../common/service/devise.service';
import { ResConv } from '../../common/data/res-conv';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  public devises=null;

  public source : string = "USD";
  public cible : string = "USD";
  public montantSource : number = 100;
  public montantCible : number;

  constructor(private deviseService : DeviseService) { }

  ngOnInit() {
    this.deviseService.getDevises().subscribe(
      (devises)=>{this.devises = devises;  },
      (err)=>{console.log(err);}
    );
  }

  public onConvertir(evt:any){
    console.log(`source=${this.source} cible=${this.cible} montant=${this.montantSource}`)
    this.deviseService.convertir(this.montantSource,this.source,this.cible)
        .subscribe((resConv:ResConv)=> { this.montantCible = resConv.result;
                                          console.log("resConv="+JSON.stringify(resConv)); });
    
  }

}
