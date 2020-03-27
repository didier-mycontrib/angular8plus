import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-my-side-nav',
  templateUrl: './my-side-nav.component.html',
  styleUrls: ['./my-side-nav.component.scss']
})
export class MySideNavComponent implements OnInit {

  @Input()
  sideNav : MatSidenav ; //reference to topLevel sideNav

  constructor() { }

  ngOnInit() {
  }

}
