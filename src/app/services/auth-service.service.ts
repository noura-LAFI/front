import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginReq } from '../core/UserLoginReq';
import { User } from '../core/User';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
 
  private host = environment.baseUrl;
  public loggedUser!: string;
  public isloggedIn: Boolean = false;

  constructor(private httpCl: HttpClient) {}
   logout(): Observable<any> {
    return this.httpCl.post( this.host + '/auth/logout' ,{
      observe: 'response'})
      ;}
  
  signIn(userLogin: UserLoginReq): Observable<any> {
    return this.httpCl.post(this.host + '/auth/login', userLogin, {
      observe: 'response',
    });
  }
  signUp(userSignup: User): Observable<any> {
    return this.httpCl.post(`${this.host}/auth/register`, userSignup, {
      responseType: 'text',
    });
  }
}
