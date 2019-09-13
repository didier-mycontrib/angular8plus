import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit() {
  }

}
