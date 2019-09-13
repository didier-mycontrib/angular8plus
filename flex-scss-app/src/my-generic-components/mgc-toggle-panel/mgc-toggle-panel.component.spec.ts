import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgcTogglePanelComponent } from './mgc-toggle-panel.component';

describe('MgcTogglePanelComponent', () => {
  let component: MgcTogglePanelComponent;
  let fixture: ComponentFixture<MgcTogglePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgcTogglePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgcTogglePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
