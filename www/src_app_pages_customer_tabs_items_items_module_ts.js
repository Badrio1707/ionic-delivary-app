"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customer_tabs_items_items_module_ts"],{

/***/ 9348:
/*!***************************************************!*\
  !*** ./src/app/components/item/item.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemComponent": () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.component.html?ngResource */ 4541);
/* harmony import */ var _item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.component.scss?ngResource */ 5062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let ItemComponent = class ItemComponent {
    constructor() {
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.minus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    quantityPlus() {
        this.add.emit(this.index);
    }
    quantityMinus() {
        this.minus.emit(this.index);
    }
};
ItemComponent.ctorParameters = () => [];
ItemComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    add: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    minus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-item',
        template: _item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemComponent);



/***/ }),

/***/ 7248:
/*!*****************************************************************************!*\
  !*** ./src/app/components/restaurant-detail/restaurant-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantDetailComponent": () => (/* binding */ RestaurantDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _restaurant_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-detail.component.html?ngResource */ 133);
/* harmony import */ var _restaurant_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant-detail.component.scss?ngResource */ 6385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let RestaurantDetailComponent = class RestaurantDetailComponent {
    constructor() { }
    ngOnInit() { }
    getCuisine(cuisine) {
        return cuisine.join(', ');
    }
};
RestaurantDetailComponent.ctorParameters = () => [];
RestaurantDetailComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
RestaurantDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-restaurant-detail',
        template: _restaurant_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_restaurant_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RestaurantDetailComponent);



/***/ }),

/***/ 1460:
/*!*******************************************************************!*\
  !*** ./src/app/pages/customer/tabs/items/items-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageRoutingModule": () => (/* binding */ ItemsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.page */ 9302);




const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_0__.ItemsPage
    },
    {
        path: 'cart',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_customer_tabs_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../cart/cart.module */ 8901)).then(m => m.CartPageModule)
    },
];
let ItemsPageRoutingModule = class ItemsPageRoutingModule {
};
ItemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemsPageRoutingModule);



/***/ }),

/***/ 5785:
/*!***********************************************************!*\
  !*** ./src/app/pages/customer/tabs/items/items.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageModule": () => (/* binding */ ItemsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-routing.module */ 1460);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page */ 9302);
/* harmony import */ var src_app_components_item_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/item/item.component */ 9348);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var src_app_components_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/restaurant-detail/restaurant-detail.component */ 7248);










let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _items_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_1__.ItemsPage, src_app_components_item_item_component__WEBPACK_IMPORTED_MODULE_2__.ItemComponent, src_app_components_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_4__.RestaurantDetailComponent]
    })
], ItemsPageModule);



/***/ }),

/***/ 9302:
/*!*********************************************************!*\
  !*** ./src/app/pages/customer/tabs/items/items.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPage": () => (/* binding */ ItemsPage)
/* harmony export */ });
/* harmony import */ var C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page.html?ngResource */ 5897);
/* harmony import */ var _items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items.page.scss?ngResource */ 2918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global/global.service */ 4031);










let ItemsPage = class ItemsPage {
  constructor(api, navCtrl, route, router, global, platform) {
    this.api = api;
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.global = global;
    this.platform = platform;
    this.data = {};
    this.items = [];
    this.veg = false;
    this.cartData = {};
    this.storedData = {};
    this.model = {
      icon: 'fast-food-outline',
      title: 'No Menu Available'
    };
    this.carts = [];
    this.productStore = [];
    this.stores = {};
  }

  ionViewDidEnter() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.navCtrl.navigateForward('/c-tabs');
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);

      if (!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }

      this.id = paramMap.get('restaurantId');
      console.log('id: ', this.id);
    });
    this.getProductByStore();
    this.GetDataStore();
    this.getData();
  }

  GetDataStore() {
    this.api.getStoreById(this.id).subscribe(res => {
      this.stores = res;
      console.log('store: ', this.stores);
    });
  }

  getProductByStore() {
    this.api.productByStore(this.id).subscribe(res => {
      this.productStore = res['data'];
      console.log('product: ', this.productStore);
    });
  }

  getCart() {
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
      key: 'cart'
    });
  }

  getData() {
    var _this = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      _this.data = {};
      _this.cartData = {};
      _this.storedData = {};
      setTimeout( /*#__PURE__*/(0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        let data = _this.stores;
        _this.data = data; //     this.categories = this.categories.filter(x => x.uid === this.id );
        //     this.items = this.allItems.filter(x => x.uid === this.id);

        console.log('restaurant: ', _this.data);
        let cart = yield _this.getCart();
        console.log('cart: ', cart);

        if (cart?.value) {
          _this.storedData = JSON.parse(cart.value);
          console.log('storedData: ', _this.storedData);

          if (_this.id == _this.storedData.store.id_tms && _this.productStore.length > 0) {
            _this.productStore.forEach(element => {
              _this.storedData.productStore.forEach(ele => {
                if (element.id_ttps != ele.id_ttps) return;
                element.quantity = ele.quantity;
              });
            });
          }

          _this.cartData.totalProduct = _this.storedData.totalProduct;
          _this.cartData.totalPrice = _this.storedData.totalPrice;
        }

        _this.isLoading = false;
      }), 1500);
    })();
  } // vegOnly(event) {
  //   console.log(event.detail.checked);
  //   this.items = [];
  //   if(event.detail.checked == true) this.items = this.allItems.filter(x => x.veg === true);
  //   else this.items = this.allItems;
  //   console.log('items: ', this.items);
  // }


  quantityPlus(index) {
    var _this2 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let token = localStorage.getItem('token');

      if (!token) {
        _this2.global.alertLogin("Silahkan Login terlebih dahulu untuk pesan makanan");
      } else {
        try {
          // console.log(this.productStore[index]);
          if (!_this2.productStore[index].quantity || _this2.productStore[index].quantity == 0) {
            _this2.productStore[index].quantity = 1;
          } else {
            _this2.productStore[index].quantity += 1; // this.productStore[index].quantity = this.productStore[index].quantity + 1
          }

          _this2.calculate();

          yield _this2.saveToCart();
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }

  quantityMinus(index) {
    var _this3 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.productStore[index].quantity !== 0) {
        _this3.productStore[index].quantity -= 1; // this.productStore[index].quantity = this.productStore[index].quantity - 1
      } else {
        _this3.productStore[index].quantity = 0;
      }

      _this3.calculate();

      yield _this3.saveToCart();
    })();
  }

  calculate() {
    var _this4 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this4.productStore);
      _this4.cartData.productStore = [];

      let product = _this4.productStore.filter(x => x.quantity > 0);

      console.log('added productStore: ', product);
      _this4.cartData.productStore = product;
      _this4.cartData.totalPrice = 0;
      _this4.cartData.totalProduct = 0;
      product.forEach(element => {
        _this4.cartData.totalProduct += element.quantity;
        _this4.cartData.totalPrice += parseFloat(element.price_ttps) * parseFloat(element.quantity);
      });
      _this4.cartData.totalPrice = parseFloat(_this4.cartData.totalPrice);

      if (_this4.cartData.totalProduct == 0) {
        _this4.cartData.totalProduct = 0;
        _this4.cartData.totalPrice = 0;
        yield _this4.saveToCart; // this.cartData = {}
      }

      console.log('cart: ', _this4.cartData);
    })();
  }

  saveToCart() {
    var _this5 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this5.cartData.store = {};
        _this5.cartData.store = _this5.stores;
        console.log('cartData', _this5.cartData); // localStorage.setItem('cart', JSON.stringify(this.cartData));

        yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
          key: 'cart',
          value: JSON.stringify(_this5.cartData)
        }); // Tambahkan kode berikut untuk menghapus data keranjang dari penyimpanan preferensi jika tidak ada produk tersisa

        if (_this5.cartData.productStore.length === 0) {
          yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.remove({
            key: 'cart'
          });
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }

  viewCart() {
    var _this6 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.cartData.productStore && _this6.cartData.productStore.length > 0) yield _this6.saveToCart();
      console.log('router url: ', _this6.router.url);

      _this6.router.navigate([_this6.router.url + '/cart']);
    })();
  }

  rupiah(val) {
    return this.global.formatRupiah(val);
  }

};

ItemsPage.ctorParameters = () => [{
  type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
}];

ItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-items',
  template: _items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ItemsPage);


/***/ }),

/***/ 5062:
/*!****************************************************************!*\
  !*** ./src/app/components/item/item.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-thumbnail {\n  height: 10vh;\n  width: 20vw;\n}\nion-thumbnail img {\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\nion-row {\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 2px;\n  padding: 0.3rem;\n}\n.quantity {\n  width: 2rem;\n}\nion-text {\n  font-size: 0.8rem;\n}\n.add {\n  padding: 0 1.3rem;\n}\nion-label {\n  font-size: 0.95rem !important;\n}\nion-label p {\n  font-size: 0.8rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRVI7QUFFQTtFQUNJLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7QUFDSjtBQUVBO0VBQ0ksaUJBQUE7QUFDSjtBQUNBO0VBQ0ksaUJBQUE7QUFFSjtBQUFBO0VBQ0ksNkJBQUE7QUFHSjtBQUZJO0VBQ0ksNEJBQUE7QUFJUiIsImZpbGUiOiJpdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbCB7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICB3aWR0aDogMjB2dztcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxufVxyXG5cclxuLnF1YW50aXR5IHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG5pb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG4uYWRkIHtcclxuICAgIHBhZGRpbmc6IDAgMS4zcmVtO1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6385:
/*!******************************************************************************************!*\
  !*** ./src/app/components/restaurant-detail/restaurant-detail.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = ".dashedBorderBottom {\n  padding-bottom: 1vh;\n  margin-bottom: 1vh;\n}\n\nh1 {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InJlc3RhdXJhbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kYXNoZWRCb3JkZXJCb3R0b20ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDF2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcclxufVxyXG5oMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59Il19 */";

/***/ }),

/***/ 2918:
/*!**********************************************************************!*\
  !*** ./src/app/pages/customer/tabs/items/items.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".veg {\n  align-items: center;\n}\n\nion-list-header {\n  font-size: 1rem;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n\nion-footer h4, ion-footer p {\n  margin-left: 3%;\n}\n\nion-footer p {\n  font-size: 0.55rem !important;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUlJO0VBQ0ksZUFBQTtBQURSOztBQUdJO0VBQ0ksNkJBQUE7RUFDQSxxQkFBQTtBQURSIiwiZmlsZSI6Iml0ZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZWcge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBoNCwgcCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjU1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */";

/***/ }),

/***/ 4541:
/*!****************************************************************!*\
  !*** ./src/app/components/item/item.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-item>\n  <ion-thumbnail slot=\"start\">\n    <img [src]=\"product?.image_ttps ? product.image_ttps : 'assets/imgs/1.jpg'\" />\n  </ion-thumbnail>\n  <ion-label>\n    <!-- <h4>{{product?.name}}</h4> -->\n    {{product?.name_ttps}}\n    <p class=\"ion-text-wrap\">{{product?.desc}}</p>\n    <ion-text><p>Rp {{product?.price_ttps}}</p></ion-text>\n  </ion-label>\n  <ion-row (click)=\"quantityPlus()\" *ngIf=\"!product?.quantity || product?.quantity <= 0\">\n    <ion-text class=\"add\" color=\"success\">Add</ion-text>\n  </ion-row>\n  <ion-row *ngIf=\"product?.quantity > 0\">\n    <ion-icon color=\"success\" name=\"remove-outline\" (click)=\"quantityMinus()\"></ion-icon>\n    <ion-text class=\"ion-text-center quantity\" color=\"success\">{{product?.quantity}}</ion-text>\n    <ion-icon color=\"success\" name=\"add-outline\" (click)=\"quantityPlus()\"></ion-icon>\n  </ion-row>\n</ion-item>";

/***/ }),

/***/ 133:
/*!******************************************************************************************!*\
  !*** ./src/app/components/restaurant-detail/restaurant-detail.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid class=\"borderBottom\" *ngIf=\"isLoading\">\n  <ion-item lines=\"none\" class=\"ion-padding-horizontal dashedBorderBottom\">\n    <ion-label>\n      <h1>\n        <ion-skeleton-text style=\"width: 50%\" animated></ion-skeleton-text>\n      </h1>\n      <p>\n        <ion-skeleton-text style=\"width: 60%\" animated></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text style=\"width: 80%\" animated></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 35%\"></ion-skeleton-text></p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 35%\"></ion-skeleton-text></p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <p><ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text></p>\n        <p><ion-skeleton-text animated style=\"width: 35%\"></ion-skeleton-text></p>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid *ngIf=\"data?.name_tms && !isLoading\" class=\"borderBottom ion-margin-top\">\n  <ion-row class=\"ion-padding-horizontal dashedBorderBottom\">\n    <ion-label>\n      <h1>{{data?.name_tms}}</h1>\n      <ion-text><p>{{data?.phone_tms}}</p></ion-text>\n      <p>{{data?.address_tms}}</p>\n    </ion-label>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <ion-text>\n          <p>\n            <ion-icon name=\"star\"></ion-icon>{{data?.rating}}\n          </p>\n        </ion-text>\n        <p>Ratings</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <ion-text>\n          <p>\n            {{data?.delivery_time}} MINS\n          </p>\n        </ion-text>\n        <p>Delivery Time</p>\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"ion-text-center\">\n        <ion-text>\n          <p>\n            Rp. {{data?.price}}\n          </p>\n        </ion-text>\n        <p>For Two</p>\n      </ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>";

/***/ }),

/***/ 5897:
/*!**********************************************************************!*\
  !*** ./src/app/pages/customer/tabs/items/items.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>items</ion-title> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"c-tabs\" ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-restaurant-detail [data]=\"stores\" [isLoading]=\"isLoading\"></app-restaurant-detail>\n\n  <app-loading-restaurant *ngIf=\"isLoading\"></app-loading-restaurant>\n  <app-empty-screen [model]=\"model\" *ngIf=\"!isLoading && productStore?.length == 0\"></app-empty-screen>\n\n  <ion-list lines=\"none\">\n    <ng-container *ngFor=\"let product of productStore; let i = index\">\n      <app-item \n        [product]=\"product\"\n        [index]=\"i\"\n        (add)=\"quantityPlus($event)\"\n        (minus)=\"quantityMinus($event)\">\n      </app-item>\n    </ng-container>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer *ngIf=\"cartData?.totalProduct\">\n  <ion-toolbar color=\"success\">\n    <ion-label color=\"white\">\n      <h4>{{cartData?.totalProduct}} Item<span *ngIf=\"cartData?.totalProduct > 1\">s</span> | {{rupiah(cartData?.totalPrice)}}</h4>\n      <ion-text color=\"light\">\n        <p>Extra charges may apply</p>\n      </ion-text>\n    </ion-label>\n    <ion-button slot=\"end\" fill=\"clear\" color=\"white\" (click)=\"viewCart()\">\n      <ion-icon slot=\"end\" name=\"basket-outline\"></ion-icon>\n      VIEW CART\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_tabs_items_items_module_ts.js.map