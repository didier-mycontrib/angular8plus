import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bsu-my-fg-label',
  templateUrl: './bsu-my-form-group-with-label.component.html',
  styleUrls: ['./bsu-my-form-group-with-label.component.css']
})
export class BsuMyFormGroupWithLabelComponent implements OnInit {

  @Input()
  label : string ="?";

  constructor() { }

  ngOnInit() {
  }

}
