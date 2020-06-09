import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostListComponent } from './components/post-list/post-list.component';


@NgModule({
  declarations: [PostComponent, PostListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRoutingModule,
    SharedModule
  ]
})
export class PostModule { }
