import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
 
@Component({
  selector: 'app-submessage',
  templateUrl: './submessage.page.html',
  styleUrls: ['./submessage.page.scss'],
})
export class SubmessagePage implements OnInit {
  message = '';
  messages = [];
  currentUser = '';
 
  constructor(private socket: Socket, private toastCtrl: ToastController) { }
 
  ngOnInit() {
    this.socket.connect();
 
    let name = `user-${new Date().getTime()}`;
    this.currentUser = name;
    
    this.socket.emit('set-name', name);
 
    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
 
    this.socket.fromEvent('message').subscribe(message => {
      console.log('New: ', message);
      this.messages.push(message);
    });
  }
 
  sendMessage() {
    this.socket.emit('send-message', { text: this.message });
    console.log('Sent:', this.message);
    this.message = '';
  }
 
  ionViewWillLeave() {
    this.socket.disconnect();
  }
 
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  }
