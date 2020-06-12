import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public openSuccessModal(): void {
    $('#successModal').modal('show').on('shown.bs.modal', () => {});
  }

  public openErrorModal(message: string): void {
    $('#errorModal').modal('show').on('shown.bs.modal', () => {
      $(`<p>${message}</p>`).appendTo('#errorMessage');
    });
  }
}
