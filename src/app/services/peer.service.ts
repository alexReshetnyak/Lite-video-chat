import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PeerService {
  peer:any;
  peerKey: object = {key: 'jis4suniffnd0a4i'};
  call:any;
  connect: any;
  subject = new Subject();
  currentFriendId: string;

  constructor(public userService:UserService) { }

  setMessageFromFriend(messageData){
    this.subject.next(messageData);
  }

  getMessageDataFromFriend(){
    return this.subject.asObservable();
  }

  getUserId(){
    this.peer = new Peer(this.peerKey);
    return this.peer;
  }

  getPeer(){
    if (this.peer && this.peer.id && this.peer.id.length === 16){
      return this.peer;
    }else{
      let user = this.userService.getCurrentUser();
      this.peer = new Peer(user.user_id, this.peerKey);
      return this.peer;
    }
  }

  monitorConnection(video){
    
    this.peer.on('connection', (connection) => {
      connection.on('data', (messageData) => {
        this.setMessageFromFriend(messageData);
      });
    });

    let navigateObject = this.getNavigateObject();
    this.peer.on('call', (call) => {
      this.call = call;
      
      navigateObject.getUserMedia({video: true, audio: true}, (stream) => {
        call.answer(stream);
        call.on('stream', (remotestream) => {
          video.src = URL.createObjectURL(remotestream);
          video.play();
        });
      }, (err) => {
        console.log('Failed to get stream', err);
      });
    });
  }

  sendMessage(message,id){
    if (this.connect && this.currentFriendId === id){
      this.connect.send(message);
    }else{
      let connect = this.peer.connect(id);
      this.currentFriendId = id;
      connect.on('open', function(){
        this.connect = connect;
        connect.send(message);
     });
    }
  }

  videoconnect(video, peer, anotherid){

    let navigateObject = this.getNavigateObject();
    navigateObject.getUserMedia({video: true, audio: true}, (stream) => {
      let call = peer.call(anotherid, stream);
      call.on('stream', (remotestream) => {
        video.src = URL.createObjectURL(remotestream);
        video.play();
      });
      this.call = call;
    }, (err) => {
      console.log('Failed to get stream', err);
    })
  }

  getNavigateObject(){
    let navigateObject = <any>navigator;
    navigateObject.getUserMedia = (    navigateObject.getUserMedia 
                                    || navigateObject.webkitGetUserMedia 
                                    || navigateObject.mozGetUserMedia  
                                    || navigateObject.msGetUserMedia 
                                  );
    return navigateObject;
  }

  closeCall(){
    if(this.call){
      this.call.close();
    }
  }
}
