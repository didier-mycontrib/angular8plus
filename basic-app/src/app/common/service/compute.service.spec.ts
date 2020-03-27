import { TestBed } from '@angular/core/testing';

import { ComputeService } from './compute.service';

describe('ComputeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
     /* providers: [ ComptuteService ] already provided in root */
  }));

  it('should be created', () => {
    const service: ComputeService = TestBed.get(ComputeService);
    expect(service).toBeTruthy();
  });

  it('20%tva sur 200 ht = 40', () => {
    const service: ComputeService = TestBed.get(ComputeService);
    expect(service.vat(200,20)).toBe(40);
   });
});


/*
describe('ComputeService without the TestBed', () => {
  let service: ComputeService;
  
  beforeEach(() => { service = new ComputeService(); 
  });
  
  it('20%tva sur 200 ht = 40', () => {
     expect(service.vat(200,20)).toBe(40);
    });
});
*/

