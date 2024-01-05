import { Component, OnInit } from '@angular/core';

import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit{
  startDay: any;
  lastDayOfMonth: any;

  constructor(){}
  ngOnInit(): void {
  console.log(this.lastDayOfMonth,"lastDayOfMonth")
  }
  rangeselectedDates: string = ""; // Default to 1-7 Days
  rangeselectedPeriodDates: string = ""; // Default to 1-7 Days
  rangeselectedDate: any;
  rangeselectedPeriodDate: any;
  handlerangeDateChange(event: Date): void {
    this.rangeselectedDate = event;
    console.log(this.rangeselectedDate, "selectedDate");
  }
  handlerangeDatePeriodChange(event: Date): void {
    this.rangeselectedPeriodDate = event;
    console.log(this.rangeselectedPeriodDate, "selectedDate");
  }
  isDaterangeSelectable: DateFilterFn<Date | null> = (date: Date | null):any => {
    if (!this.rangeselectedDates || !date) {
      return false;
    }

    const rangeParts = this.rangeselectedDates.split(' ');
    const startDay = parseInt(rangeParts[0]);
    // const endDay = parseInt(rangeParts[3]);
  
    const currentDate = new Date();
    // const currentMonth = currentDate.getMonth(); // January is 0 in JavaScript
    const daysDifference = (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  // console.log(currentMonth === startDay && date.getDate() === 20,(currentMonth + 1) % 12 === endDay && date.getDate() === 5,"currentMonth")
  switch (this.rangeselectedDates) {
    case '25 of the current Month':
      return [startDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
    case '26 of the current Month':
      return [startDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
    case '1 of the Following Month':
      return [startDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
    case '2 of the Following Month':
      return [startDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
      default:
        return false;
  }
  };
  isDatePeriodrangeSelectable: DateFilterFn<Date | null> = (date: Date | null):any => {
    if (!this.rangeselectedPeriodDates || !date) {
      return false;
    }

    const rangeParts = this.rangeselectedPeriodDates.split('-');
    const startDay:any = rangeParts[1];
 
    console.log(this.lastDayOfMonth,"LastDate")
    const currentDate = new Date();
    const daysDifference = (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    console.log(lastDayOfMonth.getDate())

   if(this.rangeselectedPeriodDates){
    if(startDay === "LDM"){
      return [lastDayOfMonth.getDate()].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
    }else{
      return [startDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;

    }
   }
  // switch (this.rangeselectedPeriodDates) {
  //   case '1-LDM':
  //     return [startDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
  //     default:
  //       return false;
  // }
  };
}
