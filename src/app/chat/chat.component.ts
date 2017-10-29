import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PeerService } from '../services/peer.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MessageData } from '../models/message.data.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('myvideo') myVideo: ElementRef;
  video:any;
  peer: any;
  messageToFriend: string;
  messagesData:{name, message}[] = [];
  user:User;
  videoChatStatus: boolean = false;
  friend:{name, user_id};
  friendSelected:boolean = false;
  subscribeToMessages:Subscription;
  selectedFriendActive: boolean = false;
  
  
  constructor(  public peerService: PeerService,
                public userService: UserService,
                public router: Router,
                public changeDetection: ChangeDetectorRef
              ){}
  
  ngOnInit() {
    this.friend = {name: "", user_id: ""};
    this.video = this.myVideo.nativeElement;
    this.peer = this.peerService.getPeer();
    this.user = this.userService.getCurrentUser();
    this.peerService.monitorConnection(this.video);
    this.monitorMessagesFromFriends();
  }

  monitorMessagesFromFriends(){
    this.subscribeToMessages = this.peerService.getMessageDataFromFriend()
      .subscribe((messageData:MessageData) => {
        if (messageData && messageData.message === 'check') {
          this.checkFriendStatus("answer", messageData.from.user_id);
        }else if(messageData && messageData.message === 'answer'){

          if(this.friend.name === messageData.from.name){
            this.selectedFriendActive = true;
            this.changeDetection.detectChanges();
          }
        }else{
          this.showMessageFromFriend(messageData);
        }
      });
  }

  showMessageFromFriend(messageData: MessageData){
    this.friendSelected = true;
    this.friend = messageData.from;
    this.messagesData = [...this.messagesData, 
                          {name: messageData.from.name, message: messageData.message}
                        ];
    this.changeDetection.detectChanges();
  }

  callFriend(){
    this.videoChatStatus = true;
    this.peerService.videoconnect(this.video, this.peer, this.friend.user_id);
  }

  selectFriend(friend){
    this.friend = friend;
    this.checkFriendStatus('check', this.friend.user_id);
    this.friendSelected = true;
  }
  
  sendMessage(){
    const messageData = {
                         from: {name: this.user.name, user_id: this.user.user_id},
                         message: this.messageToFriend
                        };
    this.peerService.sendMessage(messageData, this.friend.user_id);
    this.messagesData.push({name: "You", message: this.messageToFriend});
    this.messageToFriend = "";
  }

  checkFriendStatus(message, id){
    if (message === 'check') {
      this.selectedFriendActive = false;
    }
    const messageData = { 
                          from: {name: this.user.name, user_id: this.user.user_id}, 
                          message: message
                        };
    this.peerService.sendMessage(messageData, id);
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  closeCall(){
    this.peerService.closeCall();
    this.videoChatStatus = false;
  }

  ngOnDestroy() {
    this.subscribeToMessages.unsubscribe();
  }
}
