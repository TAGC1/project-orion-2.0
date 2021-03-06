import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  nickname = '';


  constructor
  (private socket: Socket, 
    private Router: Router,
    private nav: NavController) { }
  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.Router.navigateByUrl('/SubmessagePage', {  });
  }

  ngOnInit() {
  }

  
}
