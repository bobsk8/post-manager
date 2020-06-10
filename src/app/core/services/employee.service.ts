import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Post } from 'src/app/models/post';
import { Employee } from 'src/app/models/employee';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = environment.apiEndPoint;
  constructor(
    private http: HttpClient
  ) { }

  save(employee: Employee): Observable<Post> {
    return this.http.post<Post>(`${this.url}/api/employees`, employee, httpOptions)
      .pipe(
        catchError(err => {
          console.log('save error: ', err);
          return throwError(err);
        })
      );
  }

  getAll(): Observable<Post[]> {
    return this.http.get<any>(`${this.url}/api/employees`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getAll error: ', err);
          return throwError(err);
        })
      );
  }

}
