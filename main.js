(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ASUS\Documents\Coding projects\angular\bintalhoda-pdf\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAHJ9b9tc89hRyGQgKyfjz9_OjkSe9ZezE",
        authDomain: "bintalhoda-ae42e.firebaseapp.com",
        projectId: "bintalhoda-ae42e",
        storageBucket: "bintalhoda-ae42e.appspot.com",
        messagingSenderId: "653106339596",
        appId: "1:653106339596:web:24a8f9039ec45ae814b329"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "K9yR":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment.prod */ "cxbk");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "WI49");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class TestComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.imagePath = "";
        this.firebaseApp = Object(firebase_app__WEBPACK_IMPORTED_MODULE_2__["initializeApp"])(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig);
        this.storage = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_4__["getStorage"])(this.firebaseApp, "gs://bintalhoda-ae42e.appspot.com");
    }
    ngOnInit() {
    }
    uploadFile(event) {
        var image = event.target.files[0];
        const storageRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.storage, 'pictures/photo.png');
        Object(firebase_storage__WEBPACK_IMPORTED_MODULE_4__["uploadBytes"])(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        //display the image
        this.displayImage();
    }
    displayImage() {
        Object(firebase_storage__WEBPACK_IMPORTED_MODULE_4__["getDownloadURL"])(Object(firebase_storage__WEBPACK_IMPORTED_MODULE_4__["ref"])(this.storage, 'pictures/photo.png'))
            .then(url => this.imagePath = url);
    }
    transform(event) {
        //create a pdf document
        let doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]({
            orientation: "portrait",
            unit: "cm",
            format: 'A4',
            compress: true
        });
        doc.addPage('A4', 'portrait');
        let img = new Image();
        //get the image
        var node = document.getElementById("container");
        dom_to_image__WEBPACK_IMPORTED_MODULE_0___default.a.toPng(node)
            .then((dataUrl) => {
            img.src = dataUrl;
            doc.addImage(img, 'JPEG', 0, 0, 21, 29.7, 'image', "FAST", 0);
            doc.save('aa' + ".pdf");
        });
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 4, vars: 1, consts: [["type", "file", 3, "change"], [3, "src"], [3, "click"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TestComponent_Template_input_change_0_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TestComponent_Template_button_click_2_listener($event) { return ctx.transform($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Create image");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "StNR":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment.prod */ "cxbk");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "WI49");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














const _c0 = ["imgContainer"];
function UploadComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", value_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](value_r3);
} }
function UploadComponent_img_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 23);
} }
class UploadComponent {
    constructor() {
        this.faFilePdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"];
        this.faRedo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faRedo"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
        this.faMinus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMinus"];
        this.faPhotoVideo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPhotoVideo"];
        this.imagePath = "";
        this.isLoading = false;
        this.firebaseApp = Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"])(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].firebaseConfig);
        this.storage = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_2__["getStorage"])(this.firebaseApp, "gs://bintalhoda-ae42e.appspot.com");
        this.pdfSize = [4, 6];
        this.boldText = "";
        this.classicText = "";
        this.selectedSize = 4;
        this.showImage();
    }
    ngOnInit() {
    }
    onUpload(event) {
        this.isLoading = true;
        //value is set back to false at the end of show image method
        var image = event.target.files[0];
        const storageRef = Object(firebase_storage__WEBPACK_IMPORTED_MODULE_2__["ref"])(this.storage, 'pictures/photo.png');
        Object(firebase_storage__WEBPACK_IMPORTED_MODULE_2__["uploadBytes"])(storageRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        this.showImage();
    }
    showImage() {
        if (!this.isLoading)
            this.isLoading = true;
        Object(firebase_storage__WEBPACK_IMPORTED_MODULE_2__["getDownloadURL"])(Object(firebase_storage__WEBPACK_IMPORTED_MODULE_2__["ref"])(this.storage, 'pictures/photo.png'))
            .then(url => {
            this.imagePath = url;
            console.log(this.imagePath);
            this.isLoading = false;
        });
    }
    plusCadre(event) {
        let width = document.getElementById("image-container").offsetWidth;
        width += 25;
        document.getElementById("image-container").style.width = width + "px";
    }
    minusCadre(event) {
        let width = document.getElementById("image-container").offsetWidth;
        width -= 25;
        document.getElementById("image-container").style.width = width + "px";
    }
    plusImage(event) {
        let width = document.getElementById("image").offsetWidth;
        width += 25;
        document.getElementById("image").style.width = width + "px";
        document.getElementById("text").style.width = width + "px";
    }
    minusImage(event) {
        let width = document.getElementById("image").offsetWidth;
        width -= 25;
        document.getElementById("image").style.width = width + "px";
        document.getElementById("text").style.width = width + "px";
    }
    changePdfSize(event) {
        this.selectedSize = event.target.value;
    }
    createPdf(event) {
        let doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["default"]({
            orientation: "portrait",
            unit: "cm",
            format: 'A4',
            compress: true
        });
        let size = this.selectedSize;
        var node = document.getElementById("image-container");
        dom_to_image__WEBPACK_IMPORTED_MODULE_3___default.a.toPng(node)
            .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            if (size == 4) {
                var x = 0.3;
                var y = 0;
                doc.addImage(img, 'JPEG', x, y, 10, 14, 'image', "FAST", 0);
                x = 10.7;
                doc.addImage(img, 'JPEG', x, y, 10, 14, 'image', "FAST", 0);
                y = 14.7;
                x = 0.3;
                doc.addImage(img, 'JPEG', x, y, 10, 14, 'image', "FAST", 0);
                x = 10.7;
                doc.addImage(img, 'JPEG', x, y, 10, 14, 'image', "FAST", 0);
            }
            if (size == 6) {
                var x = 0.3;
                var y = 0;
                doc.addImage(img, 'JPEG', x, y, 10, 8, 'image', "FAST", 0);
                x = 10.7;
                doc.addImage(img, 'JPEG', x, y, 10, 8, 'image', "FAST", 0);
                y = 9;
                x = 0.3;
                doc.addImage(img, 'JPEG', x, y, 10, 8, 'image', "FAST", 0);
                x = 10.7;
                doc.addImage(img, 'JPEG', x, y, 10, 8, 'image', "FAST", 0);
                y = 18;
                x = 0.3;
                doc.addImage(img, 'JPEG', x, y, 10, 8, 'image', "FAST", 0);
                x = 10.7;
                doc.addImage(img, 'JPEG', x, y, 10, 8, 'image', "FAST", 0);
            }
            doc.save('document.pdf');
        })
            .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], viewQuery: function UploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.div = _t.first);
    } }, decls: 46, vars: 14, consts: [[1, "main-container"], [1, "file-input"], [1, "load"], [1, "reload", 3, "click"], [3, "icon"], ["for", "file"], ["id", "file", "type", "file", 2, "display", "none", 3, "change"], [3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "saisie"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "controls"], [1, "plus", 3, "click"], [1, "minus", 3, "click"], ["src", "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif", 4, "ngIf"], ["id", "image-container"], ["imgContainer", ""], ["id", "image", 3, "src"], [1, "text"], ["id", "bold-text"], ["id", "classic-text"], [1, "createPdf", 3, "click"], [3, "ngValue"], ["src", "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_3_listener() { return ctx.showImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Reload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Choisir une image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_9_listener($event) { return ctx.onUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "PDF A4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UploadComponent_Template_select_change_12_listener($event) { return ctx.changePdfSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, UploadComponent_option_13_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Titre");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UploadComponent_Template_input_ngModelChange_17_listener($event) { return ctx.boldText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Texte");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UploadComponent_Template_textarea_ngModelChange_20_listener($event) { return ctx.classicText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Cadre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_24_listener($event) { return ctx.plusCadre($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_26_listener($event) { return ctx.minusCadre($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_30_listener($event) { return ctx.plusImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_32_listener($event) { return ctx.minusImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, UploadComponent_img_34_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "pre", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_43_listener($event) { return ctx.createPdf($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Cr\u00E9er PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faRedo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faPhotoVideo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.pdfSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.boldText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.classicText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faMinus);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faMinus);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.boldText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.classicText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faFilePdf);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_z"]], styles: [".main-container[_ngcontent-%COMP%] {\r\n    margin-top: 1.5em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    border: 1px solid #C5A553;\r\n    border-radius: 0.3em;\r\n    margin: 0 1em;\r\n    padding: 0.5em;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    font-family: sans-serif;\r\n    font-weight: normal;\r\n    transition: all 0.2s;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]:hover\r\n{\r\n    transform: scale(1.2);\r\n    color: white;\r\n    background-color: #C5A553;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 1em;\r\n    padding: 0.7em;\r\n    border-radius: 0.3em;\r\n    border: 0;\r\n    transition: all 0.2s;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover\r\n{\r\n    transform: scale(1.2);\r\n}\r\n\r\n.plus[_ngcontent-%COMP%] {\r\n    color: darkgreen;\r\n    background-color: rgb(204, 248, 139);\r\n}\r\n\r\n.minus[_ngcontent-%COMP%] {\r\n    color: red;\r\n    background-color: rgb(243, 135, 135);\r\n}\r\n\r\n.reload[_ngcontent-%COMP%] {\r\n    background-color: #bfff00;\r\n}\r\n\r\n.file-input[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#image-container[_ngcontent-%COMP%] {\r\n    max-width: 90vw;\r\n    border: 1px solid black;\r\n    margin-top: 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#image[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n\r\n.controls[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    margin-top: 1em;\r\n    border: 1px solid black;\r\n    border-radius: 0.3em;\r\n    padding: 1em;\r\n    row-gap: 1em;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    margin-top: 1em;\r\n    margin-left: 0.5em;\r\n    padding: 2%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    height: 2em;\r\n}\r\n\r\n#bold-text[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n    font-size: 2em;\r\n}\r\n\r\n#classic-text[_ngcontent-%COMP%] {\r\n    font-family: sans-serif;\r\n    font-size: 1.25em;\r\n    text-align: center;\r\n}\r\n\r\n.saisie[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-top: 1em;\r\n    justify-content: space-around;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    margin: 0 0.5em;\r\n}\r\n\r\n.createPdf[_ngcontent-%COMP%] {\r\n    background-color: brown;\r\n    margin: 1em;\r\n    padding: 1em;\r\n    color: white;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%] {\r\n    margin: 1em;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .saisie[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        margin-top: 1em;\r\n        flex-direction: column;\r\n    }\r\n    .load[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .load[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\r\n        margin: 0.5em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO1FBQ2Ysc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M1QTU1MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG4gICAgbWFyZ2luOiAwIDFlbTtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxubGFiZWw6aG92ZXJcclxue1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1QTU1MztcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMWVtO1xyXG4gICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246aG92ZXJcclxue1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4ucGx1cyB7XHJcbiAgICBjb2xvcjogZGFya2dyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjQ4LCAxMzkpO1xyXG59XHJcblxyXG4ubWludXMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDEzNSwgMTM1KTtcclxufVxyXG5cclxuLnJlbG9hZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZmZjAwO1xyXG59XHJcblxyXG4uZmlsZS1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2ltYWdlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICByb3ctZ2FwOiAxZW07XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbn1cclxuXHJcbiNib2xkLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4jY2xhc3NpYy10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zYWlzaWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIG1hcmdpbjogMCAwLjVlbTtcclxufVxyXG5cclxuLmNyZWF0ZVBkZiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5mYS1pY29uIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLnNhaXNpZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5sb2FkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAubG9hZD4qIHtcclxuICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");



class AppComponent {
    constructor() {
        this.title = 'bintalhoda-pdf';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "upload"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-upload", 0);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test/test.component */ "K9yR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload/upload.component */ "StNR");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _test_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyAHJ9b9tc89hRyGQgKyfjz9_OjkSe9ZezE",
        authDomain: "bintalhoda-ae42e.firebaseapp.com",
        projectId: "bintalhoda-ae42e",
        storageBucket: "bintalhoda-ae42e.appspot.com",
        messagingSenderId: "653106339596",
        appId: "1:653106339596:web:24a8f9039ec45ae814b329"
    }
};


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "header"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PDF document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%]\r\n{\r\n    background-color: #E7C980;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center ;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]\r\n{\r\n    color: #080100;\r\n    font-family: sans-serif;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsdUJBQXVCOztBQUUzQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3Qzk4MDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xyXG59XHJcblxyXG5oMVxyXG57XHJcbiAgICBjb2xvcjogIzA4MDEwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map