import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsubmessagePage } from './tsubmessage.page';

const routes: Routes = [
  {
    path: '',
    component: TsubmessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsubmessagePageRoutingModule {}
