import { Component, OnInit } from '@angular/core';
import { Reservation } from '../common/data/reservation';
import { ReservationService } from '../common/service/reservation.service';
import { UserSessionService } from '../common/service/user-session.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  customerId :string|null=null;
  selectedSessionId :string|null=null;
  reservation : Reservation = new Reservation();

  constructor(private _userSessionService :UserSessionService,
              private _reservationService :ReservationService) { 
                this.customerId = this._userSessionService.bsCustomerId$.value;
                this.selectedSessionId = this._userSessionService.bsSelectedSessionId$.value;
              }

  ngOnInit(): void {
  }

  onResa(){
    
  }

}
