import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcalendarPage } from './tcalendar.page';

const routes: Routes = [
  {
    path: '',
    component: TcalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcalendarPageRoutingModule {}
