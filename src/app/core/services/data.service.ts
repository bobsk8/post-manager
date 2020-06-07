import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  
  createDb() {
    let  posts =  [
     {  id:  1, text: 'Texto 1', employee: 'Rodrigo' },
     {  id:  1, text: 'Texto 2', employee: 'Lilian' },
    ];
 
    return {posts};
 
   }
}
