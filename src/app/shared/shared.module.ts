import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [ErrorMessageComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ErrorMessageComponent, SpinnerComponent]
})
export class SharedModule { }
