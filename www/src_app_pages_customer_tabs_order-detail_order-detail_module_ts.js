"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customer_tabs_order-detail_order-detail_module_ts"],{

/***/ 4171:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/order-detail/order-detail-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPageRoutingModule": () => (/* binding */ OrderDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail.page */ 1414);




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_0__.OrderDetailPage
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ 4660:
/*!*************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/order-detail/order-detail.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPageModule": () => (/* binding */ OrderDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail-routing.module */ 4171);
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.page */ 1414);







let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderDetailPageRoutingModule
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_1__.OrderDetailPage]
    })
], OrderDetailPageModule);



/***/ }),

/***/ 1414:
/*!***********************************************************************!*\
  !*** ./src/app/pages/customer/tabs/order-detail/order-detail.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPage": () => (/* binding */ OrderDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _order_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail.page.html?ngResource */ 3995);
/* harmony import */ var _order_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.page.scss?ngResource */ 1029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let OrderDetailPage = class OrderDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderDetailPage.ctorParameters = () => [];
OrderDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-order-detail',
        template: _order_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_order_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrderDetailPage);



/***/ }),

/***/ 1029:
/*!************************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/order-detail/order-detail.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1kZXRhaWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3995:
/*!************************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/order-detail/order-detail.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>order-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_tabs_order-detail_order-detail_module_ts.js.map