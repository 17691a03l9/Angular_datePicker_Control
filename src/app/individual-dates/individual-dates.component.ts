import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateFilterFn, MatCalendarCellCssClasses, MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-individual-dates',
  templateUrl: './individual-dates.component.html',
  styleUrls: ['./individual-dates.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IndividualDatesComponent implements OnInit {
  ngOnInit(): void {
  }
  selectWeekDays:any;
  nextOccurrences: Date[] = [];
  remainingoccurances: Date[] = [];
  remainingdaysoccurances: any[] = [];

  private isDay(day: number, event: Date): boolean {
    return event.getDay() === day;
  }
  handleWeekDayChange(event: Date): void {
    const selectedDay = this.selectWeekDays;
    const today = new Date();
    const daysUntilNextOccurrence = (selectedDay - today.getDay() + 7) % 7; // Calculate days until next occurrence

    this.nextOccurrences = []; // Clear the array before populating with new dates
    this.remainingoccurances = []; // Clear the array before populating with new dates

    for (let i = 0; i < 3; i++) {
      const nextOccurrence = new Date(today);
      nextOccurrence.setDate(today.getDate() + daysUntilNextOccurrence + i * 7);
      this.nextOccurrences.push(nextOccurrence);
    }
    for(let i=-20;i<1000;i++){
      const nextOccurrence = new Date(today);
      nextOccurrence.setDate(today.getDate()+i);
       this.remainingoccurances.push(nextOccurrence)
    }

    // console.log(this.nextOccurrences)
    // const remainingDays = this.remainingoccurances.map(date => date.toDateString())
    console.log(this.remainingoccurances.map(date => date.toDateString()))
    // Exclude the next three occurrences
 const selectedOccurances = this.nextOccurrences.map(date => date.toDateString());

  // Filter out selected occurrences from remaining occurrences
  const remainingDays = this.remainingoccurances
    .filter(date => !selectedOccurances.includes(date.toDateString()))
    .map(date => date.toDateString());

  console.log(remainingDays);
    console.log(this.nextOccurrences.map(date => date.toDateString()));


  }

}