"use strict";
(self["webpackChunkblog_app_front"] = self["webpackChunkblog_app_front"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/users.service */ 4961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = ["logoutbut"];
class AppComponent {
  constructor(userserv, router) {
    this.userserv = userserv;
    this.router = router;
    this.title = 'blog_app_front';
  }
  ngOnDestroy() {
    this.logoutCLick$?.unsubscribe();
  }
  ngAfterViewInit() {
    this.logoutCLick$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.logoutBut, 'click').subscribe({
      next: () => {
        this.userserv.logoutUser();
        this.router.navigate(['/login']);
      }
    });
  }
  get logoutBut() {
    return this.logoutbut?.nativeElement;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.logoutbut = _t.first);
    }
  },
  decls: 17,
  vars: 0,
  consts: [[1, "bg-blue"], [1, "navbar", "navbar-expand-lg", "navbar-dark"], [1, "container"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Navigation switch", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLink", "blog", "routerLinkActive", "active", 1, "nav-link", "text-yellow"], ["routerLink", "login", "routerLinkActive", "active", 1, "nav-link", "text-yellow"], ["routerLink", "register", "routerLinkActive", "active", 1, "nav-link", "text-yellow"], [1, "btn", "btn-warning"], ["logoutbut", ""]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
  styles: [".bg-blue[_ngcontent-%COMP%]{\r\n\r\n    background-color:cornflowerblue !important;\r\n\r\n}\r\n\r\n.text-yellow[_ngcontent-%COMP%]{\r\n\r\n    color: gold !important;\r\n\r\n}\r\n\r\n.active[_ngcontent-%COMP%]{\r\n\r\n    color:blueviolet !important;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7O0lBRUksMENBQTBDOztBQUU5Qzs7QUFFQTs7SUFFSSxzQkFBc0I7O0FBRTFCOztBQUVBOztJQUVJLDJCQUEyQjs7QUFFL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uYmctYmx1ZXtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmNvcm5mbG93ZXJibHVlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4udGV4dC15ZWxsb3d7XHJcblxyXG4gICAgY29sb3I6IGdvbGQgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5hY3RpdmV7XHJcblxyXG4gICAgY29sb3I6Ymx1ZXZpb2xldCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _cloudinary_ng__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @cloudinary/ng */ 2471);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ 8716);
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/routes.module */ 7951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _routes_routes_module__WEBPACK_IMPORTED_MODULE_4__.RoutesModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _cloudinary_ng__WEBPACK_IMPORTED_MODULE_10__.CloudinaryModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _routes_routes_module__WEBPACK_IMPORTED_MODULE_4__.RoutesModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _cloudinary_ng__WEBPACK_IMPORTED_MODULE_10__.CloudinaryModule]
  });
})();

/***/ }),

/***/ 8716:
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3853);
/* harmony import */ var _models_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/article */ 9974);
/* harmony import */ var _models_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/media */ 8853);
/* harmony import */ var _models_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/text */ 7829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/article.service */ 561);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/validator.service */ 9103);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);











const _c0 = ["postbut"];
const _c1 = ["filebut"];
const _c2 = ["resetbut"];
const _c3 = ["pagesrow"];
function BlogComponent_div_25_audio_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "audio", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "source", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const article1_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r7.mediaUrls.get(article1_r5._id), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r7.mediaUrls.get(article1_r5._id), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BlogComponent_div_25_img_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 31);
  }
  if (rf & 2) {
    const article1_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r8.mediaUrls.get(article1_r5._id), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BlogComponent_div_25_video_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "video", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "source", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const article1_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r9.mediaUrls.get(article1_r5._id), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r9.mediaUrls.get(article1_r5._id), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function BlogComponent_div_25_textarea_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function BlogComponent_div_25_textarea_12_Template_textarea_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const article1_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](article1_r5.message.msgvalue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r6 = ctx_r21.index;
    const article1_r5 = ctx_r21.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r10.isEdit[i_r6])("ngModel", article1_r5.message.msgvalue);
  }
}
function BlogComponent_div_25_input_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 33);
  }
  if (rf & 2) {
    const article1_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", article1_r5.username != ctx_r11.curuser)("disabled", ctx_r11.editarticle._id != article1_r5._id);
  }
}
function BlogComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "div", 1)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BlogComponent_div_25_audio_9_Template, 2, 2, "audio", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BlogComponent_div_25_img_10_Template, 1, 1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BlogComponent_div_25_video_11_Template, 2, 2, "video", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BlogComponent_div_25_textarea_12_Template, 1, 2, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, BlogComponent_div_25_input_13_Template, 1, 2, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 15)(15, "div", 2)(16, "button", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_25_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const article1_r5 = restoredCtx.$implicit;
      const i_r6 = restoredCtx.index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.updateClick(article1_r5, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 2)(20, "button", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_25_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const article1_r5 = restoredCtx.$implicit;
      const i_r6 = restoredCtx.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.cancelClick(article1_r5, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 2)(24, "button", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_25_Template_button_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const article1_r5 = restoredCtx.$implicit;
      const i_r6 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.deleteClick(article1_r5, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const article1_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 11, article1_r5.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](article1_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", article1_r5.message.type == "audio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", article1_r5.message.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", article1_r5.message.type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", article1_r5.message.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", article1_r5.message.type != "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", article1_r5.username != ctx_r4.curuser);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", article1_r5.username != ctx_r4.curuser);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", article1_r5.username != ctx_r4.curuser);
  }
}
class BlogComponent {
  constructor(router, articleserv, validatorserv) {
    this.router = router;
    this.articleserv = articleserv;
    this.validatorserv = validatorserv;
    this.page = 0;
    this.countofpage = 0;
    this.textarea = '';
    this.curindex = -1;
    this.mediaUrls = new Map();
    this.ids = new Array();
    this.urls = new Array();
    this.curuser = sessionStorage.getItem('user');
    this.curtoken = sessionStorage.getItem('token');
    if (this.curuser == null || this.curtoken == null) {
      this.router.navigate(['']);
    }
    this.articles = new Array();
    this.article = this.initArticle();
    this.isEdit = new Array();
  }
  ngOnInit() {
    this.getArticles(1);
  }
  ngAfterViewInit() {
    this.editarticle = this.initArticle();
    this.resetClick$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.resetBut, 'click').subscribe({
      next: () => {
        this.article = this.initArticle();
        this.textarea = '';
        this.fileBut.value = '';
        this.file = undefined;
      },
      error: e => {
        console.error(e.error);
      }
    });
    this.fileClick$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.fileBut, 'change').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
      if (this.fileBut.files != null && (this.fileBut.files[0].type == `image/png` || this.fileBut.files[0].type == `image/jpeg` || this.fileBut.files[0].type == `image/jpg` || this.fileBut.files[0].type == `video/mp4` || this.fileBut.files[0].type == 'video/mpeg' || this.fileBut.files[0].type == 'video/x-msvideo' || this.fileBut.files[0].type == 'audio/mpeg' || this.fileBut.files[0].type == 'audio/wav' || this.fileBut.files[0].type == 'audio/aac' || this.fileBut.files[0].type == 'video/webm')) {
        console.log(this.fileBut.files[0]);
        return this.fileBut.files[0];
      }
      alert('Select file with correct type');
      this.fileBut.value = '';
      return null;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(value => value != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => this.file = value)).subscribe({
      next: () => {
        console.log('File ready to upload!');
      },
      error: e => {
        console.error(e);
        alert(e.message);
      }
    });
  }
  ngOnDestroy() {
    this.postClick$?.unsubscribe();
    this.resetClick$?.unsubscribe();
    this.fileClick$?.unsubscribe();
  }
  getArticles(page) {
    this.articleserv.getArticles(page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => {
      this.articles = data.articles;
      if (this.countofpage != data.counts) {
        this.countofpage = data.counts;
        this.addPage();
      }
      this.articles.forEach(a => {
        this.isEdit.push(false);
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.exhaustMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.articles)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(art => art.message._id != ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.concatMap)(art => this.articleserv.getMedia(art.message._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => {
      this.mediaUrls.set(art._id, window.URL.createObjectURL(value));
    })))).subscribe({
      next: data => {},
      error: e => {
        console.error(e);
        alert(e.error);
      }
    });
  }
  get postBut() {
    return this.postbut?.nativeElement;
  }
  get fileBut() {
    return this.filebut?.nativeElement;
  }
  get resetBut() {
    return this.resetbut?.nativeElement;
  }
  get pagesRow() {
    return this.pagesrow?.nativeElement;
  }
  initArticle() {
    return new _models_article__WEBPACK_IMPORTED_MODULE_0__.Article("", new Date(), {
      _id: "",
      msgvalue: "",
      type: ""
    }, this.curuser);
  }
  addPage() {
    this.pagesRow.innerHTML = '';
    for (var i = 0; i < this.countofpage; i++) {
      let page = document.createElement('a');
      page.textContent = `${i + 1}`;
      page.classList.add('page', 'col-2');
      page.addEventListener('click', () => {
        this.getArticles(parseInt(page.textContent));
      });
      this.pagesRow.appendChild(page);
    }
  }
  postClick() {
    if (this.textarea != '') {
      this.article.message = new _models_text__WEBPACK_IMPORTED_MODULE_2__.TextMessage('', this.textarea, 'text');
    } else {
      if (this.file) {
        this.article.message = new _models_media__WEBPACK_IMPORTED_MODULE_1__.MediaMessage('', this.file, 'media');
      } else {
        alert('Write text or select file');
        return;
      }
    }
    this.articleserv.postArticle(this.article).subscribe({
      next: data => {
        this.articles.push(new _models_article__WEBPACK_IMPORTED_MODULE_0__.Article(data._id, data.date, data.message, data.username));
        if (this.countofpage != data.counts) {
          this.addPage();
        }
        if (data.message.type != 'text') {
          this.mediaUrls.set(data._id, window.URL.createObjectURL(this.file));
        }
      },
      error: e => {
        console.error(e);
        alert(e.error);
      }
    });
  }
  updateClick(editarticle, index) {
    if (this.editarticle != undefined) {
      if (this.editarticle?._id == '') {
        this.editarticle = Object.assign({}, editarticle);
        this.isEdit[index] = true;
        this.curindex = index;
      } else {
        if (this.editarticle._id == editarticle._id) {
          if (this.validatorserv.messageValidate(editarticle.message)) {
            this.articleserv.putArticle(editarticle).subscribe({
              next: data => {
                let index = this.articles.findIndex(a => a._id == editarticle._id);
                this.articles.splice(index, 1, editarticle);
                this.isEdit[index] = false;
                this.editarticle = this.initArticle();
                this.curindex = -1;
              },
              error: e => {
                console.error(e);
                alert(e.message);
              }
            });
          } else {
            alert('Incorrect value');
          }
        } else {
          this.isEdit[this.curindex] = false;
          this.isEdit[index] = true;
          this.editarticle = Object.assign({}, editarticle);
        }
      }
    }
  }
  cancelClick(editartcle, index) {
    if (this.editarticle != undefined) {
      if (this.editarticle?._id == editartcle._id) {
        this.isEdit[index] = false;
        this.editarticle = this.initArticle();
        this.curindex = -1;
      }
    }
  }
  deleteClick(editarticle, index) {
    let ind = this.articles.findIndex(a => a._id == editarticle._id);
    this.articleserv.deleteArticle(editarticle._id).subscribe({
      next: () => {
        this.articles.splice(ind, 1);
        if (this.articles[ind].message.type != 'text') {
          this.mediaUrls.delete(this.articles[ind]._id);
        }
        alert('Succesful delete');
        console.log('delete');
      },
      error: e => {
        console.log(e);
        alert(`${e.message} BUT DELETE!=)`);
      }
    });
  }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) {
  return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_article_service__WEBPACK_IMPORTED_MODULE_3__.ArticleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_validator_service__WEBPACK_IMPORTED_MODULE_4__.ValidatorService));
};
BlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: BlogComponent,
  selectors: [["app-blog"]],
  viewQuery: function BlogComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.postbut = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.filebut = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.resetbut = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.pagesrow = _t.first);
    }
  },
  decls: 26,
  vars: 4,
  consts: [[1, "container", "text-center"], [1, "row"], [1, "col-4"], ["enctype", "multipart/form-data", "id", "blogform"], [1, "row", "mb-2"], ["rows", "10", "name", "text_input", 1, "form-control", 3, "hidden", "ngModel", "ngModelChange"], [1, "row", "mb-3"], ["type", "file", "name", "media", 1, "form-control", 3, "hidden"], ["filebut", ""], [1, "row", "text-center"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["postbut", ""], [1, "btn", "btn-warning"], ["resetbut", ""], [1, "col-8"], [1, "row", "justify-content-center"], ["pagesrow", ""], ["class", "container article-bc mb-4", 4, "ngFor", "ngForOf"], [1, "container", "article-bc", "mb-4"], ["controls", "", 3, "src", 4, "ngIf"], ["class", "img-thumbnail rouded mx-auto d-block", 3, "src", 4, "ngIf"], ["class", "form-control col-12 pb-3", 3, "readonly", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "file", "name", "editmedia", "class", "form-control mb-2", 3, "hidden", "disabled", 4, "ngIf"], [1, "btn", "btn-success", 3, "hidden", "click"], ["updatebut", ""], [1, "btn", "btn-warning", 3, "hidden", "click"], ["cancelbut", ""], [1, "btn", "btn-danger", 3, "hidden", "click"], ["deletebut", ""], ["controls", "", 3, "src"], [3, "src"], [1, "img-thumbnail", "rouded", "mx-auto", "d-block", 3, "src"], [1, "form-control", "col-12", "pb-3", 3, "readonly", "ngModel", "ngModelChange"], ["type", "file", "name", "editmedia", 1, "form-control", "mb-2", 3, "hidden", "disabled"]],
  template: function BlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Add article");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 3)(8, "div", 4)(9, "textarea", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_textarea_ngModelChange_9_listener($event) {
        return ctx.textarea = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9)(14, "div", 2)(15, "button", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_15_listener() {
        return ctx.postClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 2)(19, "button", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "div", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, BlogComponent_div_25_Template, 28, 13, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.file != undefined)("ngModel", ctx.textarea);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.textarea != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.articles);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: [".page[_ngcontent-%COMP%]{\r\n\r\n    color:darkcyan !important;\r\n\r\n}\r\n\r\n.page[_ngcontent-%COMP%]:hover{\r\n\r\n    color:darkblue;\r\n    cursor:pointer;\r\n\r\n}\r\n\r\n.page[_ngcontent-%COMP%]:active{\r\n\r\n    color:darkblue;\r\n}\r\n\r\n\r\n.article-bc[_ngcontent-%COMP%] {\r\n  background-color: #dbe4fe !important;\r\n  border-radius: 25px;\r\n  border-color: #dbe4fe;\r\n  border-width: 5px !important;\r\n  border-block-start-style: solid;\r\n  border-bottom-style: groove;\r\n  padding-bottom: 2rem;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkseUJBQXlCOztBQUU3Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsY0FBYzs7QUFFbEI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7O0FBR0E7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdle1xyXG5cclxuICAgIGNvbG9yOmRhcmtjeWFuICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ucGFnZTpob3ZlcntcclxuXHJcbiAgICBjb2xvcjpkYXJrYmx1ZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLnBhZ2U6YWN0aXZle1xyXG5cclxuICAgIGNvbG9yOmRhcmtibHVlO1xyXG59XHJcblxyXG5cclxuLmFydGljbGUtYmMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmU0ZmUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2RiZTRmZTtcclxuICBib3JkZXItd2lkdGg6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ibG9jay1zdGFydC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZ3Jvb3ZlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






const _c0 = ["logbut"];
const _c1 = ["resetbut"];
class LoginComponent {
  constructor(userserv, router) {
    this.userserv = userserv;
    this.router = router;
    this.user = this.initUser();
  }
  ngOnDestroy() {
    this.resetClick$?.unsubscribe();
  }
  ngAfterViewInit() {
    this.resetClick$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.resetBut, 'click').subscribe({
      next: () => {
        this.user = this.initUser();
      }
    });
  }
  initUser() {
    return new _models_user__WEBPACK_IMPORTED_MODULE_0__.User('', '', '', '');
  }
  get logBut() {
    return this.logbut?.nativeElement;
  }
  get resetBut() {
    return this.resetbut?.nativeElement;
  }
  loginClick() {
    this.userserv.loginUser(this.user).subscribe({
      error: e => {
        console.error(e);
        alert(`Login failed: ${e.error}`);
      },
      next: data => {
        sessionStorage.setItem('user', this.user.login);
        sessionStorage.setItem('token', data.token);
        console.log('Login successful');
        this.router.navigate(['/blog']);
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  viewQuery: function LoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.logbut = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.resetbut = _t.first);
    }
  },
  decls: 20,
  vars: 2,
  consts: [[1, "container", "text-center"], [1, "row", "justify-content-center"], [1, "col-12", "col-lg-6"], [1, "row", "mb-3"], ["type", "text", "placeholder", "login/email", "name", "log_user_login_input", "required", "", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["log_user_login_input", ""], [1, "row", "mb-5"], ["type", "password", "placeholder", "password", "name", "log_user_password_input", "required", "", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["log_user_password_input", ""], [1, "row"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["logbut", ""], [1, "btn", "btn-warning"], ["resetbut", ""]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "form", 2)(5, "div", 3)(6, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.user.login = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.user.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "button", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_13_listener() {
        return ctx.loginClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10)(17, "button", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user.login);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9974:
/*!***********************************!*\
  !*** ./src/app/models/article.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Article": () => (/* binding */ Article)
/* harmony export */ });
class Article {
  constructor(_id, date, message, username) {
    this._id = _id;
    this.date = date;
    this.message = message;
    this.username = username;
  }
}

/***/ }),

/***/ 8853:
/*!*********************************!*\
  !*** ./src/app/models/media.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaMessage": () => (/* binding */ MediaMessage)
/* harmony export */ });
class MediaMessage {
  constructor(_id, msgvalue, type) {
    this._id = _id;
    this.msgvalue = msgvalue;
    this.type = type;
  }
}

/***/ }),

/***/ 1084:
/*!*******************************************!*\
  !*** ./src/app/models/media_validator.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaValidator": () => (/* binding */ MediaValidator)
/* harmony export */ });
class MediaValidator {
  messageEmptyValidator(message) {
    if (message.msgvalue) {
      return true;
    }
    return false;
  }
}

/***/ }),

/***/ 7829:
/*!********************************!*\
  !*** ./src/app/models/text.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextMessage": () => (/* binding */ TextMessage)
/* harmony export */ });
class TextMessage {
  constructor(_id, msgvalue, type) {
    this._id = _id;
    this.msgvalue = msgvalue;
    this.type = type;
  }
}

/***/ }),

/***/ 6718:
/*!******************************************!*\
  !*** ./src/app/models/text_validator.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextValidator": () => (/* binding */ TextValidator)
/* harmony export */ });
class TextValidator {
  messageEmptyValidator(message) {
    if (message.msgvalue == '') {
      return false;
    }
    return true;
  }
}

/***/ }),

/***/ 5783:
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
  constructor(_id, login, password, token) {
    this._id = _id;
    this.login = login;
    this.password = password;
    this.token = token;
  }
}

/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






const _c0 = ["regbut"];
const _c1 = ["resetbut"];
class RegisterComponent {
  constructor(userserv, router) {
    this.userserv = userserv;
    this.router = router;
    this.confirmpass = '';
    this.user = this.initUser();
  }
  ngOnDestroy() {
    this.resetClick$?.unsubscribe();
  }
  ngAfterViewInit() {
    this.resetClick$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(this.resetBut, 'click').subscribe({
      next: () => {
        this.user = this.initUser();
        this.confirmpass = '';
      }
    });
  }
  initUser() {
    return new _models_user__WEBPACK_IMPORTED_MODULE_0__.User('', '', '', '');
  }
  get regBut() {
    return this.regbut?.nativeElement;
  }
  get resetBut() {
    return this.resetbut?.nativeElement;
  }
  registerClick() {
    if (this.user.password != this.confirmpass) {
      alert('Password and Confirm password must be the same');
      return;
    }
    this.userserv.registerUser(this.user).subscribe({
      next: () => {
        console.log('Register successful');
        this.router.navigate(['']);
      },
      error: e => {
        console.error(e);
        alert(`Register failed: ${e.error}`);
      }
    });
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  viewQuery: function RegisterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.regbut = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.resetbut = _t.first);
    }
  },
  decls: 23,
  vars: 3,
  consts: [[1, "container", "text-center"], [1, "row", "justify-content-center"], [1, "col-12", "col-lg-6"], [1, "row", "mb-2"], ["type", "text", "placeholder", "login/email", "name", "reg_user_login_input", "required", "", "maxlength", "35", 1, "form-control", 3, "ngModel", "ngModelChange"], ["reg_user_login_input", ""], ["type", "password", "placeholder", "password", "name", "reg_user_password_input", "required", "", "maxlength", "35", 1, "form-control", 3, "ngModel", "ngModelChange"], ["reg_user_password_input", ""], [1, "row", "mb-3"], ["type", "password", "placeholder", "confirm password", "name", "confirm_password", "required", "", "maxlength", "35", 1, "form-control", 3, "ngModel", "ngModelChange"], ["confirm_password", ""], [1, "row"], [1, "col-6"], ["name", "regbut", 1, "btn", "btn-primary", 3, "click"], ["regbut", ""], ["name", "resetbut", 1, "btn", "btn-warning"], ["resetbut", ""]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "form", 2)(5, "div", 3)(6, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.user.login = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3)(9, "input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.user.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.confirmpass = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "button", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_16_listener() {
        return ctx.registerClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12)(20, "button", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user.login);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.confirmpass);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7951:
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesModule": () => (/* binding */ RoutesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register/register.component */ 9087);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog/blog.component */ 8716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: 'blog',
  component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__.BlogComponent
}, {
  path: '**',
  redirectTo: '/login'
}];
class RoutesModule {}
RoutesModule.ɵfac = function RoutesModule_Factory(t) {
  return new (t || RoutesModule)();
};
RoutesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: RoutesModule
});
RoutesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RoutesModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 561:
/*!*********************************************!*\
  !*** ./src/app/services/article.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleService": () => (/* binding */ ArticleService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ArticleService {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appUrl + '/articles';
  }
  makeArticleForm(article) {
    let form = new FormData();
    form.append('date', '');
    form.append('username', article.username);
    let message;
    if (article.message.type != 'text') {
      form.append('media', article.message.msgvalue, article.message.msgvalue.name);
      message = {
        _id: '',
        msgvalue: '',
        type: article.message.type
      };
    } else {
      message = {
        _id: '',
        msgvalue: article.message.msgvalue,
        type: article.message.type
      };
      ;
    }
    form.append('message', JSON.stringify(message));
    return form;
  }
  getArticles(page) {
    const httpheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    });
    return this.httpclient.get(this.url + `/${page}`, {
      headers: httpheaders
    });
  }
  getMedia(id) {
    const httpheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Authorization': `${sessionStorage.getItem('token')}`
    });
    return this.httpclient.get(this.url + '/getmedia' + `/${id}`, {
      responseType: 'blob',
      headers: httpheaders
    });
  }
  postArticle(article) {
    const httpheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Authorization': `${sessionStorage.getItem('token')}`
    });
    return this.httpclient.post(this.url + '/postarticle', this.makeArticleForm(article), {
      headers: httpheaders
    });
  }
  putArticle(article) {
    const httpheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "multipart/form-data; boundary = AaB03x ",
      'Authorization': `${sessionStorage.getItem('token')}`
    });
    return this.httpclient.post(this.url + '/putarticle', JSON.stringify(article), {
      headers: httpheaders
    });
  }
  deleteArticle(id) {
    const httpheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    });
    return this.httpclient.delete(this.url + `/deletearticle/${id}`, {
      observe: 'body',
      headers: httpheaders
    });
  }
}
ArticleService.ɵfac = function ArticleService_Factory(t) {
  return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ArticleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ArticleService,
  factory: ArticleService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4961:
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class UsersService {
  constructor(httpclient) {
    this.httpclient = httpclient;
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appUrl + '/users';
  }
  loginUser(user) {
    const httpheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.httpclient.post(this.url + '/login', JSON.stringify(user), {
      observe: "body",
      responseType: 'json',
      headers: httpheaders
    });
  }
  registerUser(user) {
    const httpheaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.httpclient.post(this.url + '/register', JSON.stringify(user), {
      observe: 'body',
      responseType: 'json',
      headers: httpheaders
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      sessionStorage.setItem('user', user.login);
      sessionStorage.setItem('token', res.token);
      return true;
    }));
  }
  logoutUser() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }
}
UsersService.ɵfac = function UsersService_Factory(t) {
  return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
UsersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UsersService,
  factory: UsersService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9103:
/*!***********************************************!*\
  !*** ./src/app/services/validator.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidatorService": () => (/* binding */ ValidatorService)
/* harmony export */ });
/* harmony import */ var _models_media_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/media_validator */ 1084);
/* harmony import */ var _models_text_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/text_validator */ 6718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class ValidatorService {
  constructor() {}
  createValidator(message) {
    if (message) {
      return new _models_text_validator__WEBPACK_IMPORTED_MODULE_1__.TextValidator();
    }
    if (message) {
      return new _models_media_validator__WEBPACK_IMPORTED_MODULE_0__.MediaValidator();
    }
    return null;
  }
  messageValidate(message) {
    let validator = this.createValidator(message);
    if (validator) {
      return validator.messageEmptyValidator(message);
    }
    console.log('error with valodator');
    return false;
  }
}
ValidatorService.ɵfac = function ValidatorService_Factory(t) {
  return new (t || ValidatorService)();
};
ValidatorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ValidatorService,
  factory: ValidatorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  appUrl: "http://localhost:3000",
  isCloudary: 1
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map