import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DataService } from './services/data.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule
  ]
})
export class CoreModule { }
