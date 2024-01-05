import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { DaterangecontrolButtonsComponent } from './daterangecontrol-buttons/daterangecontrol-buttons.component';
import {IndividualDatesComponent} from './individual-dates/individual-dates.component'
import { MonthlyComponent } from './monthly/monthly.component';
import { NgModule } from '@angular/core';
import { SemiMonthlyComponent } from './semi-monthly/semi-monthly.component';
import { SemiWeekdaysComponent } from './semi-weekdays/semi-weekdays.component';
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
    path: 'weekdays',
    component: WeakdaysComponent,
  },
  {
    path: 'semi-weekdays',
    component: SemiWeekdaysComponent,
  },
  {
    path: 'semi-monthly',
    component: SemiMonthlyComponent,
  },
  {
    path: '',
    component: DaterangecontrolButtonsComponent,
  },
  {
    path: 'Monthly',
    component: MonthlyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
