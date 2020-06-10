import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private subs = new SubSink();

  isLoading = false;
  employees: Employee[];
  employeeForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private modalService: ModalService
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
        this.modalService.openSuccessModal();
      });
  }

  clearForm(form: any): void {
    form.form.markAsPristine();
    form.resetForm();
    this.submitted = false;
  }

  getEmployee(): void {
    this.isLoading = true;
    this.subs.sink = this.employeeService.getAll()
      .subscribe(resp => {
        this.employees = resp;
        this.isLoading = false;
      }, erro => this.isLoading = false);
  }

}
