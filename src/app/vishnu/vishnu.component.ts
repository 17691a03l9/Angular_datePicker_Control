// import { Component, OnInit } from '@angular/core';
// import { MatCalendarCellCssClasses, MatDatepickerInputEvent } from '@angular/material/datepicker';

// @Component({
//   selector: 'app-vishnu',
//   templateUrl: './vishnu.component.html',
//   styleUrls: ['./vishnu.component.scss'],
// })
// export class VishnuComponent implements OnInit {

//   selectedDate:any;

//   startDate!: Date;
//   endDate!: Date;

//   mindate!: Date;
//   maxdate!: Date;

//   constructor() {
//     this.mindate = new Date(); // Today
//     this.maxdate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
//    }

//    submit(){
//     console.log(this.startDate,'start data')
//     console.log(this.endDate,'end data')
//    }

//    setminDate(){
//     this.mindate=this.startDate;
//    }

//    setmaxDate(){
//     this.maxdate=this.endDate;
//    }

//   ngOnInit(): void {
//   }

//   onDateSelected(event: MatDatepickerInputEvent<Date>): void {
//     this.selectedDate = event.value;
//   }

//   dateClass = (date: Date): MatCalendarCellCssClasses => {
//     if (!this.selectedDate) {
//       return '';
//     }

//     const isSameWeek = this.isSameWeek(date, this.selectedDate);

//     return isSameWeek ? 'enable-date' : 'disable-date';
//   };

//   private isSameWeek(date1: Date, date2: Date): boolean {
//     const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
//     const diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
    
//     return diffDays < 7 && date1.getDay() === date2.getDay();
//   }

// }
import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses, MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-vishnu',
  templateUrl: './vishnu.component.html',
  styleUrls: ['./vishnu.component.scss'],
})
export class VishnuComponent implements OnInit {

  selectedDate: any;
  selectedRange: string = "1-7"; // Default to 1-7 Days

  startDate!: Date;
  endDate!: Date;

  mindate!: Date;
  maxdate!: Date;

  constructor() {
    this.mindate = new Date(); // Today
    this.maxdate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
   }

   submit(){
    console.log(this.startDate, 'start date');
    console.log(this.endDate, 'end date');
   }

   setminDate(){
    this.mindate = this.startDate;
   }

   setmaxDate(){
    this.maxdate = this.endDate;
   }

   updateDateRange() {
    // Update the date range based on the selected option
    const today = new Date();
    const rangeParts = this.selectedRange.split('-');
    console.log(rangeParts,"rangeParts")
    const startDays = parseInt(rangeParts[0]);
    const endDays = parseInt(rangeParts[1]);
    console.log(endDays,"endDays")
    console.log(startDays,"startDays")

    this.startDate = new Date(today.setDate(startDays));
    console.log(this.startDate,"startDate")

    this.endDate = new Date(today.setDate(endDays));
    console.log(this.endDate,"endDate")

    this.setminDate();
    this.setmaxDate();
   }

  ngOnInit(): void {
  }

  onDateSelected(event: MatDatepickerInputEvent<Date>): void {
    this.selectedDate = event.value;
  }

  dateClass = (date: Date): MatCalendarCellCssClasses => {
    if (!this.startDate || !this.endDate) {
      return '';
    }

    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const endOfYear = new Date(date.getFullYear(), 11, 31);

    const isWithinSelectedRange = date >= this.startDate && date <= this.endDate;
    const isWithinYearRange = date >= startOfYear && date <= endOfYear;

    return isWithinSelectedRange && isWithinYearRange ? 'enable-date' : 'disable-date';
  };


  private isSameWeek(date1: Date, date2: Date): boolean {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
    
    return diffDays < 7 && date1.getDay() === date2.getDay();
  }
}
