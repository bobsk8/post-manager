import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Post } from 'src/app/models/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = environment.apiEndPoint;
  constructor(
    private http: HttpClient
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
    return this.http.get<any>(`${this.url}/api/posts`, httpOptions)
    .pipe(
      catchError(err => {
        console.log('login error: ', err);
        return throwError(err);
      })
    );
  }
}
