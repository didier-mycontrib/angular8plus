import { Component, OnInit, Inject, Optional } from '@angular/core';
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

  constructor(@Optional() private stringService : MyStringService, 
              @Inject(APP_TITLE) appTitle :string) { 
    this.comment = `comment for ${appTitle}`
    this.commentWithPrefix = stringService?stringService.withPrefix(this.comment):"no_prefix"+this.comment;
    this.commentWithSuffix = stringService?stringService.withSuffix(this.comment):this.comment+"no_suffix";
  }

  ngOnInit() {
  }

}
