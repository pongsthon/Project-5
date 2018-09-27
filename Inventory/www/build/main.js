webpackJsonp([1],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/success/success.module": [
		272,
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
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n<!--  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>  -->\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\tabs\tabs.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-slides pager>\n\n    <ion-slide>\n      <img   src="https://github.com/pongsthon/Project-5/blob/master/ExamplePic.jpg?raw=true" alt="">\n    </ion-slide>\n  \n    <ion-slide>\n      <img   src="https://github.com/pongsthon/Project-5/blob/master/doc/about.png?raw=true" alt="">\n    </ion-slide>\n  \n  </ion-slides>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    HomePage.prototype.onClick = function () {
        this.id11011_04 = (parseInt(this.id11011_02) * 26) + parseInt(this.id11011_03);
        this.id11079_04 = (parseInt(this.id11079_02) * 16) + parseInt(this.id11079_03);
        this.id11083_04 = (parseInt(this.id11083_02) * 31) + parseInt(this.id11083_03);
        this.id11089_04 = (parseInt(this.id11089_02) * 20) + parseInt(this.id11089_03);
        this.id11093_04 = (parseInt(this.id11093_02) * 12) + parseInt(this.id11093_03);
        this.id11095_04 = (parseInt(this.id11095_02) * 12) + parseInt(this.id11095_03);
        this.id11113_04 = (parseInt(this.id11113_02) * 31) + parseInt(this.id11113_03);
        this.id11114_04 = (parseInt(this.id11114_02) * 60) + parseInt(this.id11114_03);
        this.id11115_04 = (parseInt(this.id11115_02) * 60) + parseInt(this.id11115_03);
        this.id11116_04 = (parseInt(this.id11116_02) * 27) + parseInt(this.id11116_03);
        this.id11120_04 = (parseInt(this.id11120_02) * 48) + parseInt(this.id11120_03);
        this.id11135_04 = (parseInt(this.id11135_02) * 32) + parseInt(this.id11135_03);
        this.id11137_04 = (parseInt(this.id11137_02) * 45) + parseInt(this.id11137_03);
        this.id11138_04 = (parseInt(this.id11138_02) * 1) + parseInt(this.id11138_03);
        this.id11146_04 = (parseInt(this.id11146_02) * 5) + parseInt(this.id11146_03);
        this.id11148_04 = (parseInt(this.id11148_02) * 1) + parseInt(this.id11148_03);
        this.id11149_04 = (parseInt(this.id11149_02) * 10) + parseInt(this.id11149_03);
        this.id11172_04 = (parseInt(this.id11172_02) * 12) + parseInt(this.id11172_03);
        this.id11175_04 = (parseInt(this.id11175_02) * 1) + parseInt(this.id11175_03);
        this.id11178_04 = (parseInt(this.id11178_02) * 16) + parseInt(this.id11178_03);
        this.id11179_04 = (parseInt(this.id11179_02) * 40) + parseInt(this.id11179_03);
        this.id11180_04 = (parseInt(this.id11180_02) * 27) + parseInt(this.id11180_03);
        this.id11181_04 = (parseInt(this.id11181_02) * 16) + parseInt(this.id11181_03);
        this.id11182_04 = (parseInt(this.id11182_02) * 40) + parseInt(this.id11182_03);
        this.id11183_04 = (parseInt(this.id11183_02) * 20) + parseInt(this.id11183_03);
        this.id11184_04 = (parseInt(this.id11184_02) * 27) + parseInt(this.id11184_03);
        this.id11185_04 = (parseInt(this.id11185_02) * 27) + parseInt(this.id11185_03);
        this.id11196_04 = (parseInt(this.id11196_02) * 60) + parseInt(this.id11196_03);
        this.id12012_04 = (parseInt(this.id12012_02) * 6) + (parseInt(this.id12012_03) * 2.64);
        this.id12016_04 = (parseInt(this.id12016_02) * 12) + parseInt(this.id12016_03);
        this.id12017_04 = (parseInt(this.id12017_02) * 6) + (parseInt(this.id12017_03) * 2.64);
        this.id12028_04 = (parseInt(this.id12028_02) * 20) + parseInt(this.id12028_03);
        this.id12030_04 = (parseInt(this.id12030_02) * 15) + parseInt(this.id12030_03);
        this.id12033_04 = (parseInt(this.id12033_02) * 45) + parseInt(this.id12033_03);
        this.id12038_04 = (parseInt(this.id12038_02) * 20) + parseInt(this.id12038_03);
        this.id21123_04 = (parseInt(this.id21123_02) * 1) + (parseInt(this.id21123_03) / 12);
        this.id21125_04 = (parseInt(this.id21125_02) * 30) + parseInt(this.id21125_03);
        this.id21150_04 = (parseInt(this.id21150_02) * 25) + parseInt(this.id21150_03);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\home\home.html"*/'<ion-header style="text-align: center">\n  <ion-navbar>\n    <ion-title>McDonald\'s System</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item no-lines style="text-align: center">\n      <img height="90px"  src="data:image/jpeg;base64,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" alt="">\n    </ion-item>\n\n\n\n\n\n<!-- PORK PATTY -->\n      \n        <ion-label  color="primary" stacked>PORK PATTY</ion-label>\n        <ion-row style="text-align: center">\n          <ion-col col-3>\n            CAS\n            <ion-item>\n                <ion-input [(ngModel)]="id11011_01" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3>\n            PACK \n            <ion-item>\n                <ion-input [(ngModel)]="id11011_02" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3>\n            Subunit \n            <ion-item>\n                <ion-input [(ngModel)]="id11011_03" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3>\n              Unit \n              <ion-item>\n                  <strong>{{(id11011_04)}}</strong>\n              </ion-item>\n              </ion-col>\n        </ion-row>\n\n\n<!-- APMC -->\n        <ion-label  color="primary" stacked>APMC</ion-label>\n        <ion-row style="text-align: center">\n          <ion-col col-3>\n            CAS\n            <ion-item>\n                <ion-input [(ngModel)]="id11079_01" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3>\n            PACK \n            <ion-item>\n                <ion-input [(ngModel)]="id11079_02" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3>\n            Subunit \n            <ion-item>\n                <ion-input [(ngModel)]="id11079_03" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3>\n              Unit \n              <ion-item>\n                  <strong>{{(id11079_04)}}</strong>\n              </ion-item>\n              </ion-col>\n        </ion-row>\n\n\n<!-- Fro. Chicken Strip -->\n<ion-label  color="primary" stacked>Fro. Chicken Strip</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11083_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11083_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11083_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11083_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n  \n\n<!-- Pork Sausage -->\n<ion-label  color="primary" stacked>Pork Sausage</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11089_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11089_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11089_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11089_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n      \n\n<!-- Canadian Bacon New -->\n<ion-label  color="primary" stacked>Canadian Bacon New</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11093_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11093_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11093_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11093_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- OPTIMIZED SAMURAI -->\n<ion-label  color="primary" stacked>OPTIMIZED SAMURAI</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11095_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11095_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11095_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11095_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- Frozen CHK Srip-CP -->\n<ion-label  color="primary" stacked>Frozen CHK Srip-CP</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11113_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11113_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11113_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11113_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- PINEAPPLE PIE/TUF -->\n<ion-label  color="primary" stacked>PINEAPPLE PIE/TUF</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11114_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11114_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11114_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11114_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- CORN PIE/TUF -->\n<ion-label  color="primary" stacked>CORN PIE/TUF</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11115_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11115_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11115_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11115_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n     \n     \n	 \n<!-- FROZEN SPICY SBL-CP -->\n<ion-label  color="primary" stacked>FROZEN SPICY SBL-CP</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11116_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11116_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11116_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11116_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n      \n	  \n<!-- Chicken Nuggets -->\n<ion-label  color="primary" stacked>Chicken Nuggets</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11120_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11120_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11120_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11120_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>	  \n	  \n	  \n<!-- FOF 90:10 No Sugar -->\n<ion-label  color="primary" stacked>FOF 90:10 No Sugar</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11135_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11135_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11135_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11135_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- value chicken Patty -->\n<ion-label  color="primary" stacked>value chicken Patty</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11137_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11137_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11137_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11137_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>	    \n	  \n      \n<!-- Frozen Basil sauce -->\n<ion-label  color="primary" stacked>Frozen Basil sauce</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11138_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11138_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11138_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11138_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n<!-- Green Sicky Rice Fr -->\n<ion-label  color="primary" stacked>Green Sicky Rice Fr</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11146_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11146_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11146_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11146_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- ChocBrownie Diced FZ -->\n<ion-label  color="primary" stacked>ChocBrownie Diced FZ</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11148_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11148_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11148_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11148_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- Frozen Fried Stick -->\n<ion-label  color="primary" stacked>Frozen Fried Stick </ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11149_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11149_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11149_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11149_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- RawKurobutatty118G -->\n<ion-label  color="primary" stacked>RawKurobutatty118G</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11172_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11172_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11172_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11172_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- Mixd Vegeables 1KG -->\n<ion-label  color="primary" stacked>Mixd Vegeables 1KG</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11175_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11175_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11175_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11175_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- CP Frozen spicy BIC -->\n<ion-label  color="primary" stacked>CP Frozen spicy BIC</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11178_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11178_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11178_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11178_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- FROZEN GARLI WING -->\n<ion-label  color="primary" stacked>FROZEN GARLI WING</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11179_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11179_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11179_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11179_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- FROZEN SPICY SBL -->\n<ion-label  color="primary" stacked>FROZEN SPICY SBL</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11180_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11180_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11180_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11180_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- GFPT FROZE SPICY BIC -->\n<ion-label  color="primary" stacked>GFPT FROZE SPICY BIC</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11181_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11181_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11181_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11181_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- GFPT FZ GARLIC WING -->\n<ion-label  color="primary" stacked>GFPT FZ GARLIC WING</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11182_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11182_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11182_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11182_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- GFPT FZ SPICY DRUM -->\n<ion-label  color="primary" stacked>GFPT FZ SPICY DRUM</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11183_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11183_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11183_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11183_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- GFPT FZ SPICY SBL -->\n<ion-label  color="primary" stacked>GFPT FZ SPICY SBL</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11184_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11184_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11184_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11184_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- CP FROZEN SPICY DRUM -->\n<ion-label  color="primary" stacked>CP FROZEN SPICY DRUM</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11185_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11185_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11185_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11185_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n<!-- GreenCurryChickPIE -->\n<ion-label  color="primary" stacked>GreenCurryChickPIE</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id11196_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id11196_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id11196_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id11196_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n\n<!-- US MCCAIN FRIES -->\n<ion-label  color="primary" stacked>US MCCAIN FRIES</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id12012_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id12012_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id12012_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id12012_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n<!-- AUS English Muffin -->\n<ion-label  color="primary" stacked>AUS English Muffin</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id12016_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id12016_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id12016_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id12016_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n<!-- NZ FRIES -->\n<ion-label  color="primary" stacked>NZ FRIES</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id12017_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id12017_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id12017_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id12017_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n<!-- Seasoned Beef PATTY -->\n<ion-label  color="primary" stacked>Seasoned Beef PATTY</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id12028_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id12028_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id12028_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id12028_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n<!-- ANGUS PATTY -->\n<ion-label  color="primary" stacked>ANGUS PATTY</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id12030_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id12030_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id12030_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id12030_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n<!-- Hash Browns -->\n<ion-label  color="primary" stacked>Hash Browns</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id12033_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id12033_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id12033_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id12033_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n<!-- Beef PATTY 10:1 -->\n<ion-label  color="primary" stacked>Beef PATTY 10:1</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id12038_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id12038_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id12038_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id12038_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n<!-- SUNDAE MIX 12Kgs CP -->\n<ion-label  color="primary" stacked>SUNDAE MIX 12Kgs CP</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id21123_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id21123_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id21123_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id21123_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n<!-- EGG NO.3(CS=3TRAY) -->\n<ion-label  color="primary" stacked>EGG NO.3(CS=3TRAY)</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id21125_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id21125_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id21125_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id21125_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n\n<!-- Apple Slices -->\n<ion-label  color="primary" stacked>Apple Slices</ion-label>\n<ion-row style="text-align: center">\n  <ion-col col-3>\n    CAS\n    <ion-item>\n        <ion-input [(ngModel)]="id21150_01" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    PACK \n    <ion-item>\n        <ion-input [(ngModel)]="id21150_02" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n    Subunit \n    <ion-item>\n        <ion-input [(ngModel)]="id21150_03" type="number"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col col-3>\n      Unit \n      <ion-item>\n          <strong>{{(id21150_04)}}</strong>\n      </ion-item>\n      </ion-col>\n</ion-row>\n\n\n\n\n\n\n\n\n  \n  \n  \n  \n    <!-- Submit -->\n    <div style="margin-top: 40px;">\n      <button ion-button block (click)="onClick()">Done</button>\n    </div>\n  \n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuccessPage = /** @class */ (function () {
    function SuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.credential = "";
    }
    SuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuccessPage');
        this.credential = this.navParams.get("d555");
    };
    SuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-success',template:/*ion-inline-start:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\success\success.html"*/'<!--\n  Generated template for the SuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Success</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list >\n  <ion-item *ngIf="credential" >\n  \n\n  </ion-item>\n</ion-list>\n\n\n\n  <ion-grid>    \n      <ion-label  color="primary" stacked>PORK PATTY</ion-label>\n      <ion-row style="text-align: center">\n        <ion-col col-3>\n          CAS \n          <ion-item>\n              <strong>{{d555}}</strong>\n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          PACK \n          <ion-item>\n              <strong>{{credential.PORKInput02}}</strong> \n          </ion-item>\n        </ion-col>\n        <ion-col col-3>\n          SubUnit \n          <ion-item>\n              <strong>{{credential.PORKInput03}}</strong>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4>\n          Unit \n          <ion-item>\n              <strong>{{(result)}}</strong>\n          </ion-item>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\pages\success\success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SuccessPage);
    return SuccessPage;
}());

//# sourceMappingURL=success.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_success_success__ = __webpack_require__(197);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_success_success__["a" /* SuccessPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/success/success.module#SuccessPageModule', name: 'SuccessPage', segment: 'success', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_success_success__["a" /* SuccessPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\l3lackSmith\Desktop\Pro\SE\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map