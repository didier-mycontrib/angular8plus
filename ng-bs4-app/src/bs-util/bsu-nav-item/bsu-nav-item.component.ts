import { Component, OnInit, Input } from '@angular/core';
import { MenuDefinition } from "src/bs-util/data/MenuDefinition";

@Component({
  selector: 'bsu-nav-item',
  templateUrl: './bsu-nav-item.component.html',
  styleUrls: ['./bsu-nav-item.component.css']
})
export class BsuNavItemComponent implements OnInit {

  @Input()
  menuDef :MenuDefinition = {};

  @Input()
  subLevel :boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
