import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()
export class ApiService {
  private userUrl: string = '/api/users';

  constructor(private http: Http, public userService: UserService) {}

  public createUser(user: User): Observable<User> {
    return this.http.post(this.userUrl, user)
      .map(user => user.json())
      .do(user => this.userService.saveUserLocally(user))
      .catch(this.handleError);
  }

  public getUserByName(name: string): Observable<any> {
    return this.http.get(`${this.userUrl}/name/${name}`)
      .map(user => user.json())
      .catch(this.handleError);
  }

  public getFriend(friend: string): Observable<any> {
    return this.http.get(`${this.userUrl}/friend/${friend}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  public login(name: string, password: string): Observable<string> {
    return this.http.post(`${this.userUrl}/login`, {name, password })
      .map(user => user.json())
      .do(user => this.userService.saveUserLocally(user))
      .catch(this.handleError);
  }

  public updateUser(user: User): Observable<any> {
    return this.http.put(`${this.userUrl}/${user.name}`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  public handleError(err): any {
    let errMessage: string;

    if (err instanceof Response) {
      const body   = err.json() || '';
      const error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }
    return Observable.throw(errMessage);
  }
}
