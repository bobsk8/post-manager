import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Observable } from 'rxjs';

import { Post } from 'src/app/models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Observable<Post>;
  postForm: FormGroup;
  constructor(
    private postService: PostService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.posts = this.getPosts();
    this.postForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      text: ['', Validators.required]
    });
  }

  ngSubmit(form: any): void {
    console.log(form.value);
  }

  getPosts(): Observable<Post> {
    return this.postService.getAll();
  }

}
