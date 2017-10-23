import { Injectable } from '@angular/core';

@Injectable()
export class PeerService {
  peer:any;

  constructor() { }

  getUserId(){
    this.peer = new Peer({key: 'jis4suniffnd0a4i'});
    return this.peer;
  }

  createConnection(video){
    let id = localStorage.getItem('userId');
    let random = Math.random()*2;
    // if (random > 1) {
    //   this.peer = new Peer('kok9s9blukdquxr', {key: 'jis4suniffnd0a4i'});
    // }else{
    //   this.peer = new Peer("54k7fofbmxjkbj4i", {key: 'jis4suniffnd0a4i'});
    // }
    //this.peer = new Peer({key: 'jis4suniffnd0a4i'});

    // if (!!(id)){
    //   this.peer = new Peer(id, {key: 'jis4suniffnd0a4i'});
    //   console.log(1);
    // }else{
    //   this.peer = new Peer({key: 'jis4suniffnd0a4i'});
    //   setTimeout(() => {
    //     console.log(this.peer.id);
    //     localStorage.setItem('userId', this.peer.id);
    //     console.log(2);
    //   }, 2000);
    // }
    // setTimeout(() => {
    //   this.mypeerid = this.peer.id;
    // },2000);
    
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

    return this.peer;
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
