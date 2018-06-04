webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  font-family: Lato;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 5';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__booking_booking_component__ = __webpack_require__("../../../../../src/app/booking/booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__display_seats_display_seats_component__ = __webpack_require__("../../../../../src/app/display-seats/display-seats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_8_ngx_flash_messages__["a" /* FlashMessagesModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__booking_booking_component__["a" /* BookingComponent */], __WEBPACK_IMPORTED_MODULE_7__display_seats_display_seats_component__["a" /* DisplaySeatsComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["g" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* HashLocationStrategy */]
                }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__booking_booking_component__ = __webpack_require__("../../../../../src/app/booking/booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_seats_display_seats_component__ = __webpack_require__("../../../../../src/app/display-seats/display-seats.component.ts");



var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__booking_booking_component__["a" /* BookingComponent */]
    },
    {
        path: 'booked-seats/:tickets',
        component: __WEBPACK_IMPORTED_MODULE_2__display_seats_display_seats_component__["a" /* DisplaySeatsComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "../../../../../src/app/booking/booking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n    width: 50%;\n}\n.top {\n    font-size: 25px;\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/booking/booking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h1>Book your tickets</h1>\n  <h3>Total Seats left : {{totalSeats}}</h3>\n  <ngx-flash-messages></ngx-flash-messages>\n  <section class=\"content\">\n    <div class=\"col-xs-6\">\n      <label class=\"label-control\">No. of Passengers:</label>\n      <select class=\"input select form-control\" (change)=\"passengerVal($event.target.value)\">\n        <option *ngFor=\"let number of numberData\">{{number}}</option>\n      </select>\n    </div>\n    <section>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-sm-2 top\">\n            <button type=\"submit\" (click)=\"onClick()\" class=\"btn btn-primary btn-block btn-flat\" value=\"\">Select Seats</button>\n          </div>\n          <div class=\"col-sm-4 top\">\n            <a [routerLink]=\"['/booked-seats/0']\">\n              <i class=\"fa fa-dashboard\"></i> Booked Tickets\n            </a>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/booking/booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__booking_service__ = __webpack_require__("../../../../../src/app/booking/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__display_seats_display_seats_service__ = __webpack_require__("../../../../../src/app/display-seats/display-seats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingComponent = (function () {
    function BookingComponent(service, _router, getService, flashMsgService) {
        this.service = service;
        this._router = _router;
        this.getService = getService;
        this.flashMsgService = flashMsgService;
        this.reservedTicket = [];
        this.genderData = ['Male', 'Female', 'Other'];
        this.numberData = [1, 2, 3, 4, 5, 6, 7];
        this.nOfPassengers = [1];
    }
    BookingComponent.prototype.ngOnInit = function () {
        this.getTotalSeats();
        this.getTickets();
    };
    BookingComponent.prototype.getTotalSeats = function () {
        var _this = this;
        this.getSeats = this.getService.getBookedTickets().then(function (res) {
            if (res.status == 200) {
                _this.totalSeats = 80 - res.data.length;
            }
            else {
                _this.totalSeats = 80;
            }
        });
    };
    BookingComponent.prototype.passengerVal = function (value) {
        this.nOfPassengers = value;
    };
    BookingComponent.prototype.onClick = function () {
        this._router.navigate(["/booked-seats/" + this.nOfPassengers]);
    };
    BookingComponent.prototype.getTickets = function () {
        var _this = this;
        this.busy = this.getService.getBookedTickets().then(function (res) {
            if (res.status == 200) {
                _this.bookedTickets = res.data;
                for (var i = 0; i < _this.bookedTickets.length; i++) {
                    _this.reservedTicket.push(_this.bookedTickets[i].seat);
                }
                localStorage.setItem('tickets', JSON.stringify(_this.reservedTicket));
            }
            else {
                _this.bookedTickets = [];
                _this.flashMsgService.show(res.msg, {
                    classes: ['alert', 'alert-error'],
                    timeout: 2000,
                });
            }
        });
    };
    BookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-booking',
            template: __webpack_require__("../../../../../src/app/booking/booking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/booking/booking.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__booking_service__["a" /* BookingService */], __WEBPACK_IMPORTED_MODULE_3__display_seats_display_seats_service__["a" /* DisplaySeatsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__booking_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__display_seats_display_seats_service__["a" /* DisplaySeatsService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/booking/booking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingService = (function () {
    function BookingService(_router, http) {
        this._router = _router;
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.API_URL;
    }
    BookingService.prototype.addNewBooking = function (booking, nOfPassengers) {
        var bodyData = {
            booking: booking,
            nOfPassengers: nOfPassengers
        };
        return this.http.post(this.BASE_URL + "booking/addBooking", bodyData)
            .toPromise().then(function (res) { return res.json(); });
    };
    BookingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "../../../../../src/app/display-seats/display-seats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top {\n    font-size: 20px;\n    margin-bottom: 10px;\n    margin-top: 5px;\n}\n.form-check-input:disabled~.form-check-label {\n    color: rgba(0, 0, 0, 0.9);\n}\n.box-length {\n    width: 14.285714285714285714285714285714%;\n    float: left;\n}\ninput:disabled, textarea:disabled {\n    color: rgba(0, 0, 0, 0.9);\n    cursor: default;\n}\na {\n    color: #007bff !important;\n    text-decoration: none;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n}\n.wide {\n    width: 20%;\n}\n.box {\n    border: 1px solid #ddd;\n    width: 30px;\n    height: 30px;\n    margin: 0.2rem;\n    text-align: center;\n    background:#0d72de!important;\n}\n.reserve{ \n    background:#101010!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/display-seats/display-seats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">  \n  <div class=\"row\">\n    <ngx-flash-messages></ngx-flash-messages>\n    <div class=\"col-sm-12 top\">\n      <a [routerLink]=\"['/']\">\n        <i class=\"fa fa-dashboard\"></i> Book A Ticket\n      </a>\n    </div>    \n    <div class=\"col-sm-12\" *ngIf=\"nOfTickets > 0\">\n      <h3>Select your {{nOfTickets}} ticket.</h3>\n    </div>\n    <div class=\"box-length\" *ngFor=\"let ticket of totalTicket(80); let i='index+1';\">\n      <div class=\"form-check\">\n        <ng-container [ngTemplateOutlet]='checkStatus(ticket) ? oddTemplate : newTemplate' [ngTemplateOutletContext]=\"{number:i}\">\n        </ng-container>\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <button type=\"submit\" (click)=\"onClick()\" class=\"wide btn btn-primary btn-block btn-flat\" value=\"\">Book Ticket</button>\n    </div>\n  </div>\n</div>\n<ng-template #newTemplate let-i='number'>\n    <input class=\"form-check-input\" [id]=\"i\" (change)=\"onCheck($event)\" type=\"checkbox\">\n    <label class=\"form-check-label box text-warning\">{{i}}</label>\n</ng-template>\n<ng-template #oddTemplate let-i='number' let-bookedTickets='bookedTickets'>\n    <input class=\"form-check-input\" [id]=\"i\" type=\"checkbox\" disabled=\"reserved\" checked=\"reserved\">\n    <label class=\"form-check-label reserve box text-success\">{{i}}\n    </label>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/display-seats/display-seats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplaySeatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_seats_service__ = __webpack_require__("../../../../../src/app/display-seats/display-seats.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booking_booking_service__ = __webpack_require__("../../../../../src/app/booking/booking.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DisplaySeatsComponent = (function () {
    function DisplaySeatsComponent(formBuilder, service, serviceBook, router, cd, activatedRoute, flashMsgService) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.serviceBook = serviceBook;
        this.router = router;
        this.cd = cd;
        this.activatedRoute = activatedRoute;
        this.flashMsgService = flashMsgService;
        this.bookedTickets = [];
        this.reservedTicket = [];
        this.status = false;
        this.emailFormArray = [];
    }
    DisplaySeatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkBoxArray = this.formBuilder.group({
            checkBox: this.formBuilder.array([])
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.nOfTickets = params.tickets;
        });
        this.leftSeat = this.nOfTickets;
        this.bookedTickets = JSON.parse(localStorage.getItem('tickets'));
    };
    DisplaySeatsComponent.prototype.checkStatus = function (ticket) {
        if (this.bookedTickets.indexOf(ticket) != -1) {
            this.status = true;
            return this.status;
        }
        else {
            this.status = false;
            return this.status;
        }
    };
    DisplaySeatsComponent.prototype.totalTicket = function (number) {
        var nOfSeats = [];
        for (var i = 1; i <= number; i++) {
            nOfSeats.push(i);
        }
        return nOfSeats;
    };
    DisplaySeatsComponent.prototype.onCheck = function (event) {
        if (this.nOfTickets <= 0) {
            alert('Please select atleast 1 ticket for booking');
            this.router.navigate(['/']);
        }
        else {
            if (this.reservedTicket) {
                if (this.reservedTicket.length <= this.leftSeat) {
                    this.checkSeat(event);
                }
                else {
                    for (var i = 0; i <= this.reservedTicket.length; i++) {
                        $("#" + this.reservedTicket[i]).prop('checked', false);
                    }
                    this.leftSeat = this.nOfTickets;
                    this.reservedTicket = [];
                    this.checkSeat(event);
                }
            }
            else {
                this.checkSeat(event);
            }
        }
    };
    DisplaySeatsComponent.prototype.checkSeat = function (event) {
        var id = +event.target.id;
        var checked = event.target.checked;
        var nextCheck = id + 1;
        var totalSeat = this.leftSeat;
        var val = $('#' + nextCheck + ':checked').length;
        if (val > 0 && totalSeat >= 2) {
            alert('Please select seats 1 by 1');
            this.leftSeat = totalSeat - 1;
            this.reserveSeat(event);
        }
        else {
            this.reservedTicket.push(id);
            for (var i = 0; i < this.leftSeat; i++) {
                if (!this.checkStatus(nextCheck)) {
                    $("#" + nextCheck).prop('checked', checked);
                    this.reservedTicket.push(nextCheck);
                    nextCheck += 1;
                    this.leftSeat -= 1;
                }
                else {
                    alert("Please select remaining " + this.leftSeat + " seats");
                }
            }
        }
    };
    DisplaySeatsComponent.prototype.reserveSeat = function (event) {
        var id = +event.target.id;
        var emailForm = this.checkBoxArray.controls.checkBox;
        emailForm.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](id));
        this.reservedTicket.push(emailForm.value[0]);
        this.leftSeat -= 1;
    };
    DisplaySeatsComponent.prototype.onClick = function () {
        var _this = this;
        // console.log(this.reservedTicket)
        this.book = this.serviceBook.addNewBooking(this.reservedTicket, this.nOfTickets).then(function (res) {
            if (res.status == 200) {
                _this.flashMsgService.show(res.msg, {
                    classes: ['alert', 'alert-success', 'top'],
                    timeout: 2000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 2000);
            }
        });
    };
    DisplaySeatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-display-seats',
            template: __webpack_require__("../../../../../src/app/display-seats/display-seats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/display-seats/display-seats.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__display_seats_service__["a" /* DisplaySeatsService */], __WEBPACK_IMPORTED_MODULE_4__booking_booking_service__["a" /* BookingService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__display_seats_service__["a" /* DisplaySeatsService */],
            __WEBPACK_IMPORTED_MODULE_4__booking_booking_service__["a" /* BookingService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["b" /* FlashMessagesService */]])
    ], DisplaySeatsComponent);
    return DisplaySeatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/display-seats/display-seats.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplaySeatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplaySeatsService = (function () {
    function DisplaySeatsService(_router, http) {
        this._router = _router;
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].config.API_URL;
    }
    DisplaySeatsService.prototype.getBookedTickets = function () {
        return this.http.get(this.BASE_URL + "booking/getTickets/")
            .toPromise().then(function (res) { return res.json(); });
    };
    DisplaySeatsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], DisplaySeatsService);
    return DisplaySeatsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    envName: "devLocal",
    config: {
        APP_NAME: "Angular Test App",
        // API_URL: "http://localhost:3000/",
        API_URL: "http://13.232.99.0:3000/",
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`. 


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map