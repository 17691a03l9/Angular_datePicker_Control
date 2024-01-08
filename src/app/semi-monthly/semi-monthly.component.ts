import { Component, OnInit } from '@angular/core';

import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-semi-monthly',
  templateUrl: './semi-monthly.component.html',
  styleUrls: ['./semi-monthly.component.scss']
})
export class SemiMonthlyComponent implements OnInit {
  ngOnInit(): void {
  }
  selectPayPeriod: string = ""; // Default to 1-7 Days
  rangeselectedPayDates: string = ""; // Default to 1-7 Days
  selectablePayPeriod: any;
  rangeselectedPayDate: any;
  handlePayPeriodChange(event: Date): void {
    this.selectablePayPeriod = event;
    console.log(this.selectablePayPeriod, "selectedDate");
  }
  handlerangePayDateChange(event: Date): void {
    this.rangeselectedPayDate = event;
    console.log(this.rangeselectedPayDate, "selectedDate");
  }
  filterSelectablePayPeriod: DateFilterFn<Date | null> = (date: Date | null):any => {
    if (!this.selectPayPeriod || !date) {
      return false;
    }

    const rangeParts = this.selectPayPeriod.split('-');
    const startDay = parseInt(rangeParts[1]);
    const endDay = parseInt(rangeParts[3]);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // January is 0 in JavaScript
    const daysDifference = (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  console.log(currentMonth === startDay && date.getDate() === 20,(currentMonth + 1) % 12 === endDay && date.getDate() === 5,"currentMonth")
  switch (this.selectPayPeriod) {
    case '5-20-21-5':
      return [startDay, endDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
    case '6-20-21-5':
      return [startDay, endDay].indexOf(+date.getDate()) !== -1 && daysDifference>=31 && daysDifference<=62;
      default:
        return false;
  }
  };
  isPayDaterangeSelectable: DateFilterFn<Date | null> = (date: Date | null):any => {
    if (!this.rangeselectedPayDates || !date) {
      return false;
    }

    const rangeParts = this.rangeselectedPayDates.split('/');
    // const startDay = parseInt(rangeParts[0]);
    const endDay = parseInt(rangeParts[1]);

    const currentDate = new Date();
    // const currentMonth = currentDate.getMonth(); // January is 0 in JavaScript
    const daysDifference = (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  // console.log(currentMonth === startDay && date.getDate() === 20,(currentMonth + 1) % 12 === endDay && date.getDate() === 5,"currentMonth")
  switch (this.rangeselectedPayDates) {
    case '16/1':
      return [endDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
    case '17/2':
      return [endDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
    case '20/5':
      return [endDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
      default:
        return false;
  }
  };
}
