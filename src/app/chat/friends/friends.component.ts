import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { PeerService } from '../../services/peer.service';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  
  @Input() user: User;
  @Output() callFriend = new EventEmitter();
  @Output() selectUserFriend = new EventEmitter();
  friend: string = "";
  yourNameError: boolean = false;
  friendExist:boolean = true;
  friendAlreadyInList: boolean = false;
  userFriends:Array<{name, user_id}> = [];

  constructor( public peerService: PeerService,
               public router: Router,
               public apiService: ApiService,
               public userService: UserService,
              ){}

  ngOnInit(){
    this.getUserFriends();
  }

  addNewFriend(){
    this.yourNameError = false;
    this.friendExist = true;
    this.friendAlreadyInList = false;

    if (this.friend === this.user.name){
      this.yourNameError = true;
    }else if(this.checkForFriendInList(this.friend)){
      this.friendAlreadyInList = true;
    }else{
      this.apiService.getFriend(this.friend)
      .subscribe(friend => {
        this.saveFriend(friend);
      });
    }
  }

  checkForFriendInList(friend){
    let exist = false;
    this.userFriends.forEach(userFriend => {
      if(userFriend.name === friend){
        exist = true;
      }
    });
    return exist;
  }

  saveFriend(friend){
    if (friend.length > 0) {
      this.userService.saveFriend(friend);
      this.user = this.userService.getCurrentUser();
      this.updateUserInDb();
      this.getUserFriends();
    }else{
      this.friendExist = false;
    }
  }

  updateUserInDb(){
    this.apiService.updateUser(this.user)
      .subscribe(res => {});
  }

  getUserFriends(){
    if (this.user.user_friends && this.user.user_friends.length > 0){
      this.userFriends = JSON.parse(this.user.user_friends);
    }else{
      this.userFriends = [];
    }
  }

  selectFriend(friend){
    this.selectUserFriend.emit(friend);
  }

  callToFriend(friend){
    this.callFriend.emit(friend.user_id);
  }
}