import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let elv2 :  HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();

    // query for the {{title}} in  <h3> or in <span id="spanTitle">
    // by CSS element selector
    //de = fixture.debugElement.query(By.css('h3'));
    de = fixture.debugElement.query(By.css('#spanTitle'));
    el = de.nativeElement;
    //variante (v2):
    const compiledComponentNativeElement = fixture.debugElement.nativeElement;
    elv2 = compiledComponentNativeElement.querySelector('#spanTitle');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('no {{title}} value in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

it('should display original title', () => {
    fixture.detectChanges();
    console.log("title:"+el.textContent);
    expect(el.textContent).toContain(component.title);
  });

  it('should display a different test title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });


});
