import { Component, OnInit } from '@angular/core';

import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-weakdays',
  templateUrl: './weakdays.component.html',
  styleUrls: ['./weakdays.component.scss']
})
export class WeakdaysComponent implements OnInit{
  selectedDates: string = "1-7"; // Default to 1-7 Days
  selectedDate:any;
  dateFilter: DateFilterFn<Date | null> = (date: Date | null) => true;

  constructor(){}
  updateDates() {
    // Update the date range based on the selected option
    const today = new Date();
    const rangeParts = this.selectedDates.split('-');
    console.log(rangeParts,"rangeParts")
    const startDays = parseInt(rangeParts[0]);
    const endDays = parseInt(rangeParts[1]);
    console.log(endDays,"endDays")
    console.log(startDays,"startDays")

    // this.startDate = new Date(today.setDate(startDays));
    // console.log(this.startDate,"startDate")

    // this.endDate = new Date(today.setDate(endDays));
    // console.log(this.endDate,"endDate")

    // this.setminDate();
    // this.setmaxDate();
   }
  ngOnInit(): void {
    
  }

  setNewFilter(isWeekend: boolean): void {
    this.dateFilter = isWeekend
      ? (date: Date | null) => this.isWeekend(date)
      : (date: Date | null) => true;
  }

  isWeekend: DateFilterFn<Date | null> = (date: Date | null) => {
    if (!date) {
      return false;
    }
    console.log(date,"date")
    const day = date.getDay();
    console.log(day,"day")

    const week = this.selectedDate.getDay();
    console.log(week,"week")

    return day=== week

  };

}
// import { Component, OnInit } from '@angular/core';

// import { DateFilterFn } from '@angular/material/datepicker';

// @Component({
//   selector: 'app-weakdays',
//   templateUrl: './weakdays.component.html',
//   styleUrls: ['./weakdays.component.scss'],
// })
// export class WeakdaysComponent implements OnInit {
//   selectedDate: any;
//   selectedDay: number | null = null;
//   dateFilter: DateFilterFn<Date | null> = () => true;

//   constructor() {}

//   ngOnInit(): void {}

//   setNewFilter(): void {
//     if (this.selectedDay !== null) {
//       this.dateFilter = (date: Date | null) => this.isDayOfWeek(date, this.selectedDay);
//     } else {
//       // Reset the filter if no day is selected
//       this.dateFilter = () => true;
//     }
//   }

//   isDayOfWeek(date: Date | null, selectedDay: number | null): boolean {
//     if (!date || selectedDay === null) {
//       return false;
//     }

//     // Sunday is represented as 0 in JavaScript, so add 1 to match the selectedDay values
//     const dayOfWeek = (date.getDay() + 1) % 7;

//     return dayOfWeek === selectedDay;
//   }
// }

