import { Component, OnInit, Input } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { AuthService } from '../common/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  title : string ="myApp" //as default value

  myMenuDefs :MenuDefinition[] = [
    { label : "basic" , path : 'ngr-basic' },
    { label : "news" , path : "ngr-news" },
    { label : "browse-products" , path : "ngr-browse-products" },
    { label : "admin" , 
      children : [
        { label : "set security" , path : "ngr-security" } ,
        { divider : true },
        { label : "login" , path : "ngr-login" } ,
        { divider : true },
        { label : "admin-news (publisher)" , path : "ngr-admin-news" , role : "admin"} ,
        { divider : true },
        { label : "devise (admin)" , path : "ngr-admin-devise" , role : "admin"},
        { label : "stats (admin)" , path : "ngr-stats" }
      ]
    } ,
    { label : "advanced" , 
      children : [
        { label : "animations" , path : "ngr-with-animations" },
        { label : "traductions" , path : "ngr-with-traductions" },
        { label : "injections" , path : "ngr-with-injections" },
        { divider : true },
        { label : "admin-prod (indexedDB)" , path : "ngr-admin-prod-idb" },
        { divider : true },
        { label : "chat" , path : "ngr-chat" }
      ]
    }];

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
