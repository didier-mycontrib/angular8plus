import { Component, OnInit } from '@angular/core';
import { SessionService } from '../common/service/session.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public sessionService : SessionService) { }

  ngOnInit(): void {
    this.sessionService.data.p1="p1_init";
  }

}
