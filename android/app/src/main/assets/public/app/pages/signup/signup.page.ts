import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { authService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string = ""
  password: string = ""
  

  constructor(

    private authService: authService,
  private alert: AlertController,
  private router: Router,
  public afAuth: AngularFireAuth,
  
  ) { }

  ngOnInit() {
  }

  async signupUser(){
    const {email, password,} = this
    
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password )
      console.log(res)
      this.showAlert("Welcome to Schlass!", "Before we start we need more information")
      this.router.navigate(['../profile'])
      
    }
    catch(error){
      console.dir(error)
      this.showAlert("Something went wrong", error.message)
    }
  }

  async showAlert(header: string, message: string ){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })

    await (await alert).present()

  }

  
}
