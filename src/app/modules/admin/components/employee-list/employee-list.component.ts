import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  @Input() employees: Employee[];
  @Output() editEmployee: EventEmitter<Employee> = new EventEmitter();
  @Output() deleteEmployee: EventEmitter<Employee> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  edit(employee: Employee): void {
    this.editEmployee.emit(employee);
  }

  delete(employee: Employee): void {
    this.deleteEmployee.emit(employee);
  }

  ngOnDestroy(): void {
    this.editEmployee.unsubscribe();
    this.deleteEmployee.unsubscribe();
  }
}
