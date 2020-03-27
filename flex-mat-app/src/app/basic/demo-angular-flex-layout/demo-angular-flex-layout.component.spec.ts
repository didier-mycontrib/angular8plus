import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAngularFlexLayoutComponent } from './demo-angular-flex-layout.component';

describe('DemoAngularFlexLayoutComponent', () => {
  let component: DemoAngularFlexLayoutComponent;
  let fixture: ComponentFixture<DemoAngularFlexLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAngularFlexLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAngularFlexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
