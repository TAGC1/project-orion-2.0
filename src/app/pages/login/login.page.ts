import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { authService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';







@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
//teacher identifier string used to check against internal database
tidentifier: string = ""

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
  async tloginUser(){
    const { email, password, tidentifier } = this
    try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/'])
        this.showAlert("Welcome back!","It has been a long time!")

      } catch(err){
        console.dir(err)
        
          console.log("User was not found")
          this.showAlert("Something went wrong", err)
        
      }

  }
  async loginUser(){
    const { email, password } = this
    try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/home'])
        this.showAlert("Welcome back!","It has been a long time!")

      } catch(err){
        console.dir(err)
        
          console.log("User was not found")
          this.showAlert("Something went wrong", err)
        
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