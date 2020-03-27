import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ConversionComponent } from './conversion.component';
import { FormsModule } from '@angular/forms';
import { DeviseService } from '../common/service/devise.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ConversionComponent', () => {
  let component: ConversionComponent;
  let fixture: ComponentFixture<ConversionComponent>;

  let deSourceSelect : DebugElement;
  let elSourceSelect : HTMLSelectElement;
  let deCibleSelect : DebugElement;
  let elCibleSelect : HTMLSelectElement;
  let deMontantSource : DebugElement;
  let elMontantSource : HTMLInputElement;
  let deBtnConv : DebugElement;
  let elBtnConv : HTMLInputElement;

  let deviseServiceWithinTest : DeviseService;
  let spy : jasmine.Spy;  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule , HttpClientModule],
      declarations: [ ConversionComponent ],
      providers:    [ DeviseService ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionComponent);
    deviseServiceWithinTest = fixture.debugElement.injector.get(DeviseService);
    /*
    let stubConvResult = {source:"EUR",target:"USD",amount:200,
                      result:217.3913}
    spy = spyOn(deviseServiceWithinTest, 'convertir')
                      .and.returnValue(of(stubConvResult));
    */
   spy = spyOn(deviseServiceWithinTest, 'convertir')
   .and.callFake(function(montant  : number,  source :string ,   cible : string){
    let convResult = {source:source,target:cible,amount:montant,
                     result:0};
    if(source=='EUR'&&cible=='USD')  
       convResult.result=217.3913;
    else if(source==cible) 
        convResult.result=montant;
    return of(convResult);
   });


    component = fixture.componentInstance;
    deMontantSource = fixture.debugElement.query(By.css('input[name=montantSource]'));
    elMontantSource = deMontantSource.nativeElement;
    deSourceSelect = fixture.debugElement.query(By.css('select[name=source]'));
    elSourceSelect = deSourceSelect.nativeElement;
    deCibleSelect = fixture.debugElement.query(By.css('select[name=cible]'));
    elCibleSelect = deCibleSelect.nativeElement;
    deBtnConv = fixture.debugElement.query(By.css('#btnConv'));
    elBtnConv = deBtnConv.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display good conversion result', async(() => {
    /*
    component.montantSource=200;        
    component.source='EUR';  
    component.cible='USD'; 
    component.onConvertir(null);
    */

   // wait for async activities (observable/promise/event/...)        
    fixture.whenStable().then(() => { 
      component.devises= [
        { code : "EUR" , name : "Euro" , change : 1.0} ,
        { code : "GBP" , name : "Livre" , change : 0.9} ,
        { code : "JPY" , name : "Yen" , change : 123.1} ,
        { code : "USD" , name : "Dollar" , change : 1.1} 
      ];
      fixture.detectChanges(); //in order to synchronize options of select 
      elMontantSource.value="200"; elMontantSource.dispatchEvent(new Event('input'));
      elSourceSelect.value=elSourceSelect.options[0].value;//"EUR"; 
      elSourceSelect.dispatchEvent(new Event('change'));
      elCibleSelect.value=elSourceSelect.options[3].value;//"USD"; 
      elCibleSelect.dispatchEvent(new Event('change'));
      elBtnConv.dispatchEvent(new Event('click'));//déclencher evt click
      fixture.detectChanges();
      expect(Number(component.montantSource)).toBe(200);
      expect(component.source).toBe('EUR');
      expect(component.cible).toBe('USD');
       // fixture.detectChanges();
        expect(spy.calls.any()).toBe(true, 'convertir should be called');
        console.log("conversion - component.montantCible:"+component.montantCible);
        expect(component.montantCible).toBeCloseTo(217.3913,0.0001);
        }) ;
  }));

  it('conversion result=montantSource if cible=source', fakeAsync(() => {
    component.montantSource=200;        
    component.source='EUR';  
    component.cible='EUR'; 
    component.onConvertir(null);
    tick();//waiting inside fakeAsync for observable or promise result
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true, 'convertir should be called');
    console.log("conversion - component.montantCible:"+component.montantCible);
    expect(component.montantCible).toBeCloseTo(200,0.0001);
  }));

});
