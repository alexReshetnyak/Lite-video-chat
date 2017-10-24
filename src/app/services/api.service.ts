import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()
export class ApiService {
  private userUrl: string = '/api/users';
  
  
  constructor(private http: Http, public userService: UserService) {}

  
  createUser(user: User): Observable<User> {

    return this.http.post(this.userUrl, user)
      .map(res => res.json())
      .do(res => this.userService.saveUserLocally(res))
      .catch(this.handleError);
  }

  getUserByName(name: string){

    return this.http.get(`${this.userUrl}/name/${name}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getFriend(friend: string){
    return this.http.get(`${this.userUrl}/friend/${friend}`)
      .map(res => res.json())
      .catch(this.handleError)
  }

  login(name: string, password: string): Observable<string> {
    return this.http.post(`${this.userUrl}/login`, {name, password })
      .map(res => res.json())
      .do(res => {
        if (res.length > 0 ) {
          console.log(res);
          this.userService.setIsloggedIn(true);
          let user:User = this.userService.dataToUser(res[0]);
          this.userService.setCurrentUser(user);
        }else{
          this.userService.setIsloggedIn(false);
        }
      })
      .catch(this.handleError);
  }

  updateUser(user:User){
    console.log(user);
    return this.http.put(`${this.userUrl}/${user.name}`, user)
      .map(res => res.json())
  }


  handleError(err) {
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
