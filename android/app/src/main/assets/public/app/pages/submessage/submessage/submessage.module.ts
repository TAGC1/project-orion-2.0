import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmessagePageRoutingModule } from './submessage-routing.module';

import { SubmessagePage } from './submessage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmessagePageRoutingModule
  ],
  declarations: [SubmessagePage]
})
export class SubmessagePageModule {}
