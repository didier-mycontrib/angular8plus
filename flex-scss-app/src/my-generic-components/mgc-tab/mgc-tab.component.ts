import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mgc-tab',
  templateUrl: './mgc-tab.component.html',
  styleUrls: ['./mgc-tab.component.scss']
})
export class MgcTabComponent implements OnInit {

  @Input() 
  title : string = "default tab title";

  constructor() { }

  ngOnInit() {
  }

}
