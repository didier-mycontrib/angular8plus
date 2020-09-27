import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithInjectionComponent } from './with-injection.component';

describe('WithInjectionComponent', () => {
  let component: WithInjectionComponent;
  let fixture: ComponentFixture<WithInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
