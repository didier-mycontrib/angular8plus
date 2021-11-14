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

  reservation : Reservation = new Reservation();

  constructor(private _userSessionService :UserSessionService,
              private _reservationService :ReservationService) { }

  ngOnInit(): void {
  }

  onResa(){
    
  }

}
