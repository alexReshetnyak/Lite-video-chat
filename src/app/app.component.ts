import { Component, OnInit, ViewChild } from '@angular/core';
import { PeerService } from './servicies/peer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild('myvideo') myVideo: any;
  
  peer;
  anotherid;
  mypeerid;
  userId;
  video;
  
  constructor(public peerService: PeerService) {}
  
  ngOnInit() {
    let video = this.myVideo.nativeElement;
    this.peer = this.peerService.createConnection(video);

    // let id = localStorage.getItem('userId');
    // let random = Math.random()*2;
    // if (random > 1) {
    //   this.peer = new Peer('kok9s9blukdquxr', {key: 'jis4suniffnd0a4i'});
    // }else{
    //   this.peer = new Peer("54k7fofbmxjkbj4i", {key: 'jis4suniffnd0a4i'});
    // }
    // //this.peer = new Peer({key: 'jis4suniffnd0a4i'});

    // // if (!!(id)){
    // //   this.peer = new Peer(id, {key: 'jis4suniffnd0a4i'});
    // //   console.log(1);
    // // }else{
    // //   this.peer = new Peer({key: 'jis4suniffnd0a4i'});
    // //   setTimeout(() => {
    // //     console.log(this.peer.id);
    // //     localStorage.setItem('userId', this.peer.id);
    // //     console.log(2);
    // //   }, 2000);
    // // }
    // // setTimeout(() => {
    // //   this.mypeerid = this.peer.id;
    // // },2000);
    
    // this.peer.on('connection', function(conn) {
    //   conn.on('data', function(data){
    //     console.log(data);
    //   });
    // });

    // let n = <any>navigator;
    // n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );
    
    // this.peer.on('call', function(call) {
      
    //   n.getUserMedia({video: true, audio: true}, function(stream) {
    //     call.answer(stream);
    //     call.on('stream', function(remotestream){
    //       video.src = URL.createObjectURL(remotestream);
    //       video.play();
    //     });
    //   }, function(err) {
    //     console.log('Failed to get stream', err);
    //   });
    // });
  }
  
  connect(){
    this.peerService.connect(this.anotherid);
    // let conn = this.peer.connect(this.anotherid);
    // conn.on('open', function(){
    //   conn.send('Message from that id');
    // });
  }
  
  videoconnect(){
    let video = this.myVideo.nativeElement;
    let localvar = this.peer;
    let fname = this.anotherid;

    this.peerService.videoconnect(video, localvar, fname);
    
    
    // let n = <any>navigator;
    
    // n.getUserMedia = ( n.getUserMedia 
    //                   || n.webkitGetUserMedia 
    //                   || n.mozGetUserMedia  
    //                   || n.msGetUserMedia );
    // n.getUserMedia({video: true, audio: true}, function(stream) {
    //   var call = localvar.call(fname, stream);
    //   call.on('stream', function(remotestream) {
    //     video.src = URL.createObjectURL(remotestream);
    //     video.play();
    //   })
    // }, function(err){
    //   console.log('Failed to get stream', err);
    // })
  }
}