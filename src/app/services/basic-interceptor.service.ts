import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpBasicInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('remoteUser:remoteSecret')
            }
        });
        return next.handle(request).pipe(
            tap({
                // Succeeds when there is a response; ignore other events
                next: (event) => {
                    console.log(event.type);
                },
                // Operation failed; error is an HttpErrorResponse
                error: (error) => {
                    console.log(error);
                }
            }),
            // Log when response observable either completes or errors
            finalize(() => {
                console.log('In finalize');
            })
        );
    }
}
