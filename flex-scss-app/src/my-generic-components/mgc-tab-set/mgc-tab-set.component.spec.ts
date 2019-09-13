import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgcTabSetComponent } from './mgc-tab-set.component';

describe('MgcTabSetComponent', () => {
  let component: MgcTabSetComponent;
  let fixture: ComponentFixture<MgcTabSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgcTabSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgcTabSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
