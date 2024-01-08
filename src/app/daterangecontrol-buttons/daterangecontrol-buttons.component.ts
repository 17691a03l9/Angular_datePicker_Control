import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-daterangecontrol-buttons',
  templateUrl: './daterangecontrol-buttons.component.html',
  styleUrls: ['./daterangecontrol-buttons.component.scss']
})
export class DaterangecontrolButtonsComponent {
  selectedFrequency: string = ''; // Add a property to track the selected frequency
  constructor(private router: Router) {}

  showWeekly(): void {
    // this.selectedFrequency = 'weekly';
    this.router.navigate(['/weekdays']);
  }

  showSemiWeekly(): void {
    this.router.navigate(['/semi-weekdays']);

    // this.selectedFrequency = 'semi-weekly';
  }

  showMonthly(): void {
    this.router.navigate(['/Monthly']);
  }

  showSemiMonthly(): void {
    this.router.navigate(['/semi-monthly']);
  }
}
