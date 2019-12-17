import { Injectable } from '@angular/core';
import { Observable, of , from} from 'rxjs';
import { filter , flatMap, toArray } from 'rxjs/operators'
import { Product } from '../data/product';
import { OnlineOfflineService } from './online-offline.service';
import { openDB , IDBPDatabase} from 'idb';; //idb (npm install -s idb) is a js library
                            //for using indexedDB with Promises

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private currentIdb : IDBPDatabase = null;

  constructor(private onlineOfflineService : OnlineOfflineService) { 
    this.initMyIdbSampleContent(); 
  }

  public getProducts() : Observable<Product[]> {
    return from(this.getAllProductsPromise());//from() to convert Promise to Observable
  }

  public postProduct(p: Product) :  Observable<Product> {
    return from(this.addProductInMyIDbPromise(p));
  }

  public putProduct(p: Product) :  Observable<Product> {
    return from(this.updateProductInMyIDbPromise(p));
  }

  public deleteProductInDb(id: string) :Observable<any>{
    return from(this.deleteProductInMyIDbPromise(id));
  }

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

  private async initMyIdbSampleContent(){
    let db = await this.openMyIDB();//not accessMyIDB() since .close() at the end of this aync function
    let tx = db.transaction('products', 'readwrite');
    let store = tx.objectStore('products');
    for(let p of this.memProductlist){
          let exitingProdWithSameKey = await store.get(p._id);
          if(exitingProdWithSameKey==null){
              await store.add(p);//reject Promise and tx if p already in store
          }
    }
    await tx.done;
    db.close();
  }

  public getProductsByCategoryObservable(category:string):Observable<Product[]>{
    /* return of(this.memProductlist)*/
    return this.getProducts()
          .pipe(
             flatMap(pInTab=>pInTab) ,
             filter( (p) => p.category === category ) ,
             toArray()
          )
  }

  private getAllProductsPromise() : Promise<Product[]>{
    let dbPromise = this.accessMyIDB();
    return dbPromise.then(function(db) {
      var tx = db.transaction('products', 'readonly');
      var store = tx.objectStore('products');
      return store.getAll();
    });
  }

  private addProductInMyIDbPromise(p:Product):Promise<Product>{
    let dbPromise = this.accessMyIDB();
    return dbPromise.then(function(db) {
      let tx = db.transaction('products', 'readwrite');
      let store = tx.objectStore('products');
      store.add(p);
      return tx.done;
    });
  }

  private updateProductInMyIDbPromise(p:Product):Promise<Product>{
    let dbPromise = this.accessMyIDB();
    return dbPromise.then(function(db) {
      let tx = db.transaction('products', 'readwrite');
      let store = tx.objectStore('products');
      store.put(p);
      return tx.done;
    });
  }

  private deleteProductInMyIDbPromise(id:string):Promise<any>{
    let dbPromise = this.accessMyIDB();
    return dbPromise.then(function(db) {
      let tx = db.transaction('products', 'readwrite');
      let store = tx.objectStore('products');
      store.delete(id);
      return tx.done;
    });
  }

  private openMyIDB() : Promise<IDBPDatabase>{
  var dbPromise = openDB('my-idb', 1, {
    upgrade(upgradeDb, oldVersion, newVersion, transaction) {
      if (!upgradeDb.objectStoreNames.contains('products')) {
        upgradeDb.createObjectStore('products', {keyPath: '_id', autoIncrement: false});
      }
    },
  });
  return dbPromise;
  }

  //accessMyIDB() return either already open idb or newly open idb if necessary:
  // do not call .close() after calling accessMyIDB() !!!
  private accessMyIDB() : Promise<IDBPDatabase>{
    return new Promise ((resolve,reject)=> {
      if(this.currentIdb !=null){
        resolve(this.currentIdb);
      }
      else{
        this.openMyIDB().then(
          (db)=>{
            if(db!=null){
              this.currentIdb = db; resolve(db);
            }else{
              reject("db is null after trying openMyIdb() in accessMyIdb()")
            }
          } ,
          (err)=>{ console.log(err); reject(err);}
      );
      }
    });
}

}