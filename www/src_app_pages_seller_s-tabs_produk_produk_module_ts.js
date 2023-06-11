"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_seller_s-tabs_produk_produk_module_ts"],{

/***/ 8489:
/*!*********************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/produk/produk-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdukPageRoutingModule": () => (/* binding */ ProdukPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _produk_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produk.page */ 3124);




const routes = [
    {
        path: '',
        component: _produk_page__WEBPACK_IMPORTED_MODULE_0__.ProdukPage
    }
];
let ProdukPageRoutingModule = class ProdukPageRoutingModule {
};
ProdukPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProdukPageRoutingModule);



/***/ }),

/***/ 9930:
/*!*************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/produk/produk.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdukPageModule": () => (/* binding */ ProdukPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _produk_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produk-routing.module */ 8489);
/* harmony import */ var _produk_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produk.page */ 3124);







let ProdukPageModule = class ProdukPageModule {
};
ProdukPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _produk_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProdukPageRoutingModule
        ],
        declarations: [_produk_page__WEBPACK_IMPORTED_MODULE_1__.ProdukPage]
    })
], ProdukPageModule);



/***/ }),

/***/ 3124:
/*!***********************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/produk/produk.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdukPage": () => (/* binding */ ProdukPage)
/* harmony export */ });
/* harmony import */ var C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _produk_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produk.page.html?ngResource */ 2891);
/* harmony import */ var _produk_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produk.page.scss?ngResource */ 6719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global/global.service */ 4031);










let ProdukPage = class ProdukPage {
  constructor(api, global) {
    this.api = api;
    this.global = global;
    this.form = {
      name_ttps: '',
      price_ttps: '',
      image_ttps: ''
    };
    this.data = {};
    this.productStore = [];
  }

  ngOnInit() {
    this.getProductStore();
  }

  getProductStore() {
    this.api.productStore().subscribe(res => {
      this.productStore = res['data'];
      console.log('product: ', this.productStore);
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.data = {};
    this.form.name_ttps = '';
    this.form.price_ttps = '';
  }

  getFile(event) {
    this.image_ttps = event.target.files[0];
    console.log('file', this.image_ttps);
  }

  checkPlatWeb() {
    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform() == 'web') return true;
    return false;
  }

  getPicture() {
    var _this = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
        quality: 90,
        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Photos,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64
      });
      _this.data.name_ttps = _this.form.name_ttps;
      _this.data.price_ttps = _this.form.price_ttps;
      _this.data.image_ttps = 'data:image/jpeg;base64,' + image.base64String;
      console.log('data: ', _this.data); // this.uploadImage(this.image_ttps);
    })();
  }

  uploadProduct() {
    var _this2 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.global.showLoader('', 'bubbles');

      yield _this2.api.createProduct(_this2.data).subscribe(response => {
        _this2.getProductStore();

        _this2.data = {};
        _this2.form.name_ttps = '';
        _this2.form.price_ttps = '';

        _this2.modal.dismiss();

        console.log("Berhasil", response);
      }, error => {
        _this2.global.showAlert("Data belum lengkap", "Gagal");

        console.log("gagal", error);
      });
    })();
  }

  editProduct() {}

  deleteProduct(id) {
    var _this3 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.global.showAlert('Apakah anda yakin ingin menghapus produk ini?', 'Konfirmasi', [{
        text: 'Batal',
        role: 'cancel',
        cssClass: 'secondary'
      }, {
        text: 'Hapus',
        handler: function () {
          var _ref = (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this3.global.showLoader('', 'bubbles');

            _this3.api.deleteProduct(id).subscribe(res => {
              _this3.getProductStore();

              console.log("Berhasil", res);

              _this3.global.showAlert("Product berhasil dihapus", "Berhasil");
            }, error => {
              _this3.global.showAlert("Product gagal dihapus", "Gagal");

              console.log("gagal", error);
            });
          });

          return function handler() {
            return _ref.apply(this, arguments);
          };
        }()
      }]);
    })();
  }

  publish(id) {
    this.api.publish(id).subscribe(res => {
      this.global.showAlert('Produk berhasil di Publish', 'Berhasil', [{
        text: 'Okay',
        handler: () => {
          this.global.showLoader('', 'bubbles');
          this.getProductStore();
        }
      }]);
      console.log("Success", res);
    }, error => {
      console.log("Success", error);
    });
  }

  unpublish(id) {
    this.api.unpublish(id).subscribe(res => {
      this.global.showAlert('Produk berhasil di unpublish', 'Berhasil', [{
        text: 'Okay',
        handler: () => {
          this.global.showLoader('', 'bubbles');
          this.getProductStore();
        }
      }]);
      console.log("Success", res);
    }, error => {
      console.log("Error", error);
    });
  }

  rupiah(val) {
    return this.global.formatRupiah(val);
  }

};

ProdukPage.ctorParameters = () => [{
  type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
}, {
  type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_6__.GlobalService
}];

ProdukPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonModal]
  }]
};
ProdukPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-produk',
  template: _produk_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_produk_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ProdukPage);


/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 6719:
/*!************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/produk/produk.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-card-header.ios {\n  display: flex;\n  flex-flow: column-reverse;\n}\n\nion-item ion-thumbnail {\n  height: 16vh;\n  width: 25vw;\n}\n\nion-item ion-thumbnail img {\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\n\nion-item ion-row {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\n\nion-item ion-row ion-button {\n  width: 60px;\n}\n\nion-item .chip {\n  position: absolute;\n  top: 25px;\n  right: 5px;\n}\n\nion-card ion-thumbnail {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 150px;\n}\n\nion-card ion-thumbnail .noImage {\n  height: 150px;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1ay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFHSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQVI7O0FBQ1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ1o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRFI7O0FBRVE7RUFDSSxXQUFBO0FBQVo7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRFI7O0FBTUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSFI7O0FBS1E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUhaIiwiZmlsZSI6InByb2R1ay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXIuaW9zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnZoO1xyXG4gICAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hpcHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgaW9uLXRodW1ibmFpbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuXHJcbiAgICAgICAgLm5vSW1hZ2V7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 2891:
/*!************************************************************************!*\
  !*** ./src/app/pages/seller/s-tabs/produk/produk.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"end\" id=\"tambah-modal\">\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"add-outline\" color=\"mediun\" slot=\"icon-only\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Daftar Produk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button shape=\"round\" color=\"light\">\n        <ion-icon slot=\"end\" name=\"chevron-down\"></ion-icon>\n        Status</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-item *ngFor=\"let product of productStore\" class=\"ion-padding-top\">\n    <ion-thumbnail slot=\"start\">\n      <img [src]=\"product?.image_ttps ? product.image_ttps : 'assets/imgs/1.jpg'\" />\n    </ion-thumbnail>\n    <ion-label>\n      <!-- <h4>{{product?.name}}</h4> -->\n      {{product?.name_ttps}}\n      <p class=\"ion-text-wrap\">{{product?.desc}}</p>\n      <ion-text><p>{{rupiah(product?.price_ttps)}}</p></ion-text>\n    </ion-label>\n    <div class=\"chip\">\n      <ion-chip color=\"success\" *ngIf=\"product?.status_ttps === 'publish'\" (click)=\"unpublish(product?.id_ttps)\">Publish</ion-chip>\n      <ion-chip color=\"warning\" *ngIf=\"product?.status_ttps === 'unpublish'\" (click)=\"publish(product?.id_ttps)\">Unpublish</ion-chip>\n    </div>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button (click)=\"editProduct(product?.id_ttps)\" color=\"success\" >Edit</ion-button>\n        <ion-button (click)=\"deleteProduct(product?.id_ttps)\" color=\"danger\" >Hapus</ion-button>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-text class=\"add\" color=\"tertiary\" class=\"ion-margin-end\" (click)=\"editProduct()\">Edit</ion-text>\n      <ion-text class=\"add\" color=\"danger\" (click)=\"deleteProduct(product?.id_ttps)\">Hapus</ion-text>\n    </ion-row> -->\n  </ion-item>\n\n  <ion-modal #modal trigger=\"tambah-modal\" [initialBreakpoint]=\"1\" [breakpoints]=\"[0, 0.25, 0.5, 1]\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"cancel()\">Cancel</ion-button>\n          </ion-buttons>\n          <ion-title class=\"ion-text-center\">Tambah Product</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"uploadProduct()\" [strong]=\"true\">Confirm</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <div class=\"form-field\">\n          <ion-input type=\"text\" [(ngModel)]=\"form.name_ttps\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Nama Produk\"></ion-input>\n        </div>\n        <div class=\"form-field\">\n          <ion-input type=\"text\" [(ngModel)]=\"form.price_ttps\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"harga\"></ion-input>\n        </div> \n\n        <ion-card class=\"ion-padding\" (click)=\"getPicture()\">\n          <ion-thumbnail>\n          <img [src]=data?.image_ttps *ngIf=\"data.image_ttps\"/>\n          <img src=\"assets/images/camera.png\" class=\"noImage\" *ngIf=\"!data.image_ttps\"/>\n          </ion-thumbnail>\n        </ion-card>\n\n        \n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_seller_s-tabs_produk_produk_module_ts.js.map