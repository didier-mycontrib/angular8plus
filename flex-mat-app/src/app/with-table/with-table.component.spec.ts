import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTableComponent } from './with-table.component';

describe('WithTableComponent', () => {
  let component: WithTableComponent;
  let fixture: ComponentFixture<WithTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
