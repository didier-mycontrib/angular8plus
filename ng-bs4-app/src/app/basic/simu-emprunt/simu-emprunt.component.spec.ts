import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuEmpruntComponent } from './simu-emprunt.component';

describe('SimuEmpruntComponent', () => {
  let component: SimuEmpruntComponent;
  let fixture: ComponentFixture<SimuEmpruntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuEmpruntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
