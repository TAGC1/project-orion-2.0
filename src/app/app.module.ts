import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';

import { CalendarModule } from 'ion2-calendar';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularFireDatabaseModule } from '@angular/fire/database';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { PusherServiceService } from './pusher-service.service';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };







@NgModule({
  declarations: [AppComponent, ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule, 
     HttpClientModule,
     FormsModule,
    CalendarModule,
  AngularFireDatabaseModule,
SocketIoModule.forRoot(config),],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    HttpClient,
    PusherServiceService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
