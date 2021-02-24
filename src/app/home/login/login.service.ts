import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IonItemDivider } from '@ionic/angular';

export interface LoginDetails{
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  //put in the server endpoints here 
  private loginUrl = "http://127.0.0.1:8000/auth/token/login";
  private getUserUrl = "http://127.0.0.1:8000/auth/users/me";
  
  //login with user credentials that is email and password
  login(loginDetails: LoginDetails): Observable<LoginDetails>{
    return this.http.post<LoginDetails>(this.loginUrl, loginDetails)
  }
  //get user details with token
  getUser(token: string) {
    return this.http.get(this.getUserUrl, {headers: {Authorization: "Token " + token}})
  }
}
