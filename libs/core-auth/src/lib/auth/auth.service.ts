import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const UrlForSignIn = 'https://mdv-auth-json-server.herokuapp.com/auth/login';
// const UrlForSignUp = 'https://mdv-auth-json-server.herokuapp.com/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  authenticate({email, password}): Observable<any> {
    return this.http.post(UrlForSignIn, {email, password});
  }
}
