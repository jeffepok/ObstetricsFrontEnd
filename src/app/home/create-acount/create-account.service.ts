import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface UserDetails{
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  phone: string;
  password: string;
  re_password: string;
}

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http: HttpClient) {}
  private RegistrationUrl = "http://127.0.0.1:8000/auth/users/";

  createAccount(userDetails: UserDetails): Observable<UserDetails>{
    return this.http.post<UserDetails>(this.RegistrationUrl, userDetails)

  }

}
