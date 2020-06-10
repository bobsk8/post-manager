import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { ModalService } from '../services/modal.service';

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(
        private modalService: ModalService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: any) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        errorMessage = error.body.error;
                    }
                    this.openErrorDialog(errorMessage);
                    return throwError(errorMessage);
                })
            );
    }

    openErrorDialog(message: any): void {
        this.modalService.openErrorModal(message);
    }

}
