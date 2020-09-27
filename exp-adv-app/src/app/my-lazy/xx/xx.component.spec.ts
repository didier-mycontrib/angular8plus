import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XxComponent } from './xx.component';

describe('XxComponent', () => {
  let component: XxComponent;
  let fixture: ComponentFixture<XxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
