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
  
  
  constructor(  public peerService: PeerService,
                public userService: UserService,
                public router: Router
              ){}
  
  ngOnInit() {
    this.video = this.myVideo.nativeElement;
    this.peer = this.peerService.getPeer();
    this.user = this.userService.getCurrentUser();

    // let interval$ = Observable.interval(50);
    // let subscription = interval$.subscribe(step => {
    //   if(this.peer.id != undefined){
    //     subscription.unsubscribe();
    //     this.peerId = this.peer.id;
    //     console.log(this.peerId);
    //   }
    // });

    this.peerService.monitorConnection(this.video);
  }
  
  connect(){
    this.peerService.connect(this.anotherId);
  }
  
  videoconnect(){
    this.peerService.videoconnect(this.video, this.peer, this.anotherId);
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
