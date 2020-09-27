import { Component, OnInit, Inject } from '@angular/core';
import { MyStringService } from '../service/MyStringService';
import { APP_TITLE } from 'src/app/common/token/global-tokens';

@Component({
  selector: 'app-with-injection',
  templateUrl: './with-injection.component.html',
  styleUrls: ['./with-injection.component.scss']
})
export class WithInjectionComponent implements OnInit {
  comment : string ; //= "comment";
  commentWithPrefix : string = null;
  commentWithSuffix : string = null;

  constructor(private stringService : MyStringService, 
              @Inject(APP_TITLE) appTitle :string) { 
    this.comment = `comment for ${appTitle}`
    this.commentWithPrefix = stringService.withPrefix(this.comment);
    this.commentWithSuffix = stringService.withSuffix(this.comment);
  }

  ngOnInit() {
  }

}
