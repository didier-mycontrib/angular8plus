import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flex-mat-app';


  //@ViewChild('mySideNav', { static: false }) 
  //mySideNav: MatSidenav; //sideNav for topLevel (or drawer for subLevel)
  //refer to  <mat-sidenav #mySideNav ...> in .html

}
