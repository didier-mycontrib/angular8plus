import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatComponent } from './vat.component';
import { FormsModule } from '@angular/forms';
import { ComputeService } from '../common/service/compute.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('VatComponent', () => {
  let component: VatComponent;
  let fixture: ComponentFixture<VatComponent>;
  let computeServiceWithinTest : ComputeService;
  let deEot :DebugElement, deIot :DebugElement , deRate :DebugElement;
  let elIot :HTMLElement;
  let elEot :HTMLInputElement ,  elRate:HTMLInputElement;

  beforeEach(async(() => {
    //stub Service for test purposes (will be cloned and injected)
    let   computeServiceStub = {
      vat(excl_tax : number, vat_pct : number ) : number{
          return excl_tax * vat_pct / 100;
      }
    };

    TestBed.configureTestingModule({
      imports: [ FormsModule ], // FormsModule is for [(ngModel)]
      declarations: [ VatComponent ],
      //providers:    [ ComputeService ]
      providers:    [ {provide: ComputeService, 
                       useValue: computeServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatComponent);
    computeServiceWithinTest =
              fixture.debugElement.injector.get(ComputeService);
    component = fixture.componentInstance;
    deEot = fixture.debugElement.query(By.css('#price_excluded_of_tax_input'));
    elEot = deEot.nativeElement;
    deRate = fixture.debugElement.query(By.css('#v_a_tax_rate_pct_input'));
    elRate = deRate.nativeElement;
    deIot = fixture.debugElement.query(By.css('#price_inclusive_of_tax_span'));
    elIot = deIot.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('20% , 200 -> 240 from model', () => {
    component.price_excluded_of_tax=200;
    component.v_a_tax_rate_pct=20; //20%
    component.onRefresh(null /*not used event*/);
    fixture.detectChanges();
    console.log("from model, price_inclusive_of_vat:"
                 +elIot.textContent);
    expect(elIot.textContent).toContain('240');
  });

  it('10% , 300 -> 330 from input', () => {
    elEot.value="300";//saisir 300 dans zone input eot/ht
    elEot.dispatchEvent(new Event('input'));//déclencher evt input
    fixture.detectChanges();
    expect(Number(component.price_excluded_of_tax)).toBe(300);

    elRate.value="10";//saisir 10 au sens 10% dans zone input rate/taux
    elRate.dispatchEvent(new Event('input'));//déclencher evt input
    fixture.detectChanges();
    expect(Number(component.v_a_tax_rate_pct)).toBe(10); 

    console.log("from html, price_inclusive_of_vat:"
                 +elIot.textContent);
    expect(elIot.textContent).toContain('330');
  });

it('test computeServiceWithinTest', () => {
  expect(computeServiceWithinTest).toBeDefined();
  expect(computeServiceWithinTest.vat(100, 20)).toBe(20);
});

});
