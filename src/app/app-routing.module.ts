import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { NgModule } from '@angular/core';
import { VishnuComponent } from './vishnu/vishnu.component';
import { WeakdaysComponent } from './weakdays/weakdays.component';

const routes: Routes = [
  {
    path: '',
    component: VishnuComponent,
  },
  {
    path: 'vishnu',
    component: VishnuComponent,
  },
  {
    path: 'base',
    component: BaseComponent,
  },
  {
    path: 'week',
    component: WeakdaysComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
