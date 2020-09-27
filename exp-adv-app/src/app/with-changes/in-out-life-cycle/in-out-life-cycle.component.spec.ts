import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutLifeCycleComponent } from './in-out-life-cycle.component';

describe('InOutLifeCycleComponent', () => {
  let component: InOutLifeCycleComponent;
  let fixture: ComponentFixture<InOutLifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutLifeCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
