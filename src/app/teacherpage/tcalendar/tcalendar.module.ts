import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TcalendarPageRoutingModule } from './tcalendar-routing.module';

import { TcalendarPage } from './tcalendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TcalendarPageRoutingModule
  ],
  declarations: [TcalendarPage]
})
export class TcalendarPageModule {}
