"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_api_api_service_ts"],{

/***/ 7172:
/*!*****************************************************!*\
  !*** ./src/app/services/address/address.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressService": () => (/* binding */ AddressService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 1228);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);





let AddressService = class AddressService {
    constructor(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    GetUserAddressActive() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/user/getAddressActive', { headers: this.auth.jwt() });
    }
    GetUserAddress() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/user/getAddress', { headers: this.auth.jwt() });
    }
    CreateAddress(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/user/addAddress', data, { headers: this.auth.jwt() });
    }
    updateAddress(data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/user/editAddress/' + data.id_ttca, data, { headers: this.auth.jwt() });
    }
    deleteAddress(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/deleteAddress/' + id);
    }
};
AddressService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AddressService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AddressService);



/***/ }),

/***/ 5146:
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 1228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product.service */ 5798);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store.service */ 230);
/* harmony import */ var _address_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address/address.service */ 7172);
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order/order.service */ 4081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);










let ApiService = class ApiService {
  constructor(router, authService, product, store, address, order) {
    this.router = router;
    this.authService = authService;
    this.product = product;
    this.store = store;
    this.address = address;
    this.order = order;
    this.productAdded = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }

  emitProductAdded() {
    this.productAdded.next();
  } // Auth Api


  registerUser(form) {
    return this.authService.registerUser(form).subscribe(data => {
      const jsonResponse = JSON.parse(JSON.stringify(data));
      console.log(jsonResponse.id);
      console.log("Success ==> " + JSON.stringify(data));
      this.router.navigate(['/c-tabs']);
    }, err => {
      console.error('Gagal Create user ===> ', err.status);
    });
  }

  loginUser(form) {
    var _this = this;

    return this.authService.loginUser(form).subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        console.log('Data User ===>' + JSON.stringify(res['data'].role));
        console.log('Token ===>' + JSON.stringify(res['token']));
        localStorage.setItem('role', res['data'].role);

        _this.authService.setToken(res['token']);

        if (res['data'].role === 'customer') {
          _this.router.navigateByUrl('c-tabs');
        } else if (res['data'].role === 'store') {
          _this.router.navigateByUrl('s-tabs');
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  } //Product Services


  productByStore(id) {
    return this.product.productByStore(id);
  }

  productStore() {
    return this.product.productStore();
  }

  createProduct(data) {
    return this.product.createProduct(data);
  }

  deleteProduct(id) {
    return this.product.deleteProduct(id);
  }

  publish(id) {
    return this.product.publish(id);
  }

  unpublish(id) {
    return this.product.unpublish(id);
  } // Store Services


  getStore() {
    return this.store.GetStore();
  }

  getStoreById(id) {
    return this.store.GetStoreById(id);
  } // Address Services


  getUserAddressActive() {
    return this.address.GetUserAddressActive();
  }

  getUserAddress() {
    return this.address.GetUserAddress();
  }

  createAddress(data) {
    return this.address.CreateAddress(data);
  }

  updateAddress(data) {
    return this.address.updateAddress(data);
  }

  deleteAddress(id) {
    return this.address.deleteAddress(id);
  } // Order Services


  addOrder(order) {
    return this.order.addOrder(order);
  }

  getOrder() {
    return this.order.getUserOrder();
  }

  getOrderStore() {
    return this.order.getStoreOrder();
  }

  getOrderDetail(id) {
    return this.order.getOrderDetails(id);
  }

  takeOrder(id) {
    return this.order.takeOrder(id);
  }

};

ApiService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
}, {
  type: _product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService
}, {
  type: _store_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService
}, {
  type: _address_address_service__WEBPACK_IMPORTED_MODULE_4__.AddressService
}, {
  type: _order_order_service__WEBPACK_IMPORTED_MODULE_5__.OrderService
}];

ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], ApiService);


/***/ }),

/***/ 1228:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);






let AuthService = class AuthService {
  constructor(http) {
    this.http = http;
    this.tokenKey = 'auth_token';
  }

  jwt() {
    let token = localStorage.getItem('token');
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'Authorization': token,
      'Access-Control-Allow-Origin': '*'
    });
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    var _this = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.remove({
        key: _this.tokenKey
      });
    })();
  }

  isAuthenticated() {
    var _this2 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = yield _this2.jwt();
      return token !== null;
    })();
  }

  registerUser(form) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ApiURL + 'api/register', {
      "name_tmu": form.name_tmu,
      "phone_tmu": form.phone_tmu,
      "password": form.password
    }, {
      responseType: 'json'
    });
  }

  loginUser(form) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ApiURL + 'api/login', {
      "phone_tmu": form.phone_tmu,
      "password": form.password
    }, {
      responseType: 'json'
    });
  }

};

AuthService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}];

AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 4081:
/*!*************************************************!*\
  !*** ./src/app/services/order/order.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 1228);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);





let OrderService = class OrderService {
    constructor(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    addOrder(order) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/user/addOrder', order, { headers: this.auth.jwt() });
    }
    getUserOrder() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/user/showOrder', { headers: this.auth.jwt() });
    }
    getStoreOrder() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/seller/orderStore', { headers: this.auth.jwt() });
    }
    getOrderDetails(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/getOrderDetail/' + id, { headers: this.auth.jwt() });
    }
    takeOrder(id) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/seller/takeOrder/' + id, '', { headers: this.auth.jwt() });
    }
};
OrderService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
OrderService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ 5798:
/*!*****************************************************!*\
  !*** ./src/app/services/product/product.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 1228);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);





let ProductService = class ProductService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    productByStore(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/product/' + id);
    }
    productStore() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/seller/productStore', { headers: this.auth.jwt() });
    }
    createProduct(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/seller/createProduct', data, { headers: this.auth.jwt() });
    }
    deleteProduct(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/seller/deleteProduct/' + id, { headers: this.auth.jwt() });
    }
    publish(id) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/seller/publishProduct/' + id, '', { headers: this.auth.jwt() });
    }
    unpublish(id) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/seller/unpublishProduct/' + id, '', { headers: this.auth.jwt() });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
ProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ 230:
/*!*************************************************!*\
  !*** ./src/app/services/store/store.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreService": () => (/* binding */ StoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 1228);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);





let StoreService = class StoreService {
    constructor(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    GetStore() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/store');
    }
    GetStoreById(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiURL + 'api/storeId/' + id);
    }
};
StoreService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
StoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], StoreService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_api_api_service_ts.js.map