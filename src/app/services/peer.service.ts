import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PeerService {
  public peer: any;
  public peerKey: object = {key: 'jis4suniffnd0a4i'};
  public call: any;
  public connect: any;
  public subject: Subject<any> = new Subject();
  public currentFriendId: string;

  constructor(public userService: UserService) {}

  public setMessageFromFriend(messageData): void {
    this.subject.next(messageData);
  }

  public getMessageDataFromFriend(): Observable<any> {
    return this.subject.asObservable();
  }

  public getUserId(): any {
    // uncomment it if you want to use peer server
    // this.peer = new Peer(this.peerKey);

    this.peer = new Peer({　host: 'server-peerjs.herokuapp.com', secure: true, port: 443, key: 'peerjs', debug: 3});
    return this.peer;
  }

  public getPeer(): any {
    if (this.peer && this.peer.id && this.peer.id.length === 16) {
      return this.peer;
    } else {
      const user = this.userService.getCurrentUser();

      // uncomment it if you want to use peer server
      // this.peer = new Peer(user.user_id, this.peerKey);

      this.peer = new Peer(user.user_id, {host: 'server-peerjs.herokuapp.com', secure: true, port: 443, key: 'peerjs', debug: 3});
      return this.peer;
    }
  }

  public monitorConnection(video): void {

    this.peer.on('connection', (connection) => {
      connection.on('data', (messageData) => {
        this.setMessageFromFriend(messageData);
      });
    });

    const navigateObject = this.getNavigateObject();
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

  public sendMessage(message, id): void {
    if (this.connect && this.currentFriendId === id) {
      this.connect.send(message);
    } else {
      const connect = this.peer.connect(id);
      this.currentFriendId = id;
      connect.on('open', function() {
        this.connect = connect;
        connect.send(message);
     });
    }
  }

  public videoconnect(video, peer, anotherid): void {

    const navigateObject = this.getNavigateObject();
    navigateObject.getUserMedia({video: true, audio: true}, (stream) => {
      const call = peer.call(anotherid, stream);
      call.on('stream', (remotestream) => {
        video.src = URL.createObjectURL(remotestream);
        video.play();
      });
      this.call = call;
    }, (err) => {
      console.log('Failed to get stream', err);
    });
  }

  public getNavigateObject(): any {
    const navigateObject = <any>navigator;
    navigateObject.getUserMedia = (    navigateObject.getUserMedia
                                    || navigateObject.webkitGetUserMedia
                                    || navigateObject.mozGetUserMedia
                                    || navigateObject.msGetUserMedia
                                  );
    return navigateObject;
  }

  public closeCall(): void {
    if (this.call) {
      this.call.close();
    }
  }
}
