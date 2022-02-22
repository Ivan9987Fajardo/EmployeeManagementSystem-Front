import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent{
  model: NgbDateStruct;
  disabled = true;

  constructor(calendar: NgbCalendar) {
    this.model = calendar.getToday();
  }

}
