import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user.model';

@Injectable()
export class ApiService {
  private userUrl: string = '/api/users';
  private loggedIn: boolean = false;
  
  constructor(private http: Http) {}


  createUser(user: User): Observable<User> {

    return this.http.post(this.userUrl, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getUserByName(name: string){

    return this.http.get(`${this.userUrl}/${name}`)
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.userUrl}/login`, { username, password })
      .retry(2)
      .map(res => res.json())
      .do(res => {
        if (res.token) {
          localStorage.setItem('auth_token', res.token);
          this.loggedIn = true;
        }
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }
}
