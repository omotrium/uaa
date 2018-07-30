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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-role/add-role.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-role/add-role.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-role/add-role.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-role/add-role.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"box box-primary col-md-12\">\n      \n      <div class=\"login-box-body col-md-12\" style=\"margin-top:100px;\">\n          <div class=\"login-logo\" style=\"margin-bottom: 30px;\">\n              <a routerLink=\"/#\"><h3 style=\"color:#fff; text-align: center;\">Ecobank UAA</h3></a>\n          </div>\n\n          <div class=\"col-md-4\"></div>\n          <div class=\"col-md-4\">\n                  <p class=\"login-box-msg\" style=\"color:#fff\"><b>Add Role</b></p>\n          \n                  <form>\n                      \n                      <div class=\"form-group has-feedback\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"displayName\" autocomplete=\"off\" [(ngModel)]=\"displayName\" name=\"displayName\" >\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n\n                      <div class=\"form-group has-feedback\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"description\" autocomplete=\"off\" [(ngModel)]=\"description\" name=\"description\" >\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n                      <div class=\"form-group has-feedback\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"value\" autocomplete=\"off\" [(ngModel)]=\"value\" name=\"value\" >\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n                      <div class=\"form-group has-feedback\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"type\" autocomplete=\"off\" [(ngModel)]=\"type\" name=\"type\" >\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n                     \n                      \n                      <div class=\"row\" style=\"margin-bottom:50px;\">\n                              <div class=\"col-md-2\">\n                                  &nbsp;\n                              </div>\n                             <div class=\"col-md-4\">\n                                  <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                  <button type=\"button\" class=\"btn btn-default\" (click)=\"loadRole()\">Create</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <a routerLink=\"/login\" class=\"btn btn-success btn-block btn-flat\">Cancel</a>\n                            </div>\n                            <div class=\"col-md-2\">\n                                  &nbsp;\n                              </div>\n                            \n                      </div>\n                  </form>\n\n\n\n\n                  \n          </div>\n          <div class=\"col-md-4\"></div>\n          \n\n    </div>\n\n\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/add-role/add-role.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-role/add-role.component.ts ***!
  \************************************************/
/*! exports provided: AddRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function() { return AddRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddRoleComponent = /** @class */ (function () {
    function AddRoleComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.displayName = "";
        this.description = "";
        this.value = "";
        this.type = "";
    }
    AddRoleComponent.prototype.ngOnInit = function () {
    };
    AddRoleComponent.prototype.loadRole = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "http://localhost:8080/uaa/Groups";
        var data = JSON.stringify({ displayName: this.displayName, description: this.description, value: this.value, type: this.type });
        console.log("value recieved is " + this.value);
        var schema = {
            "displayName": null,
            "description": null,
            "members": [{
                    "origin": "uaa",
                    "type": null,
                    "value": null
                }]
        };
        schema.displayName = this.displayName;
        schema.description = this.description;
        schema.members[0].value = this.value;
        console.log(this.displayName);
        console.log(this.description);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhOWMyNzA3YTYzOTg0MjFhOTU1ZDE4ZDA3YWRkYjRiNCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTgzMTE1NywiZXhwIjoxNTMxODc0MzU3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.0jyShGsHlUAiyd8K_Q8sG1SV0BLEpcF4MUlfRiioWhw",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status == 201) {
                _this.displayName = "";
                _this.description = "";
                _this.value = "";
                _this.type = "";
                alert("Role " + _this.displayName + " Created Successfully");
            }
            else {
                alert("Failed!");
            }
        }, function (error) {
            alert('Client_id already created');
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    AddRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-role',
            template: __webpack_require__(/*! ./add-role.component.html */ "./src/app/add-role/add-role.component.html"),
            styles: [__webpack_require__(/*! ./add-role.component.css */ "./src/app/add-role/add-role.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddRoleComponent);
    return AddRoleComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sidebar */\r\n#sidebar-wrapper {\r\n    z-index: 1;\r\n    position: absolute;\r\n    width: 10%;\r\n    height: 50%;\r\n    overflow-y: hidden;\r\n    background: white;\r\n    border: 2px solid white;\r\n    opacity: 0.9;\r\n}\r\n.card {\r\n    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4); */\r\n    box-shadow: 0 4px 8px 0 white(0, 0, 0, 0.4);\r\n    transition: 0.3s;\r\n    margin:6%;\r\n}\r\n.card:hover {\r\n    box-shadow: 0 8px 16px 0 white(0,0,0,0.8);\r\n}\r\n.card-body {\r\n    padding:8px;\r\n    background-color: white;\r\n    \r\n    \r\n}\r\n/* Always take up entire screen */\r\n/* #page-content-wrapper {\r\n    width: 100%;\r\n    position: absolute;\r\n    padding: 15px;\r\n    border: 5px solid blue;\r\n} */\r\n/* Change with of sidebar from 0 to 250px */\r\n/* #wrapper.menuDisplayed #sidebar-wrapper {\r\n    width: 250px;\r\n} */\r\n/* Since we added left padding, we need to shrink the width by 250px */\r\n/* #wrapper.menuDisplayed #page-content-wrapper {\r\n    padding-left: 250px;\r\n} */\r\n/* Sidebar styling - the entire ul list */\r\n.sidebar-nav {\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n.sidebar-nav li {\r\n    text-indent: 20px;\r\n    line-height: 40px;\r\n}\r\n.sidebar-nav li a {\r\n    display: block;\r\n    text-decoration: none;\r\n    /* color: #ddd; */\r\n    color: black;\r\n}\r\n.sidebar-nav li a:hover {\r\n    background: darkblue;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"box box-default\" style=\"background-color:white(0, 90, 124);margin-bottom: 110px;\"> \n    \n  <div class=\"box-header with-border\" style=\"color:#fff;\">  \n\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container-fluid\">\n              <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                \n                <ul class=\"nav navbar-nav navbar-right\">\n                  \n                  <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                      <li><a href=\"#\"></a></li>\n                      <li><a href=\"#\"></a></li>\n                      <li><a href=\"#\">SignOut</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </div><!-- /.navbar-collapse -->\n              \n            </div><!-- /.container-fluid -->\n            \n          </nav>\n          \n\n<!-- <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">Dashboard</h1>\n      <p class=\"lead\">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>\n    </div>\n  </div> -->\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-3 col-sm-6\">\n              <div class=\"card\" style=\"width: 20rem;\">\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Sans &amp; Sans-Serif</h4>\n                      <p class=\"card-text\"></p>\n                      <a routerLink=\"/view-users\" class=\"btn btn-default btn-block btn-flat\">USERS</a>\n                      \n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-3 col-sm-6\">\n              <div class=\"card\" style=\"width: 20rem;\">\n                       <div class=\"card-body\">\n                      <h4 class=\"card-title\">Measure</h4>\n                      <p class=\"card-text\"></p>\n                      <a routerLink=\"/view-client-app\" class=\"btn btn-default btn-block btn-flat\">CLIENTS</a>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-3 col-sm-6\">\n              <div class=\"card\" style=\"width: 20rem;\">\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Tracking &amp; Kerning</h4>\n                      <p class=\"card-text\"></p>\n                      <a routerLink=\"/view-groups\" class=\"btn btn-default btn-block btn-flat\">GROUP</a>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-3 col-sm-6\">\n              <div class=\"card\" style=\"width: 20rem;\">\n                  \n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Leading</h4>\n                      <p class=\"card-text\"></p>\n                      <a routerLink=\"/assign\" class=\"btn btn-default btn-block btn-flat\">ASSIGN</a>\n                      \n                      \n                      \n                  </div>\n              </div>\n          </div>\n      </div>\n      <!--/row-->\n  </div>\n  <!--container-->\n          \n           \n\n\n\n      "

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n\n</router-outlet>\n\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _assign_assign_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assign/assign.component */ "./src/app/assign/assign.component.ts");
/* harmony import */ var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-role/create-role.component */ "./src/app/create-role/create-role.component.ts");
/* harmony import */ var _create_client_app_create_client_app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-client-app/create-client-app.component */ "./src/app/create-client-app/create-client-app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_client_app_view_client_app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-client-app/view-client-app.component */ "./src/app/view-client-app/view-client-app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-users/view-users.component */ "./src/app/view-users/view-users.component.ts");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/add-role/add-role.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _view_groups_view_groups_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view-groups/view-groups.component */ "./src/app/view-groups/view-groups.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























//import { AlertsModule } from 'angular-alert-module';
var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_26__["TestComponent"] },
    { path: 'change-password', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"] },
    { path: 'groups', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_25__["GroupsComponent"] },
    { path: 'create-user', component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_7__["CreateUserComponent"] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"] },
    { path: 'groups', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_25__["GroupsComponent"] },
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"] },
    { path: 'assign', component: _assign_assign_component__WEBPACK_IMPORTED_MODULE_11__["AssignComponent"] },
    { path: 'create-role', component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_12__["CreateRoleComponent"] },
    { path: 'create-client-app', component: _create_client_app_create_client_app_component__WEBPACK_IMPORTED_MODULE_13__["CreateClientAppComponent"] },
    { path: 'view-client-app', component: _view_client_app_view_client_app_component__WEBPACK_IMPORTED_MODULE_16__["ViewClientComponent"] },
    { path: 'view-users', component: _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_18__["ViewUsersComponent"] },
    { path: 'add-role', component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_19__["AddRoleComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"] },
    { path: 'view-groups', component: _view_groups_view_groups_component__WEBPACK_IMPORTED_MODULE_21__["ViewGroupsComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"] },
    { path: 'clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_24__["ClientsComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_7__["CreateUserComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"],
                _assign_assign_component__WEBPACK_IMPORTED_MODULE_11__["AssignComponent"],
                _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_12__["CreateRoleComponent"],
                _create_client_app_create_client_app_component__WEBPACK_IMPORTED_MODULE_13__["CreateClientAppComponent"],
                _view_client_app_view_client_app_component__WEBPACK_IMPORTED_MODULE_16__["ViewClientComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_18__["ViewUsersComponent"],
                _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_19__["AddRoleComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
                _view_groups_view_groups_component__WEBPACK_IMPORTED_MODULE_21__["ViewGroupsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_24__["ClientsComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_25__["GroupsComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_26__["TestComponent"]
            ],
            imports: [
                [_angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"]],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                //AlertsModule.forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assign/assign.component.css":
/*!*********************************************!*\
  !*** ./src/app/assign/assign.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='submit']:hover {\r\n    background-color: black;\r\n}\r\n\r\ninput[type='submit']:disabled {\r\n    background-color: green;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/assign/assign.component.html":
/*!**********************************************!*\
  !*** ./src/app/assign/assign.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n    <!-- /.login-logo -->\n    <div class=\"box box-primary col-md-12\">\n        \n            <div class=\"login-box-body col-md-12\" style=\"margin-top:100px;\">\n              <div class=\"login-logo\" style=\"margin-bottom: 30px;\">\n                    <a routerLink=\"/#\"><h3 style=\"color:#fff; text-align: center;\">Ecobank UAA</h3></a>\n                </div>\n                <div class=\"col-xs-4\"></div>\n                <div class=\"col-xs-4\">\n                        <p class=\"login-box-msg\" style=\"color:#fff\"><b>Assign Role</b></p>\n      \n                        <form action=\"userprofile\" method=\"post\">\n                            <div class=\"form-group has-feedback\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"off\">\n                                <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"sel1\">Role:</label>\n                                <select class=\"form-control\" id=\"sel1\">\n                                  <option>User</option>\n                                  <option>Admin</option>\n                                  \n                                </select>\n                                \n                            </div>\n                             <div class=\"row\" style=\"margin-bottom:50px;\">\n                                <div class=\"col-md-2\">\n                                            &nbsp;\n                                </div>\n                                <div class=\"col-md-4\">\n                                            <!-- <a routerLink=\"/userprofile\" class=\"btn btn-primary btn-block btn-flat\">Sign In</a> -->\n                                            <a routerLink=\"/userprofile\" class=\"btn btn-primary btn-block btn-flat\">Assign</a>\n                                </div>\n                                <div class=\"col-md-4\">\n                                          <!-- <a routerLink=\"/\" class=\"btn btn-primary btn-block btn-flat\">Sign In</a> -->\n                                          <a routerLink=\"/create-user\" class=\"btn btn-success btn-block btn-flat\">Cancel</a>\n                                </div>\n                                <div class=\"col-md-2\">\n                                            &nbsp;\n                                </div>\n                                      \n                                        <!-- /.col -->\n                                 </div>\n                            </form>\n              \n                </div>\n                <div class=\"col-md-4\"></div>\n               \n            </div>\n    \n      \n      </div>\n      \n      \n      \n      <!-- /.login-box -->\n      <!-- jQuery 2.2.3 -->\n      <script src=\"assets/plugins/jQuery/jquery-2.2.3.min.js\"></script>\n      <!-- Bootstrap 3.3.7 -->\n      <script src=\"assets/dist/bootstrap/js/bootstrap.min.js\"></script>\n      <!-- iCheck -->\n      <script src=\"assets/plugins/iCheck/icheck.min.js\"></script>\n      <script>\n        $(function() {\n            $('input').iCheck({\n                checkboxClass: 'icheckbox_square-blue',\n                radioClass: 'iradio_square-blue',\n                increaseArea: '20%' // optional\n            });\n        });\n      </script>\n      \n      <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/assign/assign.component.ts":
/*!********************************************!*\
  !*** ./src/app/assign/assign.component.ts ***!
  \********************************************/
/*! exports provided: AssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignComponent", function() { return AssignComponent; });
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

var AssignComponent = /** @class */ (function () {
    function AssignComponent() {
    }
    AssignComponent.prototype.ngOnInit = function () {
    };
    AssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign',
            template: __webpack_require__(/*! ./assign.component.html */ "./src/app/assign/assign.component.html"),
            styles: [__webpack_require__(/*! ./assign.component.css */ "./src/app/assign/assign.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssignComponent);
    return AssignComponent;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-container{\r\n    /* background: #3d3780;  */\r\n     background: skyblue;  \r\n   \r\n   \r\n}\r\n.auth-wrapper{\r\n   max-width: 450px;\r\n   width: 440px;\r\n   padding-top: 10rem;\r\n}\r\n.auth-header span{\r\n   font-size: 28px;\r\n   font-weight: 600;\r\n   color: #fff;\r\n   margin-bottom: 0.75rem;\r\n}\r\n.auth-header small{\r\n   color: #a1a1e5;\r\n}\r\n.auth-wrapper form .form-control{\r\n   padding: 0.75rem 1.125rem;\r\n   color: #ffffff;\r\n   /* background-color: #37317a; */\r\n   background-color: white;\r\n   border: 2px solid #342e73;\r\n   border-radius: 0.5rem;\r\n}\r\n.auth-wrapper form .form-control:focus{\r\n   border: 2px solid #7659ff;\r\n   background-color: #342e73;\r\n   box-shadow: none;\r\n}\r\n.auth-wrapper form .form-control::-webkit-input-placeholder{\r\n   color: #a1a1e5;\r\n}\r\n.auth-wrapper form .form-control:-ms-input-placeholder{\r\n   color: #a1a1e5;\r\n}\r\n.auth-wrapper form .form-control::-ms-input-placeholder{\r\n   color: #a1a1e5;\r\n}\r\n.auth-wrapper form .form-control::placeholder{\r\n   color: #a1a1e5;\r\n}\r\n.auth-btn{\r\n   color: #ffffff;\r\n   text-transform: uppercase;\r\n   letter-spacing: 0.4px;\r\n   font-weight: 500;\r\n   border: 2px solid transparent;\r\n   transition: none;\r\n   cursor: default;\r\n   padding: 0.75rem 1.5rem;\r\n   font-size: 1rem;\r\n   line-height: 1.25;\r\n   border-radius: 0.5rem;\r\n}\r\n.auth-wrapper .auth-btn-green{\r\n   background-image: linear-gradient(to right, #00d9bf, #00d977);\r\n   border-radius: 0.5rem;\r\n   text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\r\n   border: none;\r\n   line-height: calc((1rem * 1.25) + 4px);\r\n}"

/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center h-100 auth-container\">\n        <div class=\"auth-wrapper\">\n            <div>\n                <div class=\"d-flex flex-column text-center mb-4 auth-header\">\n                    <span>ECOBANK UAA</span>\n                    <!-- <small>Hello! Sign in with your username or email</small> -->\n                </div>\n                <form>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" id=\"old password\" placeholder=\"Old password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" id=\"New password\" placeholder=\"New password\">\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" id=\"Confirm password\" placeholder=\"Confirm password\">\n                    </div>\n                    <a routerLink=\"/dashboard\" class=\"btn btn-primary w-100 auth-btn auth-btn-green\">Change password</a>\n                    <!-- <a routerLink=\"/view-users\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</a> -->\n                                         \n                </form>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
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

var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.css":
/*!***********************************************!*\
  !*** ./src/app/clients/clients.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-nav .sidebar-nav-link{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.section-title{\r\n    color: rgba(0,0,0,0.87);\r\n}\r\n#main-wrapper{\r\n    height: 100% !important;\r\n}\r\n.page-wrapper{\r\n    height: calc(100% - 54px)\r\n}\r\n.empty-ui{\r\n    margin-top: 10rem;\r\n}\r\n.empty-ui h1{\r\n    margin-bottom: 2rem;\r\n}\r\n.empty-ui i{\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.empty-ui button{\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 48px;\r\n}\r\n.empty-ui button:focus{\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 48px;\r\n    color: #fff;\r\n}\r\n.empty-ui button i{\r\n    display: inline-block;\r\n    margin: 0;\r\n    margin-right: 1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/clients/clients.component.html":
/*!************************************************!*\
  !*** ./src/app/clients/clients.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"fix-header fix-sidebar\">\n    <!-- Preloader - style you can find in spinners.css -->\n    <!-- <div class=\"preloader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n        </svg>\n    </div> -->\n    <!-- Main wrapper  -->\n    <div id=\"main-wrapper\">\n        <!-- header header  -->\n        <div class=\"header\">\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n                <!-- Logo -->\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"index.html\">\n                        <!-- Logo icon -->\n                        <!-- <b>\n                                <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </b> -->\n                        <!--End Logo icon -->\n                        <!-- Logo text -->\n                        <!-- <span>\n                                <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </span> -->\n                    </a>\n                </div>\n                <!-- End Logo -->\n                <div class=\"navbar-collapse\">\n                    <!-- toggle and nav items -->\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\n                        <!-- This is  -->\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"mdi mdi-menu\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item m-l-10\">\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"ti-menu\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                    <!-- User profile and search -->\n                    <ul class=\"navbar-nav my-lg-0\">\n                        <!-- Profile -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\n                                <ul class=\"dropdown-user\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <!-- End header header -->\n        <!-- Left Sidebar  -->\n        <div class=\"left-sidebar\">\n            <!-- Sidebar scroll-->\n            <div class=\"scroll-sidebar\">\n                <!-- Sidebar navigation-->\n                <nav class=\"sidebar-nav\">\n                    <ul id=\"sidebarnav\">\n                        <li class=\"nav-devider\"></li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\n                                <i class=\"far fa-tachometer\"></i>\n                                <span class=\"hide-menu\">Dashboard</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\n                                <i class=\"fa fa-envelope\"></i>\n                                <span class=\"hide-menu\">Users</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\n                                <i class=\"fa fa-bar-chart\"></i>\n                                <span class=\"hide-menu\">Client</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Group</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Roles</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <!-- End Sidebar navigation -->\n            </div>\n            <!-- End Sidebar scroll-->\n        </div>\n        <!-- End Left Sidebar  -->\n        <!-- Page wrapper  -->\n        <div class=\"page-wrapper\">\n            <!-- End Bread crumb -->\n            <!-- Container fluid  -->\n            <div class=\"container-fluid\">\n                <!-- Start Page Content -->\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-6 d-flex justify-content-center\">\n                        <div class=\"empty-ui text-center\">\n                            <h1>CLIENTS</h1>\n                            <i class=\"far fa-user-circle fa-5x color-primary\"></i>\n                            <p>No clients have bee added to your connections</p>\n                            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\" data-toggle=\"modal\" data-target=\"#add_new_user_modal\"><i class=\"fas fa-plus\"></i>Create user</button>\n                            <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Create Client</button> -->\n                                       \n                                       <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                        <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i>Create Clients</button>\n                                        <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</button>\n                                         -->\n                                         <a routerLink=\"/view-client-app\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">VIEW CLIENTS</a>\n                                      </div>\n                            \n\n                                      \n                            \n                                      \n                                                                                \n                                          \n                                      \n                                    \n                                    <!--End of  div for container class  --> \n                                  \n                            \n                        </div>\n                    </div>\n                </div>\n                <!-- End PAge Content -->\n            </div>\n            <!-- End Container fluid  -->\n        </div>\n        <!-- End Page wrapper  -->\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Client</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                            \n                    <div class=\"form-group has-feedback\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" [(ngModel)]=\"client_id\" name=\"client_id\" >\n                        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\">\n                          <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"client_secret\" name=\"client_secret\">\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"scope\" [(ngModel)]=\"scope\" name=\"scope\">\n                            <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n                      <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"redirected_uri\" [(ngModel)]=\"redirected_uri\" name=\"redirected_uri\">\n                            <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n                      <div class=\"form-group has-feedback\">\n                            <!-- <input type=\"text\" class=\"form-control\" placeholder=\"authorities\" [(ngModel)]=\"authorities\" name=\"authorities\"> -->\n                            <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                            <select authorities=\"authorities\" placeholder=\"authorities\" name=\"authorities\" class=\"form-control\"[(ngModel)]=\"authorities\" >\n                                    <option value=\"clients.read\">clients.read</option>\n                                    <option value=\"clients.write\">clients.write</option>\n                                    <option value=\"clients.read&clients.write\">clients.read&clients.write</option>\n                                    \n                                  </select>\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n                      <!-- <div class=\"form-group\">\n                            <label for=\"sel1\">Role:</label>\n                            <select class=\"form-control\" id=\"sel1\">\n                              <option>User</option>\n                              <option>Admin</option>\n                              \n                            </select>\n                            \n                        </div> -->\n\n                    <div class=\"row\" style=\"margin-bottom:50px;\">\n                            <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                           <div class=\"col-md-4\">\n                                <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"loadClient()\">Create</button>\n                                \n                            </div>\n                            <div class=\"col-md-4\">\n                              <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                    \n                          </div>\n                          <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                          \n                    </div>\n                </form> \n        \n            </div>\n            <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n            </div> -->\n        </ng-template>\n\n    </div>\n\n    \n\n    \n"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(http, route, router, modalService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.client_id = "";
        this.name = "";
        this.client_secret = "";
        this.scope = "";
        this.redirected_uri = "";
        this.authorities = "";
        this.get = { 'client_id': null, 'name': null, 'scope': null, 'authorized_grant_types': null, 'autoapprove': null };
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    ClientsComponent.prototype.loadClients = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            Accept: "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            Accept: "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: "http://localhost:8080/uaa/oauth/clients",
            headers: head
        })
            .then(function (response) {
            //console.log(response.data)
            return (_this.clients = response.data.resources);
        })
            .catch(function (error) { return console.log(error); });
    };
    ClientsComponent.prototype.loadClientsById = function (data) {
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        };
        var url = "http://localhost:8080/uaa/oauth/clients" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            return console.log(response.data);
        }
        // this.Users = response.data.resources
        )
            .catch(function (error) { return console.log(error); });
    };
    ClientsComponent.prototype.loadClient = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "http://localhost:8080/uaa/oauth/clients";
        var data = JSON.stringify({
            client_id: this.client_id,
            client_secret: this.client_secret,
            name: this.name,
            scope: this.scope,
            redirected_uri: this.redirected_uri,
            authorities: this.authorities
        });
        var schema = {
            scope: [],
            client_id: null,
            client_secret: null,
            resource_ids: [],
            authorized_grant_types: ["client_credentials"],
            redirect_uri: [],
            authorities: [],
            token_salt: "3tjE6d",
            autoapprove: true,
            allowedproviders: ["uaa", "ldap", "my-saml-provider"],
            name: null
        };
        schema.client_id = this.client_id;
        schema.name = this.name;
        schema.client_secret = this.client_secret;
        schema.scope[0] = this.scope;
        schema.redirect_uri[0] = this.redirected_uri;
        schema.authorities[0] = this.authorities;
        console.log(this.client_id);
        console.log(this.name);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status == 201) {
                _this.client_id = "";
                _this.name = "";
                _this.client_secret = "";
                _this.scope = "";
                _this.redirected_uri = "";
                _this.authorities = "";
                alert("User " + _this.client_id + " Created Successfully");
            }
            else {
                alert("Failed!");
            }
        }, function (error) {
            alert("Client_id already created");
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    ClientsComponent.prototype.funcDeleteT = function (client_id) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "http://localhost:8080/uaa/oauth/clients/{client_id}";
            link = link.replace("{client_id}", client_id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
                Accept: "application/json"
            });
            var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            // myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Access-Control-Allow-Origin", "*");
            var Option_1 = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
            // confirm(link);
            this.http.delete(link, Option_1).subscribe(function (res) {
                console.log(res.json().responseCode);
                if (res.json().responseCode == "201") {
                    _this.loadClients();
                    // alert("User "+this.username+" deleted Successfully");
                    // alert(res.json().responseMessage);
                }
                else {
                    _this.loadClients();
                    alert("Deleted Successfully!");
                }
            }, function (error) {
                console.log(JSON.stringify(error.json()));
            });
        }
    };
    // Modal logic
    ClientsComponent.prototype.open = function (content, data) {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        };
        var url = "http://localhost:8080/uaa/oauth/clients" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            console.log(response.data);
            _this.get.client_id = response.data.client_id;
            _this.get.name = response.data.name;
            _this.get.scope = response.data.scope;
            _this.get.authorized_grant_types = response.data.authorized_grant_types;
            _this.get.autoapprove = response.data.autoapprove;
            _this.modalService
                .open(content, { ariaLabelledBy: "modal-basic-title" })
                .result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
            // this.Users = response.data.resources
        })
            .catch(function (error) { return console.log(error); });
    };
    ClientsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-clients",
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/create-client-app/create-client-app.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/create-client-app/create-client-app.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='submit']:hover {\r\n    background-color: black;\r\n}\r\n\r\ninput[type='submit']:disabled {\r\n    background-color: green;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/create-client-app/create-client-app.component.html":
/*!********************************************************************!*\
  !*** ./src/app/create-client-app/create-client-app.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"box box-primary col-md-12\">\n      \n        <div class=\"login-box-body col-md-12\" style=\"margin-top:100px;\">\n            <div class=\"login-logo\" style=\"margin-bottom: 30px;\">\n                <a routerLink=\"/#\"><h3 style=\"color:#fff; text-align: center;\">Ecobank UAA</h3></a>\n            </div>\n\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n                    <p class=\"login-box-msg\" style=\"color:#fff\"><b>Create User</b></p>\n            \n                    <form>\n                        \n                        <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" [(ngModel)]=\"client_id\" name=\"client_id\" >\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\">\n                              <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                              <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"client_secret\" name=\"client_secret\">\n                            <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                        </div>\n                        \n                        <div class=\"row\" style=\"margin-bottom:50px;\">\n                                <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                               <div class=\"col-md-4\">\n                                    <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                    <button type=\"button\" class=\"btn btn-default\" (click)=\"loadClient()\">Create</button>\n                                </div>\n                                <div class=\"col-md-4\">\n                                  <a routerLink=\"/login\" class=\"btn btn-success btn-block btn-flat\">Cancel</a>\n                              </div>\n                              <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                              \n                        </div>\n                    </form>\n\n\n\n\n                    \n            </div>\n            <div class=\"col-md-4\"></div>\n            \n\n      </div>\n  \n\n\n</div>\n\n\n\n\n\n<!-- /.login-box -->\n<!-- jQuery 2.2.3 -->\n<script src=\"assets/plugins/jQuery/jquery-2.2.3.min.js\"></script>\n<!-- Bootstrap 3.3.7 -->\n<script src=\"assets/dist/bootstrap/js/bootstrap.min.js\"></script>\n<!-- iCheck -->\n<script src=\"assets/plugins/iCheck/icheck.min.js\"></script>\n<script>\n  $(function() {\n      $('input').iCheck({\n          checkboxClass: 'icheckbox_square-blue',\n          radioClass: 'iradio_square-blue',\n          increaseArea: '20%' // optional\n      });\n  });\n</script>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/create-client-app/create-client-app.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/create-client-app/create-client-app.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateClientAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClientAppComponent", function() { return CreateClientAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateClientAppComponent = /** @class */ (function () {
    function CreateClientAppComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.client_id = "";
        this.name = "";
        this.client_secret = "";
    }
    CreateClientAppComponent.prototype.ngOnInit = function () {
    };
    CreateClientAppComponent.prototype.loadClient = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "http://localhost:8080/uaa/oauth/clients";
        var data = JSON.stringify({ client_id: this.client_id, client_secret: this.client_secret, name: this.name });
        var schema = {
            "scope": ["clients.read", "clients.write"],
            "client_id": null,
            "client_secret": null,
            "resource_ids": [],
            "authorized_grant_types": ["client_credentials"],
            "redirect_uri": ["http://yahoo.com"],
            "authorities": ["clients.read", "clients.write"],
            "token_salt": "3tjE6d",
            "autoapprove": true,
            "allowedproviders": ["uaa", "ldap", "my-saml-provider"],
            "name": null
        };
        schema.client_id = this.client_id;
        schema.name = this.name;
        schema.client_secret = this.client_secret;
        console.log(this.client_id);
        console.log(this.name);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI5Y2IwOTg2MWMyMzY0NTg1YTY2M2YxMWY1NGZjMjQxZCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTQxMzI4MSwiZXhwIjoxNTMxNDU2NDgxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.8OaDQgnvoV3wt9PA3NSyVF-1qFkg5DbxRtyzQJPIdgs",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status == 201) {
                _this.client_id = "";
                _this.name = "";
                _this.client_secret = "";
                alert("User " + _this.client_id + " Created Successfully");
            }
            else {
                alert("Failed!");
            }
        }, function (error) {
            alert('Client_id already created');
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    CreateClientAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-client-app',
            template: __webpack_require__(/*! ./create-client-app.component.html */ "./src/app/create-client-app/create-client-app.component.html"),
            styles: [__webpack_require__(/*! ./create-client-app.component.css */ "./src/app/create-client-app/create-client-app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateClientAppComponent);
    return CreateClientAppComponent;
}());



/***/ }),

/***/ "./src/app/create-role/create-role.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-role/create-role.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='submit']:hover {\r\n    background-color: black;\r\n}\r\n\r\ninput[type='submit']:disabled {\r\n    background-color: green;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/create-role/create-role.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-role/create-role.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n    <!-- /.login-logo -->\n    <div class=\"box box-primary col-md-12\">\n        \n            <div class=\"login-box-body col-md-12\" style=\"margin-top:100px;\">\n              <div class=\"login-logo\" style=\"margin-bottom: 30px;\">\n                    <a routerLink=\"/#\"><h3 style=\"color:#fff; text-align: center;\">Ecobank UAA</h3></a>\n                </div>\n                <div class=\"col-xs-4\"></div>\n                <div class=\"col-xs-4\">\n                        <p class=\"login-box-msg\" style=\"color:#fff\"><b>Create Role</b></p>\n      \n                        <form action=\"userprofile\" method=\"post\">\n                            <div class=\"form-group has-feedback\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"off\">\n                                <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                            </div>\n                            <div class=\"form-group has-feedback\">\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                                    <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                                </div>\n                            <div class=\"form-group\">\n                                <label for=\"sel1\">Role:</label>\n                                <select class=\"form-control\" id=\"sel1\">\n                                  <option>Read</option>\n                                  <option>Write</option>\n                                  <option>Read/Write</option>\n\n                                  \n                                </select>\n                                \n                            </div>\n                             <div class=\"row\" style=\"margin-bottom:50px;\">\n                                <div class=\"col-md-2\">\n                                            &nbsp;\n                                </div>\n                                <div class=\"col-md-4\">\n                                            <!-- <a routerLink=\"/userprofile\" class=\"btn btn-primary btn-block btn-flat\">Sign In</a> -->\n                                            <a routerLink=\"/userprofile\" class=\"btn btn-primary btn-block btn-flat\">Create Role</a>\n                                </div>\n                                <div class=\"col-md-4\">\n                                          <!-- <a routerLink=\"/\" class=\"btn btn-primary btn-block btn-flat\">Sign In</a> -->\n                                          <a routerLink=\"/create-user\" class=\"btn btn-success btn-block btn-flat\">Cancel</a>\n                                </div>\n                                <div class=\"col-md-2\">\n                                            &nbsp;\n                                </div>\n                                      \n                                        <!-- /.col -->\n                                 </div>\n                            </form>\n              \n                </div>\n                <div class=\"col-md-4\"></div>\n               \n            </div>\n    \n      \n      </div>\n      \n      \n      \n      <!-- /.login-box -->\n      <!-- jQuery 2.2.3 -->\n      <script src=\"assets/plugins/jQuery/jquery-2.2.3.min.js\"></script>\n      <!-- Bootstrap 3.3.7 -->\n      <script src=\"assets/dist/bootstrap/js/bootstrap.min.js\"></script>\n      <!-- iCheck -->\n      <script src=\"assets/plugins/iCheck/icheck.min.js\"></script>\n      <script>\n        $(function() {\n            $('input').iCheck({\n                checkboxClass: 'icheckbox_square-blue',\n                radioClass: 'iradio_square-blue',\n                increaseArea: '20%' // optional\n            });\n        });\n      </script>\n      \n      <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/create-role/create-role.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-role/create-role.component.ts ***!
  \******************************************************/
/*! exports provided: CreateRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoleComponent", function() { return CreateRoleComponent; });
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

var CreateRoleComponent = /** @class */ (function () {
    function CreateRoleComponent() {
    }
    CreateRoleComponent.prototype.ngOnInit = function () {
    };
    CreateRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-role',
            template: __webpack_require__(/*! ./create-role.component.html */ "./src/app/create-role/create-role.component.html"),
            styles: [__webpack_require__(/*! ./create-role.component.css */ "./src/app/create-role/create-role.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateRoleComponent);
    return CreateRoleComponent;
}());



/***/ }),

/***/ "./src/app/create-user/create-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-user/create-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='submit']:hover {\r\n    background-color: black;\r\n}\r\n\r\ninput[type='submit']:disabled {\r\n    background-color: green;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/create-user/create-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-user/create-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"box box-primary col-md-12\">\n      \n        <div class=\"login-box-body col-md-12\" style=\"margin-top:100px;\">\n            <div class=\"login-logo\" style=\"margin-bottom: 30px;\">\n                <a routerLink=\"/#\"><h3 style=\"color:#fff; text-align: center;\">Ecobank UAA</h3></a>\n            </div>\n\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n                    <p class=\"login-box-msg\" style=\"color:#fff\"><b>Create User</b></p>\n            \n                    <form>\n                        <!-- <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" #firstname placeholder=\"First name\" autocomplete=\"off\">\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div> -->\n                        <!-- <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n                            <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                        </div> -->\n                        <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"off\" [(ngModel)]=\"username\" name=\"username\" >\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\">\n                              <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                              <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\n                            <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm\">\n                                <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                            </div>\n                        <div class=\"row\" style=\"margin-bottom:50px;\">\n                                <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                               <div class=\"col-md-4\">\n                                    <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                    <button type=\"button\" class=\"btn btn-default\" (click)=\"loadUser()\">Create</button>\n                                </div>\n                                <div class=\"col-md-4\">\n                                  <a routerLink=\"/login\" class=\"btn btn-success btn-block btn-flat\">Cancel</a>\n                              </div>\n                              <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                              \n                        </div>\n                    </form>\n\n\n\n\n                    <!-- <table class=\"table col-md-12\">\n                        <thead>\n                            <tr>\n                                <th>\n                                    examplee1\n                                </th>\n                                <th>\n                                    examplee2\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let af of hhhhhh\">\n                                <td>{{ af.userName }}</td>\n                                <td>{{ af.userName }}</td>\n                            </tr>\n                        </tbody>\n                    </table> -->\n            </div>\n            <div class=\"col-md-4\"></div>\n            \n\n      </div>\n  \n\n\n</div>\n\n\n\n<!-- /.login-box -->\n<!-- jQuery 2.2.3 -->\n<script src=\"assets/plugins/jQuery/jquery-2.2.3.min.js\"></script>\n<!-- Bootstrap 3.3.7 -->\n<script src=\"assets/dist/bootstrap/js/bootstrap.min.js\"></script>\n<!-- iCheck -->\n<script src=\"assets/plugins/iCheck/icheck.min.js\"></script>\n<script>\n  $(function() {\n      $('input').iCheck({\n          checkboxClass: 'icheckbox_square-blue',\n          radioClass: 'iradio_square-blue',\n          increaseArea: '20%' // optional\n      });\n  });\n</script>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/create-user/create-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-user/create-user.component.ts ***!
  \******************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.username = "";
        this.email = "";
        this.password = "";
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent.prototype.loadUser = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "http://localhost:8080/uaa/Users";
        var data = JSON.stringify({ userName: this.username, Password: this.password, emails: this.email });
        var schema = {
            "userName": null,
            "emails": [{
                    "value": null,
                    "primary": true
                }],
            "active": true,
            "verified": true,
            "origin": "",
            "password": null,
            "schemas": ["urn:scim:schemas:core:1.0"]
        };
        schema.userName = this.username;
        schema.emails[0].value = this.email;
        schema.password = this.password;
        console.log(this.username);
        console.log(this.email);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI2OGI1MTdlNzUyNDk0ZmFmYTFhMmE5OWQ3ZmNiMDI0NCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTIyMDE5OCwiZXhwIjoxNTMxMjYzMzk4LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.slxaohrYVRPljNrTaQ_RUtxINQGpJUDBzijy-7vuRkc",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status === 201) {
                _this.username = "";
                _this.email = "";
                _this.password = "";
                alert("User " + _this.username + " Created Successfully");
            }
            // this.router.navigateByUrl("/settings/addaffiliates");
        }, function (error) {
            alert('User already created');
            console.log('errroroorororororor');
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    CreateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.css */ "./src/app/create-user/create-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  create works!\n</p>\n"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
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

var CreateComponent = /** @class */ (function () {
    function CreateComponent() {
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-nav .sidebar-nav-link{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.section-title{\r\n    color: rgba(0,0,0,0.87);\r\n}\r\n#main-wrapper{\r\n    height: 100% !important;\r\n}\r\n.page-wrapper{\r\n    height: calc(100% - 54px)\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"fix-header fix-sidebar\">\r\n    <!-- Preloader - style you can find in spinners.css -->\r\n    <!-- <div class=\"preloader\">\r\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n        </svg>\r\n    </div> -->\r\n    <!-- Main wrapper  -->\r\n    <div id=\"main-wrapper\">\r\n        <!-- header header  -->\r\n        <div class=\"header\">\r\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n                <!-- Logo -->\r\n                <div class=\"navbar-header\">\r\n                    <a class=\"navbar-brand\" href=\"index.html\">\r\n                        <!-- Logo icon -->\r\n                        <!-- <b>\r\n                            <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                        </b> -->\r\n                        <!--End Logo icon -->\r\n                        <!-- Logo text -->\r\n                        <!-- <span>\r\n                            <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                        </span> -->\r\n                    </a>\r\n                </div>\r\n                <!-- End Logo -->\r\n                <div class=\"navbar-collapse\">\r\n                    <!-- toggle and nav items -->\r\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\r\n                        <!-- This is  -->\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"mdi mdi-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item m-l-10\">\r\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"ti-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <!-- User profile and search -->\r\n                    <ul class=\"navbar-nav my-lg-0\">\r\n                        <!-- Profile -->\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\r\n                                <ul class=\"dropdown-user\">\r\n                                    <li>\r\n                                        <a routerLink=\"/change-email\">\r\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a routerLink=\"/change-password\">\r\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a routerLink=\"/login\">\r\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n        <!-- End header header -->\r\n        <!-- Left Sidebar  -->\r\n        <div class=\"left-sidebar\">\r\n            <!-- Sidebar scroll-->\r\n            <div class=\"scroll-sidebar\">\r\n                <!-- Sidebar navigation-->\r\n                <nav class=\"sidebar-nav\">\r\n                    <ul id=\"sidebarnav\">\r\n                        <li class=\"nav-devider\"></li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-tachometer\"></i>\r\n                                <span class=\"hide-menu\">Dashboard</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-user\"></i>\r\n                                <span class=\"hide-menu\">Users</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/Clients\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-user\"></i>\r\n                                <span class=\"hide-menu\">Client</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/groups\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-building\"></i>\r\n                                <span class=\"hide-menu\">Group</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/add-role\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-user\"></i>\r\n                                <span class=\"hide-menu\">Roles</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <!-- End Sidebar navigation -->\r\n            </div>\r\n            <!-- End Sidebar scroll-->\r\n        </div>\r\n        <!-- End Left Sidebar  -->\r\n        <!-- Page wrapper  -->\r\n        <div class=\"page-wrapper\">\r\n            <!-- Bread crumb -->\r\n            <div class=\"row page-titles\">\r\n                <div class=\"col-md-5 align-self-center\">\r\n                    <h3 class=\"section-title\">Overview</h3>\r\n                </div>\r\n            </div>\r\n            <!-- End Bread crumb -->\r\n            <!-- Container fluid  -->\r\n            <div class=\"container-fluid\">\r\n                <!-- Start Page Content -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card p-30\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left meida media-middle\">\r\n                                    <span>\r\n                                        <a routerLink='/users'>\r\n                                        <i class=\"far fa-user f-s-40 color-primary\"></i></a>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"media-body media-text-right\">\r\n                                    <h2></h2>\r\n                                    <p class=\"m-b-0\">Users</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card p-30\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left meida media-middle\">\r\n                                    <span>\r\n                                            <a routerLink='/Clients'>\r\n                                        <i class=\"far fa-user f-s-40 color-success\"></i></a>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"media-body media-text-right\">\r\n                                    <h2></h2>\r\n                                    <p class=\"m-b-0\">Clients</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card p-30\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left meida media-middle\">\r\n                                    <span>\r\n                                            <a routerLink='/groups'>\r\n                                        <i class=\"far fa-building f-s-40 color-warning\"></i></a>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"media-body media-text-right\">\r\n                                    <h2></h2>\r\n                                    <p class=\"m-b-0\">Groups</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card p-30\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left meida media-middle\">\r\n                                    <span>\r\n                                            <a routerLink='/add-role'>\r\n                                        <i class=\"far fa-user f-s-40 color-danger\"></i></a>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"media-body media-text-right\">\r\n                                    <h2></h2>\r\n                                    <p class=\"m-b-0\">Roles</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End PAge Content -->\r\n            </div>\r\n            <!-- End Container fluid  -->\r\n        </div>\r\n        <!-- End Page wrapper  -->\r\n    </div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n    <div class=\"pull-right hidden-xs\">\n        <b>Version</b> 1.0.0\n    </div>\n    <strong>Copyright &copy; 2018 <a routerLink=\"/http://ecobank.com\">Ecobank</a>.</strong> All rights reserved.\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-nav .sidebar-nav-link{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.section-title{\r\n    color: rgba(0,0,0,0.87);\r\n}\r\n#main-wrapper{\r\n    height: 100% !important;\r\n}\r\n.page-wrapper{\r\n    height: calc(100% - 54px)\r\n}\r\n.empty-ui{\r\n    margin-top: 10rem;\r\n}\r\n.empty-ui h1{\r\n    margin-bottom: 2rem;\r\n}\r\n.empty-ui i{\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.empty-ui button{\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 48px;\r\n}\r\n.empty-ui button:focus{\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 48px;\r\n    color: #fff;\r\n}\r\n.empty-ui button i{\r\n    display: inline-block;\r\n    margin: 0;\r\n    margin-right: 1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/groups/groups.component.html":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"fix-header fix-sidebar\">\n    <!-- Preloader - style you can find in spinners.css -->\n    <!-- <div class=\"preloader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n        </svg>\n    </div> -->\n    <!-- Main wrapper  -->\n    <div id=\"main-wrapper\">\n        <!-- header header  -->\n        <div class=\"header\">\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n                <!-- Logo -->\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"index.html\">\n                        <!-- Logo icon -->\n                        <!-- <b>\n                                <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </b> -->\n                        <!--End Logo icon -->\n                        <!-- Logo text -->\n                        <!-- <span>\n                                <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </span> -->\n                    </a>\n                </div>\n                <!-- End Logo -->\n                <div class=\"navbar-collapse\">\n                    <!-- toggle and nav items -->\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\n                        <!-- This is  -->\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"mdi mdi-menu\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item m-l-10\">\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"ti-menu\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                    <!-- User profile and search -->\n                    <ul class=\"navbar-nav my-lg-0\">\n                        <!-- Profile -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\n                                <ul class=\"dropdown-user\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <!-- End header header -->\n        <!-- Left Sidebar  -->\n        <div class=\"left-sidebar\">\n            <!-- Sidebar scroll-->\n            <div class=\"scroll-sidebar\">\n                <!-- Sidebar navigation-->\n                <nav class=\"sidebar-nav\">\n                    <ul id=\"sidebarnav\">\n                        <li class=\"nav-devider\"></li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\n                                <i class=\"far fa-tachometer\"></i>\n                                <span class=\"hide-menu\">Dashboard</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\n                                <i class=\"fa fa-envelope\"></i>\n                                <span class=\"hide-menu\">Users</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/clients\" aria-expanded=\"false\">\n                                <i class=\"fa fa-bar-chart\"></i>\n                                <span class=\"hide-menu\">Client</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/groups\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Group</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/add-role\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Roles</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <!-- End Sidebar navigation -->\n            </div>\n            <!-- End Sidebar scroll-->\n        </div>\n        <!-- End Left Sidebar  -->\n        <!-- Page wrapper  -->\n        <div class=\"page-wrapper\">\n            <!-- End Bread crumb -->\n            <!-- Container fluid  -->\n            <div class=\"container-fluid\">\n                <!-- Start Page Content -->\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-6 d-flex justify-content-center\">\n                        <div class=\"empty-ui text-center\">\n                            <h1>Group</h1>\n                            \n                            <i class=\"far fa-building f-s-40 color-warning\"></i>\n                            <p>No groups have bee added to your connections</p>\n                            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\" data-toggle=\"modal\" data-target=\"#add_new_user_modal\"><i class=\"fas fa-plus\"></i>Create user</button>\n                            <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Create Client</button> -->\n                                       \n                                       <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                        <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i>Create Group</button>\n                                        <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</button>\n                                         -->\n                                         <a routerLink=\"/view-groups\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">VIEW GROUPS</a>\n                                      </div>\n                            \n\n                                      \n                            \n                                      \n                                                                                \n                                          \n                                      \n                                    \n                                    <!--End of  div for container class  --> \n                                  \n                            \n                        </div>\n                    </div>\n                </div>\n                <!-- End PAge Content -->\n            </div>\n            <!-- End Container fluid  -->\n        </div>\n        <!-- End Page wrapper  -->\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Group</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                            \n                    <div class=\"form-group has-feedback\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" [(ngModel)]=\"client_id\" name=\"client_id\" >\n                        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\">\n                          <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"client_secret\" name=\"client_secret\">\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                    </div>\n                    \n                    <div class=\"row\" style=\"margin-bottom:50px;\">\n                            <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                           <div class=\"col-md-4\">\n                                <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"loadClient()\">Create</button>\n                                \n                            </div>\n                            <div class=\"col-md-4\">\n                              <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                    \n                          </div>\n                          <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                          \n                    </div>\n                </form> \n        \n            </div>\n            <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n            </div> -->\n        </ng-template>\n\n    </div>\n\n    \n\n    \n"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(http, route, router, modalService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.client_id = "";
        this.name = "";
        this.client_secret = "";
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    GroupsComponent.prototype.loadClients = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJkMDJmOWU4ZmFiNzQ0NWNmOTQwOTg0OWQ4NThjYzQ5NCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjMzNzI1MiwiZXhwIjoxNTMyMzgwNDUyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.2tftsEehFB3Qphb4U2uXWf7gpPSXx3dAZabKve1XrEo",
            Accept: "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhMmEwMDJkZTNjZjY0NDAyYjFlY2Y5YWZmNjNkMjAwZSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjA5MzU0NSwiZXhwIjoxNTMyMTM2NzQ1LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.VDZWw1dIU0Gjk_oHch7WSW5KqfbnawYIUtxkcMEly0E",
            Accept: "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: "http://localhost:8080/uaa/oauth/clients",
            headers: head
        })
            .then(function (response) {
            //console.log(response.data)
            return (_this.clients = response.data.resources);
        })
            .catch(function (error) { return console.log(error); });
    };
    GroupsComponent.prototype.loadClient = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "http://localhost:8080/uaa/oauth/clients";
        var data = JSON.stringify({
            client_id: this.client_id,
            client_secret: this.client_secret,
            name: this.name
        });
        var schema = {
            scope: ["clients.read", "clients.write"],
            client_id: null,
            client_secret: null,
            resource_ids: [],
            authorized_grant_types: ["client_credentials"],
            redirect_uri: ["http://yahoo.com"],
            authorities: ["clients.read", "clients.write"],
            token_salt: "3tjE6d",
            autoapprove: true,
            allowedproviders: ["uaa", "ldap", "my-saml-provider"],
            name: null
        };
        schema.client_id = this.client_id;
        schema.name = this.name;
        schema.client_secret = this.client_secret;
        console.log(this.client_id);
        console.log(this.name);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhMmEwMDJkZTNjZjY0NDAyYjFlY2Y5YWZmNjNkMjAwZSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjA5MzU0NSwiZXhwIjoxNTMyMTM2NzQ1LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.VDZWw1dIU0Gjk_oHch7WSW5KqfbnawYIUtxkcMEly0E",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status == 201) {
                _this.client_id = "";
                _this.name = "";
                _this.client_secret = "";
                alert("User " + _this.client_id + " Created Successfully");
            }
            else {
                alert("Failed!");
            }
        }, function (error) {
            alert("Client_id already created");
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    GroupsComponent.prototype.funcDeleteT = function (client_id) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "http://localhost:8080/uaa/oauth/clients/{client_id}";
            link = link.replace("{client_id}", client_id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhMmEwMDJkZTNjZjY0NDAyYjFlY2Y5YWZmNjNkMjAwZSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjA5MzU0NSwiZXhwIjoxNTMyMTM2NzQ1LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.VDZWw1dIU0Gjk_oHch7WSW5KqfbnawYIUtxkcMEly0E",
                Accept: "application/json"
            });
            var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            // myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Access-Control-Allow-Origin", "*");
            var Option_1 = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
            // confirm(link);
            this.http.delete(link, Option_1).subscribe(function (res) {
                console.log(res.json().responseCode);
                if (res.json().responseCode == "201") {
                    _this.loadClients();
                    // alert("User "+this.username+" deleted Successfully");
                    // alert(res.json().responseMessage);
                }
                else {
                    _this.loadClients();
                    alert("Deleted Successfully!");
                }
            }, function (error) {
                console.log(JSON.stringify(error.json()));
            });
        }
    };
    // Modal logic
    GroupsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    GroupsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    GroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "groups",
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-container{\r\n     /* background: #3d3780;  */\r\n      background: skyblue;  \r\n    \r\n    \r\n}\r\n.auth-wrapper{\r\n    max-width: 450px;\r\n    width: 440px;\r\n    padding-top: 10rem;\r\n}\r\n.auth-header span{\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    margin-bottom: 0.75rem;\r\n}\r\n.auth-header small{\r\n    color: #a1a1e5;\r\n}\r\n.auth-wrapper form .form-control{\r\n    padding: 0.75rem 1.125rem;\r\n    color: #ffffff;\r\n    background-color:white;\r\n    border: 2px solid #342e73;\r\n    border-radius: 0.5rem;\r\n}\r\n.auth-wrapper form .form-control:focus{\r\n    border: 2px solid #7659ff;\r\n    background-color: #342e73;\r\n    box-shadow: none;\r\n}\r\n.auth-wrapper form .form-control::-webkit-input-placeholder{\r\n    color: #a1a1e5;\r\n}\r\n.auth-wrapper form .form-control:-ms-input-placeholder{\r\n    color: #a1a1e5;\r\n}\r\n.auth-wrapper form .form-control::-ms-input-placeholder{\r\n    color: #a1a1e5;\r\n}\r\n.auth-wrapper form .form-control::placeholder{\r\n    color: #a1a1e5;\r\n}\r\n.auth-btn{\r\n    color: #ffffff;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.4px;\r\n    font-weight: 500;\r\n    border: 2px solid transparent;\r\n    transition: none;\r\n    cursor: default;\r\n    padding: 0.75rem 1.5rem;\r\n    font-size: 1rem;\r\n    line-height: 1.25;\r\n    border-radius: 0.5rem;\r\n}\r\n.auth-wrapper .auth-btn-green{\r\n    background-image: linear-gradient(to right, #00d9bf, #00d977);\r\n    border-radius: 0.5rem;\r\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\r\n    border: none;\r\n    line-height: calc((1rem * 1.25) + 4px);\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center h-100 auth-container\">\n    <div class=\"auth-wrapper\">\n        <div>\n            <div class=\"d-flex flex-column text-center mb-4 auth-header\">\n                <span>ECOBANK UAA</span>\n                <small>Hello! Sign in with your username or email</small>\n            </div>\n            <form>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"username\" aria-describedby=\"usernameHelp\" placeholder=\"Username\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n                </div>\n                <a routerLink=\"/dashboard\" class=\"btn btn-primary w-100 auth-btn auth-btn-green\">Sign in</a>\n                <!-- <a routerLink=\"/view-users\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</a> -->\n                                     \n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.username = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loadLogin = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/token";
        var data = { username: this.username, password: this.password };
        //var data = { userName:marissa, Password:koala};
        var schema = 'client_id=cf&client_secret=&grant_type=password&username=[username]&password=[password]&token_format=jwt&response_type=token';
        schema = schema.replace("[username]", this.username);
        schema = schema.replace("[password]", this.password);
        console.log(this.username);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status == 200) {
                alert();
            }
            else {
                alert("Failed!");
            }
            // var link2 = "http://yahoo.com";
            _this.router.navigateByUrl("dashboard");
            // this.router.navigateByUrl("link2");
        }, function (error) {
            alert('Username or password invalid');
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());

(function ($) {
    "use strict";
    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        });
    });
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');
    $('.validate-form').on('submit', function () {
        var check = true;
        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });
    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });
    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function () {
        if (showPass == 0) {
            $(this).next('input').attr('type', 'text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type', 'password');
            $(this).removeClass('active');
            showPass = 0;
        }
    });
});


/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table id=\"example\" class=\"table table-striped table-bordered nowrap\" style=\"width:100%\">\n    <thead>\n        <tr>\n            <th>user_id</th>\n            <th>username</th>\n            <th>emails</th>\n            <!-- <th>Password</th> -->\n            <th>Action</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n            <tr *ngFor=\"let user of Users\">\n                                \n                    <td>{{user.id}}</td>\n                    <td>{{ user.userName }}</td>\n                    <td>{{ user.emails[0].value }}</td>\n                    <!-- <td>{{user.password}}</td> -->\n                    <td>\n                            <input type=\"text\" class=\"form-control\" value=\"{{ user.id }}\" #user_id style=\"display:none;\">\n                            <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(user_id.value)\" style=\"margin-right: 10px\" /> \n                            <!-- <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content)\" ng-click=\"loadClientsById(client.client_id)\">Update</button>\n                             -->\n                             <input class=\"btn btn-info btn-sm\" value=\"Update\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content);\" (click)=\"loadByUsers_id(user_id.value);\">\n                            \n                      \n                    </td>\n                </tr>\n        \n    </tbody>\n\n\n</table>\n\n\n\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Create User</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form *ngFor=\"let kvar of Users\">\n                            \n                    <div class=\"form-group has-feedback\">\n                      <input value=\"{{ kvar.resources.id }}\" type=\"text\" class=\"form-control\" placeholder=\"user_id\" autocomplete=\"off\">\n                       <input type=\"text\" class=\"form-control\" placeholder=\"emailswwwwwww\">\n                       <input type=\"text\" class=\"form-control\" placeholder=\"emailswwwwwww\">\n                      \n                </div>\n                  \n                    \n                    \n                    <div class=\"row\" style=\"margin-bottom:50px;\">\n                            <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                           <div class=\"col-md-4\">\n                                <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"loadClient()\">Create</button>\n                                \n                            </div>\n                            <div class=\"col-md-4\">\n                              <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"('Save click')\">Cancel</button>\n                    \n                          </div>\n                          <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                          \n                    </div>\n                </form> \n        \n            </div>\n            <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n            </div> -->\n        </ng-template>"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestComponent = /** @class */ (function () {
    function TestComponent(http, modalService, route, router) {
        this.http = http;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.username = "";
        this.email = "";
        this.user_id = "";
    }
    TestComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadByUsers_id(this.user_idVal);
        // this.loadByUsers_id();
    };
    TestComponent.prototype.loadUsers = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJkMDJmOWU4ZmFiNzQ0NWNmOTQwOTg0OWQ4NThjYzQ5NCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjMzNzI1MiwiZXhwIjoxNTMyMzgwNDUyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.2tftsEehFB3Qphb4U2uXWf7gpPSXx3dAZabKve1XrEo",
            "Accept": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJkMDJmOWU4ZmFiNzQ0NWNmOTQwOTg0OWQ4NThjYzQ5NCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjMzNzI1MiwiZXhwIjoxNTMyMzgwNDUyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.2tftsEehFB3Qphb4U2uXWf7gpPSXx3dAZabKve1XrEo",
            "Accept": "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_2___default()({ method: "GET", url: "http://localhost:8080/uaa/Users/", headers: head })
            .then(function (response) {
            //console.log(response.data)
            return _this.Users = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    TestComponent.prototype.loadByUsers_id = function (user_idVal) {
        var _this = this;
        // alert("YESSSSSSSSSSSSSSSSSSSSSSSSSSS " + user_idVal);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJkMDJmOWU4ZmFiNzQ0NWNmOTQwOTg0OWQ4NThjYzQ5NCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjMzNzI1MiwiZXhwIjoxNTMyMzgwNDUyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.2tftsEehFB3Qphb4U2uXWf7gpPSXx3dAZabKve1XrEo",
            "Accept": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJkMDJmOWU4ZmFiNzQ0NWNmOTQwOTg0OWQ4NThjYzQ5NCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjMzNzI1MiwiZXhwIjoxNTMyMzgwNDUyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.2tftsEehFB3Qphb4U2uXWf7gpPSXx3dAZabKve1XrEo",
            "Accept": "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        // alert("help");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_2___default()({ method: "GET", url: "http://localhost:8080/uaa/Users/" + user_idVal, headers: head })
            .then(function (response) {
            //console.log(response.data)
            return _this.Users = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    TestComponent.prototype.funcLoadId = function (user_id) {
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "http://localhost:8080/uaa/Users/{user_id}";
            link = link.replace("{user_id}", user_id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJkMDJmOWU4ZmFiNzQ0NWNmOTQwOTg0OWQ4NThjYzQ5NCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjMzNzI1MiwiZXhwIjoxNTMyMzgwNDUyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.2tftsEehFB3Qphb4U2uXWf7gpPSXx3dAZabKve1XrEo",
                "Content-Type": "application/json"
            });
            var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            // myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Access-Control-Allow-Origin", "*");
            var Option_1 = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
            // confirm(link);
            this.http.get(link, Option_1).subscribe(function (res) {
                return function (error) {
                    console.log(JSON.stringify(error.json()));
                };
            });
        }
        else {
            // alert("nooooo")
        }
    };
    TestComponent.prototype.loadUser = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "http://localhost:8080/uaa/Users";
        var data = JSON.stringify({ userName: this.username, emails: this.email });
        var schema = {
            "userName": null,
            "emails": [{
                    "value": null,
                    "primary": true
                }],
            "active": true,
            "verified": true,
            "origin": "",
            "password": null,
            "schemas": ["urn:scim:schemas:core:1.0"]
        };
        schema.userName = this.username;
        schema.emails[0].value = this.email;
        console.log(this.username);
        console.log(this.email);
        "";
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJkMDJmOWU4ZmFiNzQ0NWNmOTQwOTg0OWQ4NThjYzQ5NCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjMzNzI1MiwiZXhwIjoxNTMyMzgwNDUyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.2tftsEehFB3Qphb4U2uXWf7gpPSXx3dAZabKve1XrEo",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status === 201) {
                _this.username = "";
                _this.email = "";
                _this.user_id = "";
                alert("User " + _this.username + " Created Successfully");
            }
            // this.router.navigateByUrl("/settings/addaffiliates");
        }, function (error) {
            alert('User already created');
            console.log('errroroorororororor');
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    // Modal logic
    TestComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TestComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* .navbar-default { \r\n    background-color:blue;\r\n    background-image: none;\r\n    background-repeat: no-repeat;\r\n   }  */\r\n  \r\n   /* body{\r\n       background-image:black;\r\n   } */\r\n  \r\n   /* <body class=\"hold-transition skin-blue sidebar-mini login-page\" \r\n   style=\"background-image: url('assets/dist/img/bgPicfh.jpg'); \r\n   background-repeat: no-repeat;background-size: 230% 230%;\"> */\r\n\r\n   "

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-bottom: 400px;\">  \r\n<nav class=\"navbar navbar-default\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header \">\r\n                <div class=\"login-logo\" style=\"margin-bottom : 0px;\">\r\n                        <a routerLink=\"/#\"><h3 style=\"text-align: center;\">Ecobank UAA</h3></a>\r\n                </div>\r\n            <!-- <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button> -->\r\n\r\n            \r\n            \r\n            \r\n \r\n        </div>\r\n        <!-- Collection of nav links, forms, and other content for toggling -->\r\n        <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\" style=\"background-color: peru\">\r\n                \r\n                \r\n                <!-- <li class=\"dropdown\">\r\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">Profile<b class=\"caret\"></b></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Account Setting</a></li>\r\n                        <li><a href=\"#\">SignOut</a></li>\r\n                        <li><a href=\"#\">Sent Items</a></li>\r\n                        <li class=\"divider\"></li>\r\n                        \r\n                    </ul>\r\n                </li> -->\r\n            </ul>\r\n            \r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- <li><a routerLink=\"/login\" class=\"btn btn-primary btn-block btn-flat\">Sign In</a></li> -->\r\n                <li class=\"dropdown \" style=\"margin-bottom: 0px;\">\r\n                        <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" style=\"color:blue;\" href=\"#\">Account Setting<b class=\"caret\"></b></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <!-- <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">Account Setting</a></li> -->\r\n                            \r\n                            <li><a routerLink=\"/change-password\">Change Password</a></li>\r\n                            <li><a routerLink=\"/change-email\">Change Email</a></li>\r\n                            <li><a routerLink=\"/login\">SignOut</a></li>\r\n\r\n                            <!-- <li><a href=\"#\">Sent Items</a></li> -->\r\n                            <!-- <li class=\"divider\"></li> -->\r\n                            \r\n                        </ul>\r\n                    </li>\r\n            </ul>\r\n        </div>\r\n        \r\n</nav>\r\n </div> \r\n<!-- <app-footer></app-footer> -->\r\n\r\n    <!-- <div style=\"width: 300px; border: 25px solid; margin: 25px;background-color: lightblue\"> -->\r\n            <!-- <div class=\"container \"style=\"width: 300px; border: 25px; margin: 25px;background-color: lightblue\">\r\n                    <h2>Account Setting</h2>\r\n                    <div class=\"panel panel-default\">\r\n                      <div class=\"panel-body\">Profile</div>\r\n                    </div>\r\n                  </div>\r\n                   -->\r\n        \r\n                   \r\n  \r\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
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

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-nav .sidebar-nav-link{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.section-title{\r\n    color: rgba(0,0,0,0.87);\r\n}\r\n#main-wrapper{\r\n    height: 100% !important;\r\n}\r\n.page-wrapper{\r\n    height: calc(100% - 54px)\r\n}\r\n.empty-ui{\r\n    margin-top: 10rem;\r\n}\r\n.empty-ui h1{\r\n    margin-bottom: 2rem;\r\n}\r\n.empty-ui i{\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.empty-ui button{\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 48px;\r\n}\r\n.empty-ui button:focus{\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 48px;\r\n    color: #fff;\r\n}\r\n.empty-ui button i{\r\n    display: inline-block;\r\n    margin: 0;\r\n    margin-right: 1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"fix-header fix-sidebar\">\r\n    <!-- Preloader - style you can find in spinners.css -->\r\n    <!-- <div class=\"preloader\">\r\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n        </svg>\r\n    </div> -->\r\n    <!-- Main wrapper  -->\r\n    <div id=\"main-wrapper\">\r\n        <!-- header header  -->\r\n        <div class=\"header\">\r\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n                <!-- Logo -->\r\n                <div class=\"navbar-header\">\r\n                    <a class=\"navbar-brand\" href=\"index.html\">\r\n                        <!-- Logo icon -->\r\n                        <!-- <b>\r\n                                <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                            </b> -->\r\n                        <!--End Logo icon -->\r\n                        <!-- Logo text -->\r\n                        <!-- <span>\r\n                                <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                            </span> -->\r\n                    </a>\r\n                </div>\r\n                <!-- End Logo -->\r\n                <div class=\"navbar-collapse\">\r\n                    <!-- toggle and nav items -->\r\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\r\n                        <!-- This is  -->\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"mdi mdi-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item m-l-10\">\r\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"ti-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <!-- User profile and search -->\r\n                    <ul class=\"navbar-nav my-lg-0\">\r\n                        <!-- Profile -->\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\r\n                                <ul class=\"dropdown-user\">\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n        <!-- End header header -->\r\n        <!-- Left Sidebar  -->\r\n        <div class=\"left-sidebar\">\r\n            <!-- Sidebar scroll-->\r\n            <div class=\"scroll-sidebar\">\r\n                <!-- Sidebar navigation-->\r\n                <nav class=\"sidebar-nav\">\r\n                    <ul id=\"sidebarnav\">\r\n                        <li class=\"nav-devider\"></li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-tachometer\"></i>\r\n                                <span class=\"hide-menu\">Dashboard</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-envelope\"></i>\r\n                                <span class=\"hide-menu\">Users</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-bar-chart\"></i>\r\n                                <span class=\"hide-menu\">Client</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                                <span class=\"hide-menu\">Group</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                                <span class=\"hide-menu\">Roles</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <!-- End Sidebar navigation -->\r\n            </div>\r\n            <!-- End Sidebar scroll-->\r\n        </div>\r\n        <!-- End Left Sidebar  -->\r\n        <!-- Page wrapper  -->\r\n        <div class=\"page-wrapper\">\r\n            <!-- End Bread crumb -->\r\n            <!-- Container fluid  -->\r\n            <div class=\"container-fluid\">\r\n                <!-- Start Page Content -->\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-6 d-flex justify-content-center\">\r\n                        <div class=\"empty-ui text-center\">\r\n                            <h1>Users</h1>\r\n                            <i class=\"far fa-user-circle fa-5x color-primary\"></i>\r\n                            <p>No users have bee added to your connections</p>\r\n                            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\" data-toggle=\"modal\" data-target=\"#add_new_user_modal\"><i class=\"fas fa-plus\"></i>Create user</button>\r\n                            <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Create Client</button> -->\r\n                                       \r\n                                       <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i>Create user</button>\r\n                                        <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</button>\r\n                                         -->\r\n                                         <a routerLink=\"/view-users\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</a>\r\n                                      </div>\r\n                            \r\n\r\n                                      \r\n                            \r\n                                      \r\n                                                                                \r\n                                          \r\n                                      \r\n                                    \r\n                                    <!--End of  div for container class  --> \r\n                                  \r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End PAge Content -->\r\n            </div>\r\n            <!-- End Container fluid  -->\r\n        </div>\r\n        <!-- End Page wrapper  -->\r\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Create User</h4>\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                            \r\n                    <div class=\"form-group has-feedback\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" [(ngModel)]=\"username\" name=\"client_id\" >\r\n                        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"email\" name=\"name\">\r\n                          <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\r\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"password\" name=\"client_secret\">\r\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n                    </div>\r\n                    \r\n                    <div class=\"row\" style=\"margin-bottom:50px;\">\r\n                            <div class=\"col-md-2\">\r\n                                &nbsp;\r\n                            </div>\r\n                           <div class=\"col-md-4\">\r\n                                <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\r\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"loadUser()\">Create</button>\r\n                                \r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                              <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\r\n                              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\r\n                    \r\n                          </div>\r\n                          <div class=\"col-md-2\">\r\n                                &nbsp;\r\n                            </div>\r\n                          \r\n                    </div>\r\n                </form> \r\n        \r\n            </div>\r\n            <!-- <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n            </div> -->\r\n        </ng-template>\r\n\r\n    </div>\r\n\r\n    \r\n\r\n    "

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, modalService, route, router) {
        this.http = http;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.username = "";
        this.email = "";
        this.password = "";
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhOWMyNzA3YTYzOTg0MjFhOTU1ZDE4ZDA3YWRkYjRiNCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTgzMTE1NywiZXhwIjoxNTMxODc0MzU3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.0jyShGsHlUAiyd8K_Q8sG1SV0BLEpcF4MUlfRiioWhw",
            "Accept": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhOWMyNzA3YTYzOTg0MjFhOTU1ZDE4ZDA3YWRkYjRiNCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTgzMTE1NywiZXhwIjoxNTMxODc0MzU3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.0jyShGsHlUAiyd8K_Q8sG1SV0BLEpcF4MUlfRiioWhw",
            "Accept": "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({ method: "GET", url: "http://localhost:8080/uaa/Users", headers: head })
            .then(function (response) {
            //console.log(response.data)
            return _this.Users = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    UsersComponent.prototype.loadUser = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "http://localhost:8080/uaa/Users";
        var data = JSON.stringify({ userName: this.username, Password: this.password, emails: this.email });
        var schema = {
            "userName": null,
            "emails": [{
                    "value": null,
                    "primary": true
                }],
            "active": true,
            "verified": true,
            "origin": "",
            "password": null,
            "schemas": ["urn:scim:schemas:core:1.0"]
        };
        schema.userName = this.username;
        schema.emails[0].value = this.email;
        schema.password = this.password;
        console.log(this.username);
        console.log(this.email);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhZGI1M2EzMjcwYzI0N2NmOWVkZjdlZmU2N2I5OWYwOCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjQzMDY2MSwiZXhwIjoxNTMyNDczODYxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.HHxe354ce4GVRs5E2JJHXUkf5607UUe_WX3mf6KgOZg",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status === 201) {
                _this.username = "";
                _this.email = "";
                _this.password = "";
                alert("User " + _this.username + " Created Successfully");
            }
            // this.router.navigateByUrl("/settings/addaffiliates");
        }, function (error) {
            alert('User already created');
            console.log('errroroorororororor');
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    UsersComponent.prototype.funcDeleteT = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "http://localhost:8080/uaa/Users/{id}";
            link = link.replace("{id}", id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhOWMyNzA3YTYzOTg0MjFhOTU1ZDE4ZDA3YWRkYjRiNCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTgzMTE1NywiZXhwIjoxNTMxODc0MzU3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.0jyShGsHlUAiyd8K_Q8sG1SV0BLEpcF4MUlfRiioWhw",
                "Content-Type": "application/json"
            });
            var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            // myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Access-Control-Allow-Origin", "*");
            var Option_1 = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
            // confirm(link);
            this.http.delete(link, Option_1).subscribe(function (res) {
                console.log(res.json().responseCode);
                if (res.json().responseCode == "201") {
                    _this.loadUsers();
                    // alert("User "+this.username+" deleted Successfully");
                    // alert(res.json().responseMessage);
                }
                else {
                    _this.loadUsers();
                    alert("Deleted Successfully!");
                }
            }, function (error) {
                console.log(JSON.stringify(error.json()));
            });
        }
        else {
            // alert("nooooo")
        }
    };
    // Modal logic
    UsersComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UsersComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "users",
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/view-client-app/view-client-app.component.css":
/*!***************************************************************!*\
  !*** ./src/app/view-client-app/view-client-app.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-client-app/view-client-app.component.html":
/*!****************************************************************!*\
  !*** ./src/app/view-client-app/view-client-app.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n                                       \n  <table id=\"example\" class=\"table table-striped table-bordered nowrap\" style=\"width:100%\">\n        <thead>\n            <tr>\n                <!-- <th>user_id</th> -->\n                <th>client_id</th>\n                <th>Name</th>\n                <th>client_scope</th>\n                <th>authorized_grant_types</th>\n                <th>autoapprove</th>\n                \n                <!-- <th>Password</th> -->\n                <th>Action</th>\n            </tr>\n        </thead>\n    \n        <tbody>\n    \n                <tr *ngFor=\"let client of clients\">\n                                    \n                        <!-- <td>{{user.id}}</td> -->\n                        \n                    <td style=\"word-wrap:break-word;max-width:10px;border-collapse: collapse;\">{{client.client_id}}</td>\n                    <td style=\"max-width: 15px;\">{{client.name }}</td>\n                    <td style=\"word-wrap: break-word;max-width:10px;\">{{ client.scope }}</td>\n                    <td style=\"word-wrap: break-word;max-width:10px;\">{{ client.authorized_grant_types }}</td>\n                    <td style=\"word-wrap: break-word;max-width:10px;\">{{ client.autoapprove }}</td>\n                    <!-- <td>{{user.password}}</td> -->\n                        <td>\n                                <input type=\"text\" class=\"form-control\" value=\"{{ client_id}}\" #client_id style=\"display:none;\">\n                        \n                                <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(client.client_id)\" style=\"margin-right: 30px\" />    \n                            <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content,client_id)\">Update</button>\n                                \n                          \n                        </td>\n                    </tr>\n            \n        </tbody>\n\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                                \n                        <div class=\"form-group has-feedback\">\n                                <label>client_id</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\"  name=\"client_id\" [(ngModel)]=\"get.client_id\">\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        \n                        <div class=\"form-group has-feedback\">\n                            <label>Name</label>\n                              <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.name\">\n                              <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                              <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                                <label>client_scope</label>\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.scope\">\n                                  <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                                  <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                            </div>\n                            <div class=\"form-group has-feedback\">\n                                    <label>authorized_grant_types</label>\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.authorized_grant_types\">\n                                      <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                                      <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                                </div>\n\n                                <div class=\"form-group has-feedback\">\n                                        <label>autoapprove</label>\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.autoapprove\">\n                                          <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                                    </div>\n                                \n                            \n                        <div class=\"row\" style=\"margin-bottom:50px;\">\n                                <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                               <div class=\"col-md-4\">\n                                    <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"loadClient()\">Create</button>\n                                    \n                                </div>\n                                <div class=\"col-md-4\">\n                                  <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                                  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                        \n                              </div>\n                              <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                              \n                        </div>\n                    </form> \n            \n                </div>\n                <!-- <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n                </div> -->\n            </ng-template>\n    \n    </table>\n    \n    "

/***/ }),

/***/ "./src/app/view-client-app/view-client-app.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/view-client-app/view-client-app.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewClientComponent", function() { return ViewClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewClientComponent = /** @class */ (function () {
    function ViewClientComponent(http, route, router, modalService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.client_id = "";
        this.name = "";
        this.client_secret = "";
        this.get = { 'client_id': null, 'name': null, 'scope': null, 'authorized_grant_types': null, 'autoapprove': null };
    }
    ViewClientComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    ViewClientComponent.prototype.loadClients = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            Accept: "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            Accept: "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: "http://localhost:8080/uaa/oauth/clients",
            headers: head
        })
            .then(function (response) {
            //console.log(response.data)
            return (_this.clients = response.data.resources);
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewClientComponent.prototype.loadClientsById = function (data) {
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        };
        var url = "http://localhost:8080/uaa/oauth/clients" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            return console.log(response.data);
        }
        // this.Users = response.data.resources
        )
            .catch(function (error) { return console.log(error); });
    };
    ViewClientComponent.prototype.loadClient = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "http://localhost:8080/uaa/oauth/clients";
        var data = JSON.stringify({
            client_id: this.client_id,
            client_secret: this.client_secret,
            name: this.name
        });
        var schema = {
            scope: ["clients.read", "clients.write"],
            client_id: null,
            client_secret: null,
            resource_ids: [],
            authorized_grant_types: ["client_credentials"],
            redirect_uri: ["http://yahoo.com"],
            authorities: ["clients.read", "clients.write"],
            token_salt: "3tjE6d",
            autoapprove: true,
            allowedproviders: ["uaa", "ldap", "my-saml-provider"],
            name: null
        };
        schema.client_id = this.client_id;
        schema.name = this.name;
        schema.client_secret = this.client_secret;
        console.log(this.client_id);
        console.log(this.name);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status == 201) {
                _this.client_id = "";
                _this.name = "";
                _this.client_secret = "";
                alert("User " + _this.client_id + " Created Successfully");
            }
            else {
                alert("Failed!");
            }
        }, function (error) {
            alert("Client_id already created");
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    ViewClientComponent.prototype.funcDeleteT = function (client_id) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "http://localhost:8080/uaa/oauth/clients/{client_id}";
            link = link.replace("{client_id}", client_id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                Authorization: "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
                Accept: "application/json"
            });
            var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
            // myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Access-Control-Allow-Origin", "*");
            var Option_1 = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
            // confirm(link);
            this.http.delete(link, Option_1).subscribe(function (res) {
                console.log(res.json().responseCode);
                if (res.json().responseCode == "201") {
                    _this.loadClients();
                    // alert("User "+this.username+" deleted Successfully");
                    // alert(res.json().responseMessage);
                }
                else {
                    _this.loadClients();
                    alert("Deleted Successfully!");
                }
            }, function (error) {
                console.log(JSON.stringify(error.json()));
            });
        }
    };
    // Modal logic
    ViewClientComponent.prototype.open = function (content, data) {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        };
        var url = "http://localhost:8080/uaa/oauth/clients" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            console.log(response.data);
            _this.get.client_id = response.data.client_id;
            _this.get.name = response.data.name;
            _this.get.scope = response.data.scope;
            _this.get.authorized_grant_types = response.data.authorized_grant_types;
            _this.get.autoapprove = response.data.autoapprove;
            _this.modalService
                .open(content, { ariaLabelledBy: "modal-basic-title" })
                .result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
            // this.Users = response.data.resources
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewClientComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    ViewClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "view-client-app",
            template: __webpack_require__(/*! ./view-client-app.component.html */ "./src/app/view-client-app/view-client-app.component.html"),
            styles: [__webpack_require__(/*! ./view-client-app.component.css */ "./src/app/view-client-app/view-client-app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ViewClientComponent);
    return ViewClientComponent;
}());



/***/ }),

/***/ "./src/app/view-groups/view-groups.component.css":
/*!*******************************************************!*\
  !*** ./src/app/view-groups/view-groups.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-groups/view-groups.component.html":
/*!********************************************************!*\
  !*** ./src/app/view-groups/view-groups.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <table id=\"example\" class=\"table table-striped table-bordered nowrap\" style=\"width:100%\">\n        <thead>\n            <tr>\n                <th>id</th>\n                <th>displayName</th>\n                <th>description</th>\n                <th>zoneId</th> \n                <th>Action</th>\n            </tr>\n        </thead>\n    \n        <tbody>\n    \n                <tr *ngFor=\"let Groups of Groups\">\n                                                \n                        <td style=\"word-wrap:break-word; max-width: 130px;\">{{Groups.id}}</td>\n                        <td style=\"max-width: 30px; word-wrap: break-word;\">{{Groups.displayName }}</td>\n                        <td style=\"word-wrap: break-word;max-width:10px;\">{{ Groups.description }}</td>\n                        <td style=\"word-wrap: break-word;max-width:10px;\">{{ Groups.zoneId }}</td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" value=\"{{id}}\" #client_id style=\"display:none;\">\n                            \n                            <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(groupId)\" style=\"margin-right: 30px\" /> \n                            \n                            <!-- <input type=\"submit\" #id class=\"btn btn-info btn-xs\" value=\"Update\" (click)=\"funcUpdateT(client.client_id)\" />  -->\n                            <!-- <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" ng-click=\"loadClientsById(client.client_id)\">Update</button>  -->\n                            <!-- <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content)\" ng-click=\"loadGroupsById(Groups.id)\">Update</button> -->\n                            <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content,Groups.id)\">Update</button>\n                                   \n                        </td>\n                    </tr>\n                    \n        </tbody>\n\n         <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                                \n                        <div class=\"form-group has-feedback\">\n                                <label>display Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\"  name=\"client_id\" [(ngModel)]=\"get.displayName\">\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        \n                        <div class=\"form-group has-feedback\">\n                            <label>description</label>\n                              <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.description\">\n                              <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                              <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                                <label>ZoneId</label>\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.zoneId\">\n                                  <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                                  <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                            </div>\n                                <div class=\"row\" style=\"margin-bottom:50px;\">\n                                <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                               <div class=\"col-md-4\">\n                                    <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"loadClient()\">Create</button>\n                                    \n                                </div>\n                                <div class=\"col-md-4\">\n                                  <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                                  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                        \n                              </div>\n                              <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                              \n                        </div>\n                    </form> \n            \n                </div>\n                <!-- <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n                </div> -->\n            </ng-template>\n    \n    </table>\n    "

/***/ }),

/***/ "./src/app/view-groups/view-groups.component.ts":
/*!******************************************************!*\
  !*** ./src/app/view-groups/view-groups.component.ts ***!
  \******************************************************/
/*! exports provided: ViewGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewGroupsComponent", function() { return ViewGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewGroupsComponent = /** @class */ (function () {
    function ViewGroupsComponent(http, modalService, route, router) {
        this.http = http;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        // public Users : any;
        this.get = { 'displayName': null, 'description': null, 'zoneId': null };
    }
    ViewGroupsComponent.prototype.ngOnInit = function () {
        this.loadGroups();
    };
    ViewGroupsComponent.prototype.loadGroups = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhZGI1M2EzMjcwYzI0N2NmOWVkZjdlZmU2N2I5OWYwOCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjQzMDY2MSwiZXhwIjoxNTMyNDczODYxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.HHxe354ce4GVRs5E2JJHXUkf5607UUe_WX3mf6KgOZg",
            "Accept": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhZGI1M2EzMjcwYzI0N2NmOWVkZjdlZmU2N2I5OWYwOCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjQzMDY2MSwiZXhwIjoxNTMyNDczODYxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.HHxe354ce4GVRs5E2JJHXUkf5607UUe_WX3mf6KgOZg",
            "Accept": "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_3___default()({ method: "GET", url: "http://localhost:8080/uaa/Groups", headers: head })
            .then(function (response) {
            //console.log(response.data)
            return _this.Groups = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewGroupsComponent.prototype.loadGroupsById = function (data) {
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI5MWRiZjRmZTZlNWY0ZTg2YWQ5MmZiN2U3MWMxZjQzZiIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjM4MjQ5OSwiZXhwIjoxNTMyNDI1Njk5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.rRgKHcgDs0VrIULbVJ6XUFIc4Wo5V3muGmodjogbR60",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI5MWRiZjRmZTZlNWY0ZTg2YWQ5MmZiN2U3MWMxZjQzZiIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjM4MjQ5OSwiZXhwIjoxNTMyNDI1Njk5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.rRgKHcgDs0VrIULbVJ6XUFIc4Wo5V3muGmodjogbR60",
            "Accept": "application/json"
        };
        var url = "http://localhost:8080/uaa/Groups" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_3___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            return console.log(response.data);
        }
        // this.Users = response.data.resources
        )
            .catch(function (error) { return console.log(error); });
    };
    ViewGroupsComponent.prototype.funcDeleteT = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "http://localhost:8080/uaa/Groups//{groupId}";
            link = link.replace("{id}", id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhZGI1M2EzMjcwYzI0N2NmOWVkZjdlZmU2N2I5OWYwOCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjQzMDY2MSwiZXhwIjoxNTMyNDczODYxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.HHxe354ce4GVRs5E2JJHXUkf5607UUe_WX3mf6KgOZg",
            });
            var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            var Option_1 = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
            // confirm(link);
            this.http.delete(link, Option_1).subscribe(function (res) {
                console.log(res.json().responseCode);
                if (res.json().responseCode == "201") {
                    _this.loadGroups();
                    // alert("User "+this.username+" deleted Successfully");
                    // alert(res.json().responseMessage);
                }
                else {
                    _this.loadGroups();
                    alert("Deleted Successfully!");
                }
            }, function (error) {
                console.log(JSON.stringify(error.json()));
            });
        }
        else {
            // alert("nooooo")
        }
    };
    // Modal logic
    ViewGroupsComponent.prototype.open = function (content, data) {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhZGI1M2EzMjcwYzI0N2NmOWVkZjdlZmU2N2I5OWYwOCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjQzMDY2MSwiZXhwIjoxNTMyNDczODYxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.HHxe354ce4GVRs5E2JJHXUkf5607UUe_WX3mf6KgOZg",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhZGI1M2EzMjcwYzI0N2NmOWVkZjdlZmU2N2I5OWYwOCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjQzMDY2MSwiZXhwIjoxNTMyNDczODYxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.HHxe354ce4GVRs5E2JJHXUkf5607UUe_WX3mf6KgOZg",
            "Accept": "application/json"
        };
        var url = "http://localhost:8080/uaa/Groups/" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_3___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            console.log(response.data);
            _this.get.displayName = response.data.displayName;
            _this.get.description = response.data.description;
            _this.get.zoneId = response.data.zoneId;
            _this.modalService
                .open(content, { ariaLabelledBy: "modal-basic-title" })
                .result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
            // this.Users = response.data.resources
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewGroupsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    ViewGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-groups',
            template: __webpack_require__(/*! ./view-groups.component.html */ "./src/app/view-groups/view-groups.component.html"),
            styles: [__webpack_require__(/*! ./view-groups.component.css */ "./src/app/view-groups/view-groups.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewGroupsComponent);
    return ViewGroupsComponent;
}());



/***/ }),

/***/ "./src/app/view-users/view-users.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-users/view-users.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-users/view-users.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-users/view-users.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n                                       \n  <table id=\"example\" class=\"table table-striped table-bordered nowrap\" style=\"width:100%\">\n        <thead>\n            <tr>\n                <!-- <th>user_id</th> -->\n                <th>groups</th>\n                <th>username</th>\n                <th>emails</th>\n                <th>origin</th>\n                <th>zoneId</th>\n                \n                <!-- <th>Password</th> -->\n                <th>Action</th>\n            </tr>\n        </thead>\n    \n        <tbody>\n    \n                <tr *ngFor=\"let user of Users\">\n                                    \n                        <!-- <td>{{user.id}}</td> -->\n                        \n                        <td>{{user.groups[0].value}}</td>\n                        <td>{{ user.userName }}</td>\n                        <td>{{ user.emails[0].value }}</td>\n                        <td>{{user.origin}}</td>\n                         <td>{{user.zoneId}}</td> \n                        <!-- <td>{{user.password}}</td> -->\n                        <td>\n                                <input type=\"text\" class=\"form-control\" value=\"{{ user_id}}\" #user_id style=\"display:none;\">\n                                <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(user.id)\" style=\"margin-right: 10px\" /> \n                                <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content,user.id)\">Update</button>\n                                \n                          \n                        </td>\n                    </tr>\n            \n        </tbody>\n\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                                \n                        <div class=\"form-group has-feedback\">\n                                <label>User Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\"  name=\"client_id\" [(ngModel)]=\"get.username\">\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        \n                        <div class=\"form-group has-feedback\">\n                            <label>Family Name</label>\n                              <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.familyName\">\n                              <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                              <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                                <label>Given Name</label>\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.givenName\">\n                                  <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                                  <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                            </div>\n                        <div class=\"form-group has-feedback\">\n                                <label>Email</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"get.emails[0].value\" name=\"client_secret\">\n                            <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                        </div>\n                        \n                        <div class=\"row\" style=\"margin-bottom:50px;\">\n                                <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                               <div class=\"col-md-4\">\n                                    <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"updClient(get.user_id)\">Update</button>\n                                    \n                                </div>\n                                <div class=\"col-md-4\">\n                                  <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                                  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                        \n                              </div>\n                              <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                              \n                        </div>\n                    </form> \n            \n                </div>\n                <!-- <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n                </div> -->\n            </ng-template>\n    \n    </table>\n    \n    "

/***/ }),

/***/ "./src/app/view-users/view-users.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-users/view-users.component.ts ***!
  \****************************************************/
/*! exports provided: ViewUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUsersComponent", function() { return ViewUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewUsersComponent = /** @class */ (function () {
    function ViewUsersComponent(http, modalService, route, router) {
        this.http = http;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.username = "";
        this.email = "";
        this.password = "";
        this.get = { 'user_id': null, 'username': null, 'familyName': null, 'givenName': null, 'emails': [], 'groups': [] };
    }
    ViewUsersComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    ViewUsersComponent.prototype.updClient = function (data) {
        var _this = this;
        var link = "http://localhost:8080/uaa/Users/{user_id}";
        link = link.replace("{user_id}", data);
        var updLoad = {
            "userName": this.get.username,
            "name": {
                "familyName": this.get.familyName,
                "givenName": this.get.givenName
            },
            "emails": [{
                    "value": this.get.emails[0],
                    "primary": false
                }],
            "active": true,
            "verified": true,
            "origin": "",
            "password": null
        };
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Content-Type": "application/json",
            "If-Match": "*"
        });
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        this.http.put(link, updLoad, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status === 200) {
                alert("User " + _this.get.username + " Updated Successfully");
            }
            // this.router.navigateByUrl("/settings/addaffiliates");
        }, function (error) {
            alert('Error Updating User');
            console.log('errroroorororororor');
            console.log("error object " + JSON.stringify(error));
        });
    };
    ViewUsersComponent.prototype.loadUsers = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_2___default()({ method: "GET", url: "http://localhost:8080/uaa/Users", headers: head })
            .then(function (response) {
            //console.log(response.data)
            return _this.Users = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewUsersComponent.prototype.loadClientsById = function (data) {
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        };
        var url = "http://localhost:8080/uaa/Users" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_2___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            return console.log(response.data);
        }
        // this.Users = response.data.resources
        )
            .catch(function (error) { return console.log(error); });
    };
    ViewUsersComponent.prototype.loadUser = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "http://localhost:8080/uaa/Users";
        var data = JSON.stringify({ userName: this.username, Password: this.password, emails: this.email });
        var schema = {
            "userName": null,
            "emails": [{
                    "value": null,
                    "primary": true
                }],
            "active": true,
            "verified": true,
            "origin": "",
            "password": null,
            "schemas": ["urn:scim:schemas:core:1.0"]
        };
        schema.userName = this.username;
        schema.emails[0].value = this.email;
        schema.password = this.password;
        console.log(this.username);
        console.log(this.email);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        this.http.post(link, schema, Option).subscribe(function (res) {
            console.log(res);
            console.log(res.status);
            if (res.status === 201) {
                _this.username = "";
                _this.email = "";
                _this.password = "";
                alert("User " + _this.username + " Created Successfully");
            }
            // this.router.navigateByUrl("/settings/addaffiliates");
        }, function (error) {
            alert('User already created');
            console.log('errroroorororororor');
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    ViewUsersComponent.prototype.funcDeleteT = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "http://localhost:8080/uaa/Users/{id}";
            link = link.replace("{id}", id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
                "Content-Type": "application/json"
            });
            var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            // myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Access-Control-Allow-Origin", "*");
            var Option_1 = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
            // confirm(link);
            this.http.delete(link, Option_1).subscribe(function (res) {
                console.log(res.json().responseCode);
                if (res.json().responseCode == "201") {
                    _this.loadUsers();
                    // alert("User "+this.username+" deleted Successfully");
                    // alert(res.json().responseMessage);
                }
                else {
                    _this.loadUsers();
                    alert("Deleted Successfully!");
                }
            }, function (error) {
                console.log(JSON.stringify(error.json()));
            });
        }
        else {
            // alert("nooooo")
        }
    };
    // Modal logic
    ViewUsersComponent.prototype.open = function (content, data) {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3NmI3MmNjNTc4ZDc0ZGI5ODgxOTYxZjkzMWI0ZjU5YSIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMjUxMDQzNCwiZXhwIjoxNTMyNTUzNjM0LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.AbAI9KB4s6q_Lep2wuObA6UTEY39eD0oxrhGphwgFbM",
            "Accept": "application/json"
        };
        var url = "http://localhost:8080/uaa/Users/" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_2___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            console.log(response.data);
            _this.get.familyName = response.data.name.familyName;
            _this.get.givenName = response.data.name.givenName;
            _this.get.username = response.data.userName;
            _this.get.emails = response.data.emails;
            _this.get.groups = response.data.groups;
            _this.get.user_id = response.data.id;
            _this.modalService
                .open(content, { ariaLabelledBy: "modal-basic-title" })
                .result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
            // this.Users = response.data.resources
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewUsersComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    ViewUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-users',
            template: __webpack_require__(/*! ./view-users.component.html */ "./src/app/view-users/view-users.component.html"),
            styles: [__webpack_require__(/*! ./view-users.component.css */ "./src/app/view-users/view-users.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewUsersComponent);
    return ViewUsersComponent;
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

module.exports = __webpack_require__(/*! C:\Users\OTALABI\ecobank-uaa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map