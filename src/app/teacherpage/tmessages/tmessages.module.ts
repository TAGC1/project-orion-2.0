import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmessagesPageRoutingModule } from './tmessages-routing.module';

import { TmessagesPage } from './tmessages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmessagesPageRoutingModule
  ],
  declarations: [TmessagesPage]
})
export class TmessagesPageModule {}
