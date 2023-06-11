"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_seller_s-tabs_pesanan_pesanan_module_ts"],{

/***/ 3695:
/*!***********************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/pesanan/pesanan-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PesananPageRoutingModule": () => (/* binding */ PesananPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pesanan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pesanan.page */ 5649);




const routes = [
    {
        path: '',
        component: _pesanan_page__WEBPACK_IMPORTED_MODULE_0__.PesananPage
    },
];
let PesananPageRoutingModule = class PesananPageRoutingModule {
};
PesananPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PesananPageRoutingModule);



/***/ }),

/***/ 6671:
/*!***************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/pesanan/pesanan.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PesananPageModule": () => (/* binding */ PesananPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pesanan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pesanan-routing.module */ 3695);
/* harmony import */ var _pesanan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pesanan.page */ 5649);







let PesananPageModule = class PesananPageModule {
};
PesananPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pesanan_routing_module__WEBPACK_IMPORTED_MODULE_0__.PesananPageRoutingModule
        ],
        declarations: [_pesanan_page__WEBPACK_IMPORTED_MODULE_1__.PesananPage]
    })
], PesananPageModule);



/***/ }),

/***/ 5649:
/*!*************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/pesanan/pesanan.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PesananPage": () => (/* binding */ PesananPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pesanan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pesanan.page.html?ngResource */ 8521);
/* harmony import */ var _pesanan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pesanan.page.scss?ngResource */ 9642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);






let PesananPage = class PesananPage {
    constructor(api, navCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.GetDataOrder();
    }
    GetDataOrder() {
        this.api.getOrderStore().subscribe((res) => {
            this.orders = res['data'];
            console.log(this.orders);
        });
    }
    rupiah(value) {
        // Mengonversi angka menjadi format rupiah
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        });
        return formatter.format(value);
    }
    orderDetail(id) {
        this.navCtrl.navigateForward('/s-tabs/order-detail/' + id);
    }
};
PesananPage.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
PesananPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pesanan',
        template: _pesanan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pesanan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PesananPage);



/***/ }),

/***/ 9642:
/*!**************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/pesanan/pesanan.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".flexText {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nion-item {\n  font-size: 0.8rem;\n}\n\nion-item ion-thumbnail {\n  height: 14vh;\n  width: 25vw;\n}\n\nion-item ion-thumbnail img {\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\n\nion-item h4 {\n  font-size: 1rem;\n}\n\nion-item .chip {\n  position: absolute;\n  bottom: 10px;\n  right: 5px;\n}\n\nion-item .chip ion-chip {\n  font-size: 13px;\n}\n\nion-item .chip .otw {\n  font-size: 11px;\n}\n\n.distance {\n  font-size: 0.8rem;\n  padding-top: 0.2vh;\n}\n\n.pStyle {\n  padding-bottom: 0.5vh;\n  font-size: 0.82rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlc2FuYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUdBO0VBQ0ksaUJBQUE7QUFBSjs7QUFDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBQVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRVo7O0FBQ0k7RUFDSSxlQUFBO0FBQ1I7O0FBRUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQVI7O0FBRVE7RUFDSSxlQUFBO0FBQVo7O0FBR1E7RUFDSSxlQUFBO0FBRFo7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0FBRkoiLCJmaWxlIjoicGVzYW5hbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleFRleHR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICBoZWlnaHQ6IDE0dmg7XHJcbiAgICAgICAgd2lkdGg6IDI1dnc7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY2hpcHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWNoaXB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdHd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmRpc3RhbmNlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuMnZoO1xyXG59XHJcblxyXG4ucFN0eWxlIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjV2aDtcclxuICAgIGZvbnQtc2l6ZTogMC44MnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 8521:
/*!**************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/pesanan/pesanan.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-title>Pesanan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button shape=\"round\" color=\"light\">\n        <ion-icon slot=\"end\" name=\"chevron-down\"></ion-icon>\n        Status</ion-button>\n    </ion-col>\n  </ion-row>\n  <div *ngFor=\"let order of orders\">\n    <ion-item class=\"ion-margin-top\" (click)=\"orderDetail(order?.transaction)\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"order?.image_tms ? order?.image_tms : 'assets/imgs/1.jpg'\"/>\n      </ion-thumbnail>\n      <ion-label>\n        <div class=\"flexText\">\n          <span>{{order?.name_tms}}</span>\n          <p class=\"pStyle\">{{rupiah(order?.price)}}</p>\n        </div>\n        <ion-text >\n          <p class=\"pStyle\">{{order?.quantity}} Items</p>\n          <p class=\"pStyle\">{{ order?.product }}</p>\n        </ion-text>\n        <ion-text color=\"medium\">\n          <span>{{ order?.date_ttop }}</span>\n          <p class=\"pStyle\">{{ order?.time_ttop }}</p>\n        </ion-text>\n        <div class=\"chip\">\n          <ion-chip *ngIf=\"order?.status_ttop == 'delivered'\" color=\"success\">Selesai</ion-chip>\n          <ion-chip *ngIf=\"order?.status_ttop == 'pending'\" color=\"danger\">Pending</ion-chip>\n          <ion-chip *ngIf=\"order?.status_ttop == 'process'\" color=\"warning\">Process</ion-chip>\n          <ion-chip *ngIf=\"order?.status_ttop == 'onTheWay'\" color=\"primary\" class=\"otw\">Dalam perjalanan</ion-chip>\n        </div>\n\n      </ion-label>\n    </ion-item>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_seller_s-tabs_pesanan_pesanan_module_ts.js.map