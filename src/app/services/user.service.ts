import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  public loggedIn: boolean = false;
  public currentUser:User;

  constructor() { }

  isLoggedIn(){
    return this.loggedIn;
  }

  setIsloggedIn(bool: boolean){
    this.loggedIn = bool;
  };

  getCurrentUser(){
    return this.currentUser;
  }

  setCurrentUser(user:User){
    this.currentUser = user;
  }

  saveUserLocally(userDb){
    if (userDb.length > 0 ) {
      this.setIsloggedIn(true);
      let user:User = this.dataToUser(userDb[0]);
      this.setCurrentUser(user);
    }else{
      this.setIsloggedIn(false);
    }
  }

  dataToUser(user){
    return {
      user_id: user.user_id,
      name: user.name,
      password: user.password,
      user_friends: user.user_friends
    }
  }

  logout() {
    this.setIsloggedIn(false);
  }

  saveFriend(friend){
    let friends;
    if (this.currentUser.user_friends && this.currentUser.user_friends.length > 0) {
      friends = JSON.parse(this.currentUser.user_friends);
    }else{
      friends = [];
    }
    friend = JSON.stringify([...friend, ...friends]);
    this.currentUser.user_friends = friend;
  }

}
