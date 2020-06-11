import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/app/models/post';
import { Employee } from 'src/app/models/employee';

declare var $: any;
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[];
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  formatInfo(employee: Employee): string {
    if (!employee) {
      return '';
    }
    return `
    Name: ${employee.name}, 
    Username: @${employee.username}, 
    Phone: ${employee.phone}, 
    Role: ${employee.role}`;
  }

}
