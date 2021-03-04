import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

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


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

}
