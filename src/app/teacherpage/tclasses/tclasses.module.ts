import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TclassesPageRoutingModule } from './tclasses-routing.module';

import { TclassesPage } from './tclasses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TclassesPageRoutingModule
  ],
  declarations: [TclassesPage]
})
export class TclassesPageModule {}
