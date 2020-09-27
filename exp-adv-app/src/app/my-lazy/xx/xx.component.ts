import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/service/global.service';
import { ForMyLazyService } from '../common/service/for-my-lazy.service'

@Component({
  selector: 'app-xx',
  templateUrl: './xx.component.html',
  styleUrls: ['./xx.component.scss']
})
export class XxComponent implements OnInit {

  constructor(public globalService: GlobalService,public forMyLazyService : ForMyLazyService) { }

  ngOnInit(): void {
  }

}
