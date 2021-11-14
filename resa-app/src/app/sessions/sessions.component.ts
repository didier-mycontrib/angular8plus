import { Component, OnInit } from '@angular/core';
import { Session } from '../common/data/session';
import { SessionService } from '../common/service/session.service';
import { UserSessionService } from '../common/service/user-session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  listeSessions : Session[] = []; //à choisir dans liste déroulante.
  selectedSessionId:string="none";

  constructor(private _sessionService : SessionService,
              private _userSessionService :UserSessionService) { 
                this.selectedSessionId = this._userSessionService.bsSelectedSessionId$.value;
              }

  onSelectOnOffSession(sessionId:string){
    if(this.selectedSessionId == sessionId){
      this.selectedSessionId="none"
    }else{
      this.selectedSessionId = sessionId;
    }
    this._userSessionService.setSelectedSessionId(this.selectedSessionId);
    console.log("selected sessionId="+this.selectedSessionId);
  }

  ngOnInit(): void {
    this._sessionService.getAllSessions$()
         .subscribe({
            next: (tabSess : Session[])=>{ this.listeSessions = tabSess; },
            error: (err) => { console.log("error:"+err)}
         });
  }

}
