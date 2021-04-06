import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-devise',
  templateUrl: './admin-devise.component.html',
  styleUrls: ['./admin-devise.component.scss']
})
export class AdminDeviseComponent implements OnInit {

  public  devises : Devise[] = [];

  selectedDevise =  new Devise();//empty devise by default
  confirmDelete :boolean = false;
  mode : string = "newOne" ; //ou "existing"
  msgSaveOrUpdate : string =""; //Message secondaire
  msg : string =""; //Message principal exemple : "devise xy deleted"

  //@ViewChild('formDevise', { static : false}) 
  //form : NgForm ;

  public onFormInit(){

  }

  constructor(public deviseService : DeviseService) { }

  ngOnInit() {
    this.onNouvelleDevise();
  }


  public essentielDeviseString(dev : Devise) :string{
    return  "[" + dev.code + "] " + dev.name + " : " +dev.change ; 
  }

  public onGetAllDevises(){
    this.deviseService.getDevises()
    .subscribe((devises:Devise[])=> { this.devises = devises;
                                      console.log("devises="+JSON.stringify(this.devises)); });

  }

  onNouvelleDevise(){
    this.mode="newOne"; 
    this.selectedDevise = new Devise();
    this.msg="sélection courante = nouvelle devise"; 
    this.msgSaveOrUpdate="nouvelle devise par encore sauvegardée";
   }

   onSubmit(){
    if(this.mode=="newOne"){
       this.deviseService.postDevise(this.selectedDevise)
       .subscribe(
         (savedDevise)=>{ this.addInTabAfterPostNew(); },
         (err)=>{console.log(err); this.msg="echec ajout/sauvegarde (code unique?)"}
       );
    }
    else {
       this.deviseService.putDevise(this.selectedDevise)
       .subscribe(
        (updatedDevise)=>{this.msg="devise modifiée/sauvegardée"; },
        (err)=>{console.log(err); this.msg="echec modification/sauvegarde"}
      );
    }
  }

  addInTabAfterPostNew(){
    if(this.mode=="newOne"){
      this.devises.push(this.selectedDevise);
      this.mode = "existing";
      this.msg="sélection courante = devise existante modifiable"; 
      this.msgSaveOrUpdate="nouvelle devise sauvegardée (cependant re-modifiable)";
    }
 }

  endOfDelete(){
    this.onGetAllDevises();
    this.onNouvelleDevise();
    this.msg="suppression bien effectuée";
  }

  public onSupprimerDevise(){
    this.deviseService.deleteDeviseServerSide(this.selectedDevise.code)
    .subscribe(()=>{this.endOfDelete() },
              (err)=>{this.msg="echec suppression";}
    );
    this.confirmDelete=false;
   
  }

  onChangeSelectedDevise(evt:any){
    this.msgSaveOrUpdate="";
    this.mode="existing";
    this.confirmDelete=false;
    this.msg="sélection courante = devise existante modifiable"; 
  }

  

  /*
  public onInitDevises(evt:any){
    this.deviseService.initDevises()
    .subscribe((devises:Devise[])=> { this.devises = devises;
                                      console.log("devises="+JSON.stringify(this.devises)); });

  }*/

}
