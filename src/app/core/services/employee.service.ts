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

  public save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}/api/employees`, employee, httpOptions)
      .pipe(
        catchError(err => {
          console.log('EmployeeService save error: ', err);
          return throwError(err);
        })
      );
  }

  public update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}/api/employees/${employee.id}`, employee, httpOptions)
      .pipe(
        catchError(err => {
          console.log('EmployeeService update error: ', err);
          return throwError(err);
        })
      );
  }

  public delete(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.url}/api/employees/${id}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('EmployeeService delete error: ', err);
          return throwError(err);
        })
      );
  }

  public getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/api/employees`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('EmployeeService getAll error: ', err);
          return throwError(err);
        })
      );
  }

  public getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/api/employees/${id}`, httpOptions)
      .pipe(
        catchError(err => {
          console.log('EmployeeService getById error: ', err);
          return throwError(err);
        })
      );
  }

  public getEmployeeSession(): Employee {
    return JSON.parse(sessionStorage.getItem('loggedUser'));
  }
}
