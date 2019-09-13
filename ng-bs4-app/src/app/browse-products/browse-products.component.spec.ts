import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseProductsComponent } from './browse-products.component';

describe('BrowseProductsComponent', () => {
  let component: BrowseProductsComponent;
  let fixture: ComponentFixture<BrowseProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
