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

  @Input() public user: User;
  @Output() public selectUserFriend = new EventEmitter();

  public friend: string = '';
  public yourNameError: boolean = false;
  public friendExist:boolean = true;
  public friendAlreadyInList: boolean = false;
  public userFriends: Array<{name, user_id}> = [];

  constructor( public peerService: PeerService,
               public router: Router,
               public apiService: ApiService,
               public userService: UserService,
              ) {}

  public ngOnInit(): void {
    this.getUserFriends();
  }

  public addNewFriend(): void {
    this.yourNameError = false;
    this.friendExist = true;
    this.friendAlreadyInList = false;

    if (this.friend === this.user.name) {
      this.yourNameError = true;
    }else if(this.checkForFriendInList(this.friend)) {
      this.friendAlreadyInList = true;
    } else {
      this.apiService.getFriend(this.friend)
      .subscribe(friend => {
        this.saveFriend(friend);
      });
    }
  }

  public checkForFriendInList(friend): boolean {
    let exist = false;
    this.userFriends.forEach(userFriend => {
      if(userFriend.name === friend){
        exist = true;
      }
    });
    return exist;
  }

  public saveFriend(friend): void {
    if (friend.length > 0) {
      this.userService.saveFriend(friend);
      this.user = this.userService.getCurrentUser();
      this.updateUserInDb();
      this.getUserFriends();
    } else {
      this.friendExist = false;
    }
  }

  public updateUserInDb(): void {
    this.apiService.updateUser(this.user)
      .subscribe(res => {
        if (!res) {
          console.log('User not update');
        }
      });
  }

  public getUserFriends(): void {
    if (this.user.user_friends && this.user.user_friends.length > 0){
      this.userFriends = JSON.parse(this.user.user_friends);
    }else{
      this.userFriends = [];
    }
  }

  public selectFriend(friend): void {
    this.selectUserFriend.emit(friend);
  }
}
