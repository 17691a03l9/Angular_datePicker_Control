import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-weakdays',
  templateUrl: './weakdays.component.html',
  styleUrls: ['./weakdays.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WeakdaysComponent implements OnInit{
  selectedDates:String=""; // Default to 1-7 Days
  selectedDate:any;
  selectedDays:String=""; // Default to 1-7 Days
  selectedDat:any;
  rangeselectedDates: string = ""; // Default to 1-7 Days
  rangeselectedDate: any;
  Date: DateFilterFn<Date | null> = (date: Date | null) => true;

  constructor(){
  }
  handlerangeDateChange(event: Date): void {
    this.rangeselectedDate = event;
    console.log(this.rangeselectedDate, "selectedDate");
  }
  handleDateChange(event: Date): void {
    this.selectedDate = event;
    console.log(this.selectedDate,"selectedDate")
  }
  handleChange(event: Date): void {
    this.selectedDat = event;
    console.log(this.selectedDate,"selectedDate")
  }

  ngOnInit(): void {
    
  }


  isDateSelectable: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    if (!this.selectedDates || !date) {
      return false;
    }
    // const selectedDay = +this.selectedDates; // Convert selectedDates to a number
    // console.log(selectedDay,"selectedDay")
    // const isDaySelected = this.isDay(selectedDay, date);
    // console.log(isDaySelected,"isDaySelected")

    const today = new Date();
    const daysDifference = (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    switch (this.selectedDates) {
      case '0':
        return this.isDay(0, date) && daysDifference >= 0 && daysDifference <= 21;
      case '1':
        return this.isDay(1, date) && daysDifference >= 0 && daysDifference <= 21;
      case '2':
        return this.isDay(2, date) && daysDifference >= 0 && daysDifference <= 21;
      case '3':
        return this.isDay(3, date) && daysDifference >= 0 && daysDifference <= 21;
      case '4':
        return this.isDay(4, date) && daysDifference >= 0 && daysDifference <= 21;
      case '5':
        return this.isDay(5, date) && daysDifference >= 0 && daysDifference <= 21;
      case '6':
        return this.isDay(6, date) && daysDifference >= 0 && daysDifference <= 21;
      default:
        return false;
    }
  }
  isDateSelect: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    if (!this.selectedDays || !date) {
      return false;
    }
    // const selectedDay = +this.selectedDates; // Convert selectedDates to a number
    // console.log(selectedDay,"selectedDay")
    // const isDaySelected = this.isDay(selectedDay, date);
    // console.log(isDaySelected,"isDaySelected")

    const today = new Date();
    const daysDifference = (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    switch (this.selectedDays) {
      case '0':
        return this.isDay(0, date) && daysDifference >= -8 && daysDifference < -1;
      case '00':
        return this.isDay(0, date) && daysDifference > -1 && daysDifference <= 6;
      case '000':
        return this.isDay(0, date) && daysDifference >= 6 && daysDifference <= 13;
      case '1':
        return this.isDay(1, date) && daysDifference >= -8 && daysDifference < -1;
      case '11':
        return this.isDay(1, date) && daysDifference > -1 && daysDifference <= 6;
      case '111':
        return this.isDay(1, date) && daysDifference >= 6 && daysDifference <= 13;
      case '2':
        return this.isDay(2, date) && daysDifference >= -8 && daysDifference < -1;
      case '22':
        return this.isDay(2, date) && daysDifference >= -1 && daysDifference <= 6;
      case '222':
        return this.isDay(2, date) && daysDifference >= 6 && daysDifference <= 13;
      case '3':
        return this.isDay(3, date) && daysDifference >= -8 && daysDifference < -1;
      case '33':
        return this.isDay(3, date) && daysDifference >= -1 && daysDifference <= 6;
      case '333':
        return this.isDay(3, date) && daysDifference >= 6 && daysDifference <= 13;
      case '4':
        return this.isDay(4, date) && daysDifference >= -8 && daysDifference < -1;
      case '44':
        return this.isDay(4, date) && daysDifference >= -1 && daysDifference <= 6;
      case '444':
        return this.isDay(4, date) && daysDifference >= 6 && daysDifference <= 13;
      case '5':
        return this.isDay(5, date) && daysDifference >= -8 && daysDifference < -1;
      case '55':
        return this.isDay(5, date) && daysDifference >= -1 && daysDifference <= 6;
      case '555':
        return this.isDay(5, date) && daysDifference >= 6 && daysDifference <= 13;
      case '6':
        return this.isDay(6, date) && daysDifference >= -8 && daysDifference < -1;
      case '66':
        return this.isDay(6, date) && daysDifference >= -1 && daysDifference <= 6;
      case '666':
        return this.isDay(6, date) && daysDifference >= 6 && daysDifference <= 13;
          default:
        return false;
    }
  }
  private isDay(day: number, date: Date): boolean {
    return date.getDay() === day;
  }
  isDaterangeSelectable: DateFilterFn<Date | null> = (date: Date | null):any => {
    if (!this.rangeselectedDates || !date) {
      return false;
    }

    const rangeParts = this.rangeselectedDates.split('-');
    const startDay = parseInt(rangeParts[1]);
    const endDay = parseInt(rangeParts[3]);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // January is 0 in JavaScript
    const daysDifference = (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

  console.log(currentMonth === startDay && date.getDate() === 20,(currentMonth + 1) % 12 === endDay && date.getDate() === 5,"currentMonth")
  switch (this.rangeselectedDates) {
    case '5-20-21-5':
      return [startDay, endDay].indexOf(+date.getDate()) !== -1 && daysDifference>=0 && daysDifference<=31;
    case '6-20-21-LDM':
      return [startDay, endDay].indexOf(+date.getDate()) !== -1;
      default:
        return false;
  }
  };
}
