import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLazy2Component } from './my-lazy2.component';

describe('MyLazy2Component', () => {
  let component: MyLazy2Component;
  let fixture: ComponentFixture<MyLazy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLazy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLazy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
