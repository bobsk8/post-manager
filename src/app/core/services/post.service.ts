import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Post } from 'src/app/models/post';
import { EmployeeService } from './employee.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = environment.apiEndPoint;
  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService
  ) { }

  save(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.url}/api/posts`, post, httpOptions)
      .pipe(
        catchError(err => {
          console.log('login error: ', err);
          return throwError(err);
        })
      );
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/api/posts`, httpOptions)
      .pipe(
        map(posts => this.setUsername(posts)),
        catchError(err => {
          console.log('login error: ', err);
          return throwError(err);
        })
      );
  }

  // In a real API using database the relationship will carry out this association
  private setUsername(posts: Post[]): Post[] {
    posts.map(p => this.employeeService.getById(p.employeeId).subscribe(e => p.employee = e));
    return posts;
  }
}
