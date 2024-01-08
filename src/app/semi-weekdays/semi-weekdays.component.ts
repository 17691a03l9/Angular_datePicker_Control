import { Component, OnInit } from '@angular/core';

import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-semi-weekdays',
  templateUrl: './semi-weekdays.component.html',
  styleUrls: ['./semi-weekdays.component.scss']
})
export class SemiWeekdaysComponent implements OnInit {
  selectWeekDays:String=""; // Default to 1-7 Days
  selectableWeekDay:any;
  selectedDays:String=""; // Default to 1-7 Days
  selectableSemiWeekDay:any;
  handleSemiWeekDayChange(event: Date): void {
    this.selectableSemiWeekDay = event;
    console.log(this.selectableWeekDay,"selectableWeekDay")
  }
  handleWeekDayChange(event: Date): void {
    this.selectableWeekDay = event;
    console.log(this.selectableWeekDay,"selectableWeekDay")
  }
  ngOnInit(): void {}
  filterSelectableWeekDay: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    if (!this.selectWeekDays || !date) {
      return false;
    }
    // const selectedDay = +this.selectWeekDays; // Convert selectWeekDays to a number
    // console.log(selectedDay,"selectedDay")
    // const isDaySelected = this.isDay(selectedDay, date);
    // console.log(isDaySelected,"isDaySelected")

    const today = new Date();
    const daysDifference = (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    switch (this.selectWeekDays) {
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
      default:
        return false;
    }
  }
  filterSelectableSemiWeekDay: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    if (!this.selectedDays || !date) {
      return false;
    }
    // const selectedDay = +this.selectWeekDays; // Convert selectWeekDays to a number
    // console.log(selectedDay,"selectedDay")
    // const isDaySelected = this.isDay(selectedDay, date);
    // console.log(isDaySelected,"isDaySelected")

    const today = new Date();
    const daysDifference = (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    switch (this.selectedDays) {
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
          default:
        return false;
    }
  }
  private isDay(day: number, date: Date): boolean {
    return date.getDay() === day;
  }
}
