import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PeerService } from '../services/peer.service';

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
  
  
  constructor(public peerService: PeerService) {}
  
  ngOnInit() {
    this.video = this.myVideo.nativeElement;
    this.peer = this.peerService.createConnection(this.video);
  }
  
  connect(){
    this.peerService.connect(this.anotherId);
  }
  
  videoconnect(){
    this.peerService.videoconnect(this.video, this.peer, this.anotherId);
  }
}
