import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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

  @ViewChild('signupForm') public signupForm: NgForm;
  @ViewChild('userName') public userNameInput: ElementRef;
  public windowHeight: string;
  public model:SignUpForm;
  public userNameValid:boolean = true;
  public userNameExist: boolean = false;
  public confirmPasswordValid: boolean = true;

  constructor( public apiService: ApiService,
               public peerService: PeerService,
               public router: Router
              ) {}

  public ngOnInit(): void {
    this.model = new SignUpForm('', '', '');
    this.windowHeight = `${window.innerHeight}px`;
    this.checkLogin();
  }

  public checkPasswordsMatch(): void {
    if (this.model.userPassword === this.model.confirmPassword) {
      this.confirmPasswordValid = true;
    } else {
      this.confirmPasswordValid = false;
    }
  }

  public checkLogin(): void {
    Observable.fromEvent(this.userNameInput.nativeElement, 'keyup')
      .map( (event:any) => event.target.value)
      .filter((text) => text.length > 1)
      .debounceTime(300)
      .switchMap(name => this.apiService.getUserByName(name))
      .subscribe(user => {
        this.setUserNameStatus();
        if (user.length > 0) {
          this.userNameExist = true;
        } else {
          this.userNameExist = false;
        }
      });
  }

  public setUserNameStatus(): void {
    if (this.signupForm.controls.userName.pristine || this.signupForm.controls.userName.valid) {
      this.userNameValid = true;
    } else {
      this.userNameValid = false;
    }
  }

  public getUserId(): void {
    const peer = this.peerService.getUserId();
    const interval$ = Observable.interval(50);
    const subscription = interval$.subscribe(step => {
      if (peer.id != undefined) {
        subscription.unsubscribe();
        this.createUser(peer.id);
      }
    });
  }

  public createUser(id): void {
    const user: User = {user_id: id,
                        name: this.model.userName,
                        password: this.model.userPassword,
                        user_friends: ''
                       };
    this.apiService.createUser(user).subscribe((userDb: any) => {

      if (userDb.length > 0) {
        this.router.navigate(['/chat']);
      } else {
        console.log('Error on server');
      }
    });
  }
}
