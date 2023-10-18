import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiResponse: any[] = [];
  displayedColumns: string[] = ['column1', 'column2']; // Add more column names as needed
  emails: string = '';
  emailsArray: any[] = [];

  constructor(private appService: AppService) {}

  sendRequest() {
    console.log(this.emails);
    this.emailsArray = this.emails.split(',').map((el) => el.trim());
    this.appService.sendEmailsForProcessing(this.emailsArray).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
