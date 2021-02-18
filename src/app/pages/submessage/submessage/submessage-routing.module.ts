import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmessagePage } from './submessage.page';

const routes: Routes = [
  {
    path: '',
    component: SubmessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmessagePageRoutingModule {}
