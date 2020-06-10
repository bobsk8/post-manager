import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
