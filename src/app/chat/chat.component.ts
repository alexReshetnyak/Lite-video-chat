import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PeerService } from '../services/peer.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MessageData } from '../models/message.data.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, OnDestroy {

  @ViewChild('myvideo') public myVideo: ElementRef;
  public video: any;
  public peer: any;
  public messageToFriend: string;
  public messagesData: {name, message}[] = [];
  public user: User;
  public videoChatStatus: boolean = false;
  public friend: {name, user_id};
  public friendSelected: boolean = false;
  public subscribeToMessages: Subscription;
  public selectedFriendActive: boolean = false;

  constructor(  public peerService: PeerService,
                public userService: UserService,
                public router: Router,
                public changeDetection: ChangeDetectorRef
              ) {}

  public ngOnInit(): void {
    this.friend = {name: '', user_id: ''};
    this.video = this.myVideo.nativeElement;
    this.peer = this.peerService.getPeer();
    this.user = this.userService.getCurrentUser();
    this.peerService.monitorConnection(this.video);
    this.monitorMessagesFromFriends();
  }

  public monitorMessagesFromFriends(): void {
    this.subscribeToMessages = this.peerService.getMessageDataFromFriend()
      .subscribe((messageData: MessageData) => {
        if (messageData && messageData.message === 'check') {
          this.checkFriendStatus('answer', messageData.from.user_id);
        } else if (messageData && messageData.message === 'answer') {

          if (this.friend.name === messageData.from.name) {
            this.selectedFriendActive = true;
            this.changeDetection.detectChanges();
          }
        } else {
          this.showMessageFromFriend(messageData);
        }
      });
  }

  public showMessageFromFriend(messageData: MessageData): void {
    this.friendSelected = true;
    this.friend = messageData.from;
    this.messagesData = [...this.messagesData,
                          {name: messageData.from.name, message: messageData.message}
                        ];
    this.changeDetection.detectChanges();
  }

  public callFriend(): void {
    this.videoChatStatus = true;
    this.peerService.videoconnect(this.video, this.peer, this.friend.user_id);
  }

  public selectFriend(friend): void {
    this.friend = friend;
    this.checkFriendStatus('check', this.friend.user_id);
    this.friendSelected = true;
  }

  public sendMessage(): void {
    const messageData = {
                         from: {name: this.user.name, user_id: this.user.user_id},
                         message: this.messageToFriend
                        };
    this.peerService.sendMessage(messageData, this.friend.user_id);
    this.messagesData.push({name: 'You', message: this.messageToFriend});
    this.messageToFriend = '';
  }

  public checkFriendStatus(message, id): void {
    if (message === 'check') {
      this.selectedFriendActive = false;
    }
    const messageData = {
                          from: {name: this.user.name, user_id: this.user.user_id},
                          message: message
                        };
    this.peerService.sendMessage(messageData, id);
  }

  public logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  public closeCall(): void {
    this.peerService.closeCall();
    this.videoChatStatus = false;
  }

  public ngOnDestroy(): void {
    this.subscribeToMessages.unsubscribe();
  }
}
