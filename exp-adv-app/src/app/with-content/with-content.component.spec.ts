import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithContentComponent } from './with-content.component';

describe('WithContentComponent', () => {
  let component: WithContentComponent;
  let fixture: ComponentFixture<WithContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
