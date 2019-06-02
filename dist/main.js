(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  \n  .example-is-mobile .example-toolbar {\n    position: fixed;\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n    z-index: 2;\n  }\n  \n  h1.example-app-name {\n    margin-left: 8px;\n  }\n  \n  .example-sidenav-container {\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n    flex: 1;\n    color: blue;\n  }\n  \n  .example-is-mobile .example-sidenav-container {\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n    flex: 1 0 auto;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ht-navigation></app-ht-navigation>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _ht_dashboard_ht_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ht-dashboard/ht-dashboard.component */ "./src/app/ht-dashboard/ht-dashboard.component.ts");
/* harmony import */ var _ht_navigation_ht_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ht-navigation/ht-navigation.component */ "./src/app/ht-navigation/ht-navigation.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_ht_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/ht-form.service */ "./src/app/services/ht-form.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _forms_ht_form_ht_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/ht-form/ht-form.component */ "./src/app/forms/ht-form/ht-form.component.ts");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-modialog */ "./node_modules/ngx-modialog/fesm5/ngx-modialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "./node_modules/ngx-modialog/plugins/bootstrap/fesm5/ngx-modialog-plugins-bootstrap.js");
/* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngui/auto-complete */ "./node_modules/@ngui/auto-complete/dist/index.js");
/* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ngui_auto_complete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ht_admin_ht_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ht-admin/ht-admin.component */ "./src/app/ht-admin/ht-admin.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tables_test_table_test_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tables/test-table/test-table.component */ "./src/app/tables/test-table/test-table.component.ts");
/* harmony import */ var _tables_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tables/user-table/user-table.component */ "./src/app/tables/user-table/user-table.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _tables_console_table_console_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tables/console-table/console-table.component */ "./src/app/tables/console-table/console-table.component.ts");
/* harmony import */ var _forms_query_form_query_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./forms/query-form/query-form.component */ "./src/app/forms/query-form/query-form.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./test-form/test-form.component */ "./src/app/test-form/test-form.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _tables_table_table_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tables/table/table.component */ "./src/app/tables/table/table.component.ts");
/* harmony import */ var _prime_ng_sample_prime_ng_sample_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./prime-ng-sample/prime-ng-sample.component */ "./src/app/prime-ng-sample/prime-ng-sample.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_32__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































 //accordion and accordion tab
var appRoutes = [
    { path: '', redirectTo: '/testForm', pathMatch: 'full' },
    { path: 'dashboard', component: _ht_dashboard_ht_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["HtDashboardComponent"], data: { title: 'Dash Component' } },
    { path: 'form', component: _forms_ht_form_ht_form_component__WEBPACK_IMPORTED_MODULE_10__["HtFormComponent"], data: { title: 'Form Component' } },
    { path: 'admin', component: _ht_admin_ht_admin_component__WEBPACK_IMPORTED_MODULE_15__["HtAdminComponent"], data: { title: 'Admin Component' } },
    { path: 'users', component: _tables_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_19__["UserTableComponent"], data: { title: 'User Component' } },
    { path: 'consoles', component: _tables_console_table_console_table_component__WEBPACK_IMPORTED_MODULE_21__["ConsoleTableComponent"], data: { title: 'Console Component' } },
    { path: 'tests', component: _tables_test_table_test_table_component__WEBPACK_IMPORTED_MODULE_18__["TestTableComponent"], data: { title: 'Test Component' } },
    { path: 'testForm', component: _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_24__["TestFormComponent"], data: { title: 'Test Form Component' } },
    { path: 'prime', component: _prime_ng_sample_prime_ng_sample_component__WEBPACK_IMPORTED_MODULE_29__["PrimeNgSampleComponent"], data: { title: 'Prime' } }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _forms_ht_form_ht_form_component__WEBPACK_IMPORTED_MODULE_10__["HtFormComponent"],
                _ht_admin_ht_admin_component__WEBPACK_IMPORTED_MODULE_15__["HtAdminComponent"],
                _ht_navigation_ht_navigation_component__WEBPACK_IMPORTED_MODULE_1__["HtNavigationComponent"],
                _ht_dashboard_ht_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["HtDashboardComponent"],
                _tables_test_table_test_table_component__WEBPACK_IMPORTED_MODULE_18__["TestTableComponent"],
                _tables_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_19__["UserTableComponent"],
                _tables_console_table_console_table_component__WEBPACK_IMPORTED_MODULE_21__["ConsoleTableComponent"],
                _forms_query_form_query_form_component__WEBPACK_IMPORTED_MODULE_22__["QueryFormComponent"],
                _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_24__["TestFormComponent"],
                _tables_table_table_component__WEBPACK_IMPORTED_MODULE_28__["TableComponent"],
                _prime_ng_sample_prime_ng_sample_component__WEBPACK_IMPORTED_MODULE_29__["PrimeNgSampleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                ngx_modialog__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BootstrapModalModule"],
                _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_14__["NguiAutoCompleteModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_32__["AccordionModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_30__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_30__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_30__["RadioButtonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_31__["TableModule"]
            ],
            providers: [
                _services_ht_form_service__WEBPACK_IMPORTED_MODULE_5__["HtFormService"], _forms_query_form_query_form_component__WEBPACK_IMPORTED_MODULE_22__["QueryFormComponent"]
            ],
            exports: [
                _forms_query_form_query_form_component__WEBPACK_IMPORTED_MODULE_22__["QueryFormComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forms/ht-form/ht-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/forms/ht-form/ht-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-div{\n    margin: 0 auto;\n    width: 100%;  \n}\n.container {\n    padding: 20px;\n    background: #2E4A62;\n    min-height: 100vh;\n    min-width: 100%;\n}\n.ht-form-body {\n   max-height: 800px;\n   overflow-y: scroll;\n}\n/* #errorDescriptionTxt{\n    height:105px;\n} */\n.card {\n    position: absolute;\n    margin: auto;\n    height: 90%;\n    width: 90%;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 18px;\n}"

/***/ }),

/***/ "./src/app/forms/ht-form/ht-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/forms/ht-form/ht-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card col-md-10\">\n    <div class=\"card-header text-center\">\n      <h2> Human Tester Input Form</h2>\n    </div>\n    <div class=\"card-body ht-form-body\">\n      <form #htInputForm=\"ngForm\" (ngSubmit)=\"onSubmit(htInputForm)\" class=\"center-div\">\n        <label class=\"col-form-label\">\n          <h3>Test Info</h3>\n        </label>\n        <hr/>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n                <label for=\"testerName\" class=\"col-form-label\">Tester Name</label>\n                <input  ngui-auto-complete  [source]=\"testerNames\" type=\"text\" #testerName=\"ngModel\" required ngModel name=\"testerName\" id=\"testerName\" class=\"form-control\">\n                <div class=\"alert alert-danger\" *ngIf=\"testerName.touched && !testerName.valid\">\n                    <div *ngIf=\"testerName.errors.required\">Tester Name is required!</div>\n                  </div>\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <label for=\"consoleName\" class=\"col-form-label\">Console Name</label>\n                  <input ngui-auto-complete  [source]=\"consoleNames\" type=\"text\" #consoleName=\"ngModel\"  placeholder=\"Example: X22i Incline Trainer\" required ngModel name=\"consoleName\" id=\"consoleName\" class=\"form-control\">\n                  <div class=\"alert alert-danger\" *ngIf=\"consoleName.touched && !consoleName.valid\">\n                      <div *ngIf=\"consoleName.errors.required\">Console Name is required!</div>\n                    </div>\n                </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"equipmentType\" class=\"col-form-label\">Equipment Type</label>\n            <select required ngModel name=\"equipmentType\" id=\"equipmentType\" class=\"form-control\">\n              <optgroup>\n                <option *ngFor=\"let equipmentType of equipmentTypeList\" [value]=\"equipmentType\">{{equipmentType}}</option>\n              </optgroup>\n            </select>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"swNumber\" class=\"col-form-label\">Software #</label>\n            <input ngui-auto-complete  [source]=\"softwareNumbers\" type=\"text\" #softwareNumber=\"ngModel\" required ngModel name=\"swNumber\" id=\"swNumber\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"softwareNumber.touched && !softwareNumber.valid\">\n                <div *ngIf=\"softwareNumber.errors.required\">Software number is required!</div>\n              </div>\n          </div>\n          <div class=\"form-group col-md-4\">\n              <label for=\"machinePriority\" class=\"col-form-label\">Machine Priority</label>\n              <input type=\"number\" #machinePriority=\"ngModel\" min=1 required ngModel name=\"machinePriority\" id=\"machinePriority\" class=\"form-control\">\n              <div class=\"alert alert-danger\" *ngIf=\"machinePriority.touched && !machinePriority.valid\">\n                  <div *ngIf=\"machinePriority.errors.required\">Priority is required!</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"testDate\" class=\"col-form-label\">Date</label>\n            <input type=\"date\" ngModel name=\"testDate\" id=\"testDate\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"interfaceName\" class=\"col-form-label\">Interface</label>\n            <select required ngModel name=\"interfaceName\" id=\"interfaceName\" class=\"form-control\" #interface (change)=\"interfaceSelectedHandler(interface.value)\">\n              <optgroup>\n                <option *ngFor=\"let interfaceType of interfaceTypeList\" [value]=\"interfaceType\">{{interfaceType}}</option>\n              </optgroup>\n            </select>\n          </div>\n          <!-- <div *ngIf=\"interfaceIsBLE == true; then mobileDeviceControl ; else  screenSizeControl\">THIS DIV IS IGNORED</div> -->\n          <!-- <ng-template #mobileDeviceControl> -->\n            <div *ngIf=\"interfaceIsBLE == true\" class=\"form-group col-md-4\">\n              <label for=\"deviceName\" class=\"col-form-label\">{{deviceType}} Name</label>\n              <input ngui-auto-complete  [source]=\"deviceNames\" type=\"text\" ngModel name=\"deviceName\" id=\"deviceName\" class=\"form-control\" required>\n            </div>\n          <!-- </ng-template> -->\n          <!-- <ng-template #screenSizeControl> -->\n            <div *ngIf=\"interfaceIsBLE == false\" class=\"form-group col-md-4\">\n              <label for=\"screenSize\" class=\"col-form-label\">Screen Size (inches)</label>\n              <select required ngModel name=\"screenSize\" id=\"screenSize\" class=\"form-control\">\n                <optgroup>\n                  <option *ngFor=\"let screenSize of screenSizeList\" [value]=\"screenSize\">{{screenSize}}</option>\n                </optgroup>\n              </select>\n            </div>\n          <!-- </ng-template> -->\n        </div>\n\n        <label class=\"col-form-label\">\n          <h3>Versions</h3>\n        </label>\n        <hr/>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"appVersion\" class=\"col-form-label\">App</label>\n            <input ngui-auto-complete  [source]=\"appVersions\"  type=\"text\" #appVersion=\"ngModel\" placeholder=\"Example: 2.2.8.364\" pattern=\"(\\d+\\.)(\\d+\\.)(\\d+\\.)(\\d+)\" required ngModel name=\"appVersion\" id=\"appVersion\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"appVersion.touched && !appVersion.valid\">\n                <div *ngIf=\"appVersion.errors.required\">App version is required!</div>\n                <div *ngIf=\"appVersion.errors.pattern\">Invalid format for version number</div>\n              </div>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"brainboardVersion\" class=\"col-form-label\">Brainboard</label>\n            <input ngui-auto-complete  [source]=\"brainboardVersions\" type=\"text\" #bbVersion=\"ngModel\" placeholder=\"Example: 81.224\" pattern=\"(\\d+\\.)(\\d+)\" required ngModel name=\"brainboardVersion\" id=\"brainboardVersion\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"bbVersion.touched && !bbVersion.valid\">\n                <div *ngIf=\"bbVersion.errors.required\">Brainboard version is required!</div>\n                <div *ngIf=\"bbVersion.errors.pattern\">Invalid format for version number</div>\n              </div>\n          </div>\n        </div>\n        <!-- <div *ngIf=\"interfaceIsBLE == false; then  embeddedVersions;\">THIS DIV IS IGNORED</div>\n        <ng-template #embeddedVersions> -->\n          <div *ngIf=\"interfaceIsBLE == false\" class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n              <label for=\"adminVersion\" lass=\"col-form-label\">Admin</label>\n              <input ngui-auto-complete  [source]=\"adminVersions\" type=\"text\" #adminVersion=\"ngModel\" placeholder=\"Example: 1.1.1.95\" pattern=\"(\\d+\\.)(\\d+\\.)(\\d+\\.)(\\d+)\" required ngModel name=\"adminVersion\" id=\"adminVersion\" class=\"form-control\">\n              <div class=\"alert alert-danger\" *ngIf=\"adminVersion.touched && !adminVersion.valid\">\n                  <div *ngIf=\"adminVersion.errors.required\">Admin version is required!</div>\n                  <div *ngIf=\"adminVersion.errors.pattern\">Invalid format for version number</div>\n                </div>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label for=\"launcherVersion\"  class=\"col-form-label\">Launcher</label>\n              <input ngui-auto-complete  [source]=\"launcherVersions\" type=\"text\" #launcherVersion=\"ngModel\" placeholder=\"Example: 1.0.5.20\" pattern=\"(\\d+\\.)(\\d+\\.)(\\d+\\.)(\\d+)\" required ngModel name=\"launcherVersion\" id=\"launcherVersion\" class=\"form-control\">\n              <div class=\"alert alert-danger\" *ngIf=\"launcherVersion.touched && !launcherVersion.valid\">\n                  <div *ngIf=\"launcherVersion.errors.required\">Launcher version is required!</div>\n                  <div *ngIf=\"launcherVersion.errors.pattern\">Invalid format for version number</div>\n                </div>\n            </div>\n            <div class=\"form-group col-md-4\">\n                <label for=\"osVersion\" class=\"col-form-label\">Malata OS</label>\n                <input ngui-auto-complete  [source]=\"osVersions\" type=\"text\" #malataVersion=\"ngModel\" placeholder=\"Example: 20180331\" required ngModel name=\"osVersion\" id=\"osVersion\" class=\"form-control\">\n                <div class=\"alert alert-danger\" *ngIf=\"malataVersion.touched && !malataVersion.valid\">\n                    <div *ngIf=\"malataVersion.errors.required\">Malata version is required!</div>\n                  </div>\n              </div>\n          </div>\n        <!-- </ng-template> -->\n\n        <div *ngIf=\"selectedTestType === 'Test Rail'; then testRailSection ; else  workoutSection\">THIS DIV IS IGNORED</div>\n        <ng-template #testRailSection>\n          <div class=\"form-row\">\n            <div id=\"test-rail-section\" class=\"form-group col-md-8\">\n              <label for=\"testRailLink\" class=\"col-form-label\">Test Rail Link</label>\n              <input required ngModel name=\"testRailLink\" #testRailLink=\"ngModel\" type=\"text\" pattern=\"https:\\/\\/ifit.testrail.net\\/index\\.php\\?\\/runs\\/view\\/[\\d]+&group_by=.*&group_order=.*\"\n                class=\"form-control\" id=\"testRailLink\" placeholder=\"Enter link of your completed test rail run\">\n              <div class=\"alert alert-danger\" *ngIf=\"testRailLink.touched && !testRailLink.valid\">\n                <div *ngIf=\"testRailLink.errors.required\">Testrail link is required!</div>\n                <div *ngIf=\"testRailLink.errors.pattern\">Link entered is not a valid test run URL! </div>\n              </div>\n            </div>\n          </div>\n        </ng-template>\n\n        <ng-template #workoutSection>\n          <div id=\"workout-section\" class=\"center-div\">\n            <label class=\"col-form-label\">\n              <h3>Workout Info</h3>\n            </label>\n            <hr/>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-4\">\n                <label for=\"workoutName\" class=\"col-form-label\">Workout Name</label>\n                <input ngui-auto-complete  [source]=\"workoutNames\"  required ype=\"text\" #workoutName=\"ngModel\" ngModel name=\"workoutName\" id=\"workoutName\" class=\"form-control\">\n                <div class=\"alert alert-danger\" *ngIf=\"workoutName.touched && !workoutName.valid\">\n                    <div *ngIf=\"workoutName.errors.required\">Workout Name is required!</div>\n                  </div>\n              </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"workouType\" class=\"col-form-label\">Workout Type</label>\n                <select ngModel name=\"workoutType\" id=\"workouType\" class=\"form-control\">\n                  <option *ngFor=\"let wkType of workoutTypes\" [value]=\"wkType\">{{wkType}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-4\">\n                    <label for=\"workoutMinutes\" class=\"col-form-label\">Workout Minutes</label>\n                    <input #workoutMinutes required ngModel name=\"workoutMinutes\" #workoutTime=\"ngModel\" type=\"number\" min=\"0\" class=\"form-control\" id=\"workoutMinutes\">\n                    <div class=\"alert alert-danger\" *ngIf=\"workoutMinutes.touched && !workoutMinutes.valid\">\n                        <div *ngIf=\"workoutMinutes.errors.required\">Workout minutes is required!</div>\n                      </div>\n                  </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"anyErrors\" class=\"col-form-label\">Any Issues?</label>\n                <select ngModel name=\"workoutHasErrors\" #workoutErrorSelect (change)=\"workoutErrorSelectedHandler(workoutErrorSelect.value)\"\n                  id=\"anyErrors\" class=\"form-control\">\n                  <option *ngFor=\"let option of yesNo\">{{option}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div *ngIf=\"workoutHadErrors; then workoutErrorSection\">THIS DIV IS IGNORED</div>\n            <ng-template #workoutErrorSection>\n              <div id=\"workout-error-section\">\n                <label class=\"col-form-label\">\n                  <h3>Workout Errors</h3>\n                </label>\n                <hr/>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-md-4\">\n                        <label for=\"jiraTicketLink\" class=\"col-form-label\">Jira Ticket Link</label>\n                        <input ngui-auto-complete [source]=\"jiraTicketLinks\" type=\"text\" #jiraLink=\"ngModel\"  pattern=\"(https:\\/\\/ifitdev\\.atlassian\\.net\\/browse\\/)((?!([A-Z0-9a-z]{1,10})-?$)[A-Z]{1}[A-Z0-9]+-\\d+)\" required ngModel name=\"jiraTicketLink\" id=\"jiraTicketLink\" class=\"form-control\">\n                        <div class=\"alert alert-danger\" *ngIf=\"jiraLink.touched && !jiraLink.valid\">\n                            <div *ngIf=\"jiraLink.errors.required\">Ticket Link is required!</div>\n                            <div *ngIf=\"jiraLink.errors.pattern\">Link entered is not a valid jira issue URL! </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                          <label for=\"ticketPriority\" class=\"col-form-label\">Ticket Priority</label>\n                          <select ngModel name=\"ticketPriority\" id=\"anyErrors\" class=\"form-control\">\n                          <option *ngFor=\"let priority of ticketPriorityList\" [value]=\"priority\">{{priority}}</option>\n                        </select>\n                        </div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-8\">\n                    <label for=\"errorDescription\" class=\"col-form-label\">Error Description</label>\n                    <input type=\"text\" ngui-auto-complete [source]=\"workoutErrors\" required ngModel name=\"errorDescription\" #errorDescription=\"ngModel\" class=\"form-control\" id=\"errorDescriptionTxt\"\n                      placeholder=\"Describe the issue\">\n                    <div class=\"alert alert-danger\" *ngIf=\"errorDescription.touched && !errorDescription.valid\">\n                      <div *ngIf=\"errorDescription.errors.required\">Enter error description!</div>\n                    </div>\n                  </div>\n              </div>\n            </ng-template>\n          </div>\n        </ng-template>\n        <div class=\"form-row\">\n          <div class=\"col-sm-12 text-center\">\n            <button [disabled]=\"!htInputForm.form.valid\" type=\"submit\" class=\"btn btn-primary col-md-3\">Submit</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/ht-form/ht-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/ht-form/ht-form.component.ts ***!
  \****************************************************/
/*! exports provided: HtFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtFormComponent", function() { return HtFormComponent; });
/* harmony import */ var _services_ht_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/ht-form.service */ "./src/app/services/ht-form.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "./node_modules/ngx-modialog/plugins/bootstrap/fesm5/ngx-modialog-plugins-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HtFormComponent = /** @class */ (function () {
    function HtFormComponent(service, modal) {
        this.service = service;
        this.modal = modal;
        this.selectedTestType = "Workout";
        this.workoutHadErrors = true;
        this.interfaceTypeList = ["Embedded", "BLE Android Tablet", "BLE iOS Tablet", "BLE Android Phone", "BLE iOS Phone"];
        this.equipmentTypeList = ["Treadmill", "Bike", "Elliptical", "Freestrider", "Rower", "Fusion"];
        this.screenSizeList = [7, 10, 22];
        this.ticketPriorityList = ["Low", "Medium", "High", "Highest"];
        this.modelTestedList = {};
        this.consoleTypes = [];
        this.consoles = [];
        this.outOfRangeDict = {};
        this.userList = [];
        this.testTypeOptions = [];
        this.workoutTypes = [];
        this.interfaceIsBLE = false;
        this.deviceType = "";
        this.yesNo = ['Yes', 'No'];
        this.errorTypeList = [];
        //For Text Autocomplete
        this.appVersions = [];
        this.brainboardVersions = [];
        this.adminVersions = [];
        this.launcherVersions = [];
        this.osVersions = [];
        this.testerNames = [];
        this.consoleNames = [];
        this.softwareNumbers = [];
        this.workoutNames = [];
        this.deviceNames = [];
        this.workoutErrors = [];
        this.jiraTicketLinks = [];
        this.onlyUnique = function (value, index, self) {
            return self.indexOf(value) === index;
        };
    }
    HtFormComponent.prototype.ngOnInit = function () {
        //this.getConsoleList();
        //this.getUsers();
        this.getListOfTests();
        this.testTypeOptions = this.service.getTestTypes();
        this.errorTypeList = this.service.getWorkoutErrorCategories();
        this.workoutTypes = this.service.getWorkoutTypes();
    };
    HtFormComponent.prototype.getListOfTests = function () {
        var _this = this;
        this.service.getListOfTests().subscribe(function (res) {
            var data = res['data'];
            var errors = data.filter(function (item) {
                if (typeof (item.workoutInfo.error) != 'undefined') {
                    return item;
                }
            });
            var ble = data.filter(function (item) {
                if (typeof (item.deviceName) != 'undefined') {
                    return item;
                }
            });
            _this.deviceNames = ble.map(function (item) { return item.deviceName; }).filter(_this.onlyUnique);
            _this.workoutErrors = errors.map(function (item) { return item.workoutInfo.error.description; }).filter(_this.onlyUnique);
            _this.jiraTicketLinks = errors.map(function (item) { return item.workoutInfo.error.jiraTicket.link; }).filter(_this.onlyUnique);
            console.log("Workout Errors", _this.workoutErrors);
            _this.testerNames = data.map(function (item) { return item.testerName; }).filter(_this.onlyUnique);
            _this.consoleNames = data.map(function (item) { return item.consoleName; }).filter(_this.onlyUnique);
            _this.workoutNames = data.map(function (item) { return item.workoutInfo.name; }).filter(_this.onlyUnique);
            _this.softwareNumbers = data.map(function (item) { return item.swNumber; }).filter(_this.onlyUnique);
            _this.brainboardVersions = data.map(function (item) { return item.versions.brainboard; }).filter(_this.onlyUnique);
            _this.appVersions = data.map(function (item) { return item.versions.app; }).filter(_this.onlyUnique);
            if (_this.interfaceIsBLE) {
                _this.deviceNames = data.map(function (item) { return item.deviceName; });
            }
            else {
                _this.adminVersions = data.map(function (item) { return item.versions.admin; }).filter(_this.onlyUnique);
                _this.launcherVersions = data.map(function (item) { return item.versions.launcher; }).filter(_this.onlyUnique);
                _this.osVersions = data.map(function (item) { return item.versions.malataOS; }).filter(_this.onlyUnique);
            }
        });
    };
    HtFormComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getListOfUsers().subscribe(function (res) {
            var data = res['data'];
            _this.userList = data;
            _this.userList.forEach(function (element) {
                element.name = element.firstName + " " + element.lastName;
            });
            _this.userList = _this.userList.filter(function (user) {
                return user.role == "Tester";
            });
        });
    };
    HtFormComponent.prototype.getConsoleList = function () {
        var _this = this;
        this.service.getListOfConsoles().subscribe(function (res) {
            var data = res['data'];
            _this.consoles = data;
            _this.consoles.forEach(function (item) {
                if (typeof (_this.modelTestedList[item.type]) != 'undefined') {
                    _this.modelTestedList[item.type].push({ "model": item.model, "modelId": item._id });
                }
                else {
                    _this.modelTestedList[item.type] = [{ "model": item.model, "modelId": item._id }];
                }
            });
            _this.consoleTypes = Object.keys(_this.modelTestedList);
            console.log("Consoles: ");
            console.log(_this.consoles);
            console.log(_this.modelTestedList);
            // this.modelTestedSelectedHandler(this.consoles[0].model);
        });
    };
    //event handler for the Test type Dropdown change event
    HtFormComponent.prototype.testTypeSelectedHandler = function (value) {
        this.selectedTestType = value;
        ;
        console.log("Test Type Value: " + value);
    };
    HtFormComponent.prototype.workoutErrorSelectedHandler = function (value) {
        this.workoutHadErrors = value === 'Yes';
    };
    HtFormComponent.prototype.interfaceSelectedHandler = function (value) {
        this.interfaceIsBLE = value.includes("BLE");
        if (value.includes("Phone"))
            this.deviceType = "Phone";
        else
            this.deviceType = "Tablet";
    };
    HtFormComponent.prototype.checkIfValid = function (formControl) {
        var invalid = false;
        console.log("Form Name: " + formControl.name);
        switch (formControl.name) {
            case 'testerWeight':
                invalid = (formControl.valid && (formControl.value < 80 || formControl.value > 400));
                break;
            case 'workoutDistance':
                invalid = (formControl.valid && (formControl.value < 0.1 || formControl.value > 10));
                break;
        }
        this.outOfRangeDict[formControl.name] = invalid;
        if (invalid) {
            formControl.control.setErrors({
                outofrange: true
            });
        }
        console.log("From checkIfValid() : ");
        console.log(formControl);
        return invalid;
    };
    HtFormComponent.prototype.modelTestedSelectedHandler = function (modelId) {
        console.log("modelName: " + modelId);
        //this.appVersionList = this.modelTestedList.find((item)=> item.model == modelName).appVersions;
        var versions = this.consoles.find(function (item) { return item._id == modelId; }).versions;
        // this.brainboardVersionList = versions.map(ver => {
        //   return ver.number
        // })
        // console.log("BB Versions:");
        // console.log(this.brainboardVersionList);
    };
    HtFormComponent.prototype.getJiraTicketFromLink = function (formValues) {
        var ticketLink = formValues["jiraTicketLink"];
        var pattern = "browse/";
        var key = "N/A";
        if (ticketLink.indexOf(pattern) >= 0) //if a pattern is not present in the source string indexOf method returns -1
         {
            //to truncate everything before the pattern. An example ticket link is: https://ifitdev.atlassian.net/browse/WORK-657
            //so this would return just the key which is: WORK-657
            key = ticketLink.substr(ticketLink.indexOf(pattern) + pattern.length, ticketLink.length);
        }
        var ticket = {
            'link': ticketLink,
            'key': key,
            'priority': formValues["ticketPriority"]
        };
        return ticket;
    };
    HtFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log("Form Value");
        console.log(form.value);
        var item = form.value;
        var jiraTicket = {};
        if (this.workoutHadErrors) {
            jiraTicket = this.getJiraTicketFromLink(item);
        }
        var testObj = {
            'testerName': item['testerName'],
            'consoleName': item['consoleName'],
            'equipmentType': item['equipmentType'],
            'swNumber': item['swNumber'],
            'machinePriority': item['machinePriority'],
            'testDate': item['testDate'],
            'interfaceName': item['interfaceName'],
            'screenSize': this.interfaceIsBLE ? '0' : item['screenSize'],
            'deviceName': this.interfaceIsBLE ? item['deviceName'] : "N/A",
            'versions': {
                'app': item['appVersion'],
                'brainboard': item['brainboardVersion'],
                'admin': this.interfaceIsBLE ? "N/A" : item['adminVersion'],
                'launcher': this.interfaceIsBLE ? "N/A" : item['launcherVersion'],
                'malataOS': this.interfaceIsBLE ? "N/A" : item['osVersion'],
            },
            'workoutInfo': {
                'name': item['workoutName'],
                'type': item['workoutType'],
                'totalMinutes': item['workoutMinutes'],
                'error': item['workoutHasErrors'] == 'No' ? {} : {
                    'type': item['workoutErrorType'],
                    'description': item['errorDescription'],
                    'jiraTicket': jiraTicket
                }
            }
        };
        console.log("testObj");
        console.log(testObj);
        var dialogRef = this.modal.alert()
            .size('lg')
            .isBlocking(true)
            .showClose(false)
            .keyboard(27)
            .title('Yayy!')
            .body('Your test feedback has been submitted successfully!');
        this.service.addTest([testObj]).subscribe(function (res) {
            console.log("Test has been submitted ", res);
            dialogRef.open();
            form.reset();
            _this.getListOfTests();
        }, function (err) {
            console.log("Error submitting test\n");
            console.log(err);
            dialogRef.title("Ooops!")
                .body("Something went wrong while submitting your test feedback. See details below: \n\n" + err._body).open();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('someModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HtFormComponent.prototype, "someModal", void 0);
    HtFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ht-form',
            template: __webpack_require__(/*! ./ht-form.component.html */ "./src/app/forms/ht-form/ht-form.component.html"),
            styles: [__webpack_require__(/*! ./ht-form.component.css */ "./src/app/forms/ht-form/ht-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ht_form_service__WEBPACK_IMPORTED_MODULE_0__["HtFormService"], ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"]])
    ], HtFormComponent);
    return HtFormComponent;
}());



/***/ }),

/***/ "./src/app/forms/query-form/query-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/forms/query-form/query-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/query-form/query-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/forms/query-form/query-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\"> -->\n<form #f=\"ngForm\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Fields\" aria-label=\"Number\" matInput [formControl]=\"fieldControl\"\n      [matAutocomplete]=\"field\">\n    <mat-autocomplete (optionSelected)=\"updateDistinctValues()\" #field=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredFields | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Values\" aria-label=\"Number\" matInput [formControl]=\"distinctControl\"\n      [matAutocomplete]=\"value\">\n    <mat-autocomplete #value=\"matAutocomplete\">\n      <mat-option *ngFor=\"let value of filteredDistincts | async\" [value]=\"value\">\n        {{value}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <button (click)=\"onSubmit()\" class=\"ui button\">Submit</button>\n  <button (click)=\"onReset()\" class=\"ui button\">Reset</button>\n</form>"

/***/ }),

/***/ "./src/app/forms/query-form/query-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/query-form/query-form.component.ts ***!
  \**********************************************************/
/*! exports provided: QueryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryFormComponent", function() { return QueryFormComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * @title Table retrieving data through HTTP
 */
var QueryFormComponent = /** @class */ (function () {
    function QueryFormComponent(http, queryService) {
        this.http = http;
        this.queryService = queryService;
        this.models = ['Tests', 'Consoles', 'Users'];
        this.fieldControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.distinctControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.fields = [];
        this.values = [''];
        this.queryParams = {};
        this.resetButtonEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitButtonQueryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QueryFormComponent.prototype.ngOnInit = function () {
        this.setFields();
        this.populateQuery();
    };
    QueryFormComponent.prototype.updateDistinctValues = function () {
        var _this = this;
        if (this.modelType == "consoles") {
            this.queryService.getDistinctConsoles(this.fieldControl.value, '').subscribe(function (res) {
                _this.values = res['data'];
                _this.filteredDistincts = _this.distinctControl.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this.distinctFilter(value); }));
            });
        }
        if (this.modelType == "tests") {
            this.queryService.getDistinctTests(this.fieldControl.value, '').subscribe(function (res) {
                _this.values = res['data'];
                _this.filteredDistincts = _this.distinctControl.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this.distinctFilter(value); }));
            });
        }
        if (this.modelType == "users") {
            this.queryService.getDistinctUsers(this.fieldControl.value, '').subscribe(function (res) {
                _this.values = res['data'];
                _this.filteredDistincts = _this.distinctControl.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this.distinctFilter(value); }));
            });
        }
    };
    QueryFormComponent.prototype.populateQuery = function () {
        var _this = this;
        this.filteredFields = this.fieldControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this.fieldFilter(value); }));
        this.filteredDistincts = this.distinctControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this.distinctFilter(value); }));
    };
    QueryFormComponent.prototype.fieldFilter = function (input) {
        if (input != null) {
            var fieldValue_1 = input.toLowerCase();
            return this.fields.filter(function (option) { return option.toLowerCase().includes(fieldValue_1); });
        }
    };
    QueryFormComponent.prototype.distinctFilter = function (value) {
        if (value != null) {
            var distinctValue_1 = value.toLowerCase();
            return this.values.filter(function (option) { return option.toLowerCase().includes(distinctValue_1); });
        }
    };
    QueryFormComponent.prototype.setFields = function () {
        if (this.modelType == "consoles") {
            this.fields = ['modelNumber', 'machineType', 'OS', 'deviceCategory', 'partNumber', 'serialNumber'];
        }
        if (this.modelType == "users") {
            this.fields = ['email', 'membershipType', 'gender'];
        }
        if (this.modelType == "tests") {
            this.fields = ["email", "workoutId", "workoutTime", "submitDate", "modelNumber", "machineType", "OS", "deviceCategory"];
        }
    };
    QueryFormComponent.prototype.onSubmit = function () {
        this.queryParams = {};
        this.queryParams[this.fieldControl.value] = this.distinctControl.value;
        this.submitButtonQueryEmitter.emit(JSON.stringify(this.queryParams));
    };
    QueryFormComponent.prototype.onReset = function () {
        this.fieldControl.reset();
        this.distinctControl.reset();
        this.populateQuery();
        this.resetButtonEmitter.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], QueryFormComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], QueryFormComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], QueryFormComponent.prototype, "resetButtonEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], QueryFormComponent.prototype, "submitButtonQueryEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], QueryFormComponent.prototype, "modelType", void 0);
    QueryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-query-form',
            template: __webpack_require__(/*! ./query-form.component.html */ "./src/app/forms/query-form/query-form.component.html"),
            styles: [__webpack_require__(/*! ./query-form.component.css */ "./src/app/forms/query-form/query-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _services_query_service__WEBPACK_IMPORTED_MODULE_5__["QueryService"]])
    ], QueryFormComponent);
    return QueryFormComponent;
}());



/***/ }),

/***/ "./src/app/ht-admin/ht-admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/ht-admin/ht-admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ht-admin/ht-admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/ht-admin/ht-admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-query-form></app-query-form>\n"

/***/ }),

/***/ "./src/app/ht-admin/ht-admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/ht-admin/ht-admin.component.ts ***!
  \************************************************/
/*! exports provided: HtAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtAdminComponent", function() { return HtAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HtAdminComponent = /** @class */ (function () {
    function HtAdminComponent() {
    }
    HtAdminComponent.prototype.ngOnInit = function () {
    };
    HtAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ht-admin',
            template: __webpack_require__(/*! ./ht-admin.component.html */ "./src/app/ht-admin/ht-admin.component.html"),
            styles: [__webpack_require__(/*! ./ht-admin.component.css */ "./src/app/ht-admin/ht-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HtAdminComponent);
    return HtAdminComponent;
}());



/***/ }),

/***/ "./src/app/ht-dashboard/ht-dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ht-dashboard/ht-dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {    \n    border: 100px;\n}"

/***/ }),

/***/ "./src/app/ht-dashboard/ht-dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ht-dashboard/ht-dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Test</p>\n<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/ht-dashboard/ht-dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ht-dashboard/ht-dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: HtDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtDashboardComponent", function() { return HtDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HtDashboardComponent = /** @class */ (function () {
    function HtDashboardComponent() {
        this.tiles = [
            { text: 'Tests', cols: 1, rows: 2, color: 'lightblue' },
            { text: 'Users', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 2, color: 'lightpink' },
            { text: 'Four', cols: 1, rows: 2, color: '#DDBDF1' },
        ];
    }
    HtDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ht-dashboard',
            template: __webpack_require__(/*! ./ht-dashboard.component.html */ "./src/app/ht-dashboard/ht-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./ht-dashboard.component.css */ "./src/app/ht-dashboard/ht-dashboard.component.css")]
        })
    ], HtDashboardComponent);
    return HtDashboardComponent;
}());



/***/ }),

/***/ "./src/app/ht-navigation/ht-navigation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ht-navigation/ht-navigation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav {\n    height: 100%;\n    color: slategrey;\n}"

/***/ }),

/***/ "./src/app/ht-navigation/ht-navigation.component.html":
/*!************************************************************!*\
  !*** ./src/app/ht-navigation/ht-navigation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\n  <mat-toolbar-row>\n    <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" color=\"primary\">\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\n    <mat-nav-list>\n      <a mat-list-item routerLink='/form'>Human Testing Form</a>\n      <a mat-list-item routerLink='/admin'>Admin</a>\n      <a mat-list-item routerLink='/dashboard'>Dashboard</a>\n      <a mat-list-item routerLink='/users'>Users</a>\n      <a mat-list-item routerLink='/consoles'>Consoles</a>\n      <a mat-list-item routerLink='/tests'>Tests</a>\n      <a mat-list-item routerLink='/testForm'>Test Form</a>\n      <a mat-list-item routerLink='/prime'>Prime Test</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/ht-navigation/ht-navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ht-navigation/ht-navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: HtNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtNavigationComponent", function() { return HtNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HtNavigationComponent = /** @class */ (function () {
    function HtNavigationComponent() {
    }
    HtNavigationComponent.prototype.ngOnInit = function () {
    };
    HtNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ht-navigation',
            template: __webpack_require__(/*! ./ht-navigation.component.html */ "./src/app/ht-navigation/ht-navigation.component.html"),
            styles: [__webpack_require__(/*! ./ht-navigation.component.css */ "./src/app/ht-navigation/ht-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HtNavigationComponent);
    return HtNavigationComponent;
}());



/***/ }),

/***/ "./src/app/prime-ng-sample/prime-ng-sample.component.css":
/*!***************************************************************!*\
  !*** ./src/app/prime-ng-sample/prime-ng-sample.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prime-ng-sample/prime-ng-sample.component.html":
/*!****************************************************************!*\
  !*** ./src/app/prime-ng-sample/prime-ng-sample.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"first\">Basic</h3>\n<p-table [value]=\"cars\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th>Jira Key</th>\n      <th>Keywords</th>\n      <th>Priority</th>\n      <th>Seen By</th>\n      <th>Event Id</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-issue>\n    <tr>\n      <td>{{issue.jiraKey}}</td>\n      <td>{{issue.keywords}}</td>\n      <td>{{issue.priority}}</td>\n      <td>{{issue.seenBy}}</td>\n      <td>{{issue.eventId}}</td>\n    </tr>\n  </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/prime-ng-sample/prime-ng-sample.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/prime-ng-sample/prime-ng-sample.component.ts ***!
  \**************************************************************/
/*! exports provided: PrimeNgSampleComponent, Issue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeNgSampleComponent", function() { return PrimeNgSampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Issue", function() { return Issue; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/issue.service */ "./src/app/services/issue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrimeNgSampleComponent = /** @class */ (function () {
    function PrimeNgSampleComponent(issueService) {
        this.issueService = issueService;
    }
    PrimeNgSampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issueService.getIssues().subscribe(function (issues) { return _this.issues = issues; });
        this.cols = [
            { field: 'jiraKey', header: 'Jira Key' },
            { field: 'keywords', header: 'Keywords' },
            { field: 'priority', header: 'Priority' },
            { field: 'seenBy', header: 'Seen By' },
            { field: 'eventId', header: 'Event Id' }
        ];
    };
    PrimeNgSampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prime-ng-sample',
            template: __webpack_require__(/*! ./prime-ng-sample.component.html */ "./src/app/prime-ng-sample/prime-ng-sample.component.html"),
            styles: [__webpack_require__(/*! ./prime-ng-sample.component.css */ "./src/app/prime-ng-sample/prime-ng-sample.component.css")]
        }),
        __metadata("design:paramtypes", [_services_issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"]])
    ], PrimeNgSampleComponent);
    return PrimeNgSampleComponent;
}());

var Issue = /** @class */ (function () {
    function Issue() {
    }
    return Issue;
}());



/***/ }),

/***/ "./src/app/services/ht-form.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ht-form.service.ts ***!
  \*********************************************/
/*! exports provided: HtFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtFormService", function() { return HtFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HtFormService = /** @class */ (function () {
    function HtFormService(http) {
        this.http = http;
        this.uri = '/api';
    }
    //Collection: Equipment
    HtFormService.prototype.getListOfConsoles = function () {
        return this.http.get("" + (this.uri + "/consoles"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    //Collection: Users
    HtFormService.prototype.getListOfUsers = function () {
        return this.http.get("" + (this.uri + "/users"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HtFormService.prototype.getListOfTests = function () {
        return this.http.get("" + (this.uri + "/tests"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HtFormService.prototype.addTest = function (test) {
        return this.http.post("" + (this.uri + "/tests"), test);
    };
    //Collection: TestInfo
    HtFormService.prototype.getTestTypes = function () {
        return ['Workout', 'Test Rail'];
    };
    HtFormService.prototype.getWorkoutErrorCategories = function () {
        return ['Wifi', 'Ble connection', 'User interface'];
    };
    HtFormService.prototype.getWorkoutTypes = function () {
        return ['N/A', 'Manual', 'Map', 'Video'];
    };
    HtFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HtFormService);
    return HtFormService;
}());



/***/ }),

/***/ "./src/app/services/issue.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/issue.service.ts ***!
  \*******************************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IssueService = /** @class */ (function () {
    function IssueService(http) {
        this.http = http;
        this.uri = '/api';
    }
    IssueService.prototype.getIssues = function () {
        return this.http.get(this.uri + " + /issues/getIssues")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    IssueService.prototype.getIssueById = function (id) {
        return this.http.get(this.uri + " + /issues/getIssueById/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    IssueService.prototype.removeIssueById = function (id) {
        return this.http.get(this.uri + " + /issues/removeIssueById/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    IssueService.prototype.addIssue = function (issue) {
        var body = JSON.stringify(issue);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post("" + (this.uri + "/issues/addIssue"), body, options);
    };
    IssueService.prototype.updateIssue = function (issue) {
        var body = JSON.stringify(issue);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post("" + (this.uri + "/issues/update"), body, options);
    };
    IssueService.prototype.sendIssueToMixpnael = function (issue, event) {
        var body = JSON.stringify(issue, event);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post("" + (this.uri + "/issues/sendIssueToMixpanel"), body, options);
    };
    IssueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], IssueService);
    return IssueService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.uri = '/api';
    }
    PostService.prototype.addTest = function (data) {
        this.http.post("" + (this.uri + "/tests"), data)
            .subscribe(function (res) {
        }, function (err) {
            console.log("Error occured");
        });
    };
    PostService.prototype.addConsole = function (data) {
        this.http.post("" + (this.uri + "/consoles"), data)
            .subscribe(function (res) {
        }, function (err) {
            console.log("Error occured");
        });
    };
    PostService.prototype.addUser = function (data) {
        this.http.post("" + (this.uri + "/users"), data)
            .subscribe(function (res) {
        }, function (err) {
            console.log("Error occured");
        });
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/query.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/query.service.ts ***!
  \*******************************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryService = /** @class */ (function () {
    function QueryService(http) {
        this.http = http;
        this.uri = '/api';
    }
    //Collection: Equipment
    QueryService.prototype.getListOf = function (model, query) {
        console.log("model: ", model);
        return this.http.get("" + (this.uri + "/" + model + '/?query=' + query))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.getListOfConsoles = function (query) {
        return this.http.get("" + (this.uri + "/consoles" + '/?query=' + query))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    //Collection: Users
    QueryService.prototype.getListOfUsers = function (query) {
        return this.http.get("" + (this.uri + "/users" + '/?query=' + query))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.getListOfTests = function (query) {
        return this.http.get("" + (this.uri + "/tests" + '/?query=' + query))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.getDistinctTests = function (distinct, query) {
        return this.http.get("" + (this.uri + "/tests" + '/?query=' + query + '&distinct=' + distinct))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.getDistinctConsoles = function (distinct, query) {
        return this.http.get("" + (this.uri + "/consoles" + '/?query=' + query + '&distinct=' + distinct))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.getDistinctUsers = function (distinct, query) {
        return this.http.get("" + (this.uri + "/users" + '/?query=' + query + '&distinct=' + distinct))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.addTest = function (test) {
        return this.http.post("" + (this.uri + "/tests"), test);
    };
    //Query Redshift DB
    QueryService.prototype.queryiFit = function (query) {
        return this.http.get("" + (this.uri + "/iFit" + '/?query=' + query))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.getCompletedWorkout = function (userID) {
        var query = "workoutId: userID";
        return this.http.get("" + (this.uri + "/redshift" + '/?query=' + query))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.getConsoleInfo = function (email) {
        var query = "\"traits.email: " + email + "\"";
        return this.http.get("" + (this.uri + "/iFit" + '/?query=' + query))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.getTestPaths = function () {
        return this.http.get("" + (this.uri + "/tests/attributes"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    QueryService.prototype.getTestTypes = function () {
        return ['Workout', 'Test Rail'];
    };
    QueryService.prototype.getWorkoutErrorCategories = function () {
        return ['Wifi', 'Ble connection', 'User interface'];
    };
    QueryService.prototype.getWorkoutTypes = function () {
        return ['N/A', 'Manual', 'Map', 'Video'];
    };
    QueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/tables/console-table/console-table.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tables/console-table/console-table.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/tables/console-table/console-table.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tables/console-table/console-table.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n\n  <div class=\"example-table-container\">\n\n    <app-query-form  [modelType] = \"model\" (submitButtonQueryEmitter)= 'onQueryClick($event)'  (resetButtonEmitter)=  'onQueryReset($event)'></app-query-form>\n\n    <table mat-table [dataSource]=\"data\" class=\"test-table\" matSort matSortActive=\"created\" matSortDisableClear\n      matSortDirection=\"asc\">\n\n      <!-- Model Number Column -->\n      <ng-container matColumnDef=\"modelNumber\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Model Number</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.modelNumber}}</td>\n      </ng-container>\n\n      <!-- Machine Type Column -->\n      <ng-container matColumnDef=\"machineType\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Machine Type</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.machineType}}</td>\n      </ng-container>\n\n      <!-- OS Column -->\n      <ng-container matColumnDef=\"OS\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>OS</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.OS}}</td>\n      </ng-container>\n\n      <!-- Device Category Column -->\n      <ng-container matColumnDef=\"deviceCategory\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Device Category</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.deviceCategory}}</td>\n      </ng-container>\n\n      <!-- Workout Time Column -->\n      <ng-container matColumnDef=\"partNumber\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Part Number</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.partNumber}}</td>\n      </ng-container>\n\n      <!-- Submit Date Column -->\n      <ng-container matColumnDef=\"serialNumber\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Serial Number</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.serialNumber}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/tables/console-table/console-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/console-table/console-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: ConsoleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleTableComponent", function() { return ConsoleTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @title Table retrieving data through HTTP
 */
var ConsoleTableComponent = /** @class */ (function () {
    function ConsoleTableComponent(queryService) {
        this.queryService = queryService;
        this.displayedColumns = ['modelNumber', 'OS', 'deviceCategory', 'partNumber', 'serialNumber', 'machineType'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.model = "consoles";
    }
    ConsoleTableComponent.prototype.ngOnInit = function () {
        this.populateTable(null);
    };
    ConsoleTableComponent.prototype.populateTable = function (queryParams) {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.queryService.getListOfConsoles(queryParams);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.count;
            return data.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    ConsoleTableComponent.prototype.onQueryClick = function (queryParams) {
        this.populateTable(queryParams);
    };
    ConsoleTableComponent.prototype.onQueryReset = function () {
        this.populateTable(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ConsoleTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ConsoleTableComponent.prototype, "sort", void 0);
    ConsoleTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-console-table',
            template: __webpack_require__(/*! ./console-table.component.html */ "./src/app/tables/console-table/console-table.component.html"),
            styles: [__webpack_require__(/*! ./console-table.component.css */ "./src/app/tables/console-table/console-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_4__["QueryService"]])
    ], ConsoleTableComponent);
    return ConsoleTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/table/table.component.css":
/*!**************************************************!*\
  !*** ./src/app/tables/table/table.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/table/table.component.html":
/*!***************************************************!*\
  !*** ./src/app/tables/table/table.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n\n  <div class=\"example-table-container\">\n\n    <app-query-form (submitButtonModelEmitter) = 'populateTable($event)' (submitButtonQueryEmitter)= 'onQueryClick($event)'  (resetButtonEmitter)=  'onQueryReset($event)'></app-query-form>\n\n    <table mat-table [dataSource]=\"data\" class=\"test-table\" matSort matSortActive=\"created\" matSortDisableClear\n      matSortDirection=\"asc\">\n\n      <!-- Model Number Column -->\n      <ng-container ng-repeat=\"let column in displayedColumns\" matColumnDef=\"model_number\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{column}}</th>\n        <td mat-cell *matCellDef=\"let row\">{{column}}</td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/tables/table/table.component.ts":
/*!*************************************************!*\
  !*** ./src/app/tables/table/table.component.ts ***!
  \*************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _forms_query_form_query_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/query-form/query-form.component */ "./src/app/forms/query-form/query-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TableComponent = /** @class */ (function () {
    function TableComponent(queryService) {
        this.queryService = queryService;
        this.queryForm = new _forms_query_form_query_form_component__WEBPACK_IMPORTED_MODULE_5__["QueryFormComponent"](this.httpClient, this.queryService);
        this.displayedColumns = ["email", "workout_id", "workout_time", "submit_date", "model_number", "machine_type", "os", "device_category"];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.currentModel = "consoles";
    }
    TableComponent.prototype.ngOnInit = function () {
        this.populateTable(null);
    };
    TableComponent.prototype.populateTable = function (queryParams) {
        var _this = this;
        this.getColumns();
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            //this.isLoadingResults = true;
            if (_this.currentModel = "consoles") {
                return _this.queryService.getListOfConsoles(queryParams);
            }
            if (_this.currentModel = "users") {
                return _this.queryService.getListOfUsers(queryParams);
            }
            if (_this.currentModel = "tests") {
                return _this.queryService.getListOfTests(queryParams);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.count;
            return data.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    TableComponent.prototype.onQueryClick = function (queryParams) {
        this.populateTable(queryParams);
    };
    TableComponent.prototype.onQueryReset = function () {
        this.populateTable(null);
    };
    TableComponent.prototype.onModelSelected = function (model) {
        this.currentModel = model;
        this.populateTable(null);
    };
    TableComponent.prototype.getColumns = function () {
        if (this.currentModel == "consoles") {
            this.displayedColumns = ['model_number', 'machine_type', 'os', 'device_category', 'part_number', 'serial_number'];
        }
        if (this.currentModel == "users") {
            this.displayedColumns = ['email', 'membership_type', 'gender'];
        }
        if (this.currentModel == "tests") {
            this.displayedColumns = ["email", "workout_id", "workout_time", "submit_date", "model_number", "machine_type", "os", "device_category"];
        }
        console.log('Columns: ', this.displayedColumns);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TableComponent.prototype, "sort", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/tables/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/tables/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_4__["QueryService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/tables/test-table/test-table.component.css":
/*!************************************************************!*\
  !*** ./src/app/tables/test-table/test-table.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/tables/test-table/test-table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/tables/test-table/test-table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n\n  <div class=\"example-table-container\">\n\n    <app-query-form [modelType] = \"model\" (submitButtonModelEmitter) = 'populateTable($event)' (submitButtonQueryEmitter)= 'onQueryClick($event)'  (resetButtonEmitter)=  'onQueryReset($event)'></app-query-form>\n\n    <table mat-table [dataSource]=\"data\" class=\"test-table\" matSort matSortActive=\"created\" matSortDisableClear\n      matSortDirection=\"asc\">\n\n      <!-- Email  Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.email}}</td>\n      </ng-container>\n\n      <!-- Model Number Column -->\n      <ng-container matColumnDef=\"modelNumber\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Model Number</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.modelNumber}}</td>\n      </ng-container>\n\n      <!-- Machine Type Column -->\n      <ng-container matColumnDef=\"machineType\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Machine Type</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.machineType}}</td>\n      </ng-container>\n\n      <!-- OS Column -->\n      <ng-container matColumnDef=\"OS\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>OS</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.OS}}</td>\n      </ng-container>\n\n      <!-- Device Category Column -->\n      <ng-container matColumnDef=\"deviceCategory\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Device Category Date</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.deviceCategory}}</td>\n      </ng-container>\n\n      <!-- Workout ID Column -->\n      <ng-container matColumnDef=\"workoutId\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Workout ID</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.workoutId}}</td>\n      </ng-container>\n\n      <!-- Workout Time Column -->\n      <ng-container matColumnDef=\"workoutTime\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Workout Time</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.workoutTime}}</td>\n      </ng-container>\n\n      <!-- Submit Date Column -->\n      <ng-container matColumnDef=\"submitDate\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Submit Date</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.submitDate}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/tables/test-table/test-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tables/test-table/test-table.component.ts ***!
  \***********************************************************/
/*! exports provided: TestTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestTableComponent", function() { return TestTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _forms_query_form_query_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/query-form/query-form.component */ "./src/app/forms/query-form/query-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * @title Table retrieving data through HTTP
 */
var TestTableComponent = /** @class */ (function () {
    function TestTableComponent(queryService) {
        this.queryService = queryService;
        this.queryForm = new _forms_query_form_query_form_component__WEBPACK_IMPORTED_MODULE_5__["QueryFormComponent"](this.httpClient, this.queryService);
        this.displayedColumns = ["email", "workoutId", "workoutTime", "submitDate", "modelNumber", "machineType", "OS", "deviceCategory"];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.model = "tests";
    }
    TestTableComponent.prototype.ngOnInit = function () {
        this.populateTable(null);
    };
    TestTableComponent.prototype.populateTable = function (queryParams) {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.queryService.getListOfTests(queryParams);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.count;
            return data.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    TestTableComponent.prototype.onQueryClick = function (queryParams) {
        this.populateTable(queryParams);
    };
    TestTableComponent.prototype.onQueryReset = function () {
        this.populateTable(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TestTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TestTableComponent.prototype, "sort", void 0);
    TestTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-table',
            template: __webpack_require__(/*! ./test-table.component.html */ "./src/app/tables/test-table/test-table.component.html"),
            styles: [__webpack_require__(/*! ./test-table.component.css */ "./src/app/tables/test-table/test-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_4__["QueryService"]])
    ], TestTableComponent);
    return TestTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/user-table/user-table.component.css":
/*!************************************************************!*\
  !*** ./src/app/tables/user-table/user-table.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/tables/user-table/user-table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/tables/user-table/user-table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n\n  <div class=\"example-table-container\">\n\n      <app-query-form  [modelType] = \"model\" (submitButtonQueryEmitter)= 'onQueryClick($event)'  (resetButtonEmitter)=  'onQueryReset($event)'></app-query-form>\n\n    <table mat-table [dataSource]=\"data\" class=\"test-table\" matSort matSortActive=\"created\" matSortDisableClear\n      matSortDirection=\"asc\">\n\n      <!-- Model Number Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.email}}</td>\n      </ng-container>\n\n      <!-- Machine Type Column -->\n      <ng-container matColumnDef=\"age\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Age</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.age}}</td>\n      </ng-container>\n\n      <!-- OS Column -->\n      <ng-container matColumnDef=\"birthday\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Birthday</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.birthday}}</td>\n      </ng-container>\n\n      <!-- Device Category Column -->\n      <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.weight}}</td>\n      </ng-container>\n\n      <!-- Workout Time Column -->\n      <ng-container matColumnDef=\"membershipType\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Membership Type</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.membershipType}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/tables/user-table/user-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tables/user-table/user-table.component.ts ***!
  \***********************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/query.service */ "./src/app/services/query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @title Table retrieving data through HTTP
 */
var UserTableComponent = /** @class */ (function () {
    function UserTableComponent(queryService) {
        this.queryService = queryService;
        this.displayedColumns = ['email', 'birthday', 'weight', 'membershipType'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.model = "users";
    }
    UserTableComponent.prototype.ngOnInit = function () {
        this.populateTable(null);
    };
    UserTableComponent.prototype.populateTable = function (queryParams) {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.queryService.getListOfUsers(queryParams);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.resultsLength = data.count;
            return data.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        })).subscribe(function (data) { return _this.data = data; });
    };
    UserTableComponent.prototype.onQueryClick = function (queryParams) {
        this.populateTable(queryParams);
    };
    UserTableComponent.prototype.onQueryReset = function () {
        this.populateTable(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserTableComponent.prototype, "sort", void 0);
    UserTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-table',
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/tables/user-table/user-table.component.html"),
            styles: [__webpack_require__(/*! ./user-table.component.css */ "./src/app/tables/user-table/user-table.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_4__["QueryService"]])
    ], UserTableComponent);
    return UserTableComponent;
}());



/***/ }),

/***/ "./src/app/test-form/test-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-form/test-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n  }\n  .example-container > * {\n    width: 100%;\n  }\n  button {\n   margin: 6px;\n  }\n  mat-card {\n    margin-right: 6px;\n    background-color: whitesmoke;\n  } \n  "

/***/ }),

/***/ "./src/app/test-form/test-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/test-form/test-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper [linear]=\"true\" #stepper>\n  <mat-step [stepControl]=\"emailFormGroup\">\n    <mat-card>\n      <form [formGroup]=\"emailFormGroup\">\n        <ng-template matStepLabel>Email</ng-template>\n        <mat-card-title>Please Enter Your Email</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input matInput placeholder=\"example@ifit.com\" formControlName=\"emailCtrl\">\n            <mat-error *ngIf=\"emailFormGroup.invalid\">{{getEmailError()}}</mat-error>\n          </mat-form-field>\n          <div>\n            <button mat-raised-button (click)=\"getInfo()\" matStepperNext>Next</button>\n          </div>\n        </mat-card-content>\n      </form>\n    </mat-card>\n  </mat-step>\n\n  <mat-step [stepControl]=\"verifyFormGroup\" [optional]=\"true\">\n    <mat-card>\n      <form [formGroup]=\"verifyFormGroup\">\n        <ng-template matStepLabel>Verify</ng-template>\n        <mat-card-title>Is This Information Correct?</mat-card-title>\n          <mat-card-content>\n            <code>\n              <pre>{{workoutData |json}}</pre>\n          </code>\n          </mat-card-content>\n        <div>\n          <button mat-raised-button matStepperPrevious>No</button>\n          <button mat-raised-button (click)=\"saveInfo()\" mat-button matStepperNext>Yes</button>\n        </div>\n      </form>\n    </mat-card>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-raised-button matStepperPrevious>Back</button>\n      <button mat-raised-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>"

/***/ }),

/***/ "./src/app/test-form/test-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-form/test-form.component.ts ***!
  \**************************************************/
/*! exports provided: TestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestFormComponent", function() { return TestFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/query.service */ "./src/app/services/query.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TestFormComponent = /** @class */ (function () {
    function TestFormComponent(queryService, postService, _formBuilder) {
        this.queryService = queryService;
        this.postService = postService;
        this._formBuilder = _formBuilder;
        this.userEmail = '';
        this.userID = '';
        this.userNotFound = false;
        this.workoutNotFound = false;
        this.workoutQueryParams = {};
        this.userQueryParams = {};
    }
    TestFormComponent.prototype.ngOnInit = function () {
        this.emailFormGroup = this._formBuilder.group({
            emailCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
        this.verifyFormGroup = this._formBuilder.group({
            verifyCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.fifthFormGroup = this._formBuilder.group({
            fifthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    TestFormComponent.prototype.getEmailError = function () {
        return this.emailFormGroup.controls['emailCtrl'].hasError('required') ? 'You must enter a value' :
            this.emailFormGroup.controls['emailCtrl'].hasError('email') ? 'Not a valid email' : '';
    };
    TestFormComponent.prototype.getInfo = function () {
        if (this.emailFormGroup.controls['emailCtrl'].valid) {
            this.getUserData();
            //this.getWorkoutData();
        }
    };
    TestFormComponent.prototype.saveInfo = function () {
        try {
            this.postService.addTest(this.workoutData);
        }
        catch (err) {
            console.log('Error Saving Workout --->', err);
        }
        try {
            this.postService.addConsole(this.workoutData);
        }
        catch (err) {
            console.log('Error Saving Console --->', err);
        }
        try {
            this.postService.addUser(this.userData.traits);
        }
        catch (err) {
            console.log('Error Saving User --->', err);
        }
    };
    TestFormComponent.prototype.getWorkoutData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.workoutQueryParams['event'] = "Completed Workout";
                        this.workoutQueryParams['userId'] = this.userID;
                        console.log('Query Params: ', this.workoutQueryParams);
                        return [4 /*yield*/, this.queryService.queryiFit(JSON.stringify(this.workoutQueryParams)).subscribe(function (res) {
                                _this.workoutData = res[0].properties;
                                console.log("workoutData: ", _this.workoutData);
                                _this.workoutData['email'] = _this.userEmail;
                                _this.workoutData['membershipType'] = _this.userData.traits['membershipType'];
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TestFormComponent.prototype.getUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.userEmail = this.emailFormGroup.value['emailCtrl'];
                        this.emailSubmitted = "'" + this.userEmail + "'";
                        this.userQueryParams["type"] = "identify";
                        this.userQueryParams["traits.email"] = this.userEmail;
                        return [4 /*yield*/, this.queryService.queryiFit(JSON.stringify(this.userQueryParams)).subscribe(function (res) {
                                _this.userData = res[0];
                                console.log("userData: ", _this.userData);
                                try {
                                    _this.userID = _this.userData['userId'];
                                }
                                catch (_a) {
                                    _this.userNotFound = true;
                                    console.log('User Cannot Be Found');
                                }
                                _this.getWorkoutData();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TestFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-form',
            template: __webpack_require__(/*! ./test-form.component.html */ "./src/app/test-form/test-form.component.html"),
            styles: [__webpack_require__(/*! ./test-form.component.css */ "./src/app/test-form/test-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"], _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TestFormComponent);
    return TestFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/justin.wheeler/projects/TestingManagementSystem/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map