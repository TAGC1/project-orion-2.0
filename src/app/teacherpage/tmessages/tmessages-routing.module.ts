import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmessagesPage } from './tmessages.page';

const routes: Routes = [
  {
    path: '',
    component: TmessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmessagesPageRoutingModule {}
