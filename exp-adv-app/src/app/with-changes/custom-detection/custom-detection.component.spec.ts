import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDetectionComponent } from './custom-detection.component';

describe('CustomDetectionComponent', () => {
  let component: CustomDetectionComponent;
  let fixture: ComponentFixture<CustomDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
