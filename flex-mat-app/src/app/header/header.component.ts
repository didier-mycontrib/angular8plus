import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  sideNav : MatSidenav ; //reference to topLevel sideNav

  @Input()
  title : string ="myApp" //as default value

  constructor() { }

  ngOnInit() {
  }

}
