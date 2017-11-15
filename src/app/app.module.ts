import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import { FriendsComponent } from './chat/friends/friends.component';

import { PeerService } from './services/peer.service';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ PeerService,
               ApiService,
               AuthGuard,
               UserService
   ],
  bootstrap: [AppComponent]
})

export class AppModule {}
