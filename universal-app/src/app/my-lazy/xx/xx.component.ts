import { Component, OnInit } from '@angular/core';
import { ForMyLazyService } from '../common/service/for-my-lazy.service'

@Component({
  selector: 'app-xx',
  templateUrl: './xx.component.html',
  styleUrls: ['./xx.component.scss']
})
export class XxComponent implements OnInit {

  constructor(public forMyLazyService : ForMyLazyService) { }

  ngOnInit(): void {
  }

}
