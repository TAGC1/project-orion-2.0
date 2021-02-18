import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from 'src/app/services/auth.service';
import * as firebase from 'firebase/app';
import { WelcomePage } from '../welcome/welcome.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Profile } from 'src/models/profile';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  
  profileData: Observable<any> 


  constructor( private router: Router,private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public toastController: ToastController,  ) { }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(async data => {
      if(data.email && data.uid){
          const toast = await this.toastController.create({
            message: `Welcome, ${data.email} `,
            duration: 4000
          });
          toast.present();

          this.profileData = this.afDatabase.object(`/profile/${data.uid}`).valueChanges()
    }
      else{
        const toast = await this.toastController.create({
          message: 'Could not find Authentication Details',
          duration: 4000
        });
        toast.present();


      }
    });

    
  }

  ngOnInit() {
  }
 

}
