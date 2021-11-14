import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../common/service/user-session.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public userSessionService :UserSessionService) { }

  ngOnInit(): void {
  }

}
