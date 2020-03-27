import { TestBed , async , inject } from '@angular/core/testing';

import { DeviseService } from './devise.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('DeviseService with mock http request/response', () => {

  let service, http, backend;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule],
    /* providers: [ DeviseService ] already provided in root */
  }));

  //injections pour le test à préparer
  beforeEach(inject([DeviseService, HttpClient, HttpTestingController],
     ( s: DeviseService,  _h: HttpClient,  _b: HttpTestingController) =>
      {    service = s;    http = _h;    backend = _b;}
   ));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get good conversion', () => {
    
    //excepted result AND mock HTTP ResponseContent :
    let convResult = {source:"EUR",target:"USD",amount:200,
                      result:217.3913}
 
    //excepted method behavior (just subscribe , deffered) :
    service.convertir(200,'EUR', 'USD').subscribe(res => {
        expect(res).toBe(convResult);
    });
 
    //expected HTTP request built by convertir() method :
    const req = backend.expectOne({
        url: './devise-api/public/convert?amount=200&source=EUR&target=USD',
        method: 'GET'
    });
 
    //déclenchement méthode avec mock http response:
    req.flush(convResult, { status: 200, statusText: 'ok' });
 
});

   afterEach(
     inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify(); //requete bien terminée?
          })
  );
});

