import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/service/auth.service';
import { OnlineOfflineService } from '../common/service/online-offline.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private onLine:boolean;

  constructor(public authService: AuthService,
              private onlineOfflineService: OnlineOfflineService) {}

  ngOnInit() {
    this.onlineOfflineService.connectionChanged
        .subscribe( (onLine)=>{this.onLine = onLine;})
  }

}
