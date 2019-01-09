webpackJsonp([3],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Listandmap1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bhouselist_bhouselist__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bhousemap_bhousemap__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Listandmap1Page = /** @class */ (function () {
    function Listandmap1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1List = __WEBPACK_IMPORTED_MODULE_2__bhouselist_bhouselist__["a" /* BhouselistPage */];
        this.tab2Map = __WEBPACK_IMPORTED_MODULE_3__bhousemap_bhousemap__["a" /* BhousemapPage */];
    }
    Listandmap1Page.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad User2Page");
    };
    Listandmap1Page.prototype.onGoToFilter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__filter_filter__["a" /* FilterPage */]);
    };
    Listandmap1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-user2",template:/*ion-inline-start:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\listandmap1\listandmap1.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>listandmap1</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="onGoToFilter()" clear>\n\n        Filter\n\n      </button></ion-buttons\n\n    ></ion-navbar\n\n  >\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-tabs tabs-only tabsLayout="icon-start" color="primary">\n\n    <ion-tab\n\n      tabTitle="List"\n\n      tabIcon="list"\n\n      [root]="tab1List"\n\n      tabBadge="1"\n\n      tabBadgeStyle="secondary"\n\n    ></ion-tab>\n\n\n\n    <ion-tab tabTitle="Map" tabIcon="map" [root]="tab2Map"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-tabs tabs-only tabsLayout="icon-start">\n\n      <ion-tab tabIcon="search" [root]="tab1List"></ion-tab>\n\n\n\n      <ion-tab tabIcon="contact" [root]="tab2Map"></ion-tab>\n\n      <ion-tab tabIcon="more" [root]="tab2Map"></ion-tab>\n\n    </ion-tabs>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\listandmap1\listandmap1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Listandmap1Page);
    return Listandmap1Page;
}());

//# sourceMappingURL=listandmap1.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BhouselistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BhouselistPage = /** @class */ (function () {
    function BhouselistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BhouselistPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad BhouselistPage");
    };
    BhouselistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-bhouselist",template:/*ion-inline-start:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\bhouselist\bhouselist.html"*/'<!--\n  Generated template for the BhouselistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar> <ion-title>bhouselist</ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding> List here! </ion-content>\n'/*ion-inline-end:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\bhouselist\bhouselist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BhouselistPage);
    return BhouselistPage;
}());

//# sourceMappingURL=bhouselist.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.structure = { lower: 2999, upper: 20999 };
        this.filter = {};
    }
    FilterPage.prototype.onChange = function (ev) {
        console.log('Changed', ev);
    };
    FilterPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage.prototype.logForm = function () {
        console.log('this.filter');
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\filter\filter.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>filter</ion-title>\n\n    <ion-buttons end (click)="onClose()">\n\n      <button ion-button icon-end><ion-icon name="close"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form (ngSubmit)="logForm()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>Free water</ion-label>\n\n        <ion-checkbox\n\n          [(ngModel)]="filter.freewater"\n\n          name="freewater"\n\n        ></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>With cr</ion-label>\n\n        <ion-checkbox [(ngModel)]="filter.withcr" name="withcr"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>No curfew</ion-label>\n\n        <ion-checkbox\n\n          [(ngModel)]="filter.nocurfew"\n\n          name="nocurfew"\n\n        ></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Pets allowed</ion-label>\n\n        <ion-checkbox\n\n          [(ngModel)]="filter.petsallowed"\n\n          name="petsallowed"\n\n        ></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Onsite parking</ion-label>\n\n        <ion-checkbox\n\n          [(ngModel)]="filter.onsiteparking"\n\n          name="onsiteparking"\n\n        ></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Free electricity</ion-label>\n\n        <ion-checkbox\n\n          [(ngModel)]="filter.freelectricity"\n\n          name="freelectricity"\n\n        ></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>In-unit laundry</ion-label>\n\n        <ion-checkbox\n\n          [(ngModel)]="filter.in - unitlaundry"\n\n          name="in-unitlaundry"\n\n        ></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Aircon</ion-label>\n\n        <ion-checkbox [(ngModel)]="filter.aircon" name="aircon"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>with CCTV</ion-label>\n\n        <ion-checkbox [(ngModel)]="filter.cctv" name="cctv"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>with security team</ion-label>\n\n        <ion-checkbox\n\n          [(ngModel)]="filter.security"\n\n          name="security"\n\n        ></ion-checkbox>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Structure\n\n        <ion-badge item-end color="dark">php{{ structure.lower }}</ion-badge>\n\n        <ion-badge item-end color="dark">php{{ structure.upper }}</ion-badge>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-range\n\n          min="1000"\n\n          max="30000"\n\n          dualKnobs="true"\n\n          pin="true"\n\n          [(ngModel)]="structure"\n\n          name="structure"\n\n          (ionChange)="onChange($event)"\n\n          color="dark"\n\n        >\n\n          <ion-label range-left>1000</ion-label>\n\n          <ion-label range-right>30000</ion-label>\n\n        </ion-range>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button class="btn" type="submit" block>Add Todo</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\filter\filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BhousemapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BhousemapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BhousemapPage = /** @class */ (function () {
    function BhousemapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BhousemapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BhousemapPage');
    };
    BhousemapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bhousemap',template:/*ion-inline-start:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\bhousemap\bhousemap.html"*/'<!--\n  Generated template for the BhousemapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar> <ion-title>bhousemap</ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding> Map here! </ion-content>\n'/*ion-inline-end:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\bhousemap\bhousemap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BhousemapPage);
    return BhousemapPage;
}());

//# sourceMappingURL=bhousemap.js.map

/***/ }),

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bhouselist/bhouselist.module": [
		494,
		2
	],
	"../pages/bhousemap/bhousemap.module": [
		496,
		1
	],
	"../pages/filter/filter.module": [
		495,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 246;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user1_user1__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listandmap1_listandmap1__ = __webpack_require__(163);
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
    HomePage.prototype.onGoToUser1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user1_user1__["a" /* User1Page */]);
    };
    HomePage.prototype.onGoToUsers2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listandmap1_listandmap1__["a" /* Listandmap1Page */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\home\home.html"*/'<ion-header> </ion-header>\n\n\n\n<ion-content padding class="bg">\n\n  <ion-row>\n\n    <ion-col> </ion-col>\n\n    <ion-col col-6> </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col> </ion-col>\n\n    <ion-col col-6>\n\n      <img src="../../assets/imgs/2000px-House.svg.png" alt="ikwhdiwd" />\n\n    </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n\n\n  <ion-grid class="margin-user">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-button round outline class="btn" (click)="onGoToUser1()">\n\n          I\'m just browsing.\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-button round outline class="btn" (click)="onGoToUsers2()">\n\n          I\'m a bhouse owner.\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listandmap1_listandmap1__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User1Page = /** @class */ (function () {
    function User1Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    User1Page.prototype.lapulapu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listandmap1_listandmap1__["a" /* Listandmap1Page */]);
    };
    User1Page.prototype.Cebu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listandmap1_listandmap1__["a" /* Listandmap1Page */]);
    };
    User1Page.prototype.Mandaue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listandmap1_listandmap1__["a" /* Listandmap1Page */]);
    };
    User1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-user1",template:/*ion-inline-start:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\user1\user1.html"*/'<ion-content class="card-background-page">\n\n  <ion-searchbar class="search"> </ion-searchbar>\n\n\n\n  <ion-card>\n\n    <a (click)="lapulapu()">\n\n      <img src="../../assets/imgs/card-saopaolo.png" />\n\n    </a>\n\n    <div class="card-title" (click)="lapulapu()">Lapu-lapu</div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <a (click)="Cebu()"> <img src="../../assets/imgs/card-amsterdam.png"/></a>\n\n    <div class="card-title" (click)="Cebu()">Cebu City</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <a (click)="Mandaue()"> <img src="../../assets/imgs/card-sf.png"/></a>\n\n    <div class="card-title" (click)="Mandaue()">Mandaue City</div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\wrpuc\Desktop\MainAbang\src\pages\user1\user1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], User1Page);
    return User1Page;
}());

//# sourceMappingURL=user1.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(435);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_listandmap1_listandmap1__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user1_user1__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transitions_on_enter_translate_transition__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transitions_on_leave_translate_transition__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_bhouselist_bhouselist__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bhousemap_bhousemap__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_filter_filter__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { Platform } from 'ionic-angular';




var AppModule = /** @class */ (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition("modal-translate-up-enter", __WEBPACK_IMPORTED_MODULE_10__transitions_on_enter_translate_transition__["a" /* ModalTranslateEnterTransition */]);
        this.config.setTransition("modal-translate-up-leave", __WEBPACK_IMPORTED_MODULE_11__transitions_on_leave_translate_transition__["a" /* ModalTranslateLeaveTransition */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user1_user1__["a" /* User1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_listandmap1_listandmap1__["a" /* Listandmap1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bhouselist_bhouselist__["a" /* BhouselistPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bhousemap_bhousemap__["a" /* BhousemapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_filter_filter__["a" /* FilterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bhouselist/bhouselist.module#BhouselistPageModule', name: 'BhouselistPage', segment: 'bhouselist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bhousemap/bhousemap.module#BhousemapPageModule', name: 'BhousemapPage', segment: 'bhousemap', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyCeG1C3EU1AT0mvunHQqHsa-Kb9n6lWv54"
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_listandmap1_listandmap1__["a" /* Listandmap1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user1_user1__["a" /* User1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_bhouselist_bhouselist__["a" /* BhouselistPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bhousemap_bhousemap__["a" /* BhousemapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_filter_filter__["a" /* FilterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(299);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\wrpuc\Desktop\MainAbang\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\wrpuc\Desktop\MainAbang\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTranslateEnterTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalTranslateEnterTransition = /** @class */ (function (_super) {
    __extends(ModalTranslateEnterTransition, _super);
    function ModalTranslateEnterTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalTranslateEnterTransition.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'transform': 'translateX(100%);', 'opacity': 1 });
        wrapper.fromTo('transform', 'translateX(100%)', 'translateX(0)');
        wrapper.fromTo('opacity', 1, 1);
        this
            .element(this.enteringView.pageRef())
            .duration(500)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalTranslateEnterTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* PageTransition */]));

//# sourceMappingURL=on-enter-translate.transition.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTranslateLeaveTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ModalTranslateLeaveTransition = /** @class */ (function (_super) {
    __extends(ModalTranslateLeaveTransition, _super);
    function ModalTranslateLeaveTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalTranslateLeaveTransition.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Animation */](this.plt, ele.querySelector('.wrapper'));
        wrapper.beforeStyles({ 'transform': 'translateX(100%)', 'opacity': 1 });
        wrapper.fromTo('transform', 'translateX(0)', 'translateX(100%)');
        wrapper.fromTo('opacity', 1, 1);
        contentWrapper.fromTo('opacity', 1, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(500)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(contentWrapper)
            .add(wrapper);
    };
    return ModalTranslateLeaveTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* PageTransition */]));

//# sourceMappingURL=on-leave-translate.transition.js.map

/***/ })

},[301]);
//# sourceMappingURL=main.js.map