import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './base/base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IndividualDatesComponent } from './individual-dates/individual-dates.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { VishnuComponent } from './vishnu/vishnu.component';
import { WeakdaysComponent } from './weakdays/weakdays.component';
import { SemiWeekdaysComponent } from './semi-weekdays/semi-weekdays.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { SemiMonthlyComponent } from './semi-monthly/semi-monthly.component';
import { DaterangecontrolButtonsComponent } from './daterangecontrol-buttons/daterangecontrol-buttons.component';

// import { DatepickercontrolComponent } from './datepickercontrol/datepickercontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    VishnuComponent,
    BaseComponent,
    WeakdaysComponent,
    IndividualDatesComponent,
    SemiWeekdaysComponent,
    MonthlyComponent,
    SemiMonthlyComponent,
    DaterangecontrolButtonsComponent,
    // DatepickercontrolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    // MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CommonModule,
    ReactiveFormsModule
    ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
