webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/guards/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: '/chat',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_4__chat_chat_component__["a" /* ChatComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__["a" /* AuthGuard */]]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_friends_friends_component__ = __webpack_require__("../../../../../src/app/chat/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_peer_service__ = __webpack_require__("../../../../../src/app/services/peer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/guards/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_9__chat_friends_friends_component__["a" /* FriendsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_peer_service__["a" /* PeerService */],
            __WEBPACK_IMPORTED_MODULE_11__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-header{\n    line-height: 40px;\n}\n\n.user-name{\n    font-size: 20px;\n    color: #9E9E9E;\n}\n\n.logout-link{\n    padding-right: 15px;\n    cursor: pointer; \n}\n\n.friends{\n    box-shadow: 0 0 5px 0 #999999;\n    padding: 20px 10px;\n    margin-bottom: 30px;\n}\n\n.chat-window{\n    padding: 5px;\n    margin-bottom: 10px;\n}\n\n.message-wrap{\n    border-radius: 5px;\n    padding: 5px;\n    color: #757575;\n    background-color: #ffffcc;\n}\n\n.message-wrap.message-user-wrap{\n    background-color: #c8fcc3;\n}\n\n.message-user-name{\n    color: #505050;\n}\n\n.friend-online{\n    color: #41ff41;\n}\n\n.send-button, .call-button, .close-call-button{\n    margin-top: 20px;\n}\n\n.video-wrap{\n    display: inline-block;\n    border: 1px solid #999999;\n    box-shadow: 0 0 5px 0 #999999;\n    height: 480px;\n    width: 640px;\n    background: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"chat-header text-right\">\n        <span class='user-name'> {{user.name}} </span>\n        <a (click)='logout()' class=\"logout-link\"> Logout</a>\n    </div>\n\n    <div class=\"chat-container\">\n        <div class=\"friends col-md-3 col-xs-12\" >\n            <app-friends [user] = 'user'\n                         (selectUserFriend) = 'selectFriend($event)'>\n            </app-friends>\n            <div class=\"chat-window\">\n                <div    *ngFor=\"let messageData of messagesData\" \n                        [ngClass]=\"{'message-wrap': true, 'message-user-wrap': (messageData.name === 'You'), 'text-right': (messageData.name === 'You')}\">\n                    <div class=\"message-user-name\">{{messageData.name}}</div>\n                    <div>{{messageData.message}}</div>\n                </div>\n            </div>\n            <div [hidden] = '!friendSelected'>\n                Send message to {{friend.name}} \n                <span *ngIf=\"selectedFriendActive\" class='friend-online'>Online</span> \n                <span *ngIf=\"!selectedFriendActive\">Offline</span> \n\n            </div>\n            <input  type=\"text\" \n                    [(ngModel)]=\"messageToFriend\" \n                    placeholder=\"Enter message\" \n                    class=\"form-control\">\n            <button (click)=\"sendMessage()\" \n                    [disabled]='!friendSelected || !selectedFriendActive'\n                    class=\"btn btn-default send-button\">\n                    Send\n            </button>\n            <button (click)=\"callFriend()\" \n                    [disabled]='!friendSelected || !selectedFriendActive'\n                    class=\"btn btn-default call-button\">\n                    Call\n            </button>\n            <button (click)=\"closeCall()\"\n                    [disabled]='!friendSelected || !selectedFriendActive'\n                    class=\"btn btn-default close-call-button\">\n                    CloseCall\n            </button>\n        </div>\n        <div class=\"col-md-9 col-xs-12 text-center\">\n            <div class=\"video-wrap\">\n                <video #myvideo></video>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_peer_service__ = __webpack_require__("../../../../../src/app/services/peer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent(peerService, userService, router, changeDetection) {
        this.peerService = peerService;
        this.userService = userService;
        this.router = router;
        this.changeDetection = changeDetection;
        this.messagesData = [];
        this.videoChatStatus = false;
        this.friendSelected = false;
        this.selectedFriendActive = false;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.friend = { name: "", user_id: "" };
        this.video = this.myVideo.nativeElement;
        this.peer = this.peerService.getPeer();
        this.user = this.userService.getCurrentUser();
        this.peerService.monitorConnection(this.video);
        this.monitorMessagesFromFriends();
    };
    ChatComponent.prototype.monitorMessagesFromFriends = function () {
        var _this = this;
        this.subscribeToMessages = this.peerService.getMessageDataFromFriend()
            .subscribe(function (messageData) {
            if (messageData && messageData.message === 'check') {
                _this.checkFriendStatus("answer", messageData.from.user_id);
            }
            else if (messageData && messageData.message === 'answer') {
                if (_this.friend.name === messageData.from.name) {
                    _this.selectedFriendActive = true;
                    _this.changeDetection.detectChanges();
                }
            }
            else {
                _this.showMessageFromFriend(messageData);
            }
        });
    };
    ChatComponent.prototype.showMessageFromFriend = function (messageData) {
        this.friendSelected = true;
        this.friend = messageData.from;
        this.messagesData = this.messagesData.concat([{ name: messageData.from.name, message: messageData.message }]);
        this.changeDetection.detectChanges();
    };
    ChatComponent.prototype.callFriend = function () {
        this.videoChatStatus = true;
        this.peerService.videoconnect(this.video, this.peer, this.friend.user_id);
    };
    ChatComponent.prototype.selectFriend = function (friend) {
        this.friend = friend;
        this.checkFriendStatus('check', this.friend.user_id);
        this.friendSelected = true;
    };
    ChatComponent.prototype.sendMessage = function () {
        var messageData = {
            from: { name: this.user.name, user_id: this.user.user_id },
            message: this.messageToFriend
        };
        this.peerService.sendMessage(messageData, this.friend.user_id);
        this.messagesData.push({ name: "You", message: this.messageToFriend });
        this.messageToFriend = "";
    };
    ChatComponent.prototype.checkFriendStatus = function (message, id) {
        if (message === 'check') {
            this.selectedFriendActive = false;
        }
        var messageData = {
            from: { name: this.user.name, user_id: this.user.user_id },
            message: message
        };
        this.peerService.sendMessage(messageData, id);
    };
    ChatComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/login']);
    };
    ChatComponent.prototype.closeCall = function () {
        this.peerService.closeCall();
        this.videoChatStatus = false;
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.subscribeToMessages.unsubscribe();
    };
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('myvideo'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ChatComponent.prototype, "myVideo", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_peer_service__["a" /* PeerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_peer_service__["a" /* PeerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _e || Object])
], ChatComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/friends/friends.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-friend-wrap{\n    margin-bottom: 20px;\n}\n\n.add-friend-input{\n    margin-bottom: 10px;\n}\n\n\n.friend-wrap{\n    border: 1px solid #CFCFCF;\n}\n.friend{\n    cursor: pointer;\n    color: #9E9E9E;\n    border-bottom: 1px solid #CFCFCF;\n    font-size: 16px;\n    padding: 5px 0px 5px 10px;\n}\n\n.friend:last-child{\n    border: none;\n}\n\n.friend:hover{\n    box-shadow: 0px 0px 3px 0px #CFCFCF inset;\n}\n\n.friend-call{\n    float: right;\n    padding-right: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"friends-conteiner\">\n  <div class=\"add-friend-wrap\">\n      <input type=\"text\"\n      [(ngModel)]=\"friend\"\n      placeholder=\"Enter your friend name\" \n      class=\"form-control add-friend-input\">\n      <button class=\"btn btn-default\" (click)='addNewFriend()'>\n        Add friend\n      </button>\n  </div>\n  \n\n  <div class=\"friend-not-found\" [hidden]='friendExist'>Friend not found</div>\n  <div [hidden]='!yourNameError'>You entered your name, please try something else...</div>\n  <div [hidden]='!friendAlreadyInList'>You already add this user</div>\n\n  Select friend\n  <div class=\"friends-list\">\n    <div class=\"friend-wrap\">\n      <div *ngFor=\"let friend of userFriends\" class=\"friend\" (click)='selectFriend(friend)'>\n        {{friend.name}}\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/friends/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_peer_service__ = __webpack_require__("../../../../../src/app/services/peer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__models_user_model__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FriendsComponent = (function () {
    function FriendsComponent(peerService, router, apiService, userService) {
        this.peerService = peerService;
        this.router = router;
        this.apiService = apiService;
        this.userService = userService;
        this.selectUserFriend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.friend = "";
        this.yourNameError = false;
        this.friendExist = true;
        this.friendAlreadyInList = false;
        this.userFriends = [];
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.getUserFriends();
    };
    FriendsComponent.prototype.addNewFriend = function () {
        var _this = this;
        this.yourNameError = false;
        this.friendExist = true;
        this.friendAlreadyInList = false;
        if (this.friend === this.user.name) {
            this.yourNameError = true;
        }
        else if (this.checkForFriendInList(this.friend)) {
            this.friendAlreadyInList = true;
        }
        else {
            this.apiService.getFriend(this.friend)
                .subscribe(function (friend) {
                _this.saveFriend(friend);
            });
        }
    };
    FriendsComponent.prototype.checkForFriendInList = function (friend) {
        var exist = false;
        this.userFriends.forEach(function (userFriend) {
            if (userFriend.name === friend) {
                exist = true;
            }
        });
        return exist;
    };
    FriendsComponent.prototype.saveFriend = function (friend) {
        if (friend.length > 0) {
            this.userService.saveFriend(friend);
            this.user = this.userService.getCurrentUser();
            this.updateUserInDb();
            this.getUserFriends();
        }
        else {
            this.friendExist = false;
        }
    };
    FriendsComponent.prototype.updateUserInDb = function () {
        this.apiService.updateUser(this.user)
            .subscribe(function (res) {
            if (!res) {
                console.log('User not update');
            }
        });
    };
    FriendsComponent.prototype.getUserFriends = function () {
        if (this.user.user_friends && this.user.user_friends.length > 0) {
            this.userFriends = JSON.parse(this.user.user_friends);
        }
        else {
            this.userFriends = [];
        }
    };
    FriendsComponent.prototype.selectFriend = function (friend) {
        this.selectUserFriend.emit(friend);
    };
    return FriendsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__models_user_model__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__models_user_model__["User"]) === "function" && _a || Object)
], FriendsComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], FriendsComponent.prototype, "selectUserFriend", void 0);
FriendsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-friends',
        template: __webpack_require__("../../../../../src/app/chat/friends/friends.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/friends/friends.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_peer_service__["a" /* PeerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_peer_service__["a" /* PeerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _e || Object])
], FriendsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=friends.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var isLogin = this.userService.isLoggedIn();
        if (isLogin) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function () {
        return this.canActivate();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-for-form{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.login-title{\n    color: #555;\n    font-size: 18px;\n    font-weight: 400;\n    display: block;\n}\n\n.login-form-wrap{\n    width: 400px;\n    box-shadow: 0 0 5px 0 #999999;\n    border-radius: 5px;\n    padding: 20px 0;\n}\n\n.form-login{\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n\n.form-login .form-login-heading{\n    margin-bottom: 10px;\n}\n\n\n.form-login .form-control{\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    box-sizing: border-box;\n}\n\n.form-login .form-control:focus{\n    z-index: 2;\n}\n\n.form-login input[type=\"text\"]{\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.form-login input:nth-of-type(2){\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.button-submit{\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-for-form\" [ngStyle]=\"{'height': windowHeight}\">\n  <div class=\"row\">\n      <div class=\"login-form-wrap\">\n        <h1 class=\"text-center login-title\">Login to continue</h1>\n        <div class=\"account-wall\">\n          <form class=\"form-login\" (ngSubmit)='loggingIn()' #loginForm = 'ngForm'>\n            <input  type=\"text\"\n                    class=\"form-control user-name-input\" \n                    placeholder=\"Username\"\n                    minlength=\"4\" \n                    required\n                    name = 'userName'\n                    #userName = 'ngModel'\n                    [(ngModel)] = 'model.userName'\n                    autofocus>\n            <div  [hidden]='userName.valid || userName.pristine' class=\"error-message\">\n                Name is required\n            </div>\n            <input  type=\"password\"\n                    class=\"form-control\" \n                    placeholder=\"Password\" \n                    minlength=\"6\" \n                    required\n                    name = 'userPassword'\n                    #userPassword = 'ngModel'\n                    [(ngModel)] = 'model.userPassword' \n                    required>\n            <div [hidden]='userPassword.valid || userPassword.pristine' class=\"error-message\">\n              Password is required\n            </div>\n            <div  [hidden]='!wrongNameOrPassword' class=\"error-message\">\n              wrong name or password\n            </div>\n            <button class=\"btn btn-lg btn-primary btn-block button-submit\"\n                    [disabled]='loginForm.form.invalid' \n                    type=\"submit\">\n              Login\n            </button>\n            </form>\n        </div>\n        <div class=\"text-center\">\n          <a [routerLink]=\"'/signup'\">Do not have account yet?</a>\n        </div> \n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_forms_models__ = __webpack_require__("../../../../../src/app/models/forms.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_peer_service__ = __webpack_require__("../../../../../src/app/services/peer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(apiService, peerService, router) {
        this.apiService = apiService;
        this.peerService = peerService;
        this.router = router;
        this.wrongNameOrPassword = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_forms_models__["a" /* LoginForm */]('', '');
        this.windowHeight = window.innerHeight + "px";
    };
    LoginComponent.prototype.loggingIn = function () {
        this.chekNameAndPassordMatch();
    };
    LoginComponent.prototype.chekNameAndPassordMatch = function () {
        var _this = this;
        this.apiService.login(this.model.userName, this.model.userPassword)
            .subscribe(function (user) {
            if (user.length > 0) {
                _this.wrongNameOrPassword = false;
                _this.router.navigate(['/chat']);
            }
            else {
                _this.wrongNameOrPassword = true;
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('loginForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_peer_service__["a" /* PeerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_peer_service__["a" /* PeerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/forms.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignUpForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginForm; });
var SignUpForm = (function () {
    function SignUpForm(userName, userPassword, confirmPassword) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.confirmPassword = confirmPassword;
    }
    return SignUpForm;
}());

var LoginForm = (function () {
    function LoginForm(userName, userPassword) {
        this.userName = userName;
        this.userPassword = userPassword;
    }
    return LoginForm;
}());

//# sourceMappingURL=forms.models.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.userUrl = '/api/users';
    }
    ApiService.prototype.createUser = function (user) {
        var _this = this;
        return this.http.post(this.userUrl, user)
            .map(function (user) { return user.json(); })
            .do(function (user) { return _this.userService.saveUserLocally(user); })
            .catch(this.handleError);
    };
    ApiService.prototype.getUserByName = function (name) {
        return this.http.get(this.userUrl + "/name/" + name)
            .map(function (user) { return user.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.getFriend = function (friend) {
        return this.http.get(this.userUrl + "/friend/" + friend)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.login = function (name, password) {
        var _this = this;
        return this.http.post(this.userUrl + "/login", { name: name, password: password })
            .map(function (user) { return user.json(); })
            .do(function (user) { return _this.userService.saveUserLocally(user); })
            .catch(this.handleError);
    };
    ApiService.prototype.updateUser = function (user) {
        return this.http.put(this.userUrl + "/" + user.name, user)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMessage);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/peer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeerService = (function () {
    function PeerService(userService) {
        this.userService = userService;
        this.peerKey = { key: 'jis4suniffnd0a4i' };
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    PeerService.prototype.setMessageFromFriend = function (messageData) {
        this.subject.next(messageData);
    };
    PeerService.prototype.getMessageDataFromFriend = function () {
        return this.subject.asObservable();
    };
    PeerService.prototype.getUserId = function () {
        this.peer = new Peer(this.peerKey);
        return this.peer;
    };
    PeerService.prototype.getPeer = function () {
        if (this.peer && this.peer.id && this.peer.id.length === 16) {
            return this.peer;
        }
        else {
            var user = this.userService.getCurrentUser();
            this.peer = new Peer(user.user_id, this.peerKey);
            return this.peer;
        }
    };
    PeerService.prototype.monitorConnection = function (video) {
        var _this = this;
        this.peer.on('connection', function (connection) {
            connection.on('data', function (messageData) {
                _this.setMessageFromFriend(messageData);
            });
        });
        var navigateObject = this.getNavigateObject();
        this.peer.on('call', function (call) {
            _this.call = call;
            navigateObject.getUserMedia({ video: true, audio: true }, function (stream) {
                call.answer(stream);
                call.on('stream', function (remotestream) {
                    video.src = URL.createObjectURL(remotestream);
                    video.play();
                });
            }, function (err) {
                console.log('Failed to get stream', err);
            });
        });
    };
    PeerService.prototype.sendMessage = function (message, id) {
        if (this.connect && this.currentFriendId === id) {
            this.connect.send(message);
        }
        else {
            var connect_1 = this.peer.connect(id);
            this.currentFriendId = id;
            connect_1.on('open', function () {
                this.connect = connect_1;
                connect_1.send(message);
            });
        }
    };
    PeerService.prototype.videoconnect = function (video, peer, anotherid) {
        var _this = this;
        var navigateObject = this.getNavigateObject();
        navigateObject.getUserMedia({ video: true, audio: true }, function (stream) {
            var call = peer.call(anotherid, stream);
            call.on('stream', function (remotestream) {
                video.src = URL.createObjectURL(remotestream);
                video.play();
            });
            _this.call = call;
        }, function (err) {
            console.log('Failed to get stream', err);
        });
    };
    PeerService.prototype.getNavigateObject = function () {
        var navigateObject = navigator;
        navigateObject.getUserMedia = (navigateObject.getUserMedia
            || navigateObject.webkitGetUserMedia
            || navigateObject.mozGetUserMedia
            || navigateObject.msGetUserMedia);
        return navigateObject;
    };
    PeerService.prototype.closeCall = function () {
        if (this.call) {
            this.call.close();
        }
    };
    return PeerService;
}());
PeerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], PeerService);

var _a;
//# sourceMappingURL=peer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
        this.loggedIn = false;
    }
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.setIsloggedIn = function (status) {
        this.loggedIn = status;
    };
    ;
    UserService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    UserService.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
    };
    UserService.prototype.saveUserLocally = function (userDb) {
        if (userDb.length > 0) {
            this.setIsloggedIn(true);
            var user = this.dataToUser(userDb[0]);
            this.setCurrentUser(user);
        }
        else {
            this.setIsloggedIn(false);
        }
    };
    UserService.prototype.dataToUser = function (user) {
        return {
            user_id: user.user_id,
            name: user.name,
            password: user.password,
            user_friends: user.user_friends
        };
    };
    UserService.prototype.logout = function () {
        this.setIsloggedIn(false);
    };
    UserService.prototype.saveFriend = function (friend) {
        var friends;
        if (this.currentUser.user_friends && this.currentUser.user_friends.length > 0) {
            friends = JSON.parse(this.currentUser.user_friends);
        }
        else {
            friends = [];
        }
        this.currentUser.user_friends = JSON.stringify(friend.concat(friends));
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-for-form{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.signup-title{\n    color: #555;\n    font-size: 18px;\n    font-weight: 400;\n    display: block;\n}\n\n.signup-form-wrap{\n    width: 400px;\n    box-shadow: 0 0 5px 0 #999999;\n    border-radius: 5px;\n    padding: 20px 0;\n}\n\n.form-signup{\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n\n.form-signup .form-signup-heading{\n    margin-bottom: 10px;\n}\n\n\n.form-signup .form-control{\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    box-sizing: border-box;\n}\n\n.form-signup .form-control:focus{\n    z-index: 2;\n}\n\n.form-signup input[type=\"text\"]{\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.form-signup input:nth-of-type(2){\n    border-radius: 0;\n    border-radius: 0;\n    margin-bottom: -1px;\n}\n\n.form-signup input:nth-of-type(3){\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.button-submit{\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-for-form\" [ngStyle]=\"{'height': windowHeight}\">\n  <div class=\"row\">\n      <div class=\"signup-form-wrap\">\n        <h1 class=\"text-center signup-title\">Sign up to continue</h1>\n        <div class=\"account-wall\">\n          <form class=\"form-signup\" (ngSubmit)='getUserId()' #signupForm = 'ngForm'>\n            <input  type=\"text\"\n                    class=\"form-control user-name-input\" \n                    placeholder=\"Username\"\n                    minlength=\"4\" \n                    required\n                    name = 'userName'\n                    #userName\n                    [(ngModel)] = 'model.userName'\n                    autofocus>\n            <div  [hidden]='userNameValid'\n                  class=\"error-message\">\n                Name is required\n            </div>\n            <div  [hidden]='!userNameExist' class=\"error-message\">\n                Name is already exist\n            </div>\n            <input  type=\"password\"\n                    class=\"form-control\" \n                    placeholder=\"Password\" \n                    minlength=\"6\" \n                    required\n                    name = 'userPassword'\n                    #userPassword = 'ngModel'\n                    [(ngModel)] = 'model.userPassword' \n                    required>\n            <div [hidden]='userPassword.valid || userPassword.pristine' class=\"error-message\">\n              Password is required\n            </div>\n            <input  type=\"password\"\n                    class=\"form-control\" \n                    placeholder=\"Confirm password\" \n                    minlength=\"6\" \n                    required\n                    (keyup)='checkPasswordsMatch()'\n                    name = 'confirmPassword'\n                    #confirmPassword = 'ngModel'\n                    [(ngModel)] = 'model.confirmPassword' \n                    required>\n            <div [hidden] = 'confirmPasswordValid' class=\"error-message error-message-confirm-password\">\n                Passwords do not match\n            </div>\n            <button class=\"btn btn-lg btn-primary btn-block button-submit\"\n                    [disabled]='signupForm.form.invalid || !confirmPasswordValid || userNameExist' \n                    type=\"submit\">\n              Sign up\n            </button>\n            </form>\n        </div>  \n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_forms_models__ = __webpack_require__("../../../../../src/app/models/forms.models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_peer_service__ = __webpack_require__("../../../../../src/app/services/peer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = (function () {
    function SignupComponent(apiService, peerService, router) {
        this.apiService = apiService;
        this.peerService = peerService;
        this.router = router;
        this.userNameValid = true;
        this.userNameExist = false;
        this.confirmPasswordValid = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_forms_models__["b" /* SignUpForm */]('', '', '');
        this.windowHeight = window.innerHeight + "px";
        this.checkLogin();
    };
    SignupComponent.prototype.checkPasswordsMatch = function () {
        if (this.model.userPassword === this.model.confirmPassword) {
            this.confirmPasswordValid = true;
        }
        else {
            this.confirmPasswordValid = false;
        }
    };
    SignupComponent.prototype.checkLogin = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromEvent(this.userNameInput.nativeElement, 'keyup')
            .map(function (event) { return event.target.value; })
            .filter(function (text) { return text.length > 1; })
            .debounceTime(300)
            .switchMap(function (name) { return _this.apiService.getUserByName(name); })
            .subscribe(function (user) {
            _this.setUserNameStatus();
            if (user.length > 0) {
                _this.userNameExist = true;
            }
            else {
                _this.userNameExist = false;
            }
        });
    };
    SignupComponent.prototype.setUserNameStatus = function () {
        if (this.signupForm.controls.userName.pristine || this.signupForm.controls.userName.valid) {
            this.userNameValid = true;
        }
        else {
            this.userNameValid = false;
        }
    };
    SignupComponent.prototype.getUserId = function () {
        var _this = this;
        var peer = this.peerService.getUserId();
        var interval$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].interval(50);
        var subscription = interval$.subscribe(function (step) {
            if (peer.id != undefined) {
                subscription.unsubscribe();
                _this.createUser(peer.id);
            }
        });
    };
    SignupComponent.prototype.createUser = function (id) {
        var _this = this;
        var user = { user_id: id,
            name: this.model.userName,
            password: this.model.userPassword,
            user_friends: ""
        };
        this.apiService.createUser(user).subscribe(function (userDb) {
            if (userDb.length > 0) {
                _this.router.navigate(['/chat']);
            }
            else {
                console.log('Error on server');
            }
        });
    };
    return SignupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('signupForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], SignupComponent.prototype, "signupForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('userName'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], SignupComponent.prototype, "userNameInput", void 0);
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_peer_service__["a" /* PeerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_peer_service__["a" /* PeerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object])
], SignupComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
///<reference path="typings.d.ts"/>




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map