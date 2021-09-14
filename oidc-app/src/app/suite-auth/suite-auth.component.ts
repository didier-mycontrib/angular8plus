import { Component, OnInit } from '@angular/core';
import { SessionService } from '../common/service/session.service';

@Component({
  selector: 'app-suite-auth',
  templateUrl: './suite-auth.component.html',
  styleUrls: ['./suite-auth.component.scss']
})
export class SuiteAuthComponent implements OnInit {

  constructor(public sessionService : SessionService) { }

  ngOnInit(): void {
    console.log("In SuiteAuthComponent, sessionService.username="+this.sessionService.username)
  }

}
