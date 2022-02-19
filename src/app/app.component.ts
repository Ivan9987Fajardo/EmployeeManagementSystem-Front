import { Component, OnInit } from '@angular/core';
import { ThemePickerService } from './core/services/theme-picker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EmployeeManagementSystem-Front';

  constructor(
    private readonly _themePicker: ThemePickerService
  ) {}


  ngOnInit(): void {
      this._themePicker.loadTheme('green');
  }
}
