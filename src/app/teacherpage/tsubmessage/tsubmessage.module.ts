import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsubmessagePageRoutingModule } from './tsubmessage-routing.module';

import { TsubmessagePage } from './tsubmessage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsubmessagePageRoutingModule
  ],
  declarations: [TsubmessagePage]
})
export class TsubmessagePageModule {}
