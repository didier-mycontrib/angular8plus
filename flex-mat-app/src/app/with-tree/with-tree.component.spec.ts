import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTreeComponent } from './with-tree.component';

describe('WithTreeComponent', () => {
  let component: WithTreeComponent;
  let fixture: ComponentFixture<WithTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
