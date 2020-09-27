import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YyComponent } from './yy.component';

describe('YyComponent', () => {
  let component: YyComponent;
  let fixture: ComponentFixture<YyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
