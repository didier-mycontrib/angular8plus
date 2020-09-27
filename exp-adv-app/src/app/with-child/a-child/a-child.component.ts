import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-a-child',
  templateUrl: './a-child.component.html',
  styleUrls: ['./a-child.component.scss']
})
export class AChildComponent implements OnInit {

  @Input()
  name : string ="aChild";

  constructor() { }

  ngOnInit(): void {
  }

  public sayHello() :string{
      return "hello_from_"+this.name;
  }

}
