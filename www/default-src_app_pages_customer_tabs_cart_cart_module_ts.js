"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_customer_tabs_cart_cart_module_ts"],{

/***/ 1872:
/*!*************************************************************!*\
  !*** ./src/app/components/cart-item/cart-item.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItemComponent": () => (/* binding */ CartItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cart_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-item.component.html?ngResource */ 4942);
/* harmony import */ var _cart_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-item.component.scss?ngResource */ 4009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let CartItemComponent = class CartItemComponent {
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
    rupiah(value) {
        // Mengonversi angka menjadi format rupiah
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        });
        return formatter.format(value);
    }
};
CartItemComponent.ctorParameters = () => [];
CartItemComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    add: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    minus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
CartItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-cart-item',
        template: _cart_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cart_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartItemComponent);



/***/ }),

/***/ 6015:
/*!*****************************************************************!*\
  !*** ./src/app/pages/customer/tabs/cart/cart-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": () => (/* binding */ CartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 4719);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 8901:
/*!*********************************************************!*\
  !*** ./src/app/pages/customer/tabs/cart/cart.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": () => (/* binding */ CartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 6015);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page */ 4719);
/* harmony import */ var src_app_components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/cart-item/cart-item.component */ 1872);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 5642);









let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_1__.CartPage, src_app_components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_2__.CartItemComponent]
    })
], CartPageModule);



/***/ }),

/***/ 4719:
/*!*******************************************************!*\
  !*** ./src/app/pages/customer/tabs/cart/cart.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.html?ngResource */ 7766);
/* harmony import */ var _cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.page.scss?ngResource */ 3674);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global/global.service */ 4031);











let CartPage = class CartPage {
  constructor(router, api, navCtrl, http, global) {
    this.router = router;
    this.api = api;
    this.navCtrl = navCtrl;
    this.http = http;
    this.global = global;
    this.model = {};
    this.deliveryCharge = 13000;
    this.instruction = '';
    this.location = {};
    this.product_ttop = [];
    this.carts = [];
  }

  ngOnInit() {
    this.getUserAddressActive();
    this.checkUrl();
    this.getModel();
  }

  getUserAddressActive() {
    this.api.getUserAddressActive().subscribe(res => {
      if (!res) {
        return;
      }

      this.model.address = res;
      console.log('this Address', this.model.address);
    });
  }

  getCart() {
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.get({
      key: 'cart'
    });
  }

  getModel() {
    var _this = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = yield _this.getCart(); // this.location = {
      //   lat: 28.653831, 
      //   lng: 77.188257, 
      //   address: 'Karol Bagh, New Delhi'
      // };

      if (data?.value) {
        _this.model = yield JSON.parse(data.value);
        console.log('getModel: ', _this.model);

        _this.calculate();
      }
    })();
  }

  calculate() {
    var _this2 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let item = _this2.model.productStore.filter(x => x.quantity > 0);

      _this2.model.productStore = item;
      _this2.model.totalPrice = 0;
      _this2.model.totalProduct = 0;
      _this2.model.deliveryCharge = 0;
      _this2.model.grandTotal = 0;
      item.forEach(element => {
        _this2.model.totalProduct += element.quantity;
        _this2.model.totalPrice += parseFloat(element.price_ttps) * parseFloat(element.quantity);
      });
      _this2.model.deliveryCharge = _this2.deliveryCharge;
      _this2.model.totalPrice = parseFloat(_this2.model.totalPrice);
      _this2.model.grandTotal = parseFloat(_this2.model.totalPrice) + parseFloat(_this2.model.deliveryCharge);

      if (_this2.model.totalProduct == 0) {
        _this2.model.totalProduct = 0;
        _this2.model.totalPrice = 0;
        _this2.model.grandTotal = 0;
        yield _this2.clearCart();
        _this2.model = null;
      }

      console.log('cart: ', _this2.model);
    })();
  }

  clearCart() {
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.remove({
      key: 'cart'
    });
  }

  checkUrl() {
    let url = this.router.url.split('/');
    console.log('url: ', url);
    const spliced = url.splice(url.length - 2, 2); // /tabs/cart url.length - 1 - 1

    this.urlCheck = spliced[0];
    console.log('urlcheck: ', this.urlCheck);
    url.push(this.urlCheck);
    this.url = url;
    console.log(this.url);
  }

  reloadPrev() {
    this.global.reloadPrev();
  }

  getPreviousUrl() {
    return this.url.join('/');
  }

  quantityPlus(index) {
    var _this3 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log(_this3.model.productStore[index]);

        if (!_this3.model.productStore[index].quantity || _this3.model.productStore[index].quantity == 0) {
          _this3.model.productStore[index].quantity = 1;

          _this3.calculate();
        } else {
          _this3.model.productStore[index].quantity += 1; // this.model.items[index].quantity = this.model.items[index].quantity + 1

          _this3.calculate();
        }

        yield _this3.saveToCart();
      } catch (e) {
        console.log(e);
      }
    })();
  }

  quantityMinus(index) {
    var _this4 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.model.productStore[index].quantity !== 0) {
        _this4.model.productStore[index].quantity -= 1; // this.model.productStore[index].quantity = this.model.productStore[index].quantity - 1
      } else {
        _this4.model.productStore[index].quantity = 0;
      }

      _this4.calculate();

      yield _this4.saveToCart();
    })();
  }

  saveToCart() {
    var _this5 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('cartData', _this5.model); // localStorage.setItem('cart', JSON.stringify(this.cartData));

        yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_3__.Preferences.set({
          key: 'cart',
          value: JSON.stringify(_this5.model)
        }); // Tambahkan kode berikut untuk menghapus data keranjang dari penyimpanan preferensi jika tidak ada produk tersisa
      } catch (e) {
        console.log(e);
      }
    })();
  }

  addAddress() {
    this.navCtrl.navigateForward('/c-tabs/address');
  }

  changeAddress() {}

  makeOrder() {
    var _this6 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.model.address) {
        _this6.global.showAlert('Alamat tidak boleh kosong!', 'Gagal');
      } else {
        try {
          _this6.model.productStore.forEach(element => {
            const product = {
              qty_ttop: element.quantity,
              description_ttop: _this6.instruction,
              id_ttps: element.id_ttps
            };

            _this6.product_ttop.push(product);
          });

          const jsonResponse = JSON.stringify(_this6.product_ttop);
          const response = yield _this6.api.addOrder({
            'product_ttop': jsonResponse
          }).subscribe(res => {
            _this6.global.showAlert("Pesanan berhasil dibuat", 'Berhasil', [{
              text: 'Batal',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {// Aksi yang akan diambil jika pengguna memilih "Batal"
              }
            }, {
              text: 'Okay',
              handler: function () {
                var _ref = (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                  _this6.global.showLoader();

                  yield _this6.clearCart();
                  yield _this6.navCtrl.navigateForward('/c-tabs/orders');
                });

                return function handler() {
                  return _ref.apply(this, arguments);
                };
              }()
            }]);
          }, error => {
            console.log("error: ", error);
          });

          if (response) {}

          console.log('order', _this6.product_ttop);
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  rupiah(value) {
    return this.global.formatRupiah(value);
  }

};

CartPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
}, {
  type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService
}];

CartPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, {
      static: false
    }]
  }]
};
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-cart',
  template: _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CartPage);


/***/ }),

/***/ 4009:
/*!**************************************************************************!*\
  !*** ./src/app/components/cart-item/cart-item.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".dotStyle {\n  border: 1px solid var(--ion-color-success);\n  padding: 0 0.1rem;\n  margin-right: 2vw;\n}\n\nion-item {\n  letter-spacing: 0.5px;\n}\n\nion-text {\n  font-size: 0.8rem;\n}\n\nion-label {\n  font-size: 0.86rem;\n}\n\nion-row {\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 2px;\n  padding: 0.3rem;\n}\n\nh5 {\n  font-weight: bold;\n}\n\n.quantity {\n  width: 2rem;\n}\n\n.price {\n  width: 3.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0kseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0FBS0o7O0FBRkE7RUFDSSxXQUFBO0FBS0o7O0FBRkE7RUFDSSxhQUFBO0FBS0oiLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvdFN0eWxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIHBhZGRpbmc6IDAgMC4xcmVtOyAvLyB0b3AgcmlnaHQgYm90dG9tIGxlZnRcclxuICAgIG1hcmdpbi1yaWdodDogMnZ3O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuaW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NnJlbTtcclxufVxyXG5pb24tcm93IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG59XHJcbmg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucXVhbnRpdHkge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG59Il19 */";

/***/ }),

/***/ 3674:
/*!********************************************************************!*\
  !*** ./src/app/pages/customer/tabs/cart/cart.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  border-radius: 5px;\n}\n\nion-input {\n  font-size: 0.8rem;\n}\n\nion-footer ion-text, ion-footer p {\n  font-size: 0.7rem;\n}\n\nion-footer ion-col ion-label {\n  margin-left: 5px;\n}\n\nion-item {\n  letter-spacing: 0.5px;\n}\n\nion-item ion-text {\n  font-size: 0.8rem;\n}\n\nion-item ion-label {\n  font-size: 0.86rem;\n}\n\nion-item h5 {\n  font-weight: bold;\n}\n\n.colStyle {\n  background-color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBR0k7RUFDSSxpQkFBQTtBQUFSOztBQUdRO0VBQ0ksZ0JBQUE7QUFEWjs7QUFLQTtFQUNJLHFCQUFBO0FBRko7O0FBR0k7RUFDSSxpQkFBQTtBQURSOztBQUdJO0VBQ0ksa0JBQUE7QUFEUjs7QUFHSTtFQUNJLGlCQUFBO0FBRFI7O0FBSUE7RUFDSSwwQ0FBQTtBQURKIiwiZmlsZSI6ImNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tdGV4dCwgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICB9XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24taXRlbSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NnJlbTtcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG4uY29sU3R5bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG59Il19 */";

/***/ }),

/***/ 4942:
/*!**************************************************************************!*\
  !*** ./src/app/components/cart-item/cart-item.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-item>\n  <ion-text color=\"success\">\n    <span class=\"dotStyle\">&#9679;</span>\n  </ion-text>\n  <ion-label class=\"ion-text-wrap\">\n    <h5>{{product?.name_ttps}}</h5>\n  </ion-label>\n  <ion-row>\n    <ion-icon color=\"success\" name=\"remove-outline\" (click)=\"quantityMinus()\"></ion-icon>\n    <ion-text class=\"ion-text-center quantity\" color=\"success\">{{product?.quantity}}</ion-text>\n    <ion-icon color=\"success\" name=\"add-outline\" (click)=\"quantityPlus()\"></ion-icon>\n  </ion-row>\n  <ion-text slot=\"end\" color=\"dark\" class=\"price ion-text-right\">\n    {{rupiah(product?.price_ttps * product.quantity)}}\n  </ion-text>\n</ion-item>";

/***/ }),

/***/ 7766:
/*!********************************************************************!*\
  !*** ./src/app/pages/customer/tabs/cart/cart.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"tertiary\">Cart</ion-title>\n    <ion-buttons slot=\"start\" *ngIf=\"urlCheck && urlCheck != 'c-tabs'\">\n      <ion-back-button [defaultHref]=\"getPreviousUrl()\" (click)=\"reloadPrev()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-empty-screen *ngIf=\"!model?.store\"></app-empty-screen>\n\n  <ng-container *ngIf=\"model?.store\">\n    <ion-list lines=\"none\" class=\"borderBottomSmall\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-img [src]=\"model?.store?.image_tms ? model.store.image_tms : 'assets/imgs/1.jpg'\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n          <ion-text><h4>{{model?.store?.name_tms}}</h4></ion-text>\n          <ion-note>{{model?.store?.address_tms}}</ion-note>\n        </ion-label>\n      </ion-item>\n      <app-cart-item \n        *ngFor=\"let product of model?.productStore; let i = index\"\n        [product]=\"product\"\n        [index]=\"i\"\n        (add)=\"quantityPlus($event)\"\n        (minus)=\"quantityMinus($event)\">\n      </app-cart-item>\n    </ion-list>\n  \n    <ion-item lines=\"none\" class=\"borderBottom\">\n      <ion-icon slot=\"start\" name=\"list-outline\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"Any instructions? We will try our best\" [(ngModel)]=\"instruction\"></ion-input>\n    </ion-item>\n  \n    <ion-list class=\"borderBottom\">\n      <ion-list-header>\n        <ion-label color=\"tertiary\">Detail Pembayaran</ion-label>\n      </ion-list-header>\n      <ion-item lines=\"none\">\n        <ion-label color=\"dark\">Item Total</ion-label>\n        <ion-text slot=\"end\" color=\"dark\">{{rupiah(model?.totalPrice)}}</ion-text>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label color=\"dark\">Delivery fee</ion-label>\n        <ion-text slot=\"end\" color=\"dark\">{{rupiah(model?.deliveryCharge)}}</ion-text>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label color=\"dark\">To Pay</ion-label>\n        <ion-text slot=\"end\" color=\"dark\"><h5>{{rupiah(model?.grandTotal)}}</h5></ion-text>\n      </ion-item>\n    </ion-list>\n  </ng-container>\n\n</ion-content>\n\n<ion-footer *ngIf=\"model?.productStore\">\n  <ion-toolbar>\n    <ion-row *ngIf=\"!model?.address\">\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" fill=\"outline\" color=\"success\" (click)=\"addAddress()\">\n          ADD ADDRESS\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"block\" color=\"success\" (click)=\"changeAddress()\">\n          CHANGE ADDRESS\n        </ion-button>\n      </ion-col>\n    </ion-row>    \n    <ion-item lines=\"none\" *ngIf=\"model?.address\">\n      <ion-button slot=\"end\" size=\"small\" fill=\"clear\" (click)=\"addAddress()\">CHANGE</ion-button>\n      <ion-icon slot=\"start\" name=\"home-outline\"></ion-icon>\n      <ion-label>\n        <h5>Deliver to HOME</h5>\n        <ion-text color=\"medium\"><p>{{ model?.address.static_ttca }}</p></ion-text>\n        <ion-text color=\"medium\"><p>{{ model?.address.dynamic_ttca }}</p></ion-text>\n      </ion-label>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"6\" class=\"ion-no-padding\" (click)=\"scrollToBottom()\">\n        <ion-item lines=\"none\" color=\"light\" class=\"ion-no-padding\">\n          <ion-label>\n            <h6>{{rupiah(model?.grandTotal)}}</h6>\n            <ion-text color=\"secondary\">\n              VIEW DETAILED BILL\n              <ion-icon name=\"chevron-down-outline\"></ion-icon>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center colStyle\" (click)=\"makeOrder()\">\n        <ion-button color=\"white\" fill=\"clear\">Buat Pesanan</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_customer_tabs_cart_cart_module_ts.js.map