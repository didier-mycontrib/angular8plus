import { Component, OnInit, Input } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  title : string ="myApp" //as default value

  myMenuDefs :MenuDefinition[] = [
    { label : "basic" , path : "ngr/basic" },
    { label : "news" , path : "ngr/news" },
    { label : "browse-products" , path : "ngr/browse-products" },
    { label : "admin" , 
      children : [
        { label : "set security" , path : "ngr/security" } ,
        { divider : true },
        { label : "login" , path : "ngr/login" } ,
        { divider : true },
        { label : "admin-news (publisher)" , path : "ngr/admin-news" } ,
        { divider : true },
        { label : "devise (admin)" , path : "ngr/admin-devise" },
        { label : "stats (admin)" , path : "ngr/stats" }
      ]
    } 
    ];

  constructor() { }

  ngOnInit() {
  }

}
