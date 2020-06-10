import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorMessageComponent } from './components/error-message/error-message.component';


@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ErrorMessageComponent]
})
export class SharedModule { }
