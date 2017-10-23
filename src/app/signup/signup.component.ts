import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpForm } from '../models/forms.models';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/api.service';
import { PeerService } from '../services/peer.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  @ViewChild('signupForm') signupForm: NgForm;
  @ViewChild('userName') userNameInput: ElementRef;
  windowHeight: string;
  model:SignUpForm;
  confirmPasswordValid: boolean = true;

  constructor(public apiService: ApiService, public peerService: PeerService) {}

  ngOnInit(){
    this.model = new SignUpForm('', '', '');
    this.windowHeight = `${window.innerHeight}px`;
    //this.checkLogin();
  }

  checkPasswordsMatch(){
    if (this.model.userPassword === this.model.confirmPassword){
      this.confirmPasswordValid = true;
    }else{
      this.confirmPasswordValid = false;
    }
  }

  checkLogin(){
    Observable.fromEvent(this.userNameInput.nativeElement, 'keyup')
      .map( (event:any) => event.target.value)
      .debounceTime(300)
      .switchMap(userName => this.apiService.getUserByName(userName))
      .subscribe(res => {});
  }

  getUserId(){
    let peer = this.peerService.getUserId();
    let interval$ = Observable.interval(50);
    let subscription = interval$.subscribe(step => {
      if(peer.id != undefined){
        subscription.unsubscribe();
        this.createUser(peer.id);          
      }
    });
  }

  createUser(id){
    let user: User = {user_id: id,
                      name: this.model.userName,
                      password: this.model.userPassword,
                      user_friends: ""
                      };
    this.apiService.createUser(user).subscribe(data => {
      console.log(data);
    });
  }
}
