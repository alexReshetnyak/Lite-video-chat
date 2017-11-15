import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {


  constructor(
    private userService: UserService,
    private router: Router) { }

  public canActivate(): boolean {
    const isLogin = this.userService.isLoggedIn();
    if(isLogin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  public canActivateChild(): boolean {
    return this.canActivate();
  }
}
