import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class AdminComponent implements OnInit, OnDestroy {
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
      id: ['', ],
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

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  edit(employee: Employee): void {
    this.employeeForm.setValue(employee);
  }

  delete(employee: Employee): void {
    if (confirm(`Are you sure you will remove the user: ${employee.username}?`)) {
      this.removeEmployee(employee.id);
    }
  }

  removeEmployee(id: number): void {
    this.isLoading = true;
    this.employeeService.delete(id)
    .subscribe(() => {
      this.getEmployee();
      this.isLoading = false;
    }, error => this.isLoading = false);
  }

}
