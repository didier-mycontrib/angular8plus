import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithChangesComponent } from './with-changes.component';

describe('WithChangesComponent', () => {
  let component: WithChangesComponent;
  let fixture: ComponentFixture<WithChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
