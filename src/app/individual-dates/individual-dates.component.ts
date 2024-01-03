// import { Component, OnInit } from '@angular/core';

// import { DateFilterFn } from '@angular/material/datepicker';

// @Component({
//   selector: 'app-individual-dates',
//   templateUrl: './individual-dates.component.html',
//   styleUrls: ['./individual-dates.component.scss']
// })
// export class IndividualDatesComponent implements OnInit{
//   selectedDates:String=""; // Default to 1-7 Days
//   selectedDate:any;
//   Date: DateFilterFn<Date | null> = (date: Date | null) => true;

//   constructor(){
//   }
//   handleDateChange(event: Date): void {
//     this.selectedDate = event;
//     console.log(this.selectedDate,"selectedDate")
//   }

//   ngOnInit(): void {
    
//   }


//   isDateSelectable: DateFilterFn<Date | null> = (date: Date | null): boolean => {
//     if (!this.selectedDates || !date) {
//       return false;
//     }

//     const today = new Date();
//     const rangeParts = this.selectedDates.split('-');
//     const startDay = parseInt(rangeParts[1]);
//     const endDay = parseInt(rangeParts[3]);
//    console.log(startDay,"startDay", endDay, "endDay")
//     const startDate = new Date(today.setDate(startDay));
//     const endDate = new Date(today.setDate(endDay));
//     console.log(startDate,"startDay", endDate, "endDay")

//     return date >= startDate && date <= endDate;
//   }
//   // private isDay(day: number, date: Date): boolean {
//   //   return date.getDay() === day;
//   // }
// }

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-individual-dates',
  templateUrl: './individual-dates.component.html',
  styleUrls: ['./individual-dates.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IndividualDatesComponent implements OnInit {
  selectedDates: string = ""; // Default to 1-7 Days
  selectedDate: any;

  constructor() {}

  handleDateChange(event: Date): void {
    this.selectedDate = event;
    console.log(this.selectedDate, "selectedDate");
  }

  ngOnInit(): void {}

  isDateSelectable: DateFilterFn<Date | null> = (date: Date | null):any => {
    if (!this.selectedDates || !date) {
      return false;
    }

    const rangeParts = this.selectedDates.split('-');
    const startDay = parseInt(rangeParts[1]);
    const endDay = parseInt(rangeParts[3]);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // January is 0 in JavaScript
    const daysDifference = (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  console.log(currentMonth === startDay && date.getDate() === 20,(currentMonth + 1) % 12 === endDay && date.getDate() === 5,"currentMonth")
  switch (this.selectedDates) {
    case '5-20-21-5':
      return [startDay, endDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
    case '6-20-21-LDM':
      return [startDay, endDay].indexOf(+date.getDate()) !== -1;
      default:
        return false;
  }
  };
  // dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  //   // Only highligh dates inside the month view.
  //   if (view === 'month') {
  //     const date = cellDate.getDate();
  //   console.log(date,"date")
  //     // Highlight the 1st and 20th day of each month.
  //     return date === 1 || date === 20? 'example-custom-date-class' : '';
      
  //   }

    // return '';
  // };
  dateFilter = (d: Date) => {
  };
  

}