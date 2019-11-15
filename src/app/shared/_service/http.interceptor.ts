import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
  })
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public spinner: NgxSpinnerService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Todo Show custom Spinner on all http request
        this.spinner.show();

        return next.handle(request)
            .pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        // Todo Hide custom Spinner on all http request
                        this.spinner.hide();
                    }
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    // Todo Hide custom Spinner on all http request
                    this.spinner.hide();
                    return throwError('Error Occured..');
                }));
    }
}
