import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class PeerService {
  peer:any;
  peerKey: object = {key: 'jis4suniffnd0a4i'};
  call:any;

  constructor(public userService:UserService) { }

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
      connection.on('data', (data) => {
        console.log(data);
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

  connect(anotherid){
    let connect = this.peer.connect(anotherid);
    connect.on('open', function(){
      connect.send('Message from that id');
    });
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
    this.call.close();
  }
}
