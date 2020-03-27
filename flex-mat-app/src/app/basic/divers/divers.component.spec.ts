import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversComponent } from './divers.component';

describe('DiversComponent', () => {
  let component: DiversComponent;
  let fixture: ComponentFixture<DiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
