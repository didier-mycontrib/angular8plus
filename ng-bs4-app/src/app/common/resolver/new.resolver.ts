import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Publication } from '../data/publication';
import { PublicationService } from '../service/publication.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<Publication[]> {

  constructor(private _publicationService : PublicationService) {}

  resolve(): Observable<Publication[]> {
    console.log("via NewsResolver ...")
    return this._publicationService.getListePublicationObservable();
  }

  }