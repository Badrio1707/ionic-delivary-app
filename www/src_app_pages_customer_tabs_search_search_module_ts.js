"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customer_tabs_search_search_module_ts"],{

/***/ 7591:
/*!*********************************************************************!*\
  !*** ./src/app/pages/customer/tabs/search/search-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 8141);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 8487:
/*!*************************************************************!*\
  !*** ./src/app/pages/customer/tabs/search/search.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 7591);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 8141);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 8141:
/*!***********************************************************!*\
  !*** ./src/app/pages/customer/tabs/search/search.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.html?ngResource */ 5328);
/* harmony import */ var _search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.page.scss?ngResource */ 1208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/store/store.service */ 230);






let SearchPage = class SearchPage {
  constructor(store) {
    this.store = store;
    this.model = {
      icon: 'search-outline',
      title: 'No Restaurants Record Found'
    };
    this.allRestaurants = [];
    this.restaurants = [];
  }

  ngOnInit() {
    setTimeout(() => {
      this.GetDataStore();
      this.sInput.setFocus();
    }, 500);
  }

  GetDataStore() {
    this.store.GetStore().subscribe(res => {
      this.allRestaurants = res['data'];
      console.log(this.allRestaurants);
    });
  }

  onSearchChange(event) {
    var _this = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(event.detail.value);
      _this.query = event.detail.value.toLowerCase();
      _this.restaurants = [];

      if (_this.query.length > 0) {
        _this.isLoading = true;
        setTimeout( /*#__PURE__*/(0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this.restaurants = yield _this.allRestaurants.filter(element => {
            return element.name_tms.toLowerCase().includes(_this.query);
          });
          console.log(_this.restaurants);
          _this.isLoading = false;
        }), 1500);
      }
    })();
  }

};

SearchPage.ctorParameters = () => [{
  type: src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService
}];

SearchPage.propDecorators = {
  sInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['searchInput']
  }]
};
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-search',
  template: _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SearchPage);


/***/ }),

/***/ 1208:
/*!************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/search/search.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".ios ion-searchbar {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSIiwiZmlsZSI6InNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9zIHtcclxuICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 5328:
/*!************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/search/search.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/c-tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar\n      animated=\"true\"\n      debounce=\"800\"\n      #searchInput\n      (ionChange)=\"onSearchChange($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-loading-restaurant *ngIf=\"isLoading\"></app-loading-restaurant>\n\n  <app-empty-screen *ngIf=\"!isLoading && (restaurants?.length == 0 || query?.length == 0)\" [model]=\"model\"></app-empty-screen>\n\n  <ion-list *ngIf=\"!isLoading && restaurants.length > 0\">\n    <ion-list-header>\n      <ion-label>\n        <h4>Search results for \"{{query}}\"</h4>\n      </ion-label>\n    </ion-list-header>\n    <app-restaurant \n      *ngFor=\"let restaurant of restaurants\"\n      [stores]=\"restaurant\"\n      [routerLink]=\"['/', 'tabs', 'restaurants', restaurant.id_tms]\"></app-restaurant>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_tabs_search_search_module_ts.js.map