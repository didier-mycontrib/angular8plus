import { Component, OnInit } from '@angular/core';
import { Devise } from '../common/data/devise';
import { DeviseService } from '../common/service/devise.service';

@Component({
  selector: 'app-admin-devise',
  templateUrl: './admin-devise.component.html',
  styleUrls: ['./admin-devise.component.scss']
})
export class AdminDeviseComponent implements OnInit {

  message : string = "";
  devise : Devise = new Devise();
  devises : Devise[] = [];

  constructor(private _deviseService : DeviseService) {

   }

  onSupprimer(codeDevise: string){
    this._deviseService.deleteDeviseServerSide$(codeDevise)
    .subscribe(
      ()=>{this.message="ok, devise bien supprimée";  this.reinitDevises()} ,
      (error) => { console.log(error);
                   this.message = error.message; }
     );
  }

  onAjouter(){
    this._deviseService.postDevise$(this.devise)
    .subscribe(
      ()=>{this.message="ok, devise bien ajoutée";  this.reinitDevises()} ,
      (error) => { console.log(error);
                   this.message = error.message; }
     );
  }

  ngOnInit(): void {
    this.reinitDevises();
  }

  reinitDevises(): void {
    this._deviseService.getAllDevises$()
         .subscribe({
            next: (tabDev : Devise[])=>{ 
                    this.devises = tabDev; },
            error: (err) => { console.log("error:"+err.message)}
         });
  }


}
