import { Component, OnInit } from '@angular/core';
import { CacheService } from '../common/service/cache.service';
import { UserSessionService } from '../common/service/user-session.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  selectedSessionId="none";
  selectedSessionName="?";
  customerId:string|null=null;
  userName="?";

  constructor(private _userSessionService :UserSessionService,
              private _cacheService : CacheService) { 

                this._userSessionService.bsSelectedSessionId$.subscribe(
                  (sessionId=>{this.selectedSessionId=sessionId;
                               let selectedSession=this._cacheService.getSessionFromCache(sessionId);
                               this.selectedSessionName = selectedSession?selectedSession.title:'?';
                              })
                );

                this._userSessionService.bsCustomerId$.subscribe(
                  (customerId=>{this.customerId=customerId;
                               let currCustomer=this._cacheService.getCustomerFromCache(customerId?customerId:"?");
                               this.userName = currCustomer?currCustomer.username:'?';
                              })
                );

              }

  ngOnInit(): void {
  }

}
