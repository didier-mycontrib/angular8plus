import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/common/service/product.service';
import { Product } from 'src/app/common/data/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-prod-idb',
  templateUrl: './admin-prod-idb.component.html',
  styleUrls: ['./admin-prod-idb.component.scss']
})
export class AdminProdIdbComponent implements OnInit {

  constructor(private productService : ProductService) { }

  public categories : string[] = [ "divers" , "CD" , "DVD" , "livres"];
  public  products : Product[] = [];

  selectedProduct =  new Product();//empty product by default
  confirmDelete :boolean = false;
  mode : string = "newOne" ; //ou "existing"
  msgSaveOrUpdate : string =""; //Message secondaire
  msg : string =""; //Message principal exemple : "product xy deleted"

  @ViewChild('formProduct', { static : false}) 
  form : NgForm ;

  public onFormInit(){
  }

  
  ngOnInit() {
    this.onNouveauProduit();
  }


  public essentielProduitString(p : Product) :string{
    return  "[" + p._id + "] " + p.label + " : " +p.price ; 
  }

  public onGetAllProducts(){
    this.productService.getProducts()
    .subscribe((products:Product[])=> { this.products = products;
                                      console.log("products="+JSON.stringify(this.products)); });

  }

  onNouveauProduit(){
    this.mode="newOne"; 
    this.selectedProduct = new Product();
    this.msg="sélection courante = nouveau produit"; 
    this.msgSaveOrUpdate="nouveau produit par encore sauvegardé";
   }

   onSubmit(){
    if(this.mode=="newOne"){
       this.productService.postProduct(this.selectedProduct)
       .subscribe(
         (savedProduct)=>{ this.addInTabAfterPostNew(); },
         (err)=>{console.log(err); this.msg="echec ajout/sauvegarde (code unique?)"}
       );
    }
    else {
       this.productService.putProduct(this.selectedProduct)
       .subscribe(
        (updatedProduct)=>{this.msg="produit modifié/sauvegardé"; },
        (err)=>{console.log(err); this.msg="echec modification/sauvegarde"}
      );
    }
  }

  addInTabAfterPostNew(){
    if(this.mode=="newOne"){
      this.products.push(this.selectedProduct);
      this.mode = "existing";
      this.msg="sélection courante = produit existant modifiable"; 
      this.msgSaveOrUpdate="nouveau produit sauvegardé (cependant re-modifiable)";
    }
 }

  endOfDelete(){
    this.onGetAllProducts();
    this.onNouveauProduit();
    this.msg="suppression bien effectuée";
  }

  public onSupprimerProduit(){
    this.productService.deleteProductInDb(this.selectedProduct._id)
    .subscribe(()=>{this.endOfDelete() },
              (err)=>{this.msg="echec suppression";}
    );
    this.confirmDelete=false;
   
  }

  onChangeSelectedProduct(evt:any){
    this.msgSaveOrUpdate="";
    this.mode="existing";
    this.confirmDelete=false;
    this.msg="sélection courante = produit existant modifiable"; 
  }



}
