import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Profile } from 'src/models/profile';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  profileData: AngularFireObject<Profile>

  constructor(private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public toastController: ToastController) { }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(async data => {
      if(data.email && data.uid){
          const toast = await this.toastController.create({
            message: `Welcome, ${data.email} `,
            duration: 4000
          });
          toast.present();

          this.profileData = this.afDatabase.object(`profile/${data.uid}`)
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
