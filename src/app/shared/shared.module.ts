import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [ErrorMessageComponent, SpinnerComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ErrorMessageComponent, SpinnerComponent, ModalComponent]
})
export class SharedModule { }
