import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(path, {
        params,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(path, JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(path, JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .pipe(catchError(this.formatErrors));
  }

  delete(path: string, body: Object = {}): Observable<any> {
    return this.http
      .delete(path, {
        body: body,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .pipe(catchError(this.formatErrors));
  }
}
