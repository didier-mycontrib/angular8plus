import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTraductionComponent } from './with-traduction.component';

describe('WithTraductionComponent', () => {
  let component: WithTraductionComponent;
  let fixture: ComponentFixture<WithTraductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithTraductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithTraductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
