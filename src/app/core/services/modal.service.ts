import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  openSuccessModal(): void {
    $('#successModal').modal('show').on('shown.bs.modal', () => {
      $('#submit').trigger('focus');
    });
  }
}
