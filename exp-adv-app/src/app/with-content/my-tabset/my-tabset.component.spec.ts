import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTabsetComponent } from './my-tabset.component';

describe('MyTabsetComponent', () => {
  let component: MyTabsetComponent;
  let fixture: ComponentFixture<MyTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
