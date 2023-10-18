import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private apiService: ApiService) {}

  sendEmailsForProcessing(emails: any[]): Observable<any> {
    return this.apiService.post(
      eval('`' + environment.baseUrl + environment.verifyEmailsApi + '`'),
      { emails }
    );
  }
}
