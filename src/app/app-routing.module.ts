import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./pages/calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'submessage',
    loadChildren: () => import('./pages/submessage/submessage/submessage.module').then( m => m.SubmessagePageModule)
  },
  {
    path: 'tcalendar',
    loadChildren: () => import('../app/teacherpage/tcalendar/tcalendar.module').then( m => m.TcalendarPageModule)
  },
  {
    path: 'tcalendar',
    loadChildren: () => import('../app/teacherpage/tcalendar/tcalendar.module').then( m => m.TcalendarPageModule)
  },
  {
    path: 'tfeed',
    loadChildren: () => import('../app/teacherpage/tfeed/tfeed.module').then( m => m.TfeedPageModule)
  },
  {
    path: 'tmessages',
    loadChildren: () => import('../app/teacherpage/tmessages/tmessages.module').then( m => m.TmessagesPageModule)
  },
  {
    path: 'tclasses',
    loadChildren: () => import('../app/teacherpage/tclasses/tclasses.module').then( m => m.TclassesPageModule)
  },
  {
    path: 'tsettings',
    loadChildren: () => import('../app/teacherpage/tsettings/tsettings.module').then( m => m.TsettingsPageModule)
  },
  {
    path: 'tsubmessage',
    loadChildren: () => import('../app/teacherpage/tsubmessage/tsubmessage.module').then( m => m.TsubmessagePageModule)
  },
  {
    path: 'thome',
    loadChildren: () => import('./thome/thome.module').then( m => m.ThomePageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
