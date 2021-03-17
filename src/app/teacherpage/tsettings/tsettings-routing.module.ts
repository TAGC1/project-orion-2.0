import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsettingsPage } from './tsettings.page';

const routes: Routes = [
  {
    path: '',
    component: TsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsettingsPageRoutingModule {}
