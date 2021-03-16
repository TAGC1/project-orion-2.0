import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PusherServiceService } from '../../pusher-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
   // this will represent a new post by a user
   post: any = {};
   // this will represent your default pusher presence channel
   presence_channel: any;
   // this will represent the username of the current user
   current_user;
   // this will online a list of users online
   users_online = {};
   // list of default posts
   post_list = [
     {
       'username': 'og',
       'content': 'Making money was the plan oooo'
     },
     {
       'username': 'daddywon',
       'content': 'You can catch me on the express'
     }
   ];
   

   

   


  constructor(
    public route: Router,
     private pusher: PusherServiceService,
     public alertCtrl: AlertController,  
     private http: HttpClient,
     public toastController: ToastController) {
    
    
    let self = this
    this.presence_channel = this.pusher.init();
    // update the list of users online
    this.presence_channel.bind('pusher:subscription_succeeded', function (members) {
      console.log(members);
      self.users_online = members.members;
      self.current_user = members.myID;
    })

    this.presence_channel.bind('new-post', function (body) {
      self.post_list.unshift(body);
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isOnline(username: string) {
    // this function is responsible for determining if a user is online or not
    if (username in this.users_online) {
      return 'online'
    } else {
      return 'offline'
    }
  }


  async submitPost() {
    let self = this;
    // make a post request to the server
    let body = {
      'username': this.current_user,
      'content': this.post.content
    }

    let toastController = this.toastController.create({
      
   });

   this.http.post('https://01e7532ee130.ngrok.io/create-post', body).subscribe(() => {
     

     });
  }

  get_users_online() {
    return Object.keys(this.users_online).length - 1;
  }
}

