import { Component, OnInit } from '@angular/core';

import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-individual-dates',
  templateUrl: './individual-dates.component.html',
  styleUrls: ['./individual-dates.component.scss']
})
export class IndividualDatesComponent implements OnInit{
  selectedDates:String=""; // Default to 1-7 Days
  selectedDate:any;
  Date: DateFilterFn<Date | null> = (date: Date | null) => true;

  constructor(){
  }
  handleDateChange(event: Date): void {
    this.selectedDate = event;
    console.log(this.selectedDate,"selectedDate")
  }

  ngOnInit(): void {
    
  }


  isDateSelectable: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    if (!this.selectedDates || !date) {
      return false;
    }

    const today = new Date();
    const rangeParts = this.selectedDates.split('-');
    const startMonth = parseInt(rangeParts[0]) - 1; // Months are 0-indexed in JavaScript
    const startDay = parseInt(rangeParts[1]);
    const endMonth = parseInt(rangeParts[2]) - 1;
    const endDay = parseInt(rangeParts[3]);
   console.log(startDay,"startDay", endDay, "endDay")
    const startDate = new Date(today.getFullYear(), startMonth, startDay);
    const endDate = new Date(today.getFullYear(), endMonth, endDay);
    console.log(startDate,"startDay", endDate, "endDay")

    return date >= startDate && date <= endDate;
  }
  private isDay(day: number, date: Date): boolean {
    return date.getDay() === day;
  }
}
