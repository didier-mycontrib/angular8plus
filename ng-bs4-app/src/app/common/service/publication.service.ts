import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Publication } from "src/app/common/data/publication";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private _publicationPublicBaseUrl = "./news-api/public/publication" ; //avec ng serve --proxy-config proxy.conf.json
  private _publicationPrivateBaseUrl = "./news-api/private/role_publisher/publication" ; //avec ng serve --proxy-config proxy.conf.json
  
  constructor(private _http : HttpClient) { }

  public uploadPublicationFormaDataObservable(publicationFormData : FormData):Observable<Publication> {
    let uploadPublicationUrl : string = "./news-api/private/role_publisher/upload_publication";
    return this._http.post<Publication>(uploadPublicationUrl ,publicationFormData );
    }

  public getListePublicationObservable():Observable<Publication[]>{
    let publicationUrl : string = this._publicationPublicBaseUrl;
    return this._http.get<Publication[]>(publicationUrl )
          //tri par ordre decroissant sur les dates de publication
          .pipe( map( (data) => data.sort( (p1, p2) => (p1.date > p2.date) ? -1 : 1  )  )
              ); //.pipe() maintenant indispensable pour déclencher operator map() dans rxjs récent
  }

  public deletePublicationServerSide(publicationId):Observable<any>{
    console.log("deleting publication of _id = " +  publicationId );
    let  deletePublicationUrl : string = this._publicationPrivateBaseUrl + "/"  +  publicationId ;
    console.log("deletePublicationUrl= " + deletePublicationUrl );
    return this._http.delete(deletePublicationUrl );
   }
 
}
