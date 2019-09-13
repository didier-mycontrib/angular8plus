import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter , flatMap, toArray } from 'rxjs/operators'
import { Product } from '../data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private memProductlist : Product[] = 
  [
   { _id : "p1" , category : "divers" , price : 1.3 , label : "gomme" , description : "gomme blanche" },
   { _id : "p2" , category : "divers" , price : 2.5 , label : "cahier" , description : "grand cahier à petits carreaux 200 pages" },
   { _id : "p3" , category : "divers" , price : 1.1 , label : "stylo" , description : "stylo bille bleu" },
   { _id : "p4" , category : "CD" , price : 9.1 , label : "CD David Bowie" , description : "Best of David Bowie" },
   { _id : "p5" , category : "CD" , price : 8.1 , label : "CD Madona" , description : "Best of Madona" },
   { _id : "p6" , category : "CD" , price : 11.1 , label : "CD Mickael Jackson" , description : "Best of Mickael Jackson" },
   { _id : "p7" , category : "DVD" , price : 12.1 , label : "DVD Le seigneur des anneaux" , description : "Premier episode / seigneur des anneaux" },
   { _id : "p8" , category : "DVD" , price : 13.1 , label : "DVD Le grand bleau" , description : "Le grand bleau" },
   { _id : "p9" , category : "DVD" , price : 14.1 , label : "DVD James Bond" , description : "James Bond / Spectre" },
   { _id : "p10" , category : "livres" , price : 8.1 , label : "Fondation" , description : "Science fiction" },
   { _id : "p11" , category : "livres" , price : 11.16 , label : "les Miserables" , description : "Les Misérables de Victor Hugo" },
   { _id : "p10" , category : "livres" , price : 12.1 , label : "A la recherche du temps perdu" , description : "Marcel Proust" },
  ];

  getProductsByCategoryObservable(category:string):Observable<Product[]>{
    return of(this.memProductlist)
          .pipe(
             flatMap(pInTab=>pInTab) ,
             filter( (p) => p.category === category ) ,
             toArray()
          )
  }

  constructor() { }
}
