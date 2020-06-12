import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DataService } from './services/data.service';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
