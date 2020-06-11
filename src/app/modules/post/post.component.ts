import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { SubSink } from 'subsink';

import { Post } from 'src/app/models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  isLoading = false;
  submitted = false;
  posts: Post[];
  postForm: FormGroup;

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.postForm = this.createForm();
    this.getPosts();
  }

  createForm(): FormGroup {
    return this.fb.group({
      description: ['', [ Validators.required, Validators.maxLength(140)]]
    });
  }

  ngSubmit(form: any): void {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const post = Object.assign(new Post(), form.value);
    this.save(post, form);
  }

  save(post: Post, form: any): void {
    this.subs.sink = this.postService.save(post)
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

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
