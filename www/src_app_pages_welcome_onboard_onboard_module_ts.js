"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_welcome_onboard_onboard_module_ts"],{

/***/ 9538:
/*!*****************************************************************!*\
  !*** ./src/app/pages/welcome/onboard/onboard-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardPageRoutingModule": () => (/* binding */ OnboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _onboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboard.page */ 418);




const routes = [
    {
        path: '',
        component: _onboard_page__WEBPACK_IMPORTED_MODULE_0__.OnboardPage
    }
];
let OnboardPageRoutingModule = class OnboardPageRoutingModule {
};
OnboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnboardPageRoutingModule);



/***/ }),

/***/ 5502:
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/onboard/onboard.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardPageModule": () => (/* binding */ OnboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _onboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboard-routing.module */ 9538);
/* harmony import */ var _onboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard.page */ 418);







let OnboardPageModule = class OnboardPageModule {
};
OnboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _onboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnboardPageRoutingModule
        ],
        declarations: [_onboard_page__WEBPACK_IMPORTED_MODULE_1__.OnboardPage]
    })
], OnboardPageModule);



/***/ }),

/***/ 418:
/*!*******************************************************!*\
  !*** ./src/app/pages/welcome/onboard/onboard.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardPage": () => (/* binding */ OnboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _onboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboard.page.html?ngResource */ 658);
/* harmony import */ var _onboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard.page.scss?ngResource */ 460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global/global.service */ 4031);






let OnboardPage = class OnboardPage {
    constructor(router, global) {
        this.router = router;
        this.global = global;
    }
    ngOnInit() {
        this.isLoggedIn();
        this.checkUrl();
    }
    checkUrl() {
        let url = (this.router.url).split('/');
        console.log('url: ', url);
        const spliced = url.splice(url.length - 2, 2); // /tabs/cart url.length - 1 - 1
        this.urlCheck = spliced[0];
        console.log('urlcheck: ', this.urlCheck);
        url.push(this.urlCheck);
        this.url = url;
        console.log(this.url);
    }
    isLoggedIn() {
        let role = localStorage.getItem('role');
        if (role === 'customer') {
            this.router.navigateByUrl('c-tabs');
        }
        else if (role === 'store') {
            this.router.navigateByUrl('s-tabs');
        }
    }
    reloadPrev() {
        this.global.reloadPrev();
    }
};
OnboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
OnboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-onboard',
        template: _onboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_onboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnboardPage);



/***/ }),

/***/ 460:
/*!********************************************************************!*\
  !*** ./src/app/pages/welcome/onboard/onboard.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".img-container {\n  margin-top: 18vh;\n  display: flex;\n  justify-content: center;\n}\n.img-container ion-img {\n  width: 100%;\n}\n.message-container {\n  margin-top: 7vh;\n  margin-bottom: 5vh;\n  text-align: center;\n}\n.message-container h1 {\n  font-weight: 700;\n  font-size: 23px;\n  color: var(--ion-color-tertiary-tint);\n}\n.message-container .text-warning {\n  color: var(--ion-color-primary);\n}\n.message-container .text-danger {\n  color: var(--ion-color-danger-tint);\n}\n.social-login-container {\n  margin: 4vh 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.social-login-container p {\n  top: 0;\n  color: var(--ion-color-tertiary-tint);\n  margin: 0;\n  text-align: center;\n  margin-top: -9px;\n  background: transparent;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: small;\n  font-weight: 500;\n}\n.social-login-container .social {\n  display: flex;\n  justify-content: space-around;\n  width: 35%;\n  margin-top: 2vh;\n}\n.social-login-container .social-icon {\n  width: 40px;\n  height: 40px;\n}\n.social-login-container .social-icon ion-img {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtBQUNSO0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQUFSO0FBR0k7RUFDSSwrQkFBQTtBQURSO0FBSUk7RUFDSSxtQ0FBQTtBQUZSO0FBTUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJO0VBQ0ksTUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSlI7QUFPSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTFI7QUFPUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBTFoiLCJmaWxlIjoib25ib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGlvbi1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVzc2FnZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LXdhcm5pbmcge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtZGFuZ2VyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcclxuICAgIH1cclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiA0dmggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC05cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1pY29uIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 658:
/*!********************************************************************!*\
  !*** ./src/app/pages/welcome/onboard/onboard.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"c-tabs\" (click)=\"reloadPrev()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <!-- Image -->\n  <div class=\"img-container\">\n    <ion-img src=\"../../../assets/images/onb.png\"></ion-img>\n  </div>\n\n  <!-- Message -->\n  <div class=\"message-container\">\n    <h1>Dapatkan <span class=\"text-warning\">barang</span>\n      <br>yang anda inginkan\n      <br><span class=\"text-danger\">dari rumah</span>\n    </h1>\n  </div>\n\n  <!-- Buttons -->\n  <div>\n    <ion-button expand=\"block\" color=\"secondary\" class=\"ion-margin-bottom\" routerLink=\"/login\">Masuk</ion-button>\n    <ion-button expand=\"block\" color=\"primary\"  fill=\"outline\" class=\"ion-margin-bottom\" routerLink=\"/register\">Daftar</ion-button>\n  </div>\n  \n  <!-- Other logins\n  <div class=\"social-login-container\">\n    <p>atau login dengan</p>\n    <div class=\"social\">\n      <div class=\"social-icon\">\n        <ion-img src=\"../../../assets/icon/google.png\" (click)=\"gLogin()\"></ion-img>\n      </div>\n      <div class=\"social-icon\">\n        <ion-img src=\"../../../assets/icon/fb.png\" (click)=\"fLogin\"></ion-img>\n      </div>\n    </div>\n  </div> -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcome_onboard_onboard_module_ts.js.map