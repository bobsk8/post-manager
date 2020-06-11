import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from 'src/app/models/post';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';

declare var $: any;
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Output() editPost = new EventEmitter<Post>();
  @Input() posts: Post[];
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    $(document).ready(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  edit(post: Post): void {
    this.editPost.emit(post);
  }

  formatInfo(employee: Employee): string {
    if (!employee) {
      return '';
    }
    return `Name: ${employee.name}, Username: @${employee.username}, Phone: ${employee.phone}, Role: ${employee.role}`;
  }

  canEdit(id: number): boolean {
    const employeeLogged = this.employeeService.getEmployeeSession();
    return employeeLogged.id === id;
  }

}
