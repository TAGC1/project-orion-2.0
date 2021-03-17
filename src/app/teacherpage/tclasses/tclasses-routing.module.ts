import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TclassesPage } from './tclasses.page';

const routes: Routes = [
  {
    path: '',
    component: TclassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TclassesPageRoutingModule {}
