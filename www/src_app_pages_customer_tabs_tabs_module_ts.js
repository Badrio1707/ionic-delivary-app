"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customer_tabs_tabs_module_ts"],{

/***/ 8591:
/*!************************************************************!*\
  !*** ./src/app/pages/customer/tabs/tabs-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 1849);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_customer_tabs_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 5073)).then(m => m.HomePageModule)
            },
            {
                path: 'cart',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_pages_customer_tabs_cart_cart_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cart/cart.module */ 8901)).then(m => m.CartPageModule)
            },
            {
                path: 'orders',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("src_app_pages_customer_tabs_orders_orders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./orders/orders.module */ 8728)).then(m => m.OrdersPageModule)
            },
            {
                path: 'account',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_customer_tabs_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 9106)).then(m => m.AccountPageModule)
            },
            {
                path: '',
                redirectTo: '/c-tabs/home',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: 'restaurants/:restaurantId',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_customer_tabs_items_items_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./items/items.module */ 5785)).then(m => m.ItemsPageModule)
    },
    {
        path: 'address',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_customer_tabs_address_address_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./address/address.module */ 3802)).then(m => m.AddressPageModule)
    },
    {
        path: 'search',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_preferences_dist_esm_index_js"), __webpack_require__.e("default-src_app_services_api_api_service_ts"), __webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_customer_tabs_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 8487)).then(m => m.SearchPageModule)
    },
    {
        path: 'order-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_customer_tabs_order-detail_order-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-detail/order-detail.module */ 4660)).then(m => m.OrderDetailPageModule)
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 9204:
/*!****************************************************!*\
  !*** ./src/app/pages/customer/tabs/tabs.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 8591);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 1849);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 1849:
/*!**************************************************!*\
  !*** ./src/app/pages/customer/tabs/tabs.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5376);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 9819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 9819:
/*!***************************************************************!*\
  !*** ./src/app/pages/customer/tabs/tabs.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5376:
/*!***************************************************************!*\
  !*** ./src/app/pages/customer/tabs/tabs.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"fast-food-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cart\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-label>Cart</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"orders\">\n      <ion-icon name=\"receipt-outline\"></ion-icon>\n      <ion-label>Pesanan</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Account</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_tabs_tabs_module_ts.js.map