import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
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

  private url = environment.apiEndPoint;
  constructor(
    private http: HttpClient
  ) { }

  save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}/api/employees`, employee, httpOptions)
      .pipe(
        catchError(err => {
          console.log('save error: ', err);
          return throwError(err);
        })
      );
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}/api/employees/${employee.id}`, employee, httpOptions)
      .pipe(
        catchError(err => {
          console.log('save error: ', err);
          return throwError(err);
        })
      );
  }

  delete(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.url}/api/employees/${id}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('delete error: ', err);
          return throwError(err);
        })
      );
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/api/employees`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getAll error: ', err);
          return throwError(err);
        })
      );
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/api/employees/${id}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('getAll error: ', err);
          return throwError(err);
        })
      );
  }
}
