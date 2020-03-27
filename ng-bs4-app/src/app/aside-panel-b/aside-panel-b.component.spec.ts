import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePanelBComponent } from './aside-panel-b.component';

describe('AsidePanelBComponent', () => {
  let component: AsidePanelBComponent;
  let fixture: ComponentFixture<AsidePanelBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidePanelBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidePanelBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
