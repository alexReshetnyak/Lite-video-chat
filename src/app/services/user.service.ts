import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  public loggedIn: boolean = false;
  public currentUser: User;

  constructor() {}

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  public setIsloggedIn(status: boolean): void {
    this.loggedIn = status;
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }

  public setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  public saveUserLocally(userDb): void {
    if (userDb.length > 0 ) {
      this.setIsloggedIn(true);
      const user: User = this.dataToUser(userDb[0]);
      this.setCurrentUser(user);
    } else {
      this.setIsloggedIn(false);
    }
  }

  public dataToUser(user): User {
    return {
      user_id: user.user_id,
      name: user.name,
      password: user.password,
      user_friends: user.user_friends
    };
  }

  public logout(): void {
    this.setIsloggedIn(false);
  }

  public saveFriend(friend): void {
    let friends;
    if (this.currentUser.user_friends && this.currentUser.user_friends.length > 0) {
      friends = JSON.parse(this.currentUser.user_friends);
    } else {
      friends = [];
    }
    this.currentUser.user_friends = JSON.stringify([...friend, ...friends]);
  }
}
