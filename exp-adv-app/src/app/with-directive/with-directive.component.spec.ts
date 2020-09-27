import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDirectiveComponent } from './with-directive.component';

describe('WithDirectiveComponent', () => {
  let component: WithDirectiveComponent;
  let fixture: ComponentFixture<WithDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
