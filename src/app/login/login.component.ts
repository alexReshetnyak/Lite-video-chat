import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginForm } from '../models/forms.models';
import { ApiService } from '../services/api.service';
import { PeerService } from '../services/peer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @ViewChild('loginForm') public loginForm: NgForm;
  public windowHeight: string;
  public model: LoginForm;
  public wrongNameOrPassword: boolean = false;

  constructor( public apiService: ApiService,
               public peerService: PeerService,
               public router: Router
              ) {}

  public ngOnInit(): void {
    this.model = new LoginForm('', '');
    this.windowHeight = `${window.innerHeight}px`;
  }

  public loggingIn(): void {
    this.chekNameAndPassordMatch();
  }

  public chekNameAndPassordMatch(): void {
    this.apiService.login(this.model.userName, this.model.userPassword)
      .subscribe((user:any) => {
        if(user.length > 0){
          this.wrongNameOrPassword = false;
          this.router.navigate(['/chat']);
        }else{
          this.wrongNameOrPassword = true;
        }
      });
  }
}
