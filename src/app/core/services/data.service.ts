import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  // Post Interceptor
  private post(requestInfo: RequestInfo): void {
    const collectionName = requestInfo.collectionName;
    if (collectionName === 'posts') {
      this.setEmployeerIdInPost(requestInfo);
    } else if (collectionName === 'employees') {
      this.testSamePhonePost(requestInfo);
    }
  }

  // Put Interceptor
  private put(requestInfo: RequestInfo): void {
    const collectionName = requestInfo.collectionName;
    if (collectionName === 'employees') {
      this.testSamePhonePut(requestInfo);
    }
  }

  // Set Employer currently logged
  // For testing always use id 1
  private setEmployeerIdInPost(requestInfo: RequestInfo): void {
    const data = requestInfo.utils.getJsonBody(requestInfo.req);
    data.employeeId = 5;
  }

  // Verify same Phone when create
  private testSamePhonePost(requestInfo: RequestInfo): void {
    const data = requestInfo.utils.getJsonBody(requestInfo.req);
    const collection = requestInfo.collection;
    const test = collection.some(c => c.pnone === data.pnone);
    if (test) {
      throw new Error('Phone already exists');
    }
  }

  // Verify same username when update
  private testSamePhonePut(requestInfo: RequestInfo): void {
    const data = requestInfo.utils.getJsonBody(requestInfo.req);
    const collection = requestInfo.collection;
    const test = collection.some(c => (c.phone === data.phone && c.id !== data.id));
    if (test) {
      throw new Error('User already exists');
    }
  }

  // Create Fake DB
  createDb() {
    const posts = [
      {
        id: 1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        employeeId: 1
      },
      {
        id: 2,
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        employeeId: 2
      },
      {
        id: 3,
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        employeeId: 3
      },
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
