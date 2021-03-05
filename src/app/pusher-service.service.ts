import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherServiceService {
  presenceChannel;

  constructor(public http: HttpClient) {

    let pusher = new Pusher('88d0654f5aef67a2c715', {
      authEndpoint: 'http://localhost:3128/pusher/auth',
      cluster: 'us3'
    });

    this.presenceChannel = pusher.subscribe('presence-channel');
  }

  public init() {
    return this.presenceChannel;
  }
  
}
