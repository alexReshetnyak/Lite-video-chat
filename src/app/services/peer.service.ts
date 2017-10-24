import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class PeerService {
  peer:any;
  peerKey: object = {key: 'jis4suniffnd0a4i'};

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
    
    this.peer.on('connection', function(conn) {
      conn.on('data', function(data){
        console.log(data);
      });
    });

    let n = <any>navigator;
    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );
    
    this.peer.on('call', function(call) {
      
      n.getUserMedia({video: true, audio: true}, function(stream) {
        call.answer(stream);
        call.on('stream', function(remotestream){
          video.src = URL.createObjectURL(remotestream);
          video.play();
        });
      }, function(err) {
        console.log('Failed to get stream', err);
      });
    });
  }

  connect(anotherid){
    let conn = this.peer.connect(anotherid);
    conn.on('open', function(){
      conn.send('Message from that id');
    });
  }

  videoconnect(video, peer, anotherid){
    
    let n = <any>navigator;
    
    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );
    
    n.getUserMedia({video: true, audio: true}, function(stream) {
      var call = peer.call(anotherid, stream);
      call.on('stream', function(remotestream) {
        video.src = URL.createObjectURL(remotestream);
        video.play();
      })
    }, function(err){
      console.log('Failed to get stream', err);
    })
  }
}
