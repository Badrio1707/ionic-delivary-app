"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customer_tabs_orders_orders_module_ts"],{

/***/ 3299:
/*!*********************************************************************!*\
  !*** ./src/app/pages/customer/tabs/orders/orders-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageRoutingModule": () => (/* binding */ OrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page */ 3627);




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_0__.OrdersPage
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ 8728:
/*!*************************************************************!*\
  !*** ./src/app/pages/customer/tabs/orders/orders.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageModule": () => (/* binding */ OrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-routing.module */ 3299);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page */ 3627);







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersPageRoutingModule
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_1__.OrdersPage]
    })
], OrdersPageModule);



/***/ }),

/***/ 3627:
/*!***********************************************************!*\
  !*** ./src/app/pages/customer/tabs/orders/orders.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPage": () => (/* binding */ OrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page.html?ngResource */ 5493);
/* harmony import */ var _orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page.scss?ngResource */ 4487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);






let OrdersPage = class OrdersPage {
    constructor(api, navCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.orders = [];
    }
    ngOnInit() {
        this.GetDataOrder();
    }
    GetDataOrder() {
        this.api.getOrder().subscribe((res) => {
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
        this.navCtrl.navigateForward('/c-tabs/order-detail/' + id);
    }
};
OrdersPage.ctorParameters = () => [
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
OrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-orders',
        template: _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrdersPage);



/***/ }),

/***/ 4487:
/*!************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/orders/orders.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".flexText {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nion-item {\n  font-size: 0.8rem;\n}\n\nion-item ion-thumbnail {\n  height: 14vh;\n  width: 25vw;\n}\n\nion-item ion-thumbnail img {\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\n\nion-item h4 {\n  font-size: 1rem;\n}\n\nion-item .chip {\n  position: absolute;\n  bottom: 10px;\n  right: 5px;\n}\n\nion-item .chip ion-chip {\n  font-size: 13px;\n}\n\nion-item .chip .otw {\n  font-size: 11px;\n}\n\n.distance {\n  font-size: 0.8rem;\n  padding-top: 0.2vh;\n}\n\n.pStyle {\n  padding-bottom: 0.5vh;\n  font-size: 0.82rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDUjs7QUFBUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFWjs7QUFDSTtFQUNJLGVBQUE7QUFDUjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFBUjs7QUFFUTtFQUNJLGVBQUE7QUFBWjs7QUFHUTtFQUNJLGVBQUE7QUFEWjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7QUFGSiIsImZpbGUiOiJvcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhUZXh0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHZoO1xyXG4gICAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmNoaXB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1jaGlwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAub3R3e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5kaXN0YW5jZSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjJ2aDtcclxufVxyXG5cclxuLnBTdHlsZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41dmg7XHJcbiAgICBmb250LXNpemU6IDAuODJyZW0gIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 5493:
/*!************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/orders/orders.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"\">\n  <ion-toolbar>\n    <ion-title>Pesanan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-label class=\"ion-margin\">Riwayat</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-grid>\n    <ion-row>\n      <ion-segment [scrollable]=\"true\">\n        <ion-col size=\"3.8\">\n          <ion-button style=\"font-size: 10px; height: 25px; width: 90px;\" shape=\"round\" color=\"light\">\n            pending</ion-button>\n        </ion-col>\n        <ion-col size=\"3.8\">\n          <ion-button style=\"font-size: 10px; height: 25px; width: 90px;\" shape=\"round\" color=\"light\">\n            Process</ion-button>\n        </ion-col>\n        <ion-col size=\"5.5\">\n          <ion-button style=\"font-size: 10px; height: 25px; width: 130px;\" shape=\"round\" color=\"light\">\n            Dalam Perjalanan</ion-button>\n        </ion-col>\n        <ion-col size=\"3.2\">\n          <ion-button style=\"font-size: 10px; height: 25px; width: 90px;\" shape=\"round\" color=\"light\">\n            Selesai</ion-button>\n        </ion-col>\n      </ion-segment>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngFor=\"let order of orders\">\n    <ion-item class=\"ion-margin-top\" (click)=\"orderDetail(order?.transaction)\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"order?.image_tms ? order?.image_tms : 'assets/imgs/1.jpg'\"/>\n      </ion-thumbnail>\n      <ion-label>\n        <div class=\"flexText\">\n          <span>{{ order?.name_tms }}</span>\n          <p class=\"pStyle\">{{ rupiah(order?.price) }}</p>\n        </div>\n        <ion-text >\n          <p class=\"pStyle\">{{order?.quantity}} Items</p>\n          <p class=\"pStyle\">{{ order?.product }}</p>\n        </ion-text>\n        <ion-text color=\"medium\">\n          <span>{{ order?.date_ttop }}</span>\n          <p class=\"pStyle\">{{ order?.time_ttop }}</p>\n        </ion-text>\n        <div class=\"chip\">\n          <ion-chip *ngIf=\"order?.status_ttop == 'delivered'\" color=\"success\">Selesai</ion-chip>\n          <ion-chip *ngIf=\"order?.status_ttop == 'pending'\" color=\"danger\">Pending</ion-chip>\n          <ion-chip *ngIf=\"order?.status_ttop == 'process'\" color=\"warning\">Process</ion-chip>\n          <ion-chip *ngIf=\"order?.status_ttop == 'onTheWay'\" color=\"primary\" class=\"otw\">Dalam perjalanan</ion-chip>\n        </div>\n      </ion-label>\n    </ion-item>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_tabs_orders_orders_module_ts.js.map