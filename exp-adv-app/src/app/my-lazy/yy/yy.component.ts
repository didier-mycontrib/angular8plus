import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/service/global.service';
import { ForMyLazyService } from '../common/service/for-my-lazy.service';

@Component({
  selector: 'app-yy',
  templateUrl: './yy.component.html',
  styleUrls: ['./yy.component.scss']
})
export class YyComponent implements OnInit {

  constructor(public globalService: GlobalService
    ,public forMyLazyService : ForMyLazyService) { }

  ngOnInit(): void {
  }

}
