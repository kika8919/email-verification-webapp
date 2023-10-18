import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AppService } from './core/services/app.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiResponse: any = false;
  displayedColumns: string[] = ['email', 'isValid', 'isCatchAllEmail', 'response']; // Add more column names as needed
  emails: string = '';
  emailsArray: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any = [];
  showLoader!: boolean;

  constructor(private appService: AppService) {}

  sendRequest() {
    if (this.emails?.trim() == '') return;
    this.showLoader = true;
    this.emailsArray = this.emails.split(',').map((el) => el.trim());
    this.appService.sendEmailsForProcessing(this.emailsArray).subscribe({
      next: (data) => {
        this.showLoader = false;
        this.apiResponse = true;
        this.dataSource = new MatTableDataSource(data.emails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this.showLoader = false;
        console.log(err);
      },
    });
  }
}
