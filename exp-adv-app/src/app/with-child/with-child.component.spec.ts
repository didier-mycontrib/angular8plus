import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithChildComponent } from './with-child.component';

describe('WithChildComponent', () => {
  let component: WithChildComponent;
  let fixture: ComponentFixture<WithChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
