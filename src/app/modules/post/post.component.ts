import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { SubSink } from 'subsink';
import { MentionItem } from 'fvi-angular-mentions/mention';

import { Post } from 'src/app/models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/core/services/modal.service';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  mentionItems: Array<MentionItem> = [{
    items: [],
    triggerChar: '@',
  },
  {
    items: [],
    triggerChar: '#',
  }];
  employees = [];

  isLoading = false;
  submitted = false;
  posts: Post[];
  postForm: FormGroup;

  constructor(
    private postService: PostService,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.postForm = this.createForm();
    this.getPosts();
    this.initAutoComplete();
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [, ],
      description: ['', [Validators.required, Validators.maxLength(140)]],
      employee: [, ],
      employeeId: [, ]
    });
  }

  ngSubmit(form: any): void {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const post = Object.assign(new Post(), form.value);
    if (post.id) {
      this.updatePost(post, form);
    } else {
      this.savePost(post, form);
    }
  }

  savePost(post: Post, form: any): void {
    this.subs.sink = this.postService.save(post)
      .subscribe(() => {
        this.clearForm(form);
        this.getPosts();
        this.modalService.openSuccessModal();
      });
  }

  updatePost(post: Post, form: any): void {
    this.subs.sink = this.postService.update(post)
      .subscribe(() => {
        this.clearForm(form);
        this.getPosts();
        this.modalService.openSuccessModal();
      });
  }

  clearForm(form: any): void {
    form.form.markAsPristine();
    form.resetForm();
    this.submitted = false;
  }

  getPosts(): void {
    this.isLoading = true;
    this.subs.sink = this.postService.getAll()
      .subscribe(resp => {
        this.posts = resp;
        this.isLoading = false;
      }, err => this.isLoading = false);
  }

  edit(post: Post): void {
    this.postForm.setValue(post);
  }

  private initAutoComplete(): void {
    this.subs.sink = this.employeeService.getAll()
      .subscribe(employees => {
        this.mentionItems = [
          {
            items: employees.map(e => e.username),
            triggerChar: '@',
          },
          {
            items: employees.map(e => e.phone),
            triggerChar: '#',
          }
        ];
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
