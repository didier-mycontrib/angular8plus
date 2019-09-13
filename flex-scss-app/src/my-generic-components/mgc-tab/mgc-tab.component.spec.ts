import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgcTabComponent } from './mgc-tab.component';

describe('MgcTabComponent', () => {
  let component: MgcTabComponent;
  let fixture: ComponentFixture<MgcTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgcTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgcTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
