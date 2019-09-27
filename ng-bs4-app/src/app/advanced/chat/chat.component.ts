import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/common/service/chat.service';

interface EventMessagewithPseudo{
      pseudo : string;
      message : string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  pseudo:string;//undefined by default
  pseudoSent : boolean = false;
  newMessage: string;
  messages: EventMessagewithPseudo[] = [];

  constructor(private chatService : ChatService) { }

  onSetPseudo() {
    this.chatService.sendMessage(this.pseudo,"nouveau_client");
    this.pseudoSent = true;
  }

  onSendMessage() {
    this.chatService.sendMessage(this.newMessage); //envoi du message (pour diffusion)
    //push() ajoute à la fin, unshift() ajoute au début :
    this.messages.unshift({pseudo:this.pseudo , message:this.newMessage});//affichage local du message envoyé:
    this.newMessage = '';
  }

  ngOnInit() {

    this.chatService
      .getMessagesObservable("nouveau_client")
      .subscribe((username: string) => {
        this.messages.unshift({pseudo:username , message:' a rejoint le Chat !'});
      });

    this.chatService
      .getMessagesObservable("message")
      .subscribe((evtMsgWithPseudo: any) => {
        this.messages.unshift(evtMsgWithPseudo);
      });
  }

}
