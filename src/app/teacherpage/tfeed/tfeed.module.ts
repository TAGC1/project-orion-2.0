import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TfeedPageRoutingModule } from './tfeed-routing.module';

import { TfeedPage } from './tfeed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TfeedPageRoutingModule
  ],
  declarations: [TfeedPage]
})
export class TfeedPageModule {}
