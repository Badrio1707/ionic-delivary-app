"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _loading_restaurant_loading_restaurant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-restaurant/loading-restaurant.component */ 3001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant/restaurant.component */ 5098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _empty_screen_empty_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty-screen/empty-screen.component */ 8081);
/* harmony import */ var _modals_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/add-address/add-address.component */ 4527);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _modals_edit_address_edit_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/edit-address/edit-address.component */ 6264);










let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_1__.RestaurantComponent,
            _loading_restaurant_loading_restaurant_component__WEBPACK_IMPORTED_MODULE_0__.LoadingRestaurantComponent,
            _empty_screen_empty_screen_component__WEBPACK_IMPORTED_MODULE_2__.EmptyScreenComponent,
            _modals_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_3__.AddAddressComponent,
            _modals_edit_address_edit_address_component__WEBPACK_IMPORTED_MODULE_4__.EditAddressComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule
        ],
        exports: [
            _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_1__.RestaurantComponent,
            _loading_restaurant_loading_restaurant_component__WEBPACK_IMPORTED_MODULE_0__.LoadingRestaurantComponent,
            _empty_screen_empty_screen_component__WEBPACK_IMPORTED_MODULE_2__.EmptyScreenComponent,
            _modals_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_3__.AddAddressComponent,
            _modals_edit_address_edit_address_component__WEBPACK_IMPORTED_MODULE_4__.EditAddressComponent
        ],
        entryComponents: [
            _modals_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_3__.AddAddressComponent,
            _modals_edit_address_edit_address_component__WEBPACK_IMPORTED_MODULE_4__.EditAddressComponent
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 8081:
/*!*******************************************************************!*\
  !*** ./src/app/components/empty-screen/empty-screen.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyScreenComponent": () => (/* binding */ EmptyScreenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _empty_screen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-screen.component.html?ngResource */ 2579);
/* harmony import */ var _empty_screen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-screen.component.scss?ngResource */ 7425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let EmptyScreenComponent = class EmptyScreenComponent {
    constructor() { }
    ngOnInit() { }
};
EmptyScreenComponent.ctorParameters = () => [];
EmptyScreenComponent.propDecorators = {
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
EmptyScreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-empty-screen',
        template: _empty_screen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_empty_screen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmptyScreenComponent);



/***/ }),

/***/ 3001:
/*!*******************************************************************************!*\
  !*** ./src/app/components/loading-restaurant/loading-restaurant.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingRestaurantComponent": () => (/* binding */ LoadingRestaurantComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _loading_restaurant_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-restaurant.component.html?ngResource */ 901);
/* harmony import */ var _loading_restaurant_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-restaurant.component.scss?ngResource */ 227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let LoadingRestaurantComponent = class LoadingRestaurantComponent {
    constructor() {
        this.dummy = Array(10);
    }
    ngOnInit() { }
};
LoadingRestaurantComponent.ctorParameters = () => [];
LoadingRestaurantComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-loading-restaurant',
        template: _loading_restaurant_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loading_restaurant_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoadingRestaurantComponent);



/***/ }),

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

/***/ 5098:
/*!***************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantComponent": () => (/* binding */ RestaurantComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _restaurant_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.component.html?ngResource */ 2520);
/* harmony import */ var _restaurant_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.component.scss?ngResource */ 4392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





let RestaurantComponent = class RestaurantComponent {
    constructor() { }
    ngOnInit() { }
    formatRupiah(angka) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(angka, 'id-ID', 'Rp ', 'IDR');
    }
};
RestaurantComponent.ctorParameters = () => [];
RestaurantComponent.propDecorators = {
    stores: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
RestaurantComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-restaurant',
        template: _restaurant_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_restaurant_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RestaurantComponent);



/***/ }),

/***/ 7425:
/*!********************************************************************************!*\
  !*** ./src/app/components/empty-screen/empty-screen.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  font-size: 18rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZW1wdHktc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxOHJlbTtcclxufSJdfQ== */";

/***/ }),

/***/ 227:
/*!********************************************************************************************!*\
  !*** ./src/app/components/loading-restaurant/loading-restaurant.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-thumbnail {\n  width: 25vw;\n  height: 16vh;\n}\nion-thumbnail ion-skeleton-text {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctcmVzdGF1cmFudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVIiLCJmaWxlIjoibG9hZGluZy1yZXN0YXVyYW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIGhlaWdodDogMTZ2aDtcclxuICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbn0iXX0= */";

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

/***/ 4392:
/*!****************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  font-size: 0.8rem;\n}\nion-item ion-thumbnail {\n  height: 16vh;\n  width: 25vw;\n}\nion-item ion-thumbnail img {\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\nion-item h4 {\n  font-size: 1rem;\n}\n.distance {\n  font-size: 0.8rem;\n  padding-top: 0.2vh;\n}\n.pStyle {\n  padding-bottom: 0.5vh;\n  font-size: 0.82rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RhdXJhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR1o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0FBQ0oiLCJmaWxlIjoicmVzdGF1cmFudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnZoO1xyXG4gICAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcbi5kaXN0YW5jZSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjJ2aDtcclxufVxyXG5cclxuLnBTdHlsZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41dmg7XHJcbiAgICBmb250LXNpemU6IDAuODJyZW0gIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 2579:
/*!********************************************************************************!*\
  !*** ./src/app/components/empty-screen/empty-screen.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <ion-icon \n        [name]=\"model?.icon ? model?.icon : 'cart-outline'\"\n        [color]=\"model?.color ? model.color : 'tertiary'\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <ion-label>\n        {{model?.title ? model.title : 'Your Cart is Empty'}}\n      </ion-label>\n      <ion-text *ngIf=\"model?.subTitle\">\n        <p>{{ model.subTitle }}</p>\n      </ion-text>\n    </ion-col>\n  </ion-row>\n</ion-grid>";

/***/ }),

/***/ 901:
/*!********************************************************************************************!*\
  !*** ./src/app/components/loading-restaurant/loading-restaurant.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-list>\n  <ion-item lines=\"none\" *ngFor=\"let item of dummy\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <h4><ion-skeleton-text style=\"width: 50%\"></ion-skeleton-text></h4>\n      <p><ion-skeleton-text style=\"width: 80%\"></ion-skeleton-text></p>\n      <p><ion-skeleton-text style=\"width: 60%\"></ion-skeleton-text></p>\n    </ion-label>\n  </ion-item>\n</ion-list>";

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

/***/ 2520:
/*!****************************************************************************!*\
  !*** ./src/app/components/restaurant/restaurant.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-item lines=\"none\">\n  <ion-thumbnail slot=\"start\">\n    <img [src]=\"stores.image_tms ? stores.image_tms : 'assets/imgs/1.jpg'\" />\n  </ion-thumbnail>\n  <ion-label>\n    <h4>{{stores.name_tms}}</h4>\n    <ion-text color=\"medium\">\n      <p class=\"pStyle\">\n        {{stores.address_tms}}\n      </p>\n    </ion-text>\n    <span>\n      {{stores.status_tms}}\n    </span>\n  </ion-label>\n</ion-item>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map