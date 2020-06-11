import { Injectable } from '@angular/core';
import { InMemoryDbService, STATUS, ResponseOptions, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  private post(requestInfo: RequestInfo) {
    const collectionName = requestInfo.collectionName;
    if (collectionName === 'posts') {
      this.setUsernameInPost(requestInfo);
    } else if (collectionName === 'employees') {
      this.testUsername(requestInfo);
    }
  }

  private setUsernameInPost(requestInfo: RequestInfo): void {
    const data = requestInfo.utils.getJsonBody(requestInfo.req);
    data.username = 'bobsk8';
  }

  private testUsername(requestInfo: RequestInfo) {
    const data = requestInfo.utils.getJsonBody(requestInfo.req);
    const collection = requestInfo.collection;
    const test = collection.some(c => c.username === data.username);
    if (test) {
      throw new Error('User already exists');
    }
  }

  createDb() {
    const posts = [
      { id: 1, description: 'Texto 1', username: 'mathilde' },
      { id: 2, description: 'Texto 2', username: 'alia' },
      { id: 3, description: 'Texto 3', username: 'freeman' },
    ];

    const employees = [
      { id: 1, username: 'mathilde', phone: '992312312', role: 'CEO', name: 'Mathilde Saylors' },
      { id: 2, username: 'alia', phone: '986733455', role: 'Designer', name: 'Alia Ginder' },
      { id: 3, username: 'freeman', phone: '971232343', role: 'Developer', name: 'Freeman Litten' },
      { id: 4, username: 'piedad', phone: '992362345', role: 'Sales', name: 'Piedad Dewald' },
      { id: 5, username: 'bobsk8', phone: '912342303', role: 'PR', name: 'Rodrigo Prado' },
    ];

    return { posts, employees };

  }
}
