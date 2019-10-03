import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdIdbComponent } from './admin-prod-idb.component';

describe('AdminProdIdbComponent', () => {
  let component: AdminProdIdbComponent;
  let fixture: ComponentFixture<AdminProdIdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdIdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdIdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
