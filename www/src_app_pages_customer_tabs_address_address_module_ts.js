"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customer_tabs_address_address_module_ts"],{

/***/ 4527:
/*!************************************************************************!*\
  !*** ./src/app/components/modals/add-address/add-address.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAddressComponent": () => (/* binding */ AddAddressComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-address.component.html?ngResource */ 2322);
/* harmony import */ var _add_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-address.component.scss?ngResource */ 5713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let AddAddressComponent = class AddAddressComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.form = {};
    }
    ngOnInit() { }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
    confirm() {
        return this.modalCtrl.dismiss(this.form, 'confirm');
    }
};
AddAddressComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AddAddressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-address',
        template: _add_address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddAddressComponent);



/***/ }),

/***/ 6264:
/*!**************************************************************************!*\
  !*** ./src/app/components/modals/edit-address/edit-address.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAddressComponent": () => (/* binding */ EditAddressComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-address.component.html?ngResource */ 6237);
/* harmony import */ var _edit_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-address.component.scss?ngResource */ 5518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);






let EditAddressComponent = class EditAddressComponent {
    constructor(modalCtrl, api) {
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.form = {
            name_ttca: '',
            phone_ttca: '',
            static_ttca: '',
            dynamic_ttca: ''
        };
    }
    ngOnInit() {
        this.getAddresses();
        console.log(this.id);
    }
    getAddresses() {
        this.api.getUserAddress().subscribe((res) => {
            const allAddresses = res['data'];
            const filteredAddresses = allAddresses.filter(address => address.id_ttca === this.id);
            if (filteredAddresses.length > 0) {
                this.form = filteredAddresses[0];
                console.log(this.form);
            }
        });
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
    confirm() {
        return this.modalCtrl.dismiss(this.form, 'confirm');
    }
};
EditAddressComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
EditAddressComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
EditAddressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-edit-address',
        template: _edit_address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditAddressComponent);



/***/ }),

/***/ 8594:
/*!***********************************************************************!*\
  !*** ./src/app/pages/customer/tabs/address/address-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressPageRoutingModule": () => (/* binding */ AddressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address.page */ 5209);




const routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_0__.AddressPage
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddressPageRoutingModule);



/***/ }),

/***/ 3802:
/*!***************************************************************!*\
  !*** ./src/app/pages/customer/tabs/address/address.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressPageModule": () => (/* binding */ AddressPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-routing.module */ 8594);
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.page */ 5209);







let AddressPageModule = class AddressPageModule {
};
AddressPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _address_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddressPageRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_1__.AddressPage]
    })
], AddressPageModule);



/***/ }),

/***/ 5209:
/*!*************************************************************!*\
  !*** ./src/app/pages/customer/tabs/address/address.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressPage": () => (/* binding */ AddressPage)
/* harmony export */ });
/* harmony import */ var C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _address_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.page.html?ngResource */ 6170);
/* harmony import */ var _address_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.page.scss?ngResource */ 550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_modals_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modals/add-address/add-address.component */ 4527);
/* harmony import */ var src_app_components_modals_edit_address_edit_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modals/edit-address/edit-address.component */ 6264);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api/api.service */ 5146);
/* harmony import */ var src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global/global.service */ 4031);










let AddressPage = class AddressPage {
  constructor(api, global) {
    this.api = api;
    this.global = global;
    this.form = {};
  }

  ngOnInit() {
    this.getAddresses();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.form.name_ttps = '';
    this.form.phone_ttps = '';
    this.form.static_ttps = '';
    this.form.dynamic_ttps = '';
  }

  getAddresses() {
    this.isLoading = true;
    setTimeout(() => {
      this.api.getUserAddress().subscribe(res => {
        this.addresses = res['data'];
        console.log(res['data']);
      });
      this.isLoading = false;
    }, 2000); // console.log(this.addresses)
  }

  reloadPrev() {
    this.global.reloadPrev();
  }

  addAddress() {
    var _this = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const options = {
          component: src_app_components_modals_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_3__.AddAddressComponent,
          swipeToClose: true
        };
        const address = yield _this.global.createModal(options);

        if (address) {
          _this.api.createAddress(address).subscribe( /*#__PURE__*/function () {
            var _ref = (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              _this.global.showLoader();

              console.log("Success: ", res);

              _this.getAddresses();
            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }(), /*#__PURE__*/function () {
            var _ref2 = (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
              _this.global.showAlert('Tambah Alamat gagal periksa kembali', "Gagal");

              console.log("Gagal: ", error);
            });

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }

  editAddress(id) {
    var _this2 = this;

    return (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const options = {
          component: src_app_components_modals_edit_address_edit_address_component__WEBPACK_IMPORTED_MODULE_4__.EditAddressComponent,
          swipeToClose: true,
          componentProps: {
            id: id
          }
        };
        const address = yield _this2.global.createModal(options);
        console.log(address.id_ttca);

        if (address) {
          _this2.api.updateAddress(address).subscribe( /*#__PURE__*/function () {
            var _ref3 = (0,C_Users_if21m_Documents_Kuliah_TakeIT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              _this2.global.showLoader();

              console.log("Success: ", res);

              _this2.getAddresses();
            });

            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }(), error => {
            _this2.global.showAlert('Ubah Alamat gagal periksa kembali', "Gagal");

            console.log("Gagal: ", error);
          });
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }

  deleteAddress(id) {
    try {
      this.global.showAlert("Apakah anda yakin ingin menghapus alamat ini?", "Konfirmasi", [{
        text: "Batal",
        role: "cancel",
        handler: () => {}
      }, {
        text: "Hapus",
        handler: () => {
          this.api.deleteAddress(id).subscribe(res => {
            this.global.showLoader();
            this.global.showAlert("Alamat berhasil dihapus", 'Berhasil');
            this.getAddresses();
          }, error => {
            console.log(error);
          });
        }
      }]);
    } catch (e) {
      throw e;
    }
  }

};

AddressPage.ctorParameters = () => [{
  type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
}, {
  type: src_app_services_global_global_service__WEBPACK_IMPORTED_MODULE_6__.GlobalService
}];

AddressPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonModal]
  }]
};
AddressPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-address',
  template: _address_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_address_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddressPage);


/***/ }),

/***/ 5713:
/*!*************************************************************************************!*\
  !*** ./src/app/components/modals/add-address/add-address.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 5518:
/*!***************************************************************************************!*\
  !*** ./src/app/components/modals/edit-address/edit-address.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFkZHJlc3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 550:
/*!**************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/address/address.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  align-self: start;\n}\n\n.ios ion-item-divider {\n  font-size: 0.8rem;\n  padding: 2vh;\n  background-color: var(--ion-color-light);\n}\n\nion-chip {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFHSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBREoiLCJmaWxlIjoiYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLmlvcyB7XHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBwYWRkaW5nOiAydmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNoaXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 2322:
/*!*************************************************************************************!*\
  !*** ./src/app/components/modals/add-address/add-address.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancel()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Tambah Alamat</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirm</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"form-field\">\n    <ion-input type=\"text\" [(ngModel)]=\"form.name_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Nama Lengkap\"></ion-input>\n  </div>\n  <div class=\"form-field\">\n    <ion-input type=\"text\" [(ngModel)]=\"form.phone_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"No Telpon\"></ion-input>\n  </div>\n  <div class=\"form-field\">\n    <ion-input type=\"text\" [(ngModel)]=\"form.static_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Provinsi, Kota, Kecamatan\"></ion-input>\n  </div> \n  <div class=\"form-field\">\n    <ion-input type=\"text\" [(ngModel)]=\"form.dynamic_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Jl,Block, No Rumah\"></ion-input>\n  </div>         \n</ion-content>";

/***/ }),

/***/ 6237:
/*!***************************************************************************************!*\
  !*** ./src/app/components/modals/edit-address/edit-address.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancel()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Edit Alamat</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirm</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"form-field\">\n    <ion-input type=\"text\" [(ngModel)]=\"form.name_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Nama Lengkap\"></ion-input>\n  </div>\n  <div class=\"form-field\">\n    <ion-input type=\"text\" [(ngModel)]=\"form.phone_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"No Telpon\"></ion-input>\n  </div>\n  <div class=\"form-field\">\n    <ion-input type=\"text\" [(ngModel)]=\"form.static_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Provinsi, Kota, Kecamatan\"></ion-input>\n  </div> \n  <div class=\"form-field\">\n    <ion-input type=\"text\" [(ngModel)]=\"form.dynamic_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Jl,Block, No Rumah\"></ion-input>\n  </div>         \n</ion-content>";

/***/ }),

/***/ 6170:
/*!**************************************************************************!*\
  !*** ./src/app/pages/customer/tabs/address/address.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title><ion-label color=\"dark\">MANAGE ADDRESSES</ion-label></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/c-tabs/orders\" (click)=\"reloadPrev()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <div *ngIf=\"isLoading\" class=\"ion-text-center alignSpinner\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n\n  <ion-list *ngIf=\"!isLoading && addresses?.length > 0\">\n    <ion-item-divider>SAVED ADDRESSES</ion-item-divider>\n    <ion-item-group class=\"ion-padding\">\n      <ion-item lines=\"full\" class=\"ion-no-padding\" *ngFor=\"let address of addresses\">\n        <ion-label>\n          <ion-label class=\"ion-padding-bottom\">{{address?.name_ttca}}</ion-label>\n          <ion-text color=\"medium\" class=\"ion-text-justify\">\n            <p class=\"ion-text-wrap\">\n              {{address?.phone_ttca}} \n            </p>\n            <p>{{address?.static_ttca}} </p><p>{{address?.dynamic_ttca}}</p>\n          </ion-text>\n          <ion-chip *ngIf=\"address?.isActive_ttca\" color=\"primary\" mode=\"md\" outline=\"true\">\n            <ion-label >Aktif</ion-label>\n          </ion-chip>\n          <ion-row>\n            <ion-button fill=\"clear\" color=\"primary\" (click)=\"editAddress(address?.id_ttca)\">EDIT</ion-button>\n            <ion-button fill=\"clear\" color=\"primary\" (click)=\"deleteAddress(address?.id_ttca)\">DELETE</ion-button>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <!-- <ion-modal #modal trigger=\"address-modal\" [initialBreakpoint]=\"1\" [breakpoints]=\"[0, 0.25, 0.5, 1]\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"cancel()\">Cancel</ion-button>\n          </ion-buttons>\n          <ion-title class=\"ion-text-center\">Tambah Alamat</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"addAddress()\" [strong]=\"true\">Confirm</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <div class=\"form-field\">\n          <ion-input type=\"text\" [(ngModel)]=\"form.name_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Nama Lengkap\"></ion-input>\n        </div>\n        <div class=\"form-field\">\n          <ion-input type=\"text\" [(ngModel)]=\"form.phone_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"No Telpon\"></ion-input>\n        </div>\n        <div class=\"form-field\">\n          <ion-input type=\"text\" [(ngModel)]=\"form.static_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Provinsi, Kota, Kecamatan\"></ion-input>\n        </div> \n        <div class=\"form-field\">\n          <ion-input type=\"text\" [(ngModel)]=\"form.dynamic_ttca\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Jl,Block, No Rumah\"></ion-input>\n        </div>         \n      </ion-content>\n    </ng-template>\n  </ion-modal> -->\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-button fill=\"outline\" color=\"success\" expand=\"block\" class=\"ion-margin-horizontal\" (click)=\"addAddress()\">ADD NEW ADDRESS</ion-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_tabs_address_address_module_ts.js.map