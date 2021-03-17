import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TfeedPage } from './tfeed.page';

const routes: Routes = [
  {
    path: '',
    component: TfeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TfeedPageRoutingModule {}
