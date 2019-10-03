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

  public source : string ;
  public cible : string ;
  public montantSource : number = 100;
  public montantCible : number;

  constructor(private deviseService : DeviseService) { }

  ngOnInit() {
    this.deviseService.getDevises().subscribe(
      (devises)=>{this.devises = devises; this.initDefault();  },
      (err)=>{console.log(err);}
    );
  }

  private initDefault(){
    if(this.devises && this.devises[0] ){
      this.source=this.devises[0].code;
      this.cible=this.devises[0].code;
    }
}

  public onConvertir(evt:any){
    console.log(`source=${this.source} cible=${this.cible} montant=${this.montantSource}`)
    this.deviseService.convertir(this.montantSource,this.source,this.cible)
        .subscribe((resConv:ResConv)=> { this.montantCible = resConv.result;
                                          console.log("resConv="+JSON.stringify(resConv)); });
    
  }

}
