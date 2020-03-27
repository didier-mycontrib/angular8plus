import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithStepsComponent } from './with-steps.component';

describe('WithStepsComponent', () => {
  let component: WithStepsComponent;
  let fixture: ComponentFixture<WithStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
