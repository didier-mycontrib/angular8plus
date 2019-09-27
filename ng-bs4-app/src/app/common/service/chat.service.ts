import { Injectable } from '@angular/core';
import * as sio from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url : string = 'http://localhost:8383';
  //https://github.com/didier-mycontrib/tp_node_js (chat-socket-io)
  
  private socket; 

  constructor() { 
    this.socket = sio(this.url);
  }

  public sendMessage(message:string,eventName:string="message") {
    this.socket.emit(eventName, message);
  }

  public getMessagesObservable(eventName:string="message") : Observable<any>{
    return Observable.create((observer) => {
        this.socket.on(eventName, (message) => {
            observer.next(message);
        });
    });
}

}



