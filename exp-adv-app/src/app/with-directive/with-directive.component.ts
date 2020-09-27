import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-directive',
  templateUrl: './with-directive.component.html',
  styleUrls: ['./with-directive.component.scss']
})
export class WithDirectiveComponent implements OnInit {

  age : number =0;

  constructor() { }

  ngOnInit(): void {
  }

}
