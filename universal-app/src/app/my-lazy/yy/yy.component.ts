import { Component, OnInit } from '@angular/core';
import { ForMyLazyService } from '../common/service/for-my-lazy.service';

@Component({
  selector: 'app-yy',
  templateUrl: './yy.component.html',
  styleUrls: ['./yy.component.scss']
})
export class YyComponent implements OnInit {

  constructor(public forMyLazyService : ForMyLazyService) { }

  ngOnInit(): void {
  }

}
