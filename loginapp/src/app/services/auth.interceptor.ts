import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginService:LoginService){
            
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        console.log("interceptor working....");
        
        let newReq=req;
        let token=this.loginService.getToken();
        console.log("INTERCEPTOR................................",token);
        if(token){
            req = req.clone({
                setHeaders: {
                  'Content-Type' : 'application/json; charset=utf-8',
                  'Accept'       : 'application/json',
                  'Authorization': `Bearer ${this.loginService.getToken()}`,
                },
              });
        }
       
      
          return next.handle(req);
    }

}