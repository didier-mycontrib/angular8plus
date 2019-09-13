import { Component, OnInit, Input } from '@angular/core';
import { MenuDefinition } from "src/bs-util/data/MenuDefinition";

@Component({
  selector: 'bsu-dropdown-menu',
  templateUrl: './bsu-dropdown-menu.component.html',
  styleUrls: ['./bsu-dropdown-menu.component.css']
})
export class BsuDropdownMenuComponent implements OnInit {

  //toggleM : boolean =false; //for old version without ng-bootstrap

  @Input()
  label : string = "bsu-dropdown-menu"; //default value

  @Input()
  dopdownMenuDefs :MenuDefinition[] = [
    { label : "menu-item-1" , path : "welcome" },
    { label : "menu-item-1" , path : "path2" }
  ]; //default value

  constructor() { }

  ngOnInit() {
  }

}
