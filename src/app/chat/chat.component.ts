import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PeerService } from '../services/peer.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('myvideo') myVideo: ElementRef;
  video:any;
  peer: any;
  anotherId: string;
  user:User;
  videoChatStatus: boolean = false;
  friend:{name, user_id};
  friendSelected:boolean = false;
  
  
  constructor(  public peerService: PeerService,
                public userService: UserService,
                public router: Router
              ){}
  
  ngOnInit() {
    this.friend = {name: "", user_id: ""};
    this.video = this.myVideo.nativeElement;
    this.peer = this.peerService.getPeer();
    this.user = this.userService.getCurrentUser();
    this.peerService.monitorConnection(this.video);
  }

  callFriend(friendId){
    this.videoChatStatus = true;
    this.peerService.videoconnect(this.video, this.peer, friendId);
  }
  selectFriend(friend){
    this.friend = friend;
    this.friendSelected = true;
  }
  
  connect(){
    this.peerService.connect(this.anotherId);
  } 

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  closeCall(){
    this.peerService.closeCall();
    this.videoChatStatus = false;
  }
}
