"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_seller_s-tabs_account_account_module_ts"],{

/***/ 5345:
/*!***********************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/account/account-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 4407);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    },
    {
        path: 'onboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_welcome_onboard_onboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../pages/welcome/onboard/onboard.module */ 5502)).then(m => m.OnboardPageModule)
    },
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 81:
/*!***************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/account/account.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 5345);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 4407);







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 4407:
/*!*************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/account/account.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.html?ngResource */ 2998);
/* harmony import */ var _account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss?ngResource */ 4578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let AccountPage = class AccountPage {
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
    this.isLogin = false;
  }

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      this.isLogin = true;
    }
  }

  login() {
    var _this = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.navCtrl.navigateForward("/onboard");
    })();
  }

  logout() {
    var _this2 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.clear();
      localStorage.clear();
      yield _this2.navCtrl.navigateForward("/c-tabs");
    })();
  }

};

AccountPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}];

AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-account',
  template: _account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AccountPage);


/***/ }),

/***/ 4578:
/*!**************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/account/account.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-card {\n  height: 120px;\n}\n\nion-chip {\n  position: absolute;\n  bottom: 5px;\n  left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6ImFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG5pb24tY2hpcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxufSJdfQ== */";

/***/ }),

/***/ 2998:
/*!**************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/account/account.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\" *ngIf=\"isLogin\">\n      <ion-button fill=\"clear\" (click)=\"logout()\">\n        <ion-icon name=\"power-outline\" color=\"mediun\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Manage Akun</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!isLogin\" fullscreen=\"true\">\n  <div class=\"container\">\n    <ion-button color=\"tertiary\" shape=\"round\" routerLink=\"onboard\">\n      Login / Register\n    </ion-button>\n  </div>\n\n</ion-content>\n\n<ion-content class=\"ion-padding\" *ngIf=\"isLogin\">\n  <ion-card color=\"secondary\">\n    <ion-card-header>\n      <ion-card-title>Muhmad Badrio Taupani</ion-card-title>\n      <ion-card-subtitle>085885436239</ion-card-subtitle>\n    </ion-card-header>\n    <ion-chip color=\"dark\" mode=\"md\" outline=\"true\" (click)=\"changeCustomer()\">\n      <ion-label>Pindah Customer</ion-label>\n    </ion-chip>\n  </ion-card>\n  \n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-text color=\"medium\">\n        <h4>Akun</h4>\n      </ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-row routerLink=\"/s-tabs/orders\">\n    <ion-col size=\"12\">\n      <ion-item button detail=\"true\">\n        <ion-label>\n          <h3>Pesanan</h3>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row routerLink=\"/s-tabs/orders\">\n    <ion-col size=\"12\">\n      <ion-item button detail=\"true\">\n        <ion-label>\n          <h3>Toko Saya</h3>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item button detail=\"true\" href=\"https://drive.google.com/drive/folders/17dd39F0LjuYIDsLa7iu4WXhTdacwiSGI?usp=sharing\">\n        <ion-label>\n          <h3>Deliver IT</h3>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item button detail=\"true\">\n        <ion-label>\n          <h3>Bantuan & Laporan Saya</h3>\n        </ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_seller_s-tabs_account_account_module_ts.js.map