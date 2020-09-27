import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideOutsideZoneComponent } from './inside-outside-zone.component';

describe('InsideOutsideZoneComponent', () => {
  let component: InsideOutsideZoneComponent;
  let fixture: ComponentFixture<InsideOutsideZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideOutsideZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideOutsideZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
