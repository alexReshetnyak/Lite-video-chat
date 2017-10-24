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

  saveUserLocally(dbResponse){
    let user:User = this.dbDataToUser(dbResponse);
    if (user){
      this.setIsloggedIn(true);
      this.setCurrentUser(user);
    }
  }

  dbDataToUser(dbResponse){
    if (dbResponse.status === "OK") {
      return this.dataToUser(dbResponse.item);
    }else{
      this.setIsloggedIn(false);
    }
  }

  dataToUser(data){
    return {
      user_id: data.user_id,
      name: data.name,
      password: data.password,
      user_friends: data.user_friends
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
