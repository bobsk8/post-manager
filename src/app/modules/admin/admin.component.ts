import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private subs = new SubSink();
  employees: Employee[];
  employeeForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeForm = this.createForm();
    this.getEmployee();
  }

  createForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[\\w-_]+')]],
      phone: ['', Validators.required],
      role: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngSubmit(form: any): void {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const post = Object.assign(new Employee(), form.value);
    this.save(post, form);
  }

  save(employee: Employee, form: any): void {
    this.subs.sink = this.employeeService.save(employee)
      .subscribe(() => {
        this.clearForm(form);
        this.getEmployee();
      });
  }

  clearForm(form: any): void {
    form.form.markAsPristine();
    form.resetForm();
    this.submitted = false;
  }

  getEmployee(): void {
    this.subs.sink = this.employeeService.getAll()
      .subscribe(resp => this.employees = resp);
  }

}
