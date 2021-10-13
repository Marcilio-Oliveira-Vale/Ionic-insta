webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = /** @class */ (function () {
    // tab2Root = AboutPage;
    // tab3Root = ContactPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon="md-search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="md-play"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="md-appstore"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="" tabIcon="md-contact"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_story_photo_story_photo__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToStory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_story_photo_story_photo__["a" /* StoryPhotoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\home\home.html"*/'<link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">\n\n<ion-header>\n  <ion-navbar>\n    <ion-item>\n      <img class="logo" src="../assets/imgs/instagram-logo.png">\n      <div class="icons-top">\n        <ion-icon name="md-add-circle"></ion-icon>\n        <ion-icon name="md-heart"></ion-icon>\n        <ion-icon name="ios-chatbubbles"></ion-icon>\n      </div>\n    </ion-item>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <button ion-button="" full (click)="goToStory()">Go to Story</button>\n  <ion-card class="card">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/user1.png">\n      </ion-avatar>\n      <h2>jean.grey</h2>\n      <p>Xavier\'s School for Gifted Youngsters</p>\n    </ion-item>\n  \n    <img class="img-post" src="../assets/imgs/img1.jpg">\n  \n    <ion-card-content>\n      <p><i class="em em-house" aria-role="presentation" aria-label="HOUSE BUILDING"></i>&nbsp;Home.</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button class="like" ion-button icon-start clear small>\n          <ion-icon name="md-heart-outline"></ion-icon>\n          <div>102</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="comment" ion-button icon-start clear small>\n          <ion-icon name="ios-text-outline"></ion-icon>\n          <div>5</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="share" ion-button icon-start clear small>\n          <ion-icon name="md-paper-plane"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n\n  <ion-card class="card">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/user2.png">\n      </ion-avatar>\n      <h2>geralt.of.rivia</h2>\n      <p>Rivia</p>\n    </ion-item>\n  \n    <img class="img-post" src="../assets/imgs/img2.jpg">\n  \n    <ion-card-content>\n      <p>Life is too short. Do what pleases you while you can. &nbsp;<i class="em em-horse" aria-role="presentation" aria-label="HORSE FACE"></i></p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button class="like" ion-button icon-start clear small>\n          <ion-icon name="md-heart-outline"></ion-icon>\n          <div>98</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="comment" ion-button icon-start clear small>\n          <ion-icon name="ios-text-outline"></ion-icon>\n          <div>8</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="share" ion-button icon-start clear small>\n          <ion-icon name="md-paper-plane"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n\n  <ion-card class="card">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/user3.jpg">\n      </ion-avatar>\n      <h2>ines</h2>\n      <p>In your mind</p>\n    </ion-item>\n  \n    <img class="img-post" src="../assets/imgs/img3.jpg">\n\n    <ion-card-content>\n      <p>Sleep, baby. Or Cuca is going to get you. <i class="em em-butterfly" aria-role="presentation" aria-label="BUTTERFLY"></i></p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button class="like" ion-button icon-start clear small>\n          <ion-icon name="md-heart-outline"></ion-icon>\n          <div>532</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="comment" ion-button icon-start clear small>\n          <ion-icon name="ios-text-outline"></ion-icon>\n          <div>9</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="share" ion-button icon-start clear small>\n          <ion-icon name="md-paper-plane"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n\n  <ion-card class="card">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/user4.jpg">\n      </ion-avatar>\n      <h2>ororo.munroe</h2>\n      <p>Wakanda</p>\n    </ion-item>\n  \n    <img class="img-post" src="../assets/imgs/img4.gif">\n  \n    <ion-card-content>\n      <p>Rainy day <i class="em em-lightning" aria-role="presentation" aria-label=""></i>.</p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button class="like" ion-button icon-start clear small>\n          <ion-icon name="md-heart-outline"></ion-icon>\n          <div>987</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="comment" ion-button icon-start clear small>\n          <ion-icon name="ios-text-outline"></ion-icon>\n          <div>5</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button class="share" ion-button icon-start clear small>\n          <ion-icon name="md-paper-plane"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-card>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryPhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoryPhotoPage = /** @class */ (function () {
    function StoryPhotoPage(navCtrl, navParams, cameraPreview, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraPreview = cameraPreview;
        this.platform = platform;
        this.startCamera();
    }
    StoryPhotoPage.prototype.startCamera = function () {
        try {
            this.cameraPreview.stopCamera().then(function () {
                console.log("camera started");
            }).catch(function (e) {
                console.log("camera error");
            });
        }
        catch (e) {
        }
        // start camera
        this.cameraPreview.startCamera({ x: 0, y: 0, width: this.platform.width(), height: this.platform.height(), toBack: true, previewDrag: false, tapPhoto: true });
    };
    StoryPhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoryPhotoPage');
    };
    StoryPhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-story-photo',template:/*ion-inline-start:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\story-photo\story-photo.html"*/'<!--\n  Generated template for the StoryPhotoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>StoryPhoto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab right top small >\n    <button ion-fab color="danger" (click)="back()">\n      <ion-icon name="md-arrow-forward"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab left top small >\n    <button ion-fab color="danger">\n      <ion-icon name="ios-settings"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab right bottom small >\n    <button (click)="refresh()" ion-fab color="danger">\n      <ion-icon name="refresh"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab center bottom large >\n    <button (click)="takePicture()" ion-fab color="dark">\n      <ion-icon name=""></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\story-photo\story-photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__["CameraPreviewOriginal"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], StoryPhotoPage);
    return StoryPhotoPage;
}());

//# sourceMappingURL=story-photo.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_story_photo_story_photo__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera_preview__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_story_photo_story_photo__["a" /* StoryPhotoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera_preview__["CameraPreviewOriginal"],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\marci\OneDrive\Documentos\instagram-ionic-m\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map