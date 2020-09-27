import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent implements OnInit {
  renderer: string;
  constructor(@Inject(PLATFORM_ID) platformId: any) {
    this.renderer = isPlatformBrowser(platformId) ? "Browser" : "Server";
   }

  ngOnInit(): void {
  }

}
