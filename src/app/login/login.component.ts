import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginForm } from '../models/forms.models';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/api.service';
import { PeerService } from '../services/peer.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('loginForm') loginForm: NgForm;
  windowHeight: string;
  model:LoginForm;
  wrongNameOrPassword: boolean = false;

  constructor( public apiService: ApiService,
               public peerService: PeerService,
               public router: Router
              ){}

  ngOnInit(){
    this.model = new LoginForm('', '');
    this.windowHeight = `${window.innerHeight}px`;
  }

  loggingIn(){
    this.chekNameAndPassordMatch();
  }
  
  chekNameAndPassordMatch(){
    this.apiService.login(this.model.userName, this.model.userPassword)
      .subscribe((res:any) => {
        if(res.length > 0){
          this.wrongNameOrPassword = false;
          this.router.navigate(['/chat']);
        }else{
          this.wrongNameOrPassword = true;
        }
      });
  }
}
