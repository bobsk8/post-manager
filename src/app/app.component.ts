import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-manager';

  // Create Faker logged user
  constructor() {
    sessionStorage.setItem('loggedUser',
      JSON.stringify({ id: 5, username: 'bobsk8', phone: '912342303', role: 'PR', name: 'Rodrigo Prado' }));
  }
}
