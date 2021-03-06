import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChatService } from '../../../services/chat.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-submessage',
  templateUrl: './submessage.page.html',
  styleUrls: ['./submessage.page.scss'],
})
export class SubmessagePage implements OnInit {

  messages: Observable<any[]>;
  newMsg = '';
  content: any;

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
  }
  sendMessage() {
    this.chatService.addChatMessage(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

}
