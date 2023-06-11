"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_seller_s-tabs_s-tabs_module_ts"],{

/***/ 3938:
/*!**************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/s-tabs-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STabsPageRoutingModule": () => (/* binding */ STabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _s_tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./s-tabs.page */ 1422);




const routes = [
    {
        path: '',
        component: _s_tabs_page__WEBPACK_IMPORTED_MODULE_0__.STabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_seller_s-tabs_dashboard-toko_dashboard-toko_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard-toko/dashboard-toko.module */ 9035)).then(m => m.DashboardTokoPageModule)
            },
            {
                path: 'product',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_seller_s-tabs_produk_produk_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./produk/produk.module */ 9930)).then(m => m.ProdukPageModule)
            },
            {
                path: 'orders',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("src_app_pages_seller_s-tabs_pesanan_pesanan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pesanan/pesanan.module */ 6671)).then(m => m.PesananPageModule)
            },
            {
                path: 'account',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("src_app_pages_seller_s-tabs_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 81)).then(m => m.AccountPageModule)
            },
            {
                path: '',
                redirectTo: '/s-tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'order-detail/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_seller_s-tabs_order-detail_order-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./order-detail/order-detail.module */ 3765)).then(m => m.OrderDetailPageModule)
    }
];
let STabsPageRoutingModule = class STabsPageRoutingModule {
};
STabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], STabsPageRoutingModule);



/***/ }),

/***/ 5147:
/*!******************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/s-tabs.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STabsPageModule": () => (/* binding */ STabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _s_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./s-tabs-routing.module */ 3938);
/* harmony import */ var _s_tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./s-tabs.page */ 1422);







let STabsPageModule = class STabsPageModule {
};
STabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _s_tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.STabsPageRoutingModule
        ],
        declarations: [_s_tabs_page__WEBPACK_IMPORTED_MODULE_1__.STabsPage]
    })
], STabsPageModule);



/***/ }),

/***/ 1422:
/*!****************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/s-tabs.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STabsPage": () => (/* binding */ STabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _s_tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./s-tabs.page.html?ngResource */ 7580);
/* harmony import */ var _s_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./s-tabs.page.scss?ngResource */ 6134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let STabsPage = class STabsPage {
    constructor() { }
    ngOnInit() {
    }
};
STabsPage.ctorParameters = () => [];
STabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-s-tabs',
        template: _s_tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_s_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], STabsPage);



/***/ }),

/***/ 6134:
/*!*****************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/s-tabs.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzLXRhYnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7580:
/*!*****************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/s-tabs.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"product\">\n      <ion-icon name=\"fast-food-outline\"></ion-icon>\n      <ion-label>Produk</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"orders\">\n      <ion-icon name=\"receipt-outline\"></ion-icon>\n      <ion-label>Pesanan</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_seller_s-tabs_s-tabs_module_ts.js.map