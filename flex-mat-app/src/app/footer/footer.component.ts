import { Component, OnInit } from '@angular/core';
import { SettingService } from '../common/service/setting.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public settingService: SettingService) { }

  ngOnInit() {
  }

}
