import { Component, OnInit } from '@angular/core';
import { MyStringService } from '../service/MyStringService';

@Component({
  selector: 'app-with-injection',
  templateUrl: './with-injection.component.html',
  styleUrls: ['./with-injection.component.scss']
})
export class WithInjectionComponent implements OnInit {
  comment : string = "comment";
  commentWithPrefix : string = null;
  commentWithSuffix : string = null;

  constructor(private stringService : MyStringService) { 
    this.commentWithPrefix = stringService.withPrefix(this.comment);
    this.commentWithSuffix = stringService.withSuffix(this.comment);
  }

  ngOnInit() {
  }

}
