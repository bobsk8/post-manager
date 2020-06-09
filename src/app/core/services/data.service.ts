import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  private posts =  [
    {  id:  1, description: 'Texto 1', employee: 'Rodrigo' },
    {  id:  2, description: 'Texto 2', employee: 'Lilian' },
    {  id:  3, description: 'Texto 3', employee: 'Samuel' },
   ];
  constructor() { }

  createDb() {
    let posts = this.posts; 
 
    let employees = [
      { id: 1, username: 'mathilde', phone: '992312312', role: 'CEO', name: 'Mathilde Saylors' },
      { id: 2, username: 'alia', phone: '986733455', role: 'Designer', name: 'Alia Ginder' },
      { id: 3, username: 'freeman', phone: '971232343', role: 'Developer', name: 'Freeman Litten' },
      { id: 4, username: 'piedad', phone: '992362345', role: 'Sales', name: 'Piedad Dewald' },
      { id: 5, username: 'beau', phone: '912342303', role: 'PR', name: 'Beau Siegel' },
    ]

    return { posts, employees };
 
   }
}
