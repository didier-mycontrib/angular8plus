import { Component, Input, OnInit } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titre :string ="app";

  myMenuDefs : MenuDefinition[] = [
    { label : "welcome" , path : "ngr-welcome" },
    { label : "sessions" , path : "ngr-sessions" },
    { label : "customer" , 
      children : [
        { label : "customer account" , path : "ngr-customer" } ,
        { divider : true },
        { label : "reservations" , path : "ngr-reservations" } 
      ]
    }
    
    ];
 

  constructor() { }

  ngOnInit(): void {
  }

}
