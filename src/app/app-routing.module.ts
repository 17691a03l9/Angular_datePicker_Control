import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component';
import {IndividualDatesComponent} from './individual-dates/individual-dates.component'
import { NgModule } from '@angular/core';
import { VishnuComponent } from './vishnu/vishnu.component';
import { WeakdaysComponent } from './weakdays/weakdays.component';

const routes: Routes = [
  {
    path: 'vishnu',
    component: VishnuComponent,
  },
  {
    path: 'individual',
    component: IndividualDatesComponent,
  },
  {
    path: 'base',
    component: BaseComponent,
  },
  {
    path: '',
    component: WeakdaysComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
