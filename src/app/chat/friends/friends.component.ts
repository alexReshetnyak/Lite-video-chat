import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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
  friend: string = "";
  yourNameError: boolean = false;
  friendExist:boolean = true;
  userFriends:Array<{name, user_id}> = [];

  constructor( public peerService: PeerService,
               public router: Router,
               public apiService: ApiService,
               public userService: UserService,
              ){}

  ngOnInit(){
    console.log(this.user);
    this.getUserFriends();
  }

  addNewFriend(){
    this.yourNameError = false;
    this.friendExist = true;

    if (this.friend !== this.user.name){
      this.apiService.getFriend(this.friend)
      .subscribe(friend => {
        if (friend.length>0) {
          this.userService.saveFriend(friend);
          this.user = this.userService.getCurrentUser();
          this.updateUserInDb();
          this.getUserFriends();
        }else{
          this.friendExist = false;
        }
      });
    }else{
      this.yourNameError = true;
    }
  }

  updateUserInDb(){
    this.apiService.updateUser(this.user)
      .subscribe(res => console.log(res));
  }

  getUserFriends(){
    if (this.user.user_friends && this.user.user_friends.length > 0){
      this.userFriends = JSON.parse(this.user.user_friends);
    }else{
      this.userFriends = [];
    }
  }
}
