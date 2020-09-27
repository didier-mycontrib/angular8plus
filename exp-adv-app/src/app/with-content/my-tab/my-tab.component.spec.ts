import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTabComponent } from './my-tab.component';

describe('MyTabComponent', () => {
  let component: MyTabComponent;
  let fixture: ComponentFixture<MyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
