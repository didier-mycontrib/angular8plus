import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySideNavComponent } from './my-side-nav.component';

describe('MySideNavComponent', () => {
  let component: MySideNavComponent;
  let fixture: ComponentFixture<MySideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
