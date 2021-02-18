import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Profile } from 'src/models/profile';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public router: Router) { }

  createProfile(){
    this.afAuth.authState.subscribe(auth =>{
      this.afDatabase.object(`/profile/${auth.uid}`).set(this.profile)
      .then(() => this.router.navigate(['/home']) )

    } )


  }

  ngOnInit() {
  }

}
