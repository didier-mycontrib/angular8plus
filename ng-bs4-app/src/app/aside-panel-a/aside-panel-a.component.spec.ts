import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePanelAComponent } from './aside-panel-a.component';

describe('AsidePanelAComponent', () => {
  let component: AsidePanelAComponent;
  let fixture: ComponentFixture<AsidePanelAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidePanelAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidePanelAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
