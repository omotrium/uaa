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

module.exports = ".sidebar-nav .sidebar-nav-link{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.section-title{\r\n    color: rgba(0,0,0,0.87);\r\n}\r\n#main-wrapper{\r\n    height: 100% !important;\r\n}\r\n.page-wrapper{\r\n    height: calc(100% - 54px)\r\n}\r\n.empty-ui{\r\n    margin-top: 10rem;\r\n}\r\n.empty-ui h1{\r\n    margin-bottom: 2rem;\r\n}\r\n.empty-ui i{\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n.empty-ui button{\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 48px;\r\n}\r\n.empty-ui button:focus{\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 48px;\r\n    color: #fff;\r\n}\r\n.empty-ui button i{\r\n    display: inline-block;\r\n    margin: 0;\r\n    margin-right: 1rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-role/add-role.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-role/add-role.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"fix-header fix-sidebar\">\n    <!-- Preloader - style you can find in spinners.css -->\n    <!-- <div class=\"preloader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n        </svg>\n    </div> -->\n    <!-- Main wrapper  -->\n    <div id=\"main-wrapper\">\n        <!-- header header  -->\n        <div class=\"header\">\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n                <!-- Logo -->\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"index.html\">\n                        <!-- Logo icon -->\n                        <!-- <b>\n                                <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </b> -->\n                        <!--End Logo icon -->\n                        <!-- Logo text -->\n                        <!-- <span>\n                                <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </span> -->\n                    </a>\n                </div>\n                <!-- End Logo -->\n                <div class=\"navbar-collapse\">\n                    <!-- toggle and nav items -->\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\n                        <!-- This is  -->\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"mdi mdi-menu\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item m-l-10\">\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"ti-menu\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                    <!-- User profile and search -->\n                    <ul class=\"navbar-nav my-lg-0\">\n                        <!-- Profile -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\n                                <ul class=\"dropdown-user\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <!-- End header header -->\n        <!-- Left Sidebar  -->\n        <div class=\"left-sidebar\">\n            <!-- Sidebar scroll-->\n            <div class=\"scroll-sidebar\">\n                <!-- Sidebar navigation-->\n                <nav class=\"sidebar-nav\">\n                    <ul id=\"sidebarnav\">\n                        <li class=\"nav-devider\"></li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\n                                <i class=\"far fa-tachometer\"></i>\n                                <span class=\"hide-menu\">Dashboard</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\n                                <i class=\"fa fa-envelope\"></i>\n                                <span class=\"hide-menu\">Users</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\n                                <i class=\"fa fa-bar-chart\"></i>\n                                <span class=\"hide-menu\">Client</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Group</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Roles</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <!-- End Sidebar navigation -->\n            </div>\n            <!-- End Sidebar scroll-->\n        </div>\n        <!-- End Left Sidebar  -->\n        <!-- Page wrapper  -->\n        <div class=\"page-wrapper\">\n            <!-- End Bread crumb -->\n            <!-- Container fluid  -->\n            <div class=\"container-fluid\">\n                <!-- Start Page Content -->\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-6 d-flex justify-content-center\">\n                        <div class=\"empty-ui text-center\">\n                            <h1>ROLES</h1>\n                            <i class=\"far fa-user-circle fa-5x color-primary\"></i>\n                            <p>No Role have bee added to your connections</p>\n                            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\" data-toggle=\"modal\" data-target=\"#add_new_user_modal\"><i class=\"fas fa-plus\"></i>Create user</button>\n                            <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Create Client</button> -->\n                                       \n                                       <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                        <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i>Create Roles</button>\n                                        <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</button>\n                                         -->\n                                         <a routerLink=\"/view-client-app\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">VIEW ROLES</a>\n                                      </div>\n                            \n\n                                      \n                            \n                                      \n                                                                                \n                                          \n                                      \n                                    \n                                    <!--End of  div for container class  --> \n                                  \n                            \n                        </div>\n                    </div>\n                </div>\n                <!-- End PAge Content -->\n            </div>\n            <!-- End Container fluid  -->\n        </div>\n        <!-- End Page wrapper  -->\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Roles</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                            \n                    <div class=\"form-group has-feedback\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"displayName\" autocomplete=\"off\" [(ngModel)]=\"displayName\" name=\"displayName\" >\n                        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"description\" [(ngModel)]=\"description\" name=\"description\">\n                          <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"value\" [(ngModel)]=\"value\" name=\"value\">\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"type\" [(ngModel)]=\"type\" name=\"type\">\n                            <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n                      \n                        \n                                  \n                              \n\n                    <div class=\"row\" style=\"margin-bottom:50px;\">\n                            <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                           <div class=\"col-md-4\">\n                                <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"loadRole()\">Create</button>\n                                \n                            </div>\n                            <div class=\"col-md-4\">\n                              <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                    \n                          </div>\n                          <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                          \n                    </div>\n                </form> \n        \n            </div>\n            <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n            </div> -->\n        </ng-template>\n\n    </div>\n\n    \n\n    \n"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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
    function AddRoleComponent(http, modalService, route, router) {
        this.http = http;
        this.modalService = modalService;
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
        var link = "https://uaaserver.eu-gb.mybluemix.net/Groups";
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
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhOWMyNzA3YTYzOTg0MjFhOTU1ZDE4ZDA3YWRkYjRiNCIsInN1YiI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwic2NvcGUiOlsiY2xpZW50cy5yZWFkIiwiY2xpZW50cy5zZWNyZXQiLCJjbGllbnRzLndyaXRlIiwidWFhLmFkbWluIiwiY2xpZW50cy5hZG1pbiIsInNjaW0ud3JpdGUiLCJzY2ltLnJlYWQiXSwiY2xpZW50X2lkIjoiYWRtaW4iLCJjaWQiOiJhZG1pbiIsImF6cCI6ImFkbWluIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIzZTM2MGE0ZCIsImlhdCI6MTUzMTgzMTE1NywiZXhwIjoxNTMxODc0MzU3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbInNjaW0iLCJjbGllbnRzIiwidWFhIiwiYWRtaW4iXX0.0jyShGsHlUAiyd8K_Q8sG1SV0BLEpcF4MUlfRiioWhw",
            "Content-Type": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: Header });
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
    // Modal logic
    AddRoleComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AddRoleComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return "with: " + reason;
        }
    };
    AddRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-role',
            template: __webpack_require__(/*! ./add-role.component.html */ "./src/app/add-role/add-role.component.html"),
            styles: [__webpack_require__(/*! ./add-role.component.css */ "./src/app/add-role/add-role.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = ".logo {\r\n    width: 120px;\r\n    height: 31px;\r\n    background: rgba(255,255,255,.2);\r\n    margin: 16px 28px 16px 0;\r\n    float: left;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>"

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCoffee"];
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _assign_assign_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assign/assign.component */ "./src/app/assign/assign.component.ts");
/* harmony import */ var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-role/create-role.component */ "./src/app/create-role/create-role.component.ts");
/* harmony import */ var _create_client_app_create_client_app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-client-app/create-client-app.component */ "./src/app/create-client-app/create-client-app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_client_app_view_client_app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view-client-app/view-client-app.component */ "./src/app/view-client-app/view-client-app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-users/view-users.component */ "./src/app/view-users/view-users.component.ts");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/add-role/add-role.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _view_groups_view_groups_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./view-groups/view-groups.component */ "./src/app/view-groups/view-groups.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _view_app_view_app_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./view-app/view-app.component */ "./src/app/view-app/view-app.component.ts");
/* harmony import */ var _dataservice_dataservice__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dataservice/dataservice */ "./src/app/dataservice/dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































//import { AlertsModule } from 'angular-alert-module';
Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default.a);
var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: "test", component: _test_test_component__WEBPACK_IMPORTED_MODULE_30__["TestComponent"] },
    { path: "application", component: _application_application_component__WEBPACK_IMPORTED_MODULE_31__["ApplicationComponent"] },
    { path: "change-password", component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"] },
    { path: "groups", component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_29__["GroupsComponent"] },
    { path: "create-user", component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"] },
    { path: "user-profile", component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"] },
    { path: "groups", component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_29__["GroupsComponent"] },
    { path: "create", component: _create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"] },
    { path: "assign", component: _assign_assign_component__WEBPACK_IMPORTED_MODULE_15__["AssignComponent"] },
    { path: "create-role", component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_16__["CreateRoleComponent"] },
    { path: "create-client-app", component: _create_client_app_create_client_app_component__WEBPACK_IMPORTED_MODULE_17__["CreateClientAppComponent"] },
    { path: "view-client-app", component: _view_client_app_view_client_app_component__WEBPACK_IMPORTED_MODULE_20__["ViewClientComponent"] },
    { path: "view-users", component: _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_22__["ViewUsersComponent"] },
    { path: "add-role", component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_23__["AddRoleComponent"] },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"] },
    { path: "view-groups", component: _view_groups_view_groups_component__WEBPACK_IMPORTED_MODULE_25__["ViewGroupsComponent"] },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"] },
    { path: "users", component: _users_users_component__WEBPACK_IMPORTED_MODULE_27__["UsersComponent"] },
    { path: "clients", component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_28__["ClientsComponent"] },
    { path: "view-app", component: _view_app_view_app_component__WEBPACK_IMPORTED_MODULE_33__["ViewAppComponent"] },
    { path: "", redirectTo: "/login", pathMatch: "full" }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"],
                _assign_assign_component__WEBPACK_IMPORTED_MODULE_15__["AssignComponent"],
                _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_16__["CreateRoleComponent"],
                _create_client_app_create_client_app_component__WEBPACK_IMPORTED_MODULE_17__["CreateClientAppComponent"],
                _view_client_app_view_client_app_component__WEBPACK_IMPORTED_MODULE_20__["ViewClientComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_22__["ViewUsersComponent"],
                _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_23__["AddRoleComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
                _view_groups_view_groups_component__WEBPACK_IMPORTED_MODULE_25__["ViewGroupsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_27__["UsersComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_28__["ClientsComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_29__["GroupsComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_30__["TestComponent"],
                _application_application_component__WEBPACK_IMPORTED_MODULE_31__["ApplicationComponent"],
                _view_app_view_app_component__WEBPACK_IMPORTED_MODULE_33__["ViewAppComponent"]
            ],
            imports: [
                [_angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"]],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes, { enableTracing: false } // <-- debugging purposes only
                ),
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_32__["NgZorroAntdModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_32__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_32__["en_US"] }, _dataservice_dataservice__WEBPACK_IMPORTED_MODULE_34__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application/application.component.css":
/*!*******************************************************!*\
  !*** ./src/app/application/application.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-nav .sidebar-nav-link{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.section-title{\r\n  color: rgba(0,0,0,0.87);\r\n}\r\n#main-wrapper{\r\n  height: 100% !important;\r\n}\r\n.page-wrapper{\r\n  height: calc(100% - 54px)\r\n}\r\n.empty-ui{\r\n  margin-top: 2rem;\r\n}\r\n.empty-ui h1{\r\n  margin-bottom: 2rem;\r\n}\r\n.empty-ui i{\r\n  display: block;\r\n  margin-bottom: 1rem;\r\n}\r\n.empty-ui button{\r\n  text-transform: uppercase;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  height: 48px;\r\n}\r\n.empty-ui button:focus{\r\n  text-transform: uppercase;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  height: 48px;\r\n  color: #fff;\r\n}\r\n.empty-ui button i{\r\n  display: inline-block;\r\n  margin: 0;\r\n  margin-right: 1rem;\r\n}\r\n.tb-row{\r\n  width: 100%;\r\n}\r\n.table{\r\n  margin-top: 10rem;\r\n}"

/***/ }),

/***/ "./src/app/application/application.component.html":
/*!********************************************************!*\
  !*** ./src/app/application/application.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"fix-header fix-sidebar\">\r\n    <!-- Preloader - style you can find in spinners.css -->\r\n    <!-- <div class=\"preloader\">\r\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n        </svg>\r\n    </div> -->\r\n    <!-- Main wrapper  -->\r\n    <div id=\"main-wrapper\">\r\n        <!-- header header  -->\r\n        <div class=\"header\">\r\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n                <!-- Logo -->\r\n                <div class=\"navbar-header\">\r\n                    <a class=\"navbar-brand\" href=\"index.html\">\r\n                        <!-- Logo icon \r\n                        <!-- <b>\r\n                                <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                            </b> -->\r\n                        <!--End Logo icon -->\r\n                        <!-- Logo text -->\r\n                        <!-- <span>\r\n                                <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                            </span> -->\r\n                    </a>\r\n                </div>\r\n                <!-- End Logo -->\r\n                <div class=\"navbar-collapse\">\r\n                    <!-- toggle and nav items -->\r\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\r\n                        <!-- This is  -->\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"mdi mdi-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item m-l-10\">\r\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"ti-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <!-- User profile and search -->\r\n                    <ul class=\"navbar-nav my-lg-0\">\r\n                        <!-- Profile -->\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\r\n                                <ul class=\"dropdown-user\">\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n        <div>\r\n\r\n        </div>\r\n\r\n\r\n        <!-- End header header -->\r\n        <!-- Left Sidebar  -->\r\n        <div class=\"left-sidebar\">\r\n            <!-- Sidebar scroll-->\r\n            <div class=\"scroll-sidebar\">\r\n                <!-- Sidebar navigation-->\r\n                <nav class=\"sidebar-nav\">\r\n                    <ul id=\"sidebarnav\">\r\n                        <li class=\"nav-devider\"></li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-tachometer\"></i>\r\n                                <span class=\"hide-menu\">Dashboard</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-envelope\"></i>\r\n                                <span class=\"hide-menu\">Users</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/clients\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-bar-chart\"></i>\r\n                                <span class=\"hide-menu\">Application</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/groups\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                                <span class=\"hide-menu\">Group</span>\r\n                            </a>\r\n                        </li>\r\n                        <!-- <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/add-role\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                                <span class=\"hide-menu\">Roles</span>\r\n                            </a>\r\n                        </li> -->\r\n                    </ul>\r\n                </nav>\r\n                <!-- End Sidebar navigation -->\r\n            </div>\r\n            <!-- End Sidebar scroll-->\r\n        </div>\r\n        <!-- End Left Sidebar  -->\r\n        <!-- Page wrapper  -->\r\n        <div class=\"page-wrapper\">\r\n            <!-- End Bread crumb -->\r\n            <!-- Container fluid  -->\r\n            <div class=\"container-fluid\">\r\n                <!-- Start Page Content -->\r\n                <div class=\"row justify-content-center tb-row\">\r\n                    <div class=\"col-12 d-flex justify-content-end p-0\">\r\n                        <div class=\"empty-ui text-center\">\r\n\r\n                            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\" data-toggle=\"modal\" data-target=\"#add_new_user_modal\"><i class=\"fas fa-plus\"></i>Create user</button>\r\n                            <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Create Client</button> -->\r\n\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\">\r\n                                    <i class=\"fas fa-plus\"></i>Create Application</button>\r\n                                <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</button>\r\n                                         -->\r\n                            </div>\r\n                            <!--End of  div for container class  -->\r\n                        </div>\r\n                    </div>\r\n                    <table id=\"example\" class=\"table table-striped table-bordered nowrap\" style=\"width:100%\">\r\n                        <thead>\r\n                            <tr>\r\n                                <!-- <th>user_id</th> -->\r\n                                <th>client_id</th>\r\n                                <th>Name</th>\r\n                                <th>client_scope</th>\r\n                                <!-- <th>authorized_grant_types</th>\r\n                                <th>autoapprove</th> -->\r\n\r\n                                <!-- <th>Password</th> -->\r\n                                <th>Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let client of clients\">\r\n\r\n                                <!-- <td>{{user.id}}</td> -->\r\n\r\n                                <td style=\"word-wrap:break-word;max-width:10px;border-collapse: collapse;\">{{client.client_id}}</td>\r\n                                <td style=\"max-width: 15px;\">{{client.name }}</td>\r\n                                <td style=\"word-wrap: break-word;max-width:10px;\">{{ client.scope }}</td>\r\n                                <!-- <td style=\"word-wrap: break-word;max-width:10px;\">{{ client.authorized_grant_types }}</td>\r\n                                    <td style=\"word-wrap: break-word;max-width:10px;\">{{ client.autoapprove }}</td> -->\r\n                                <!-- <td>{{user.password}}</td> -->\r\n                                <td>\r\n                                    <!-- <input type=\"text\" class=\"form-control\" value=\"{{client_id}}\" #client_id style=\"display:none;\"> -->\r\n\r\n                                    <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(client.client_id)\" style=\"margin-right: 30px\"\r\n                                    />\r\n                                    <!-- <button class=\"btn btn-info btn-sm\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content,client_id)\">Update</button> -->\r\n                                    <button class=\"btn btn-success\" (click)=\"goToApp(client.client_id)\">View</button>\r\n\r\n                                </td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <!-- End PAge Content -->\r\n            </div>\r\n            <!-- End Container fluid  -->\r\n        </div>\r\n        <!-- End Page wrapper  -->\r\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Create App</h4>\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n\r\n                    <div class=\"form-group has-feedback\">\r\n                            <label>Application Id</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" [(ngModel)]=\"client_id\" name=\"client_id\">\r\n                        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                            <label>Name</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\">\r\n                        <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\r\n                        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                            <label>Application Secret</label>\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"client_secret\" name=\"client_secret\">\r\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                            <label>Scope</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"scope\" autocomplete=\"off\" [(ngModel)]=\"scope\" name=\"scope\">\r\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                        </div>\r\n\r\n                    <div class=\"form-group has-feedback\">\r\n                            <label>Required Ids</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"require_ids\" autocomplete=\"off\" [(ngModel)]=\"require_ids\" name=\"require_ids\">\r\n                                <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group has-feedback\">\r\n                            <label>Authorized Grant Types</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"authorized_grant_types\" autocomplete=\"off\" [(ngModel)]=\"authorized_grant_types\" name=\"authorized_grant_types\">\r\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group has-feedback\">\r\n                            <label>Redirect_Uri</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"redirect_uri\" autocomplete=\"off\" [(ngModel)]=\"redirect_uri\" name=\"redirect_uri\">\r\n                                <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                            <label>Authorities</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"authorities\" autocomplete=\"off\" [(ngModel)]=\"authorities\" name=\"authorities\">\r\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                        <label>Autoapprove</label>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"autoapprove\">\r\n                          <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\r\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                 </div>\r\n                    <div class=\"row\" style=\"margin-bottom:50px;\">\r\n                        <div class=\"col-md-2\">\r\n                            &nbsp;\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\r\n                            <button type=\"button\" class=\"btn btn-success\" (click)=\"loadClient()\">Create</button>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\r\n                            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            &nbsp;\r\n                        </div>\r\n\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n            <!-- <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n            </div> -->\r\n        </ng-template>\r\n\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/application/application.component.ts":
/*!******************************************************!*\
  !*** ./src/app/application/application.component.ts ***!
  \******************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _dataservice_dataservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataservice/dataservice */ "./src/app/dataservice/dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(http, route, router, modalService, dataservice) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.dataservice = dataservice;
        this.client_id = "";
        this.name = "";
        this.client_secret = "";
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    ApplicationComponent.prototype.loadClients = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: "https://uaaserver.eu-gb.mybluemix.net/oauth/clients",
            headers: head
        })
            .then(function (response) {
            //console.log(response.data)
            return (_this.clients = response.data.resources);
        })
            .catch(function (error) { return console.log(error); });
    };
    ApplicationComponent.prototype.loadClient = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients";
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
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
    ApplicationComponent.prototype.funcDeleteT = function (client_id) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients/{client_id}";
            link = link.replace("{client_id}", client_id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
    ApplicationComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ApplicationComponent.prototype.getDismissReason = function (reason) {
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
    ApplicationComponent.prototype.goToApp = function (data) {
        // routerLink ='/view-app'
        console.log("here");
        this.dataservice.setGroupId(data);
        this.router.navigate(["view-app"]);
    };
    ApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-application",
            template: __webpack_require__(/*! ./application.component.html */ "./src/app/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.css */ "./src/app/application/application.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _dataservice_dataservice__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], ApplicationComponent);
    return ApplicationComponent;
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

module.exports = "<div class=\"d-flex justify-content-center h-100 auth-container\">\n        <div class=\"auth-wrapper\">\n            <div>\n                <div class=\"d-flex flex-column text-center mb-4 auth-header\">\n                    <span>ECOBANK UAA</span>\n                    <!-- <small>Hello! Sign in with your username or email</small> -->\n                </div>\n                <form>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" id=\"old password\" placeholder=\"Old password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" id=\"New password\" placeholder=\"New password\">\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" id=\"Confirm password\" placeholder=\"Confirm password\">\n                    </div>\n                    <a routerLink=\"/dashboard\" class=\"btn btn-primary w-100 auth-btn auth-btn-green\">Change password</a>\n                    <!-- <a routerLink=\"/view-users\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</a> -->\n                    \n    \n                                         \n                </form>\n            </div>\n        </div>\n    </div>"

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

module.exports = "<body class=\"fix-header fix-sidebar\">\n    <!-- Preloader - style you can find in spinners.css -->\n    <!-- <div class=\"preloader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n        </svg>\n    </div> -->\n    <!-- Main wrapper  -->\n    <div id=\"main-wrapper\">\n        <!-- header header  -->\n        <div class=\"header\">\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n                <!-- Logo -->\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"index.html\">\n                        <!-- Logo icon -->\n                        <!-- <b>\n                                <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </b> -->\n                        <!--End Logo icon -->\n                        <!-- Logo text -->\n                        <!-- <span>\n                                <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </span> -->\n                    </a>\n                </div>\n                <!-- End Logo -->\n                <div class=\"navbar-collapse\">\n                    <!-- toggle and nav items -->\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\n                        <!-- This is  -->\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"mdi mdi-menu\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item m-l-10\">\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"ti-menu\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                    <!-- User profile and search -->\n                    <ul class=\"navbar-nav my-lg-0\">\n                        <!-- Profile -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\n                                <ul class=\"dropdown-user\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <!-- End header header -->\n        <!-- Left Sidebar  -->\n        <div class=\"left-sidebar\">\n            <!-- Sidebar scroll-->\n            <div class=\"scroll-sidebar\">\n                <!-- Sidebar navigation-->\n                <nav class=\"sidebar-nav\">\n                    <ul id=\"sidebarnav\">\n                        <li class=\"nav-devider\"></li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\n                                <i class=\"far fa-tachometer\"></i>\n                                <span class=\"hide-menu\">Dashboard</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\n                                <i class=\"fa fa-envelope\"></i>\n                                <span class=\"hide-menu\">Users</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\n                                <i class=\"fa fa-bar-chart\"></i>\n                                <span class=\"hide-menu\">Client</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Group</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Roles</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <!-- End Sidebar navigation -->\n            </div>\n            <!-- End Sidebar scroll-->\n        </div>\n        <!-- End Left Sidebar  -->\n        <!-- Page wrapper  -->\n        <div class=\"page-wrapper\">\n            <!-- End Bread crumb -->\n            <!-- Container fluid  -->\n            <div class=\"container-fluid\">\n                <!-- Start Page Content -->\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-6 d-flex justify-content-center\">\n                        <div class=\"empty-ui text-center\">\n                            <h1>CLIENTS</h1>\n                            <i class=\"far fa-user-circle fa-5x color-primary\"></i>\n                            <p>No clients have been added to your connections</p>\n                            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\" data-toggle=\"modal\" data-target=\"#add_new_user_modal\"><i class=\"fas fa-plus\"></i>Create user</button>\n                            <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Create Client</button> -->\n                                       \n                                       <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                        <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i>Create Clients</button>\n\n                                        \n                                        <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</button>\n                                         -->\n                                         <a routerLink=\"/view-client-app\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">VIEW CLIENTS</a>\n                                      </div>\n                            \n\n                                      \n                            \n                                      \n                                                                                \n                                          \n                                      \n                                    \n                                    <!--End of  div for container class  --> \n                                  \n                            \n                        </div>\n                    </div>\n                </div>\n                <!-- End PAge Content -->\n            </div>\n            <!-- End Container fluid  -->\n        </div>\n        <!-- End Page wrapper  -->\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Client</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                            \n                    <div class=\"form-group has-feedback\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" [(ngModel)]=\"client_id\" name=\"client_id\" >\n                        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\">\n                          <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"client_secret\" name=\"client_secret\">\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"scope\" [(ngModel)]=\"scope\" name=\"scope\">\n                            <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n                      <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"redirected_uri\" [(ngModel)]=\"redirected_uri\" name=\"redirected_uri\">\n                            <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div>\n                      <!-- <div class=\"form-group has-feedback\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"authorities\" [(ngModel)]=\"authorities\" name=\"authorities\"> \n                            <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\">\n                            \n                            \n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                      </div> -->\n                      <div class=\"form-group has-feedback\">\n                        <label for=\"authorities\">authorities:</label>\n                        <select class=\"form-control\" id=\"authorities\" placeholder=\"authorities\" [(ngModel)]=\"authorities\" name=\"authorities\">\n                          <option>client.read</option>\n                          <option>client.write</option>\n                          <option>client.read,client.write</option>\n                          \n                        </select>\n                        \n                    </div>\n\n                      \n                            \n                    <div class=\"row\" style=\"margin-bottom:50px;\">\n                            <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                           <div class=\"col-md-4\">\n                                <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"loadClient()\">Create</button>\n                                \n                            </div>\n                            <div class=\"col-md-4\">\n                              <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                    \n                          </div>\n                          <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                          \n                    </div>\n                </form> \n        \n            </div>\n            <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n            </div> -->\n        </ng-template>\n\n    </div>\n\n    \n\n    \n"

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
            Authorization: "Bearer  17517284380f4766bf4fcce0a88aa3ab",
            Accept: "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            Authorization: "Bearer  17517284380f4766bf4fcce0a88aa3ab",
            Accept: "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: "https://uaaserver.eu-gb.mybluemix.net/oauth/clients",
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
            "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
            "Accept": "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients" + data;
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
        var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients";
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
            Authorization: "Bearer  17517284380f4766bf4fcce0a88aa3ab",
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
            var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients/{client_id}";
            link = link.replace("{client_id}", client_id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                Authorization: "Bearer  17517284380f4766bf4fcce0a88aa3ab",
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
    ClientsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
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

module.exports = "<body class=\"fix-header fix-sidebar\">\r\n    <!-- Preloader - style you can find in spinners.css -->\r\n    <!-- <div class=\"preloader\">\r\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n        </svg>\r\n    </div> -->\r\n    <!-- Main wrapper  -->\r\n    <div id=\"main-wrapper\">\r\n        <!-- header header  -->\r\n        <div class=\"header\">\r\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n                <!-- Logo -->\r\n                <div class=\"navbar-header\">\r\n                    <a class=\"navbar-brand\" href=\"index.html\">\r\n                        <!-- Logo icon -->\r\n                        <b>\r\n                            <!-- <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" /> -->\r\n                            User Access Management\r\n                        </b> \r\n                        <!--End Logo icon -->\r\n                        <!-- Logo text -->\r\n                        <!-- <span>\r\n                            <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                        </span> -->\r\n                    </a>\r\n                </div>\r\n                <!-- End Logo -->\r\n                <div class=\"navbar-collapse\">\r\n                    <!-- toggle and nav items -->\r\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\r\n                        <!-- This is  -->\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"mdi mdi-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item m-l-10\">\r\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"ti-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <!-- User profile and search -->\r\n                    <ul class=\"navbar-nav my-lg-0\">\r\n                        <!-- Profile -->\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\r\n                                <ul class=\"dropdown-user\">\r\n                                    <li>\r\n                                        <a routerLink=\"/change-email\">\r\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a routerLink=\"/change-password\">\r\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a routerLink=\"/login\">\r\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n        <!-- End header header -->\r\n        <!-- Left Sidebar  -->\r\n        <div class=\"left-sidebar\">\r\n            <!-- Sidebar scroll-->\r\n            <div class=\"scroll-sidebar\">\r\n                <!-- Sidebar navigation-->\r\n                <nav class=\"sidebar-nav\">\r\n                    <ul id=\"sidebarnav\">\r\n                        <li class=\"nav-devider\"></li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-tachometer\"></i>\r\n                                <span class=\"hide-menu\">Dashboard</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-user\"></i>\r\n                                <span class=\"hide-menu\">Users</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/application\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-user\"></i>\r\n                                <span class=\"hide-menu\">Application</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/view-groups\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-building\"></i>\r\n                                <span class=\"hide-menu\">Groups</span>\r\n                            </a>\r\n                        </li> \r\n                        <!-- <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/add-role\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-user\"></i>\r\n                                <span class=\"hide-menu\">Roles</span>\r\n                            </a>\r\n                        </li> -->\r\n                    </ul>\r\n                </nav>\r\n                <!-- End Sidebar navigation -->\r\n            </div>\r\n            <!-- End Sidebar scroll-->\r\n        </div>\r\n        <!-- End Left Sidebar  -->\r\n        <!-- Page wrapper  -->\r\n        <div class=\"page-wrapper\">\r\n            <!-- Bread crumb -->\r\n            <div class=\"row page-titles\">\r\n                <div class=\"col-md-5 align-self-center\">\r\n                    <h3 class=\"section-title\">Overview</h3>\r\n                </div>\r\n            </div>\r\n            <!-- End Bread crumb -->\r\n            <!-- Container fluid  -->\r\n            <div class=\"container-fluid\">\r\n                <!-- Start Page Content -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card p-30\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left meida media-middle\">\r\n                                    <span>\r\n                                        <a routerLink='/users'>\r\n                                        <i class=\"far fa-user f-s-40 color-primary\"></i></a>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"media-body media-text-right\">\r\n                                    <h2></h2>\r\n                                    <p class=\"m-b-0\">Users</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card p-30\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left meida media-middle\">\r\n                                    <span>\r\n                                            <a routerLink='/application'>\r\n                                        <i class=\"far fa-user f-s-40 color-success\"></i></a>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"media-body media-text-right\">\r\n                                    <h2></h2>\r\n                                    <p class=\"m-b-0\">Application</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card p-30\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left meida media-middle\">\r\n                                    <span>\r\n                                            <a routerLink='/view-group'>\r\n                                        <i class=\"far fa-building f-s-40 color-warning\"></i></a>\r\n                                    </span>\r\n                                </div>\r\n                                 <div class=\"media-body media-text-right\">\r\n                                    <h2></h2>\r\n                                    <p class=\"m-b-0\">Groups</p>\r\n                                </div> \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"card p-30\">\r\n                            <div class=\"media\">\r\n                                <div class=\"media-left meida media-middle\">\r\n                                    <span>\r\n                                            <a routerLink='/view-groups'>\r\n                                        <i class=\"far fa-user f-s-40 color-danger\"></i></a>\r\n                                    </span>\r\n                                </div>\r\n                                  \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End PAge Content -->\r\n            </div>\r\n            <!-- End Container fluid  -->\r\n        </div>\r\n        <!-- End Page wrapper  -->\r\n    </div>"

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

/***/ "./src/app/dataservice/dataservice.ts":
/*!********************************************!*\
  !*** ./src/app/dataservice/dataservice.ts ***!
  \********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getGroupId = function () {
        return this.groupId;
    };
    DataService.prototype.setGroupId = function (data) {
        this.groupId = data;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataService);
    return DataService;
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

module.exports = "<body class=\"fix-header fix-sidebar\">\n    <!-- Preloader - style you can find in spinners.css -->\n    <!-- <div class=\"preloader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n        </svg>\n    </div> -->\n    <!-- Main wrapper  -->\n    <div id=\"main-wrapper\">\n        <!-- header header  -->\n        <div class=\"header\">\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n                <!-- Logo -->\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"index.html\">\n                        <!-- Logo icon -->\n                        <!-- <b>\n                                <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </b> -->\n                        <!--End Logo icon -->\n                        <!-- Logo text -->\n                        <!-- <span>\n                                <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </span> -->\n                    </a>\n                </div>\n                <!-- End Logo -->\n                <div class=\"navbar-collapse\">\n                    <!-- toggle and nav items -->\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\n                        <!-- This is  -->\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"mdi mdi-menu\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item m-l-10\">\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"ti-menu\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                    <!-- User profile and search -->\n                    <ul class=\"navbar-nav my-lg-0\">\n                        <!-- Profile -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\n                                <ul class=\"dropdown-user\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <!-- End header header -->\n        <!-- Left Sidebar  -->\n        <div class=\"left-sidebar\">\n            <!-- Sidebar scroll-->\n            <div class=\"scroll-sidebar\">\n                <!-- Sidebar navigation-->\n                <nav class=\"sidebar-nav\">\n                    <ul id=\"sidebarnav\">\n                        <li class=\"nav-devider\"></li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\n                                <i class=\"far fa-tachometer\"></i>\n                                <span class=\"hide-menu\">Dashboard</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\n                                <i class=\"fa fa-envelope\"></i>\n                                <span class=\"hide-menu\">Users</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/clients\" aria-expanded=\"false\">\n                                <i class=\"fa fa-bar-chart\"></i>\n                                <span class=\"hide-menu\">Application</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/groups\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Role</span>\n                            </a>\n                        </li>\n                        <!-- <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/add-role\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Roles</span>\n                            </a>\n                        </li> -->\n                    </ul>\n                </nav>\n                <!-- End Sidebar navigation -->\n            </div>\n            <!-- End Sidebar scroll-->\n        </div>\n        <!-- End Left Sidebar  -->\n        <!-- Page wrapper  -->\n        <div class=\"page-wrapper\">\n            <!-- End Bread crumb -->\n            <!-- Container fluid  -->\n            <div class=\"container-fluid\">\n                <!-- Start Page Content -->\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-6 d-flex justify-content-center\">\n                        <div class=\"empty-ui text-center\">\n                            <h1>Group</h1>\n                            \n                            <i class=\"far fa-building f-s-40 color-warning\"></i>\n                            <p>No groups have bee added to your connections</p>\n                            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\" data-toggle=\"modal\" data-target=\"#add_new_user_modal\"><i class=\"fas fa-plus\"></i>Create user</button>\n                            <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Create Client</button> -->\n                                       \n                                       <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                        <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i>Create Group</button>\n                                        <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</button>\n                                         -->\n                                         <a routerLink=\"/view-groups\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">VIEW GROUPS</a>\n                                      </div>\n                            \n\n                                      \n                            \n                                      \n                                                                                \n                                          \n                                      \n                                    \n                                    <!--End of  div for container class  --> \n                                  \n                            \n                        </div>\n                    </div>\n                </div>\n                <!-- End PAge Content -->\n            </div>\n            <!-- End Container fluid  -->\n        </div>\n        <!-- End Page wrapper  -->\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Group</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                            \n                    <div class=\"form-group has-feedback\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" [(ngModel)]=\"client_id\" name=\"client_id\" >\n                        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"name\" name=\"name\">\n                          <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"client_secret\" name=\"client_secret\">\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                    </div>\n                    \n                    <div class=\"row\" style=\"margin-bottom:50px;\">\n                            <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                           <div class=\"col-md-4\">\n                                <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"loadClient()\">Create</button>\n                                \n                            </div>\n                            <div class=\"col-md-4\">\n                              <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                    \n                          </div>\n                          <div class=\"col-md-2\">\n                                &nbsp;\n                            </div>\n                          \n                    </div>\n                </form> \n        \n            </div>\n            <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n            </div> -->\n        </ng-template>\n\n    </div>\n\n    \n\n    \n"

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
            Authorization: "Bearer  d92d088bfc634503b2fd2591813c150d",
            Accept: "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            Authorization: "Bearer  d92d088bfc634503b2fd2591813c150d",
            Accept: "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: "https://uaaserver.eu-gb.mybluemix.net/oauth/clients",
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
        var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients";
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
            Authorization: "Bearer  d92d088bfc634503b2fd2591813c150d",
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
            var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients/{client_id}";
            link = link.replace("{client_id}", client_id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                Authorization: "Bearer  d92d088bfc634503b2fd2591813c150d",
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

module.exports = "<div class=\"d-flex justify-content-center h-100 auth-container\">\n    <div class=\"auth-wrapper\">\n        <div>\n            <div class=\"d-flex flex-column text-center mb-4 auth-header\">\n                <span>User Access Management</span>\n                <small>Hello! Sign in with your username or email</small>\n            </div>\n            <form>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\"  id=\"username\" aria-describedby=\"usernameHelp\"  placeholder=\"username\" [(ngModel)]=\"username\" name=\"username\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" id=\"password\"  placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\">\n                </div>\n                <button class=\"btn btn-primary w-100 auth-btn auth-btn-green\" (click)=\"loadLogin()\">Sign in</button> \n                <!-- <button type=\"button\" class=\"btn btn-success\" (click)=\"loadUser()\">Sign in</button> -->\n                                \n                <!-- <a routerLink=\"/view-users\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</a> -->\n                                     \n            </form>\n        </div>\n    </div>\n</div>"

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
        console.log(this.username + " " + this.password);
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/token";
        //var link = "http://localhost:8080/uaa/oauth/token"; 
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
            _this.router.navigateByUrl("/dashboard");
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

module.exports = "<body class=\"fix-header fix-sidebar\">\n     <!-- Preloader - style you can find in spinners.css  -->\n    <!-- <div class=\"preloader\">\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n        </svg>\n    </div>  -->\n    <!-- Main wrapper  -->\n    <div id=\"main-wrapper\">\n        <!-- header header  -->\n        <div class=\"header\">\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n                <!-- Logo -->\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\" href=\"index.html\">\n                        <!-- Logo icon -->\n                        <!-- <b>\n                                <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </b> -->\n                        <!--End Logo icon -->\n                        <!-- Logo text -->\n                        <!-- <span>\n                                <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                            </span> -->\n                    </a>\n                </div>\n                <!-- End Logo -->\n                <div class=\"navbar-collapse\">\n                    <!-- toggle and nav items -->\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\n                        <!-- This is  -->\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"mdi mdi-menu\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item m-l-10\">\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\n                                <i class=\"ti-menu\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                    <!-- User profile and search -->\n                    <ul class=\"navbar-nav my-lg-0\">\n                        <!-- Profile -->\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\n                                <ul class=\"dropdown-user\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <!-- End header header -->\n        <!-- Left Sidebar  -->\n        <div class=\"left-sidebar\">\n            <!-- Sidebar scroll-->\n            <div class=\"scroll-sidebar\">\n                <!-- Sidebar navigation-->\n                <nav class=\"sidebar-nav\">\n                    <ul id=\"sidebarnav\">\n                        <li class=\"nav-devider\"></li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\n                                <i class=\"far fa-tachometer\"></i>\n                                <span class=\"hide-menu\">Dashboard</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\n                                <i class=\"fa fa-envelope\"></i>\n                                <span class=\"hide-menu\">Users</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/clients\" aria-expanded=\"false\">\n                                <i class=\"fa fa-bar-chart\"></i>\n                                <span class=\"hide-menu\">Client</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/groups\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Group</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"sidebar-nav-link\" routerLink=\"/add-role\" aria-expanded=\"false\">\n                                <i class=\"fa fa-suitcase\"></i>\n                                <span class=\"hide-menu\">Roles</span>\n                            </a>\n                        </li>\n                        <!-- <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\"> -->\n                        username:<input type=\"text\" [(ngModel)] = \"username\">\n                        <button (click) = \"search()\">search</button> \n             \n                    </ul>\n                </nav>\n                <!-- End Sidebar navigation -->\n            </div>\n            <!-- End Sidebar scroll-->\n        </div>\n        <!-- End Left Sidebar  -->\n        <!-- Page wrapper  -->\n        \n        <!-- End Page wrapper  -->\n        \n\n                                       \n        \n        \n    </div>\n                \n    <table id=\"example\" class=\"table table-striped table-bordered nowrap\" style=\"width:100%\">\n\n        \n        <thead>\n            <tr>\n                \n                <!-- <th>user_id</th> -->\n                <th>groups</th>\n                <th>username</th>\n                <th>emails</th>\n                <th>origin</th>\n                <th>zoneId</th>\n                \n                <!-- <th>Password</th> -->\n                <th>Action</th>\n            </tr>\n        </thead>\n    \n        <tbody>\n    \n                <tr *ngFor=\"let user of Users\">\n                                    \n                        <!-- <td>{{user.id}}</td> -->\n                        \n                        <td>{{user.groups[0].value}}</td>\n                        <td>{{ user.userName }}</td>\n                        <td>{{ user.emails[0].value }}</td>\n                        <td>{{user.origin}}</td>\n                         <td>{{user.zoneId}}</td> \n                        <!-- <td>{{user.password}}</td> -->\n                        <td>\n                                <input type=\"text\" class=\"form-control\" value=\"{{ user_id}}\" #user_id style=\"display:none;\">\n                                <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(user.id)\" style=\"margin-right: 10px\" /> \n                                <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content,user.id)\">Update</button>\n                                \n                          \n                        </td>\n                    </tr>\n            \n        </tbody>\n\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                                \n                        <div class=\"form-group has-feedback\">\n                                <label>User Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\"  name=\"client_id\" [(ngModel)]=\"get.username\">\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        \n                        <div class=\"form-group has-feedback\">\n                            <label>Family Name</label>\n                              <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.familyName\">\n                              <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                              <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                                <label>Given Name</label>\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.givenName\">\n                                  <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                                  <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                            </div>\n                        <div class=\"form-group has-feedback\">\n                                <label>Email</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"get.emails[0].value\" name=\"client_secret\">\n                            <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                        </div>\n                        \n                        <div class=\"row\" style=\"margin-bottom:50px;\">\n                                <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                               <div class=\"col-md-4\">\n                                    <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"updClient(get.user_id)\">Update</button>\n                                    \n                                </div>\n                                <div class=\"col-md-4\">\n                                  <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                                  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                        \n                              </div>\n                              <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                              \n                        </div>\n                    </form> \n            \n                </div>\n                <!-- <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n                </div> -->\n            </ng-template>\n    \n    </table>\n\n    \n\n    \n\n    \n"

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
        this.password = "";
        this.get = { 'user_id': null, 'username': null, 'familyName': null, 'givenName': null, 'emails': [], 'groups': [] };
    }
    TestComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    TestComponent.prototype.updClient = function (data) {
        var _this = this;
        var link = "https://uaaserver.eu-gb.mybluemix.net/Users/{user_id}";
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
            "Authorization": "Bearer c1fc2798d8634be183e611d6fb952c39",
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
    TestComponent.prototype.loadUsers = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_2___default()({ method: "GET", url: "https://uaaserver.eu-gb.mybluemix.net/Users", headers: head })
            .then(function (response) {
            //console.log(response.data)
            return _this.Users = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    TestComponent.prototype.loadClientsById = function (data) {
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/Users" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_2___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            return console.log(response.data);
        }
        // this.Users = response.data.resources
        )
            .catch(function (error) { return console.log(error); });
    };
    TestComponent.prototype.loadUser = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "https://uaaserver.eu-gb.mybluemix.net/Users";
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
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
    TestComponent.prototype.funcDeleteT = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "https://uaaserver.eu-gb.mybluemix.net/Users/{id}";
            link = link.replace("{id}", id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
    TestComponent.prototype.open = function (content, data) {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/Users/" + data;
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

module.exports = "<body class=\"fix-header fix-sidebar\">\r\n    <!-- Preloader - style you can find in spinners.css -->\r\n    <!-- <div class=\"preloader\">\r\n        <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n            <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n        </svg>\r\n    </div> -->\r\n    <!-- Main wrapper  -->\r\n    <div id=\"main-wrapper\">\r\n        <!-- header header  -->\r\n        <div class=\"header\">\r\n            <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\r\n                <!-- Logo -->\r\n                <div class=\"navbar-header\">\r\n                    <a class=\"navbar-brand\" href=\"index.html\">\r\n                        <!-- Logo icon -->\r\n                        <!-- <b>\r\n                                <img src=\"images/logo.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                            </b> -->\r\n                        <!--End Logo icon -->\r\n                        <!-- Logo text -->\r\n                        <!-- <span>\r\n                                <img src=\"images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n                            </span> -->\r\n                    </a>\r\n                </div>\r\n                <!-- End Logo -->\r\n                <div class=\"navbar-collapse\">\r\n                    <!-- toggle and nav items -->\r\n                    <ul class=\"navbar-nav mr-auto mt-md-0\">\r\n                        <!-- This is  -->\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link nav-toggler hidden-md-up text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"mdi mdi-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"nav-item m-l-10\">\r\n                            <a class=\"nav-link sidebartoggler hidden-sm-down text-muted  \" href=\"javascript:void(0)\">\r\n                                <i class=\"ti-menu\"></i>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <!-- User profile and search -->\r\n                    <ul class=\"navbar-nav my-lg-0\">\r\n                        <!-- Profile -->\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link dropdown-toggle text-muted  \" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                <img src=\"http://robohash.org/503483?set=set2&bgset=bg2&size=70x70\" alt=\"user\" class=\"profile-pic\" />\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right animated zoomIn\">\r\n                                <ul class=\"dropdown-user\">\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-lock\"></i> Change email</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-lock\"></i> Change password</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <i class=\"fa fa-power-off\"></i> Logout</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n        <!-- End header header -->\r\n        <!-- Left Sidebar  -->\r\n        <div class=\"left-sidebar\">\r\n            <!-- Sidebar scroll-->\r\n            <div class=\"scroll-sidebar\">\r\n                <!-- Sidebar navigation-->\r\n                <nav class=\"sidebar-nav\">\r\n                    <ul id=\"sidebarnav\">\r\n                        <li class=\"nav-devider\"></li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/dashboard\" aria-expanded=\"false\">\r\n                                <i class=\"far fa-tachometer\"></i>\r\n                                <span class=\"hide-menu\">Dashboard</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/users\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-envelope\"></i>\r\n                                <span class=\"hide-menu\">Users</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/application\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-bar-chart\"></i>\r\n                                <span class=\"hide-menu\">Application</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/view-groups\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                                <span class=\"hide-menu\">Group</span>\r\n                            </a>\r\n                        </li>\r\n                        <!-- <li>\r\n                            <a class=\"sidebar-nav-link\" routerLink=\"/\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                                <span class=\"hide-menu\">Roles</span>\r\n                            </a>\r\n                        </li> -->\r\n                    </ul>\r\n                </nav>\r\n                <!-- End Sidebar navigation -->\r\n            </div>\r\n            <!-- End Sidebar scroll-->\r\n        </div>\r\n        <!-- End Left Sidebar  -->\r\n        <!-- Page wrapper  -->\r\n        <div class=\"page-wrapper\">\r\n            <!-- End Bread crumb -->\r\n            <!-- Container fluid  -->\r\n            <div class=\"container-fluid\">\r\n                <!-- Start Page Content -->\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-6 d-flex justify-content-center\">\r\n                        <div class=\"empty-ui text-center\">\r\n                            <h1>Users</h1>\r\n                            <i class=\"far fa-user-circle fa-5x color-primary\"></i>\r\n                            <p>No users have bee added to your connections</p>\r\n                            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\" data-toggle=\"modal\" data-target=\"#add_new_user_modal\"><i class=\"fas fa-plus\"></i>Create user</button>\r\n                            <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Create Client</button> -->\r\n                                       \r\n                                       <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i>Create user</button>\r\n                                        <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</button>\r\n                                         -->\r\n                                         <!-- <a routerLink=\"/view-users\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\">View users</a> -->\r\n                                        <a routerLink=\"/view-users\"> <button type = \"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\"> View Users</button></a>\r\n                                      </div>\r\n                            \r\n\r\n                                      \r\n                            \r\n                                      \r\n                                                                                \r\n                                          \r\n                                      \r\n                                    \r\n                                    <!--End of  div for container class  --> \r\n                                  \r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End PAge Content -->\r\n            </div>\r\n            <!-- End Container fluid  -->\r\n        </div>\r\n        <!-- End Page wrapper  -->\r\n        <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"modal-basic-title\">Create User</h4>\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                            \r\n                    <div class=\"form-group has-feedback\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" [(ngModel)]=\"username\" name=\"client_id\" >\r\n                        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"email\" name=\"name\">\r\n                          <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\r\n                          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n                    </div>\r\n                    <div class=\"form-group has-feedback\">\r\n                        <input type=\"password\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"password\" name=\"client_secret\">\r\n                        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n                    </div>\r\n                    \r\n                    <div class=\"row\" style=\"margin-bottom:50px;\">\r\n                            <div class=\"col-md-2\">\r\n                                &nbsp;\r\n                            </div>\r\n                           <div class=\"col-md-4\">\r\n                                <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\r\n                                <button type=\"button\" class=\"btn btn-success\" (click)=\"loadUser()\">Create</button>\r\n                                \r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                              <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\r\n                              <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\r\n                    \r\n                          </div>\r\n                          <div class=\"col-md-2\">\r\n                                &nbsp;\r\n                            </div>\r\n                          \r\n                    </div>\r\n                </form> \r\n        \r\n            </div>\r\n            <!-- <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n            </div> -->\r\n        </ng-template>\r\n\r\n    </div>\r\n\r\n    \r\n\r\n    "

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
            "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
            "Accept": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
            "Accept": "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({ method: "GET", url: "https://uaaserver.eu-gb.mybluemix.net/Users", headers: head })
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
        var link = "https://uaaserver.eu-gb.mybluemix.net/uaa/Users";
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
            "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
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
            var link = "https://uaaserver.eu-gb.mybluemix.net/Users/{id}";
            link = link.replace("{id}", id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                "Authorization": "Bearer  17517284380f4766bf4fcce0a88aa3ab",
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

/***/ "./src/app/view-app/view-app.component.css":
/*!*************************************************!*\
  !*** ./src/app/view-app/view-app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-form] {\r\n  max-width: 100% !important;\r\n}\r\n.login-form {\r\n  max-width: 100%;\r\n}\r\n.save-settings-button {\r\n  float: right;\r\n}\r\n.dynamic-delete-button {\r\n  cursor: pointer;\r\n  position: relative;\r\n  top: 4px;\r\n  font-size: 24px;\r\n  color: #999;\r\n  transition: all 0.3s;\r\n}\r\n.dynamic-delete-button:hover {\r\n  color: #777;\r\n}\r\n[nz-form] {\r\n  max-width: 600px;\r\n}\r\n.form-element-wrapper {\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  justify-content: space-between;\r\n  margin-bottom: 2rem;\r\n}\r\n.form-element.name {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  margin-right: 24px;\r\n  max-width: 300px;\r\n  width: 250px;\r\n}\r\n.form-element label {\r\n  margin: 0;\r\n  margin-right: 16px;\r\n}\r\n.form-element input {\r\n  width: 100%;\r\n}\r\n.form-element.description {\r\n  display: flex;\r\n  margin-right: 24px;\r\n  align-items: center;\r\n  flex: 2;\r\n  max-width: 470px;\r\n}\r\n.add-button {\r\n  max-width: 350px;\r\n  width: 200px;\r\n}\r\n.create-role-btn-wrapper {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 2rem;\r\n}\r\n.modal-guts {\r\n\r\n  /* other stuff we already covered */\r\n\r\n  /* cover the modal */\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  /* spacing as needed */\r\n  padding: 20px 50px 20px 20px;\r\n\r\n  /* let it scroll */\r\n  overflow: auto;\r\n  \r\n}"

/***/ }),

/***/ "./src/app/view-app/view-app.component.html":
/*!**************************************************!*\
  !*** ./src/app/view-app/view-app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row nzType=\"flex\" nzJustify=\"center\">\n  <div nz-col nzSpan=\"16\">\n    <div>\n      <div>\n        <h1>{{groupInfoObjects.name}} APP</h1>\n        <h2></h2>\n\n        <p>Generic application</p>\n      </div>\n      <nz-tabset>\n        <nz-tab nzTitle=\"Settings\">\n          <div nz-row nzType=\"flex\" nzJustify=\"center\">\n            <div nz-col nzSpan=\"24\">\n              <form nz-form [formGroup]=\"settingsForm\" class=\"login-form\" (ngSubmit)=\"settingsFormSubmit()\">\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"name\">Application name</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-input-group>\n                      <input type=\"text\" nz-input formControlName=\"name\" placeholder=\"name\" value=\"{{groupInfoObjects.name}}\">\n\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"f.name.dirty && f.name.errors\">Please input the application name</nz-form-explain>\n                  </nz-form-control>\n                </nz-form-item>\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"redirect_uri\">Redirect URI</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-input-group>\n                      <input type=\"text\" nz-input formControlName=\"redirect_uri\" placeholder=\"Redirect URI\" value=\"{{groupInfoObjects.redirect_uri}}\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"f.redirect_uri.dirty && f.redirect_uri.errors\">Please input your redirect uri</nz-form-explain>\n                  </nz-form-control>\n                </nz-form-item>\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"client_id\">Client IDs</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-input-group>\n                      <input type=\"text\" nz-input formControlName=\"client_id\" placeholder=\"Client IDs\" value=\"{{groupInfoObjects.client_id}}\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"f.client_id.dirty && f.client_id.errors\">Please input your client id</nz-form-explain>\n                  </nz-form-control>\n                </nz-form-item>\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"client_secret\">Client secret</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-input-group>\n                      <input type=\"text\" nz-input formControlName=\"client_secret\" placeholder=\"Client secret\" value=\"{{groupInfoObjects.client_secret}}\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"f.client_secret.dirty && f.client_secret.errors\">Please input your client secret</nz-form-explain>\n                  </nz-form-control>\n                </nz-form-item>\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"scope\">Scope</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-input-group>\n                      <input type=\"text\" nz-input formControlName=\"scope\" placeholder=\"Scope\" value=\"{{groupInfoObjects.scope}}\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"f.scope.dirty && f.scope.errors\">Please specify the appliation scope</nz-form-explain>\n                  </nz-form-control>\n                </nz-form-item>\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"authorities\">Authorities</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-input-group>\n                      <input type=\"text\" nz-input formControlName=\"authorities\" placeholder=\"Authorities\" value=\"{{groupInfoObjects.authorities}}\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"f.authorities.dirty && f.authorities.errors\">Please specify the appliation authorities</nz-form-explain>\n                  </nz-form-control>\n                </nz-form-item>\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"resource_ids\">Resource IDs</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-input-group>\n                      <input type=\"text\" nz-input formControlName=\"resource_ids\" placeholder=\"Resource IDs\" value=\"{{groupInfoObjects.resource_ids}}\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"f.resource_ids.dirty && f.resource_ids.errors\">Please specify the resource ids</nz-form-explain>\n                  </nz-form-control>\n                </nz-form-item>\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"authorized_grant_types\">Grant types</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-input-group>\n                      <input type=\"text\" nz-input formControlName=\"authorized_grant_types\" placeholder=\"Authorization grant types\" value=\"{{groupInfoObjects.authorized_grant_types}}\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"f.authorized_grant_types.dirty && f.authorized_grant_types.errors\">Please specify the authorization grant types</nz-form-explain>\n                  </nz-form-control>\n                </nz-form-item>\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"token_salt\">Token salt</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-input-group>\n                      <input type=\"text\" nz-input formControlName=\"token_salt\" placeholder=\"Token salt\" value=\"{{groupInfoObjects.token_salt}}\">\n                    </nz-input-group>\n                    <nz-form-explain *ngIf=\"f.token_salt.dirty && f.token_salt.errors\">Please specify the token salt</nz-form-explain>\n                  </nz-form-control>\n                </nz-form-item>\n                <nz-form-item>\n                  <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"autoapprove\">Auto approve</nz-form-label>\n                  <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n                    <nz-switch [(ngModel)]=\"switchValue\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\n                  </nz-form-control>\n                </nz-form-item>\n\n                <nz-form-item>\n                  <nz-form-control>\n                    <button nz-button [nzType]=\"'primary'\" class=\"save-settings-button\">Save changes</button>\n\n                  </nz-form-control>\n                </nz-form-item>\n              </form>\n            </div>\n          </div>\n        </nz-tab>\n\n\n        <!-- Permissions tab -->\n        <nz-tab nzTitle=\"Permissions\">\n          <div nz-row nzType=\"flex\" nzJustify=\"center\">\n            <div nz-col nzSpan=\"24\">\n              <p>Define Permissions for your application.</p>\n            </div>\n          </div>\n          <div class=\"create-role-btn-wrapper\">\n            <button nz-button nzType=\"primary\" (click)=\"open(content2)\">Create Permission</button>\n            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i>Create Role</button> -->\n\n          </div>\n          <nz-table #basicTable>\n            <thead>\n              <tr>\n\n                <th>displayName</th>\n                <th>description</th>\n\n                <th>Action</th>\n              </tr>\n            </thead>\n\n            <tbody>\n\n              <tr *ngFor=\"let Groups of permissions.resources\">\n\n                <td style=\"max-width: 30px; word-wrap: break-word;\">{{Groups.displayName }}</td>\n                <td style=\"word-wrap: break-word;max-width:10px;\">{{ Groups.description }}</td>\n\n                <td>\n                  <input type=\"text\" class=\"form-control\" value=\"{{id}}\" #client_id style=\"display:none;\">\n\n                  <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(groupId)\" style=\"margin-right: 30px\"\n                  />\n\n\n                </td>\n              </tr>\n\n            </tbody>\n\n          </nz-table>\n          <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"modal-basic\">Create Permission</h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form>\n\n                <div class=\"form-group has-feedback\">\n                  <label>display Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" name=\"client_id\" [(ngModel)]=\"get.displayName\">\n                  <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                </div>\n\n                <div class=\"form-group has-feedback\">\n                  <label>description</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"name\" name=\"name\" [(ngModel)]=\"get.description\">\n                  <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                  <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                </div>\n                <div class=\"row\" style=\"margin-bottom:50px;\">\n                  <div class=\"col-md-2\">\n                    &nbsp;\n                  </div>\n                  <div class=\"col-md-4\">\n                    <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"loadPermission()\">Create</button>\n\n                  </div>\n                  <div class=\"col-md-4\">\n                    <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n\n                  </div>\n                  <div class=\"col-md-2\">\n                    &nbsp;\n                  </div>\n\n                </div>\n              </form>\n\n\n            </div>\n            <!-- <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n                </div> -->\n          </ng-template>\n\n\n        </nz-tab>\n\n\n        <!-- Roles tab -->\n        <nz-tab nzTitle=\"Roles\">\n          <div nz-row nzType=\"flex\" nzJustify=\"center\">\n            <div nz-col nzSpan=\"24\" style=\"margin-bottom: 3rem\">\n              <p>Roles allow you to define the data that will be accessed through the applications to your API. Set a name for\n                them and its description for better understanding.</p>\n            </div>\n          </div>\n          <div class=\"create-role-btn-wrapper\">\n            <button nz-button nzType=\"primary\" (click)=\"open(content5)\">Create role</button>\n            <!-- <button type=\"button\" class=\"btn btn-primary btn-flat btn-addon btn-lg w-100\" (click)=\"open(content)\"><i class=\"fas fa-plus\"></i>Create Role</button> -->\n\n          </div>\n          <nz-table #basicTable>\n            <thead>\n              <tr>\n\n                <th>displayName</th>\n                <th>description</th>\n\n                <th>Action</th>\n              </tr>\n            </thead>\n\n            <tbody>\n\n              <!-- <tr *ngFor=\"let Groups of groups.resources\">  -->\n              <tr *ngFor=\"let group of Roles\">\n\n\n                <td style=\"max-width: 30px; word-wrap: break-word;\">{{group.displayName }}</td>\n                <td style=\"word-wrap: break-word;max-width:10px;\">{{ group.description }}</td>\n\n                <td>\n                  <input type=\"text\" class=\"form-control\" value=\"{{id}}\" #client_id style=\"display:none;\">\n\n                  <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(groupId)\" style=\"margin-right: 30px\"\n                  />\n                  <button class=\"btn btn-info btn-sm\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open4(content,group.id)\">Assign</button>\n\n\n                </td>\n              </tr>\n\n            </tbody>\n\n          </nz-table>\n          <ng-template #content5 let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"modal\">Create Role</h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n\n            <div class=\"modal-body\">\n              <form>\n                <div class=\"form-group has-feedback col-sm-12\">\n                  <label for=\"\" class=\"col-sm-3\">Display Name</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" [(ngModel)]=\"displayName\" name=\"displayName\">\n                    <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                  </div>\n                </div>\n                <div class=\"form-group has-feedback col-sm-12\">\n                  <label for=\"\" class=\"col-sm-3\">Description</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"name\" [(ngModel)]=\"description\" name=\"description\">\n                    <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                    <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                  </div>\n                </div>\n\n                <!-- <div class=\"col-sm-12\">\n                  <label for=\"\" class=\"col-sm-3\">Permissions</label>\n                  <div class=\"col-sm-9\" *ngFor=\"let Groups of permissions.resources\">\n                    <button class=\"btn btn-default\" style=\"margin:10px 10px 10px 10px; width:50%;\n                    text-align: left;\">\n                      <input type=\"checkbox\">{{Groups.displayName}}\n                    </button> &nbsp;\n                  </div>\n                </div> -->\n\n\n\n                <div class=\"row\" style=\"margin-bottom:50px;\">\n                  <div class=\"col-md-2\">\n                    &nbsp;\n                  </div>\n                  <div class=\"col-md-4\">\n                    <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"loadPermission()\">Create</button>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                  </div>\n                  <div class=\"col-md-2\">\n                    &nbsp;\n                  </div>\n                </div>\n              </form>\n\n            </div>\n            <!-- <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n                </div> -->\n          </ng-template>\n\n          <!-- members tab -->\n        </nz-tab>\n\n        <!-- Members tab -->\n        <nz-tab nzTitle=\"Members\">\n          <div nz-row nzType=\"flex\" nzJustify=\"center\">\n            <div nz-col nzSpan=\"24\" style=\"margin-bottom: 3rem\">\n              <p>Assign Users to role</p>\n            </div>\n          </div>\n\n\n          <nz-table #basicTable>\n            <thead>\n              <tr>\n                <th>Username</th>\n                <th>Email</th>\n                <th>givenName</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr *ngFor=\"let Groups of Members\">\n                <td style=\"max-width: 30px; word-wrap: break-word;\">{{Groups.entity.userName}}</td>\n                <td>{{ Groups.entity.emails[0].value}}</td>\n                <td style=\"word-wrap: break-word;max-width:10px;\">{{Groups.entity.name.givenName }}</td>\n                <td>\n                  <input type=\"text\" class=\"form-control\" value='{{Groups.entity.id}}' #userid style=\"display:none;\" />\n                  <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(groupId)\" style=\"margin-right: 30px\"\n                  />\n                  <button class=\"btn btn-info btn-sm\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open7(content7, Groups.entity.id)\">Assign</button>\n\n                </td>\n              </tr>\n            </tbody>\n          </nz-table>\n\n          <ng-template #content7 let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\" id=\"modal-basic-title\">Assign Role To User</h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n\n            <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n            </div> -->\n\n          </ng-template>\n\n        </nz-tab>\n      </nz-tabset>\n    </div>\n  </div>\n\n  <!-- assign permission to role -->\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-ti\">Assign</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    \n    <div class=\"modal-body\">\n      <form>\n\n        <div class=\"form-group has-feedback\">\n          <label>DisplayName</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"displayName\" autocomplete=\"off\" name=\"displayName\" [(ngModel)]=\"get.displayName\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <label for=\"\" class=\"col-sm-3\">Permissions</label>\n          <div class=\"col-sm-9\" *ngFor=\"let Groups of permissions.resources; let i = index;\">\n            <button class=\"btn btn-default\" style=\"margin:10px 10px 10px 10px; width:50%;\n            text-align: center; padding: 3px 6px; font-size: 12px;\">\n              <input type=\"checkbox\" [id]=\"Groups.id\" (change)=\"onChange($event, i, Groups)\">{{Groups.displayName}}\n            </button> &nbsp;\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"margin-bottom:50px;\">\n          <div class=\"col-md-2\">\n            &nbsp;\n          </div>\n          <div class=\"col-md-4\">\n            <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"d('Cross click')\">Done</button>\n\n          </div>\n          <div class=\"col-md-4\">\n            <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n\n          </div>\n          <div class=\"col-md-2\">\n            &nbsp;\n          </div>\n\n        </div>\n      </form>\n\n    </div>\n    <!-- <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n              </div> -->\n  </ng-template>\n\n  <!-- assign role to users -->\n  \n\n  \n  <ng-template #content7 let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-ti\">Assign to User</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    \n        <div class=\"modal-body\" style=\"width: 100%; height: auto;\">\n            <form>\n      \n              <div class=\"form-group has-feedback\">\n                <label>Username</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"userName\" autocomplete=\"off\" name=\"userName\" [(ngModel)]=\"get.username\">\n                <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n              </div>\n      \n              <div class=\"col-sm-12\">\n                <label for=\"\" class=\"col-sm-3\">Roles</label>\n                <div class=\"col-sm-9\" *ngFor=\"let group of Roles; let i = index;\">\n                  <button class=\"btn btn-default\" style=\"margin:3px 3px 3px 3px; width:70%; height: auto;\n                              text-align: center; padding: 3px 6px; font-size: 12px; \">\n                    <input type=\"checkbox\" [id]=\"group.id\" (change)=\"change($event, i, group)\">{{group.displayName}}\n                  </button> &nbsp;\n                </div>\n              </div>\n      \n              <div class=\"row\" style=\"margin-bottom:50px;\">\n                <div class=\"col-md-2\">\n                  &nbsp;\n                </div>\n                <div class=\"col-md-4\">\n                  <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                  <button type=\"button\" class=\"btn btn-success\" (click)=\"d('Cross click')\">Done</button>\n      \n                </div>\n                <div class=\"col-md-4\">\n                  <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n      \n                </div>\n                <div class=\"col-md-2\">\n                  &nbsp;\n                </div>\n      \n              </div>\n            </form>\n      \n          </div>\n    \n    \n    <!-- <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n                  </div> -->\n  </ng-template>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/view-app/view-app.component.ts":
/*!************************************************!*\
  !*** ./src/app/view-app/view-app.component.ts ***!
  \************************************************/
/*! exports provided: ViewAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAppComponent", function() { return ViewAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dataservice_dataservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dataservice/dataservice */ "./src/app/dataservice/dataservice.ts");
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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







var ViewAppComponent = /** @class */ (function () {
    function ViewAppComponent(fb, http, route, router, modalService, dataservice) {
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.dataservice = dataservice;
        this.permissions = {};
        this.groups = {};
        this.Roles = {};
        this.Members = {};
        this.client_id = "";
        this.displayName = "";
        this.description = "";
        this.name = "";
        this.client_secret = "";
        this.value = "";
        this.appId = {};
        this.users = {};
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            allowedproviders: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            autoapprove: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            token_salt: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            authorities: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            redirect_uri: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            authorized_grant_types: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            resource_ids: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            client_secret: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            client_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            scope: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.switchValue = false;
        // constructor(private fb: FormBuilder) {}
        this.get = {
            displayName: null,
            description: null,
            zoneId: null,
            origin: null,
            type: null,
            value: null,
            givenName: null,
            username: null,
            userName: null,
            user_id: null,
            emails: []
        };
    }
    ViewAppComponent.prototype.settingsFormSubmit = function () {
        for (var i in this.settingsForm.controls) {
            this.settingsForm.controls[i].markAsDirty();
            this.settingsForm.controls[i].updateValueAndValidity();
        }
    };
    ViewAppComponent.prototype.getFormControl = function (name) {
        return this.roleForm.controls[name];
    };
    ViewAppComponent.prototype.submitRoleForm = function () {
        for (var i in this.roleForm.controls) {
            this.roleForm.controls[i].markAsDirty();
            this.roleForm.controls[i].updateValueAndValidity();
        }
        console.log(this.roleForm.value);
    };
    Object.defineProperty(ViewAppComponent.prototype, "f", {
        get: function () {
            return this.settingsForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ViewAppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchGroupInfo(this.dataservice.getGroupId())];
                    case 1:
                        _a.sent();
                        console.log(this.dataservice.getGroupId());
                        this.roleForm = this.fb.group({});
                        this.settingsForm = this.fb.group({
                            name: "",
                            scope: "",
                            allowedproviders: "",
                            autoapprove: "",
                            token_salt: "",
                            authorities: "",
                            redirect_uri: "",
                            authorized_grant_types: "",
                            resource_ids: "",
                            client_secret: "",
                            client_id: ""
                        });
                        return [4 /*yield*/, this.loadGroupInfo(this.dataservice.getGroupId())];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadGroup(this.dataservice.getGroupId())];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadMember(this.dataservice.getGroupId())];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loadUsers(this.dataservice.getGroupId())];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewAppComponent.prototype.loadClients = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: "https://uaaserver.eu-gb.mybluemix.net/oauth/clients",
            headers: head
        })
            .then(function (response) {
            console.log("oath clients");
            console.log(response.data);
            _this.clients = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    // assigning permission to role
    ViewAppComponent.prototype.onChange = function (event, i, Groups) {
        //console.log("i am here");
        this.groupId2 = this.role_id;
        this.groupId = Groups.id;
        console.log(this.groupId2);
        console.log(this.groupId);
        console.log(this.permissions);
        ///
        var link = "https://uaaserver.eu-gb.mybluemix.net/Groups/{groupId2}/members";
        link = link.replace("{groupId2}", this.groupId2);
        var data = JSON.stringify({
            value: this.groupId
        });
        var schema = {
            origin: "uaa",
            type: "GROUP",
            value: "null"
        };
        schema.value = this.groupId;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
                //alert("User " + this.client_id + " Created Successfully");
            }
            else {
                alert("Failed!");
            }
        }, function (error) {
            alert("Client_id already created");
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    // assigning permission to role
    ViewAppComponent.prototype.change = function (event, i, group) {
        console.log("Assigning a user a role");
        this.userId = this.user__id;
        this.roleId = group.id;
        console.log("user id " + this.userId);
        console.log("role id " + this.roleId);
        ///
        var link = "https://uaaserver.eu-gb.mybluemix.net/Groups/{roleId}/members";
        link = link.replace("{roleId}", this.roleId);
        var schema = {
            origin: "uaa",
            type: "USER",
            value: "null"
        };
        schema.value = this.userId;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
                // alert("User " + this.client_id + " Created Successfully");
            }
            else {
                alert("Failed!");
            }
        }, function (error) {
            alert("Client_id already created");
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    ViewAppComponent.prototype.loadPermission = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "https://uaaserver.eu-gb.mybluemix.net/Groups";
        var data = JSON.stringify({
            displayName: this.displayName,
            description: this.description
        });
        var schema = {
            displayName: "null",
            description: "null"
        };
        schema.displayName = this.displayName;
        schema.description = this.description;
        console.log(this.displayName);
        console.log(this.description);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
                _this.displayName = "";
                _this.description = "";
                alert("User " + _this.displayName + " Created Successfully");
            }
            else {
                alert("Failed!");
            }
        }, function (error) {
            alert("displayName already created");
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    ViewAppComponent.prototype.loadClient = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients";
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
            Authorization: "Bearer  d92d088bfc634503b2fd2591813c150d",
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
    ViewAppComponent.prototype.loadRole = function () {
        var _this = this;
        // funcPost(nameVal, passwordVal, passwordVal)
        //funcPostT(userNameVal, passwordVal, emailsVal) {
        var link = "https://uaaserver.eu-gb.mybluemix.net/Groups";
        var data = JSON.stringify({
            displayName: this.displayName,
            description: this.description
        });
        var schema = {
            displayName: "null",
            description: "null"
        };
        schema.displayName = this.displayName;
        schema.description = this.description;
        console.log(this.displayName);
        console.log(this.description);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
                _this.displayName = "";
                _this.description = "";
                alert("User " + _this.displayName + " Created Successfully");
            }
            else {
                alert("Failed!");
            }
        }, function (error) {
            alert("displayName already created");
            console.log("error object " + JSON.stringify(error.json()));
        });
    };
    //get all groups
    ViewAppComponent.prototype.loadGroups = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: "https://uaaserver.eu-gb.mybluemix.net/Groups",
            headers: head
        })
            .then(function (response) {
            console.log("groups");
            console.log(response.data);
            _this.Groups = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewAppComponent.prototype.funcDeleteT = function (client_id) {
        var _this = this;
        if (confirm("Are you sure you want to delete?")) {
            //var string = (id);
            var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients/{client_id}";
            link = link.replace("{client_id}", client_id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
    ViewAppComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ViewAppComponent.prototype.open1 = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: "modal" }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ViewAppComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-member" })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    //get user by id before assigning role
    ViewAppComponent.prototype.open7 = function (content7, data) {
        var _this = this;
        console.log("Data is ==> " + data);
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        });
        var head = {
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/Users/" + data;
        axios__WEBPACK_IMPORTED_MODULE_1___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            console.log(response.data);
            console.log("before method call");
            console.log("data ==> " + data);
            _this.user__id = data;
            _this.get.username = response.data.userName;
            _this.modalService
                .open(content7, { ariaLabelledBy: "modal-basic-title" })
                .result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
            // this.Users = response.data.resources
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewAppComponent.prototype.getDismissReason = function (reason) {
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
    ViewAppComponent.prototype.fetchGroupInfo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var link, head;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients/{client_id}".replace("{client_id}", data);
                        head = {
                            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
                            Accept: "application/json"
                        };
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                method: "GET",
                                url: link,
                                headers: head
                            })
                                .then(function (response) {
                                console.log(response);
                                _this.groupInfoObjects = response.data;
                                console.log("client");
                                console.log(_this.groupInfoObjects);
                            })
                                .catch(function (error) { return console.log(error); })];
                    case 1:
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // app permissions
    ViewAppComponent.prototype.loadGroupInfo = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var link, head;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        link = "https://uaaserver.eu-gb.mybluemix.net/Groups?filter=description+co+%22{groupid}+permission%22&sortBy=lastModified&count=50&sortOrder=descending&startIndex=1".replace("{groupid}", data);
                        head = {
                            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
                            Accept: "application/json"
                        };
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                method: "GET",
                                url: link,
                                headers: head
                            })
                                .then(function (response) {
                                console.log(response);
                                _this.permissions = response.data;
                                console.log("permissions");
                                console.log(_this.permissions);
                            })
                                .catch(function (error) { return console.log(error); })];
                    case 1:
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // app roles
    ViewAppComponent.prototype.loadGroup = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var link, head;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        link = "https://uaaserver.eu-gb.mybluemix.net/Groups?filter=displayName+sw+%22{groupid}%22&sortBy=lastModified&count=50&sortOrder=descending&startIndex=1".replace("{groupid}", data);
                        head = {
                            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
                            Accept: "application/json"
                        };
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                method: "GET",
                                url: link,
                                headers: head
                            })
                                .then(function (response) {
                                console.log(response);
                                console.log("Roles");
                                _this.Roles = response.data.resources;
                                console.log(_this.Roles);
                            })
                                .catch(function (error) { return console.log(error); })];
                    case 1:
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //app members' group
    ViewAppComponent.prototype.loadMember = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var link, head;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        link = "https://uaaserver.eu-gb.mybluemix.net/Groups?filter=displayName+sw+%22{groupid}.user%22&sortBy=lastModified&count=50&sortOrder=descending&startIndex=1".replace("{groupid}", data);
                        head = {
                            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
                            Accept: "application/json"
                        };
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                method: "GET",
                                url: link,
                                headers: head
                            })
                                .then(function (response) {
                                console.log(response);
                                console.log("Members");
                                _this.users = response.data;
                                //console.log(this.Members.resources[0].id);
                                _this.appId = _this.users.resources[0].id;
                                console.log("Member id " + _this.appId);
                            })
                                .catch(function (error) { return console.log(error); })];
                    case 1:
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // get members of an app
    ViewAppComponent.prototype.loadUsers = function (applicationId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var link, head;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        applicationId = this.appId;
                        console.log(applicationId);
                        link = "https://uaaserver.eu-gb.mybluemix.net/Groups/{applicationId}/members?returnEntities=true";
                        link = link.replace("{applicationId}", applicationId);
                        head = {
                            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
                            Accept: "application/json"
                        };
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default()({
                                method: "GET",
                                url: link,
                                headers: head
                            })
                                .then(function (response) {
                                //console.log(response);
                                console.log("users");
                                _this.Members = response.data;
                                console.log(_this.Members);
                            })
                                .catch(function (error) { return console.log(error); })];
                    case 1:
                        // myHeaders.append("Content-Type", "application/json");
                        // myHeaders.append("Access-Control-Allow-Origin", "*");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // loadGroup() {
    //   let Header = new Headers({
    //     "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
    //     "Accept":"application/json"
    //   });
    //   let myHeaders = new Headers();
    //   const head = {
    //     "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
    //     "Accept":"application/json"
    //   };
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    //   let Option = new RequestOptions({ headers: Header });
    //   axios({ method: "GET", url:  "https://uaaserver.eu-gb.mybluemix.net/Groups", headers: head })
    //     .then(response =>
    //       //console.log(response.data)
    //       this.Groups = response.data.resources
    //     )
    //      .catch(error => console.log(error));
    // }
    ViewAppComponent.prototype.open4 = function (content, data) {
        var _this = this;
        console.log("am here");
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        });
        var head = {
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/Groups/" + data;
        console.log("before method call");
        console.log("data ==> " + data);
        this.role_id = data;
        //console.log("data ==> " + this.role_id);
        console.log("final url  ==> " + url);
        axios__WEBPACK_IMPORTED_MODULE_1___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            console.log(response.data);
            _this.get.displayName = response.data.displayName;
            _this.modalService
                .open(content, { ariaLabelledBy: "modal-basic-title" })
                .result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
            // this.Users = response.data.resources
        })
            .catch(function (error) { return console.log("fatal error occured " + error); });
    };
    ViewAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-view-app",
            template: __webpack_require__(/*! ./view-app.component.html */ "./src/app/view-app/view-app.component.html"),
            styles: [__webpack_require__(/*! ./view-app.component.css */ "./src/app/view-app/view-app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _dataservice_dataservice__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], ViewAppComponent);
    return ViewAppComponent;
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
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        var head = {
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
            Accept: "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            method: "GET",
            url: "https://uaaserver.eu-gb.mybluemix.net/oauth/clients",
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
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients" + data;
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
        var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients";
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
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
            var link = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients/{client_id}";
            link = link.replace("{client_id}", client_id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/oauth/clients" + data;
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

module.exports = "\n  <table id=\"example\" class=\"table table-striped table-bordered nowrap\" style=\"width:100%\">\n        <thead>\n            <tr>\n                <th>id</th>\n                <th>displayName</th>\n                <th>description</th>\n                <th>zoneId</th> \n                 <th>members</th>  \n                <th>Action</th>\n            </tr>\n        </thead>\n    \n        <tbody>\n    \n                <tr *ngFor=\"let Groups of Groups\">\n                                                \n                        <td style=\"word-wrap:break-word; max-width: 130px;\">{{Groups.id}}</td>\n                        <td style=\"max-width: 30px; word-wrap: break-word;\">{{Groups.displayName }}</td>\n                        <td style=\"word-wrap: break-word;max-width:10px;\">{{ Groups.description }}</td>\n                        <td style=\"word-wrap: break-word;max-width:10px;\">{{ Groups.zoneId }}</td>  \n                         <td style=\"word-wrap: break-word;max-width:30px;\"><p *ngFor=\"let member of  Groups.members\"> \n                            {{member.origin}}, {{member.type}}, {{member.value}}\n                         </p></td> \n\n                        <td>\n                            <input type=\"text\" class=\"form-control\" value=\"{{id}}\" #client_id style=\"display:none;\">\n                            \n                            <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(groupId)\" style=\"margin-right: 30px\" /> \n                            \n                            <!-- <input type=\"submit\" #id class=\"btn btn-info btn-xs\" value=\"Update\" (click)=\"funcUpdateT(client.client_id)\" />  -->\n                            <!-- <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" ng-click=\"loadClientsById(client.client_id)\">Update</button>  -->\n                            <!-- <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content)\" ng-click=\"loadGroupsById(Groups.id)\">Update</button> -->\n                            <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content,Groups.id)\">View</button>\n                              <!-- <button class=\"btn btn-info btn-sm\"  type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content,Groups.id)\">Update</button>\n                                  -->\n                        </td>\n                    </tr>\n                    \n        </tbody>\n\n         <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                                \n                        <div class=\"form-group has-feedback\">\n                                <label>display Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\"  name=\"client_id\" [(ngModel)]=\"get.displayName\">\n                            <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        \n                        <!-- <div class=\"form-group has-feedback\">\n                            <label>description</label>\n                              <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.description\">\n                              \n                              <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                                <label>ZoneId</label>\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"name\"  name=\"name\" [(ngModel)]=\"get.zoneId\">\n                                  \n                                  <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                            </div> -->\n\n                            <div class=\"col-sm-12\">\n                                    <label for=\"\" class=\"col-sm-3\">Users</label>\n                                    <div class=\"col-sm-9\" *ngFor=\"let user of Users; let i = index;\">\n                                      <button class=\"btn btn-default\" style=\"margin:10px 10px 10px 10px; width:50%;\n                                      text-align: left;\">\n                                        <input type=\"checkbox\" [id]=\"user.id\" (change)=\"onChange($event, i, user)\">{{ user.userName }}\n                                      </button> &nbsp;\n                                    </div>\n                                  </div>\n\n                                <div class=\"row\" style=\"margin-bottom:50px;\">\n                                <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                               <div class=\"col-md-4\">\n                                    <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                                     <button type=\"button\" class=\"btn btn-success\" (click)=\"c('Save click')\">Done</button> \n                                    \n                                </div>\n                                <div class=\"col-md-4\">\n                                  <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                                  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n                        \n                              </div>\n                              <div class=\"col-md-2\">\n                                    &nbsp;\n                                </div>\n                              \n                        </div>\n                    </form> \n            \n                </div>\n                <!-- <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n                </div> -->\n            </ng-template>\n    \n    </table>\n    "

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
        this.client_id = "";
        this.value = "";
        // public Users : any;
        this.get = { 'displayName': null, 'description': null, 'zoneId': null, 'origin': null, 'type': null, 'value': null };
    }
    ViewGroupsComponent.prototype.ngOnInit = function () {
        this.loadGroups();
        this.loadUsers();
    };
    ViewGroupsComponent.prototype.loadGroups = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Access-Control-Allow-Origin", "*");
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_3___default()({ method: "GET", url: "https://uaaserver.eu-gb.mybluemix.net/Groups", headers: head })
            .then(function (response) {
            //console.log(response.data)
            return _this.Groups = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewGroupsComponent.prototype.loadGroupsById = function (data) {
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/Groups" + data;
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
            var link = "https://uaaserver.eu-gb.mybluemix.net/Groups//{groupId}";
            link = link.replace("{id}", id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/Groups/" + data;
        var Option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: Header });
        axios__WEBPACK_IMPORTED_MODULE_3___default()({ method: "GET", url: url, headers: head })
            .then(function (response) {
            console.log(response.data);
            //eden
            console.log("data==> " + data);
            _this.role_id = data;
            _this.get.displayName = response.data.displayName;
            _this.get.description = response.data.description;
            _this.get.zoneId = response.data.zoneId;
            _this.get.origin = response.data.origin;
            _this.get.type = response.data.type;
            _this.get.value = response.data.value;
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
    ViewGroupsComponent.prototype.loadUsers = function () {
        var _this = this;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        axios__WEBPACK_IMPORTED_MODULE_3___default()({ method: "GET", url: "https://uaaserver.eu-gb.mybluemix.net/Users", headers: head })
            .then(function (response) {
            //console.log(response.data)
            return _this.Users = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    // assigning permission to role
    ViewGroupsComponent.prototype.onChange = function (event, i, user) {
        var _this = this;
        console.log("i am here");
        this.userId2 = this.role_id;
        this.userId = user.id;
        console.log(this.userId2);
        console.log(this.userId);
        console.log(this.user);
        ///
        var link = "https://uaaserver.eu-gb.mybluemix.net/Groups/{userId2}/members";
        link = link.replace("{userId2}", this.userId2);
        var data = JSON.stringify({
            value: this.userId
        });
        var schema = {
            "origin": "uaa",
            "type": "USER",
            "value": "null"
        };
        schema.value = this.userId;
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            Authorization: "Bearer  c1fc2798d8634be183e611d6fb952c39",
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

module.exports = "<input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\n\n<table id=\"example\" class=\"table table-striped table-bordered nowrap\" style=\"width:100%\">\n    <thead>\n        <tr>\n            <!-- <th>user_id</th> -->\n\n            <th>username</th>\n            <th>emails</th>\n            <th>origin</th>\n\n            <th>zoneId</th>\n            <th>groups</th>\n\n            <!-- <th>Password</th> -->\n            <th>Action</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr *ngFor=\"let user of Users\">\n\n            <!-- <td>{{user.id}}</td> -->\n\n            <!-- <td>{{user.groups[0].value}}</td> -->\n            <td style=\"word-wrap: break-word;max-width:30px;\">{{ user.userName }}</td>\n            <td>{{ user.emails[0].value }}</td>\n            <td>{{user.origin}}</td>\n            <td>{{user.zoneId}}</td>\n            <td>\n                <p *ngFor=\"let groups of  user.groups\">\n                    <!--I want to list the colors of the person here-->\n                    {{groups.value}}, {{groups.display}}, {{groups.type}}\n                </p>\n            </td>\n\n            <!-- <td>{{user.password}}</td> -->\n            <td>\n                <input type=\"text\" class=\"form-control\" value=\"{{ user_id}}\" #user_id style=\"display:none;\">\n                <input type=\"submit\" #id class=\"btn btn-danger btn-xs\" value=\"Delete\" (click)=\"funcDeleteT(user.id)\" style=\"margin-right: 10px\"\n                />\n                <button class=\"btn btn-info btn-sm\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModalEdit\" (click)=\"open(content,user.id)\">Update</button>\n\n\n            </td>\n        </tr>\n\n    </tbody>\n\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Create</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n            <form>\n\n                <div class=\"form-group has-feedback\">\n                    <label>User Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"client_id\" autocomplete=\"off\" name=\"client_id\" [(ngModel)]=\"get.username\">\n                    <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                </div>\n\n                <div class=\"form-group has-feedback\">\n                    <label>Family Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"name\" name=\"name\" [(ngModel)]=\"get.familyName\">\n                    <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                    <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                </div>\n                <div class=\"form-group has-feedback\">\n                    <label>Given Name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"name\" name=\"name\" [(ngModel)]=\"get.givenName\">\n                    <!-- <input type=\"hidden\" class=\"form-control\" placeholder=\"Primary\" #emails value=\"true\"> -->\n                    <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                </div>\n                <div class=\"form-group has-feedback\">\n                    <label>Email</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"client_secret\" [(ngModel)]=\"get.emails[0].value\" name=\"client_secret\">\n                    <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n                </div>\n\n                <div class=\"row\" style=\"margin-bottom:50px;\">\n                    <div class=\"col-md-2\">\n                        &nbsp;\n                    </div>\n                    <div class=\"col-md-4\">\n                        <!-- <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" (click)=\"funcPostT(userName.value, emails.value, password.value)\" /> -->\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"updClient(get.user_id)\">Update</button>\n\n                    </div>\n                    <div class=\"col-md-4\">\n                        <!-- <a routerLink=\"/user\" class=\"btn btn-default btn-block btn-flat\">Cancel</a> -->\n                        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Cancel</button>\n\n                    </div>\n                    <div class=\"col-md-2\">\n                        &nbsp;\n                    </div>\n\n                </div>\n            </form>\n\n        </div>\n        <!-- <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n                </div> -->\n    </ng-template>\n\n</table>"

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
    function ViewUsersComponent(http, modalService) {
        this.http = http;
        this.modalService = modalService;
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
        var link = "https://uaaserver.eu-gb.mybluemix.net/Users/{user_id}";
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
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
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
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        axios__WEBPACK_IMPORTED_MODULE_2___default()({ method: "GET", url: "https://uaaserver.eu-gb.mybluemix.net/Users", headers: head })
            .then(function (response) {
            //console.log(response.data)
            return _this.Users = response.data.resources;
        })
            .catch(function (error) { return console.log(error); });
    };
    ViewUsersComponent.prototype.loadClientsById = function (data) {
        var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/Users" + data;
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
        var link = "https://uaaserver.eu-gb.mybluemix.net/Users";
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
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Content-Type": "application/json"
        });
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
            var link = "https://uaaserver.eu-gb.mybluemix.net/Users/{id}";
            link = link.replace("{id}", id);
            var Header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
                "Content-Type": "application/json"
            });
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
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        });
        var head = {
            "Authorization": "Bearer  c1fc2798d8634be183e611d6fb952c39",
            "Accept": "application/json"
        };
        var url = "https://uaaserver.eu-gb.mybluemix.net/Users/" + data;
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
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
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