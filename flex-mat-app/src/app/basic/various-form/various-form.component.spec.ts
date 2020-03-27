import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariousFormComponent } from './various-form.component';

describe('VariousFormComponent', () => {
  let component: VariousFormComponent;
  let fixture: ComponentFixture<VariousFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariousFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariousFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
