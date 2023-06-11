"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_seller_s-tabs_order-detail_order-detail_module_ts"],{

/***/ 8367:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/order-detail/order-detail-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPageRoutingModule": () => (/* binding */ OrderDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail.page */ 6301);




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

/***/ 3765:
/*!*************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/order-detail/order-detail.module.ts ***!
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
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail-routing.module */ 8367);
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.page */ 6301);







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

/***/ 6301:
/*!***********************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/order-detail/order-detail.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPage": () => (/* binding */ OrderDetailPage)
/* harmony export */ });
/* harmony import */ var C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _order_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.page.html?ngResource */ 695);
/* harmony import */ var _order_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-detail.page.scss?ngResource */ 9339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global/global.service */ 4031);









let OrderDetailPage = class OrderDetailPage {
  constructor(route, navCtrl, api, global) {
    this.route = route;
    this.navCtrl = navCtrl;
    this.api = api;
    this.global = global;
    this.store = '';
    this.inv = '';
    this.customer = '';
    this.cAddress = '';
    this.sAddress = '';
    this.status = '';
    this.date = '';
    this.time = '';
    this.ongkir = 0;
    this.harga = 0;
    this.total = 0;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);

      if (!paramMap.has('id')) {
        this.navCtrl.back();
        return;
      }

      this.id = paramMap.get('id');
      console.log('id: ', this.id);
    });
    this.getOrderDetail();
  }

  getOrderDetail() {
    this.api.getOrderDetail(this.id).subscribe(res => {
      this.store = res[0].name_tms;
      this.inv = res[0].transaction_ttop;
      this.customer = res[0].name_ttca;
      this.cAddress = res[0].static_ttca + ', ' + res[0].dynamic_ttca;
      this.sAddress = res[0].address_tms;
      this.status = res[0].status_ttop;
      this.date = res[0].date;
      this.time = res[0].time;
      this.orders = res;
      console.log(this.cAddress); // Menghitung harga

      this.harga = 0;

      for (let order of this.orders) {
        this.harga += order.price_ttps * order.qty_ttop;
      } // Menambahkan ongkir ke total


      this.total = this.harga + this.ongkir;
      console.log("Harga:", this.harga);
      console.log("Total:", this.total);
    });
  }

  takeOrder() {
    var _this = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.api.takeOrder(_this.id).subscribe(res => {
        console.log(res);

        _this.global.showAlert('Anda telah menerima pesanan, chat customer sekarang', 'Berhasil', [{
          text: 'Okay',
          handler: () => {
            _this.global.showLoader('', 'bubbles');

            _this.getOrderDetail();
          }
        }]);
      }, error => {
        _this.global.showAlert('Terjadi kesalahan', 'Gagal');

        console.log(error);
      });
    })();
  }

  refusemOrder() {}

  rupiah(val) {
    return this.global.formatRupiah(val);
  }

};

OrderDetailPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
}, {
  type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService
}];

OrderDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-order-detail',
  template: _order_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_order_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], OrderDetailPage);


/***/ }),

/***/ 9339:
/*!************************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/order-detail/order-detail.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  background-color: var(--ion-color-secondary);\n  height: 80px;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n}\n.header ion-item {\n  --background: transparent ;\n}\n.toolbar {\n  display: flex;\n}\n.toolbar .inv {\n  position: absolute;\n  right: 30px;\n}\n.toolbar .inv h5 {\n  font-weight: 600;\n  height: 8px;\n  color: rgb(132, 132, 132);\n}\n.destination {\n  background-color: aliceblue;\n}\n.destination ion-item {\n  --background: transparent;\n}\n.destination .toIcon {\n  font-size: 55px;\n}\n.line {\n  margin-top: 12px;\n}\nion-card {\n  margin: 10px;\n  border-radius: 20px;\n  background-color: aliceblue;\n  padding-bottom: 25px;\n}\nion-card .order {\n  padding: 0 15px 15px 15px;\n}\nion-card .product {\n  display: flex;\n  justify-content: space-between;\n  height: 30px;\n}\nion-chip {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFDSTtFQUNJLDBCQUFBO0FBQ1I7QUFHQTtFQUNJLGFBQUE7QUFBSjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQVI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQVo7QUFLQTtFQUNJLDJCQUFBO0FBRko7QUFJSTtFQUNJLHlCQUFBO0FBRlI7QUFPSTtFQUNJLGVBQUE7QUFMUjtBQVNBO0VBQ0ksZ0JBQUE7QUFOSjtBQVNBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQU5KO0FBUUk7RUFDSSx5QkFBQTtBQU5SO0FBU0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBUFI7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFUSiIsImZpbGUiOiJvcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG5cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9vbGJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmludntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMzIsIDEzMiwgMTMyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXN0aW5hdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLnRvSWNvbntcclxuICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saW5le1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcblxyXG4gICAgLm9yZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDE1cHggICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZHVjdHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5pb24tY2hpcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 695:
/*!************************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/order-detail/order-detail.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content color=\"medium\">\n\n  <div class=\"header\">\n    <div class=\"toolbar\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"s-tabs/orders\"></ion-back-button>\n      </ion-buttons>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"bag-handle\" slot=\"start\"></ion-icon>\n        <ion-label>Detail</ion-label>\n      </ion-item>\n      <div color=\"medium\" class=\"inv\">\n        <h5>{{date}}</h5>\n        <h5>{{time}}</h5>\n      </div>\n    </div>\n  </div>\n  \n  <ion-card class=\"ion-padding-horizontal destination\">\n    <ion-text color=\"medium\" class=\"tDetail\">\n      <h4>Detail Pengiriman</h4>\n    </ion-text>\n    <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n      <ion-label>{{status}}</ion-label>\n    </ion-chip>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"restaurant\" slot=\"start\" class=\"ion-no-padding\" color=\"primary\"></ion-icon>\n      <ion-text color=\"medium\">\n        <p class=\"ion-no-margin\">Alamat Resto</p>\n        <ion-label color=\"tertiary\">{{store}}, {{sAddress}}</ion-label>\n      </ion-text>\n    </ion-item>\n    <ion-icon name=\"ellipsis-vertical-outline\"  color=\"medium\" class=\"toIcon\"></ion-icon>\n    <ion-item lines=\"none\" class=\"user-address\">\n      <ion-icon name=\"location\" slot=\"start\" class=\"ion-no-padding\" color=\"danger\"></ion-icon>\n      <ion-text color=\"medium\">\n        <p class=\"ion-no-margin\">Alamat Resto</p>\n        <ion-label color=\"tertiary\">{{customer}}, {{cAddress}}</ion-label>\n      </ion-text>\n    </ion-item>\n    \n  </ion-card>\n    <ion-card class=\"orders\" class=\"ion-padding-horizontal\">\n      <ion-text color=\"medium\" class=\"tDetail\">\n        <h4>Detail Pesanan</h4>\n      </ion-text> \n\n      <div class=\"order\">\n        <div color=\"medium\" class=\"product\" *ngFor=\"let order of orders\">\n          <h4>{{order?.name_ttps}}</h4>\n          <h4 class=\"qty\">{{order?.qty_ttop}}</h4>\n        </div>\n      </div>\n    </ion-card>\n    \n    <ion-card class=\"orders\" class=\"ion-padding-horizontal\">\n      <ion-text color=\"medium\" class=\"tDetail\">\n        <h4>Detail Pembayaran</h4>\n      </ion-text> \n\n      <div class=\"order\">\n        <div color=\"medium\" class=\"product\">\n          <h4>Harga</h4>\n          <h4 class=\"qty\">{{rupiah(harga)}}</h4>\n        </div>\n        <div color=\"medium\" class=\"product\">\n          <h4>Ongkir</h4>\n          <h4 class=\"qty\">{{rupiah(ongkir)}}</h4>\n        </div>\n        <div class=\"line dashedBorderBottom\"></div>\n        <div color=\"medium\" class=\"product\">\n          <h4>Total</h4>\n          <h4 class=\"qty\">{{rupiah(total)}}</h4>\n        </div>\n      </div>\n    </ion-card>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" *ngIf=\"status == 'pending'\">\n  <ion-toolbar color=\"medium\" >\n    <ion-button (click)=\"takeOrder()\" expand=\"block\" fill=\"solid\" shape=\"round\" color=\"secondary\">\n      Terima Pesanan\n    </ion-button>\n    <ion-button (click)=\"refuseOrder()\" expand=\"block\" fill=\"solid\" shape=\"round\" color=\"danger\">\n      Tolak Pesanan\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_seller_s-tabs_order-detail_order-detail_module_ts.js.map