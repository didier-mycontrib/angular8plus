import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineOfflineService {
  public connectionChanged = new BehaviorSubject<boolean>(window.navigator.onLine);

  
  get isOnline() {
    return window.navigator.onLine;
  }

  constructor() {
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
  }

  private updateOnlineStatus() {
    console.log("onLine="+window.navigator.onLine);
    this.connectionChanged.next(window.navigator.onLine);
  }
}
