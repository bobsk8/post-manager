import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRoutingModule,
    SharedModule
  ]
})
export class PostModule { }
