import { Component, OnInit } from '@angular/core';
import { extractErrorMessage } from '../common/util/error';
import { Reservation } from '../common/data/reservation';
import { ReservationService } from '../common/service/reservation.service';
import { UserSessionService } from '../common/service/user-session.service';
import { currentDateTimeAsString } from '../common/util/dateFormat';
import { CacheService } from '../common/service/cache.service';
import { Customer } from '../common/data/customer';
import { Session } from '../common/data/session';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  customerId :string|null=null;
  customer: Customer | null = null;
  session: Session | null = null;
  selectedSessionId :string|null=null;
  reservation : Reservation = new Reservation();
  listeReservations : Reservation[] = [];//liste des reservations du client
  lastStatus : "success"|"fail"|"" = "";
  message : string = ""

  constructor(private _userSessionService :UserSessionService,
              private _reservationService :ReservationService,
              private _cacheService : CacheService) { 
                this.customerId = this._userSessionService.bsCustomerId$.value;
                this.selectedSessionId = this._userSessionService.bsSelectedSessionId$.value;
              }

  ngOnInit(): void {
    if(this.customerId){
       this.customer = <Customer> this._cacheService.getCustomerFromCache(this.customerId);
    }
    if(this.selectedSessionId){
      this.session = <Session> this._cacheService.getSessionFromCache(this.selectedSessionId);
    }
    //...
    this.retreiveReservationsOfCustomer();
  }

  retreiveReservationsOfCustomer(): void {
    if(this.customerId != null){
      this._reservationService.getReservationsByCustomerId$(this.customerId)
          .subscribe(
            (resas)=>{this.listeReservations=resas;},
            (err)=>{console.log(err);}
          );
    }
  }

  sessionDetails(sessionId:string): string {
    let aSession = <Session> this._cacheService.getSessionFromCache(sessionId);
    let details=aSession?(aSession.title+" "+aSession.date+" "+aSession.startTime):"";
    return details;
  }

  onResa(){
    if(this.customerId && this.selectedSessionId){
      this.reservation.customer=this.customerId;
      this.reservation.session=this.selectedSessionId;
      this.reservation.datetime=currentDateTimeAsString();
      this._reservationService.postNewReservation$(this.reservation)
                .subscribe((savedReservation)=>{
                                this.lastStatus="success";
                                this.message="new reservation successfuly saved";
                                this.selectedSessionId='none';
                                this.session=null;
                                this._userSessionService.setSelectedSessionId('none'); //not 2 times same resa
                                this.retreiveReservationsOfCustomer();
                             },
                            (err)=>{console.log(err);
                                    this.lastStatus="fail";
                                    this.message = "cannot save new reservation : " + + extractErrorMessage(err)})
            
    }
  }

  lastStatusClasses(){
    return {
      success : this.lastStatus == "success" , 
      failure : this.lastStatus == "fail" 
    }
  }

}
