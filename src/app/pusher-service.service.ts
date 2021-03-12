import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

    @Injectable()
    export class PusherServiceService {
      presenceChannel;

      constructor(public http: HttpClient) {
        let pusher = new Pusher('PUSHER_APP_KEY', {
          authEndpoint: 'http://localhost:3128/pusher/auth',
          cluster: 'PUSHER_APP_CLUSTER'
        });

        this.presenceChannel = pusher.subscribe('presence-channel');
      }

      public init() {
        return this.presenceChannel;
      }
    }
