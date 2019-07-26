(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/acount-menu/acount-menu.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/acount-menu/acount-menu.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"acountMenu\">\n    <i class=\"material-icons acount\">person_pin</i>\n    <div class=\"container\">\n        <h4 class=\"nombre\">{{userService.usuario.name}}</h4>\n        <select class=\"dropDownSelect\" (change)=\"changeLine($event)\">\n            <option *ngFor=\"let line of lines\" [ngValue]=\"line\">{{line.name}}</option>\n        </select>\n        <select class=\"dropDownSelect\" (change)=\"changeSubLine($event)\">\n            <option *ngFor=\"let subLine of this.subLines\" [ngValue]=\"subLine\">{{subLine}}</option>\n        </select>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/aplication/aplication.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/aplication/aplication.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site\">\n    <app-header></app-header>\n    <div class=\"mainContent\">\n        <router-outlet></router-outlet>\n        <!-- Routed components go here -->\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/article-list/article-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/article-list/article-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column\" *ngFor=\"let column of columns\">\n    <app-article *ngFor=\"let article of column\" [Article]=\"article\"></app-article>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/article-view/article-view.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/article-view/article-view.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"articleContainer\">\n    <header class=\"header\">\n\n    </header>\n    <div class=\"content\" #content>\n        \n    </div>\n    <div class=\"footer\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/article/article.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/article/article.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img_header\" #imgHeader>\r\n</div>\r\n<a class=\"title\" [routerLink]=\"['/app/articles/',Article.id]\" [state]=\"Article\">{{Article.title}}</a>\r\n<div class=\"article_body\">\r\n\r\n    <div class=\"resumme\" #resume>\r\n    \r\n    </div>\r\n    <div class=\"resume_lists\" #resumeLists>\r\n        \r\n    </div>\r\n    <div class=\"links\" #links>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"dissmissList\" *ngIf=\"hasLongList\">\r\n    <i class=\"material-icons\" *ngIf=\"listDissmised\" (click)=\"expandList()\">expand_more</i>\r\n    <i class=\"material-icons\" *ngIf=\"!listDissmised\" (click)=\"dismissList()\">expand_less</i>\r\n</div>\r\n<div class=\"footer\">\r\n    <div class=\"tags\">\r\n        <a class=\"tag\" href=\"app/search?query=[TagDePrueba]\">TagDePrueba</a>\r\n        <a class=\"tag\" href=\"app/search?query=[TagPrueba]\">TagPrueba</a>\r\n        <a class=\"tag\" href=\"app/search?query=[TagDefault]\">TagDefault</a>\r\n        <a class=\"tag\" href=\"app/search?query=[Tag2]\">Tag2</a>\r\n        <a class=\"tag\" href=\"app/search?query=[Tag12234]\">Tag12234</a>\r\n    </div>\r\n    <div class=\"votes\">\r\n        <i class=\"material-icons\" (click)=\"like()\" [ngClass]=\"{'liked bounce animated': liked()}\">thumb_up</i>\r\n        <span class=\"voteCount\">{{Article.likes.length || 0}}</span>\r\n        <i class=\"material-icons\" (click)=\"disLike()\" [ngClass]=\"{'disLiked swing fadeOutDown animated': disLiked()}\">thumb_down</i>\r\n        <span class=\"voteCount\">{{Article.disLikes.length || 0}}</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/categorie/categorie.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/categorie/categorie.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <h4 class=\"title\" (click)=\"categoriaSeleccionada()\">{{category.name}}</h4>\n    <i class=\"material-icons\" *ngIf=\"!category.desplegado && category.subcategories\" (click)=\"category.desplegado = true\">arrow_drop_down</i>\n    <i class=\"material-icons\" *ngIf=\"category.desplegado && category.subcategories\" (click)=\"category.desplegado = false\">arrow_drop_up</i>\n</header>\n<div class=\"body\" [ngClass]=\"{'desplegado': category.desplegado}\">\n    <div class=\"categories\">\n        <app-categorie *ngFor=\"let cat of category.subcategories\" [category]=\"cat\" [belongsTo]=\"belongsTo + '/' + category.name\" (onSelected)=\"categoriaSeleccionada($event)\"></app-categorie>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/categories/categories.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\n    <app-categorie *ngFor=\"let category of categories\" [category]=\"category\" [belongsTo]=\"'/'\" (onSelected)=\"categoriaSeleccionada($event)\">\n    </app-categorie>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/explorar/explorar.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/explorar/explorar.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"exploreContainer\">\r\n    <app-categories (onSelected)=\"categoriaSeleccionada($event)\" [categories]=\"categories\"></app-categories>\r\n    <div class=\"articles_container\">\r\n        <app-article-list [articles]=\"articles\"></app-article-list>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main_header\">\r\n    <i class=\"material-icons logo\" (click)=\"populateArticles()\">photo_size_select_actual</i>\r\n    <app-search-box></app-search-box>    \r\n    <a class=\"tab\" routerLink=\"/app/explore\">\r\n        <i class=\"material-icons\">category</i>\r\n        <span>Explorar</span>\r\n    </a>\r\n    <a class=\"tab\" routerLink=\"/app/news\">\r\n        <i class=\"material-icons\">new_releases</i>\r\n        <span>Noticias</span>\r\n    </a>\r\n    <a class=\"tab\" routerLink=\"/app/explore\">\r\n        <i class=\"material-icons\">stars</i>\r\n        <span>Favoritos</span>\r\n    </a>\r\n    <span class=\"separator\"></span>\r\n    <app-acount-menu></app-acount-menu>\r\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n<a routerLink=\"/app/explore\"> app</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"Usuario\" #usuario>\n<input type=\"password\" placeholder=\"Contraseña\" #password>\n<input type=\"button\" value=\"login\" (click)=\"login()\">\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/news/news.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/news/news.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>news works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-box/search-box.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-box/search-box.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search_box\">\r\n    <div class=\"backDrop\" (click)=\"onFocusout()\" *ngIf=\"suggestions.length != 0\"></div>\r\n    <input type=\"text\" placeholder=\"Buscar\" class=\"search_box_input\" (focus)=\"onFocus()\"  #busqueda tabindex=\"-1\">\r\n    <div class=\"search_box_suggestions\">\r\n        <div class=\"search_box_suggestion nextWord\" *ngIf=\"nextWord\"><span>TAB</span>{{nextWord | lowercase}}</div>\r\n        <div class=\"search_box_suggestion\" *ngFor=\"let suggestion of suggestions\" [ngClass]=\"{'selected': suggestion.selected}\" (click)=\"buscar(suggestion.value)\">{{suggestion.value}}</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchContainer\">\r\n    <app-article-list [articles]=\"articles\"></app-article-list>\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index */ "./src/app/components/index.ts");
/* harmony import */ var _guards_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/index */ "./src/app/guards/index.ts");





const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_index__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_4__["HomeGuard"]] },
    { path: 'login', component: _components_index__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_4__["HomeGuard"]] },
    { path: 'app', component: _components_index__WEBPACK_IMPORTED_MODULE_3__["AplicationComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: 'search', component: _components_index__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
            { path: 'explore', component: _components_index__WEBPACK_IMPORTED_MODULE_3__["ExplorarComponent"] },
            { path: 'articles', redirectTo: 'explore' },
            { path: 'articles/:id', component: _components_index__WEBPACK_IMPORTED_MODULE_3__["ArticleViewComponent"] },
            { path: 'news', component: _components_index__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"] }
        ] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let AppComponent = class AppComponent {
    constructor(events, router, route, title) {
        this.events = events;
        this.router = router;
        this.route = route;
        this.title = title;
    }
    ngOnInit() {
        this.events.onNewSearch$.subscribe(newSearch => {
            if (newSearch) {
                this.title.setTitle(newSearch);
                this.router.navigate(['/app/search'], { queryParams: { query: newSearch }, queryParamsHandling: 'merge' });
            }
        });
        this.route.queryParamMap.subscribe(params => {
            if (params.has("query")) {
                this.events.newQuery(params.get('query'));
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["EventsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/index */ "./src/app/components/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/index */ "./src/app/services/index.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["ExplorarComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["SearchBoxComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["AplicationComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["CategorieComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["ArticleViewComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["AcountMenuComponent"],
            _components_index__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        providers: [
            _services_index__WEBPACK_IMPORTED_MODULE_8__["mockServerService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/article.ts":
/*!****************************!*\
  !*** ./src/app/article.ts ***!
  \****************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
class Article {
    constructor(conf) {
        this.conf = conf;
        this.title = conf.title;
        this.content = conf.content;
        if (conf.tags) {
            this.tags = conf.tags;
        }
        if (conf.resume) {
            this.resume = conf.resume;
        }
        if (conf.attached) {
            this.attached = conf.attached;
        }
        if (conf.likes) {
            this.likes = conf.likes;
        }
        if (conf.disLikes) {
            this.disLikes = conf.disLikes;
        }
        if (conf.favorites) {
            this.favorites = conf.favorites;
        }
        if (conf.role) {
            this.role = conf.role;
        }
        if (conf.publicationDate) {
            this.publicationDate = conf.publicationDate;
        }
        if (conf.modificationDate) {
            this.modificationDate = conf.modificationDate;
        }
        if (conf.modificationUser) {
            this.modificationUser = conf.modificationUser;
        }
        if (conf.creator) {
            this.creator = conf.creator;
        }
        if (conf.commentsList) {
            this.commentsList = conf.commentsList;
        }
        if (conf.id) {
            this.id = conf.id;
        }
    }
}
Article.ctorParameters = () => [
    { type: articleConf }
];


/***/ }),

/***/ "./src/app/components/acount-menu/acount-menu.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/acount-menu/acount-menu.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNvdW50LW1lbnUvYWNvdW50LW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/acount-menu/acount-menu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/acount-menu/acount-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: AcountMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcountMenuComponent", function() { return AcountMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AcountMenuComponent = class AcountMenuComponent {
    constructor(api, router, userService) {
        this.api = api;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.api.getUserLines(this.userService.usuario.sub)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((lines) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(...lines.map(line => {
                return this.api.getUserSubLines(this.userService.usuario.sub, line);
            }));
        }))
            .subscribe((lines) => {
            this.lines = lines;
            this.subLines = this.lines[0].sublines;
            this.userService.selectedSubLine = { line: this.lines[0].name, subLine: this.lines[0].sublines[0] };
        });
    }
    changeLine(event) {
        console.log(event.target.value);
        this.userService.selectedSubLine = { line: event.target.value, subLine: this.lines.find(line => line.name == event.target.value).sublines[0] };
        this.subLines = this.lines.find(line => line.name == event.target.value).sublines;
    }
    changeSubLine(event) {
        console.log("prueba 1");
        this.userService.selectedSubLine = { line: this.userService.selectedSubLine.line, subLine: event.target.value };
    }
};
AcountMenuComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AcountMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acount-menu',
        template: __webpack_require__(/*! raw-loader!./acount-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/acount-menu/acount-menu.component.html"),
        styles: [__webpack_require__(/*! ./acount-menu.component.css */ "./src/app/components/acount-menu/acount-menu.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], AcountMenuComponent);



/***/ }),

/***/ "./src/app/components/aplication/aplication.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/aplication/aplication.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBsaWNhdGlvbi9hcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/aplication/aplication.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/aplication/aplication.component.ts ***!
  \***************************************************************/
/*! exports provided: AplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AplicationComponent", function() { return AplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AplicationComponent = class AplicationComponent {
    constructor() { }
    ngOnInit() {
    }
};
AplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aplication',
        template: __webpack_require__(/*! raw-loader!./aplication.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/aplication/aplication.component.html"),
        styles: [__webpack_require__(/*! ./aplication.component.css */ "./src/app/components/aplication/aplication.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AplicationComponent);



/***/ }),

/***/ "./src/app/components/article-list/article-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/article-list/article-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/article-list/article-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/article-list/article-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArticleListComponent = class ArticleListComponent {
    constructor() {
        this.columnsCount = 3;
        this.columns = [];
        for (let i = 0; i < this.columnsCount; i++) {
            this.columns.push([]);
        }
    }
    set articles(articles) {
        this._articles = [];
        this.columns = [];
        for (let i = 0; i < this.columnsCount; i++) {
            this.columns.push([]);
        }
        console.log(articles);
        if (typeof articles != 'undefined') {
            this._articles = articles;
            let i = 0;
            let row = 0;
            while (i < this._articles.length) {
                for (let k = 0; k < this.columnsCount && i < this._articles.length; k++) {
                    this.columns[k][row] = this._articles[i];
                    i++;
                }
                row++;
            }
        }
        else {
        }
    }
    get articles() {
        return this._articles;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], ArticleListComponent.prototype, "articles", null);
ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-list',
        template: __webpack_require__(/*! raw-loader!./article-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/article-list/article-list.component.html"),
        styles: [__webpack_require__(/*! ./article-list.component.css */ "./src/app/components/article-list/article-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ArticleListComponent);



/***/ }),

/***/ "./src/app/components/article-view/article-view.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/article-view/article-view.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS12aWV3L2FydGljbGUtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/article-view/article-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/article-view/article-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleViewComponent", function() { return ArticleViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");





const cssDefault = `html{color:#222;font-size:16px;line-height:1.4;background-color:#fdfdfd;padding:1rem}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}*,::after,::before{box-sizing:border-box!important}font{color:var(--primaryText)!important;font:16px/1.4 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif!important}html{line-height:1.15;height:100%;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;padding:1rem}body{margin:0;height:100%;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font:1em monospace,monospace}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline}b,strong{font-weight:bolder}code,kbd,samp{font:1em monospace,monospace}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font:100%/1.15 inherit}button,input{overflow:visible}button,select{text-transform:none}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{outline-offset:-2px}::-webkit-file-upload-button{font:;font-style:normal;font-variant:normal;font-weight:normal;font-family:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}`;
let ArticleViewComponent = class ArticleViewComponent {
    constructor(activatedRoute, renderer, api) {
        this.activatedRoute = activatedRoute;
        this.renderer = renderer;
        this.api = api;
        this.getGeneratedPageURL = ({ html, css, js }) => {
            const getBlobURL = (code, type) => {
                const blob = new Blob([code], { type });
                return URL.createObjectURL(blob);
            };
            const cssURL = getBlobURL(css, 'text/css');
            const jsURL = getBlobURL(js, 'text/javascript');
            const source = `
      <html>
        <head>        
          ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
          <script  src="https://code.jquery.com/jquery-3.4.1.min.js"  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="  crossorigin="anonymous"></script>
          ${js && `<script src="${jsURL}"></script>`}
        </head>
        <body>
          ${html || ''}
        </body>
      </html>
    `;
            return getBlobURL(source, 'text/html');
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.article$ = this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(params => params.id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(articleId => {
            return this.api.getArticle(articleId);
        }));
        this.article$.subscribe((article) => {
            console.log(article);
            let iframe = document.createElement('iframe');
            iframe.src = this.getGeneratedPageURL({ "html": article.content, css: "", js: "" });
            this.renderer.appendChild(this.content.nativeElement, iframe);
            /*
            const url = getGeneratedPageURL({
              html: '<p>Hello, world!</p>',
              css: 'p { color: blue; }',
              js: 'console.log("hi")'
            })
            */
        });
    }
};
ArticleViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("content", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ArticleViewComponent.prototype, "content", void 0);
ArticleViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-view',
        template: __webpack_require__(/*! raw-loader!./article-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/article-view/article-view.component.html"),
        styles: [__webpack_require__(/*! ./article-view.component.css */ "./src/app/components/article-view/article-view.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], src_app_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], ArticleViewComponent);



/***/ }),

/***/ "./src/app/components/article/article.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/article/article.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/article/article.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../article */ "./src/app/article.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ArticleComponent = class ArticleComponent {
    constructor(renderer, user, api) {
        this.renderer = renderer;
        this.user = user;
        this.api = api;
        this.listDissmised = true;
        this.liked = () => this.Article.likes.some(x => x == this.user.usuario.sub);
        this.disLiked = () => this.Article.disLikes.some(x => x == this.user.usuario.sub);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.document = this.stringToDocument(this.Article.content);
            this.Images = this.document.querySelectorAll('img');
            this.lists = this.document.querySelectorAll('ol, ul');
            this.headings = this.document.querySelectorAll('h1,h2,h3,h4,h5,h6');
            this.text = this.document.querySelectorAll('p');
            this.attached = this.document.querySelectorAll('a[href]:not([target])');
            this.buildCard();
        });
    }
    getTextNodesIn(elem, opt_fnFilter) {
        var textNodes = [];
        if (elem) {
            for (var nodes = elem.childNodes, i = nodes.length; i--;) {
                var node = nodes[i], nodeType = node.nodeType;
                if (nodeType == 3) {
                    if (!opt_fnFilter || opt_fnFilter(node, elem)) {
                        textNodes.push(node);
                    }
                }
                else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
                    textNodes = textNodes.concat(this.getTextNodesIn(node, opt_fnFilter));
                }
            }
        }
        return textNodes;
    }
    stringToDocument(htmlString) {
        let template = document.createElement('template');
        template.innerHTML = htmlString.trim();
        return template.content;
    }
    buildCard() {
        if (this.Images.length) {
            this.renderer.appendChild(this.imgHeader.nativeElement, this.Images[0]);
        }
        if (this.Article.resume) {
            let p = document.createElement('p');
            p.innerText = this.Article.resume;
            this.renderer.appendChild(this.resume.nativeElement, p);
        }
        else if (this.text.length) {
            if (this.text[0].textContent.length > 27) {
                this.renderer.appendChild(this.resume.nativeElement, this.text[0]);
            }
        }
        if (this.lists.length) {
            if (this.lists[0].childNodes.length > 5) {
                setTimeout(() => {
                    let el = this.lists[0];
                    while (this.lists[0].childNodes.length > 5) {
                        el.removeChild(el.childNodes[el.childNodes.length - 1]);
                    }
                    this.hasLongList = true;
                }, 1000);
            }
            this.renderer.appendChild(this.resumeLists.nativeElement, this.lists[0]);
        }
        if (this.attached.length) {
            for (var i = 0; i < this.attached.length && i < 5; i++) {
                let linkContainer = document.createElement("div");
                linkContainer.classList.add('linkContainer');
                linkContainer.appendChild(this.attached[i]);
                this.renderer.appendChild(this.links.nativeElement, linkContainer);
            }
        }
    }
    expandList() {
        const childElements = this.resumeLists.nativeElement.childNodes;
        for (let child of childElements) {
            this.renderer.removeChild(this.resumeLists.nativeElement, child);
        }
        this.listDissmised = false;
        this.document = this.stringToDocument(this.Article.content);
        this.lists = this.document.querySelectorAll('ol, ul');
        this.renderer.appendChild(this.resumeLists.nativeElement, this.lists[0]);
    }
    dismissList() {
        this.renderer.removeChild(this.resumeLists.nativeElement, this.lists[0]);
        this.listDissmised = true;
        if (this.lists[0].childNodes.length > 5) {
            let el = this.lists[0];
            while (this.lists[0].childNodes.length > 5) {
                el.removeChild(el.childNodes[el.childNodes.length - 1]);
            }
            this.hasLongList = true;
        }
        this.renderer.appendChild(this.resumeLists.nativeElement, this.lists[0]);
    }
    like() {
        if (this.liked()) {
            this.api.deleteLike(this.user.usuario.sub, this.Article.id)
                .subscribe(val => {
                this.Article.likes = val;
            });
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.api.postLike(this.user.usuario.sub, this.Article.id), this.api.deleteDisLike(this.user.usuario.sub, this.Article.id)).subscribe(val => {
                this.Article.likes = val[0];
                this.Article.disLikes = val[1];
            });
        }
    }
    disLike() {
        if (this.disLiked()) {
            this.api.deleteDisLike(this.user.usuario.sub, this.Article.id)
                .subscribe(val => {
                this.Article.disLikes = val;
            });
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.api.postDisLike(this.user.usuario.sub, this.Article.id), this.api.deleteLike(this.user.usuario.sub, this.Article.id)).subscribe(val => {
                this.Article.disLikes = val[0];
                this.Article.likes = val[1];
            });
        }
    }
};
ArticleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("imgHeader", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ArticleComponent.prototype, "imgHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("resume", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ArticleComponent.prototype, "resume", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("resumeLists", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ArticleComponent.prototype, "resumeLists", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("links", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ArticleComponent.prototype, "links", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _article__WEBPACK_IMPORTED_MODULE_2__["Article"])
], ArticleComponent.prototype, "Article", void 0);
ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article',
        template: __webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/article/article.component.html"),
        styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/components/article/article.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], src_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], ArticleComponent);



/***/ }),

/***/ "./src/app/components/categorie/categorie.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/categorie/categorie.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllL2NhdGVnb3JpZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/categorie/categorie.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/categorie/categorie.component.ts ***!
  \*************************************************************/
/*! exports provided: CategorieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieComponent", function() { return CategorieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategorieComponent = class CategorieComponent {
    constructor() {
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    categoriaSeleccionada(categoria) {
        if (typeof categoria == 'undefined') {
            this.onSelected.emit(this.belongsTo + '/' + this.category.name);
        }
        else {
            this.onSelected.emit(categoria);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CategorieComponent.prototype, "onSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategorieComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategorieComponent.prototype, "belongsTo", void 0);
CategorieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorie',
        template: __webpack_require__(/*! raw-loader!./categorie.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/categorie/categorie.component.html"),
        styles: [__webpack_require__(/*! ./categorie.component.css */ "./src/app/components/categorie/categorie.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategorieComponent);



/***/ }),

/***/ "./src/app/components/categories/categories.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriesComponent = class CategoriesComponent {
    constructor() {
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    categoriaSeleccionada(categoria) {
        this.onSelected.emit(categoria);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CategoriesComponent.prototype, "onSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CategoriesComponent.prototype, "categories", void 0);
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html"),
        styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/components/categories/categories.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoriesComponent);



/***/ }),

/***/ "./src/app/components/explorar/explorar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/explorar/explorar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwbG9yYXIvZXhwbG9yYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/explorar/explorar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/explorar/explorar.component.ts ***!
  \***********************************************************/
/*! exports provided: ExplorarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorarComponent", function() { return ExplorarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");





let ExplorarComponent = class ExplorarComponent {
    constructor(route, api, router, events) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.events = events;
    }
    ngOnInit() {
        this.events.onNewSelectedLine$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(newLine => {
            return this.api.getCategories(newLine.line, newLine.subLine);
        })).subscribe(categories => {
            console.log(categories);
            this.categories = categories;
            this.articles = [];
        });
    }
    categoriaSeleccionada(categoria) {
        this.api.getArticles({ category: categoria }).subscribe(val => {
            this.articles = val;
        });
    }
};
ExplorarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }
];
ExplorarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explorar',
        template: __webpack_require__(/*! raw-loader!./explorar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/explorar/explorar.component.html"),
        styles: [__webpack_require__(/*! ./explorar.component.css */ "./src/app/components/explorar/explorar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["EventsService"]])
], ExplorarComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _diccionario_ejemplo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../diccionario-ejemplo */ "./src/app/diccionario-ejemplo.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");




let HeaderComponent = class HeaderComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
    }
    populateArticles() {
        let diccionario = new _diccionario_ejemplo__WEBPACK_IMPORTED_MODULE_2__["DiccionarioEjemplo"]();
        let newArticles = [];
        for (var i = 0; i < diccionario.diccionarioArticles.length; i++) {
            newArticles.push(diccionario.diccionarioArticles[i]);
        }
        this.api.postArticles(newArticles).subscribe(val => {
            console.log("articulos guardados");
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css"), __webpack_require__(/*! ../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css */ "./node_modules/ng-masonry-grid/ng-masonry-grid.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: AplicationComponent, ArticleComponent, ArticleListComponent, ArticleViewComponent, CategorieComponent, CategoriesComponent, ExplorarComponent, HeaderComponent, HomeComponent, LoginComponent, SearchComponent, SearchBoxComponent, AcountMenuComponent, NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aplication_aplication_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aplication/aplication.component */ "./src/app/components/aplication/aplication.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AplicationComponent", function() { return _aplication_aplication_component__WEBPACK_IMPORTED_MODULE_0__["AplicationComponent"]; });

/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article/article.component */ "./src/app/components/article/article.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return _article_article_component__WEBPACK_IMPORTED_MODULE_1__["ArticleComponent"]; });

/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/components/article-list/article-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"]; });

/* harmony import */ var _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-view/article-view.component */ "./src/app/components/article-view/article-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleViewComponent", function() { return _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_3__["ArticleViewComponent"]; });

/* harmony import */ var _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categorie/categorie.component */ "./src/app/components/categorie/categorie.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategorieComponent", function() { return _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_4__["CategorieComponent"]; });

/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"]; });

/* harmony import */ var _explorar_explorar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explorar/explorar.component */ "./src/app/components/explorar/explorar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExplorarComponent", function() { return _explorar_explorar_component__WEBPACK_IMPORTED_MODULE_6__["ExplorarComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]; });

/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]; });

/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]; });

/* harmony import */ var _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-box/search-box.component */ "./src/app/components/search-box/search-box.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return _search_box_search_box_component__WEBPACK_IMPORTED_MODULE_11__["SearchBoxComponent"]; });

/* harmony import */ var _acount_menu_acount_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./acount-menu/acount-menu.component */ "./src/app/components/acount-menu/acount-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcountMenuComponent", function() { return _acount_menu_acount_menu_component__WEBPACK_IMPORTED_MODULE_12__["AcountMenuComponent"]; });

/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return _news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"]; });

















/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        if (this.usuario.nativeElement.value && this.password.nativeElement.value) {
            this.api.login(this.usuario.nativeElement.value, this.password.nativeElement.value)
                .subscribe(val => {
                console.log(val);
                if (val) {
                    this.router.navigate(['/app']);
                }
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('usuario', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "usuario", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "password", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/news/news.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsComponent = class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/news/news.component.html"),
        styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/components/news/news.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NewsComponent);



/***/ }),

/***/ "./src/app/components/search-box/search-box.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/search-box/search-box.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/search-box/search-box.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-box/search-box.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _diccionario_ejemplo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../diccionario-ejemplo */ "./src/app/diccionario-ejemplo.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");






let SearchBoxComponent = class SearchBoxComponent {
    constructor(api, events) {
        this.api = api;
        this.events = events;
        this.nuevaBusqueda = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextWord = "";
        this.lastWord = "";
        this.suggestions = [];
        this.diccionario = new _diccionario_ejemplo__WEBPACK_IMPORTED_MODULE_2__["DiccionarioEjemplo"]().listadoPalabras;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.onkeydown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.busqueda.nativeElement, 'keydown');
        this.onArrows$ = this.onkeydown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(({ code }) => code == 'ArrowDown' || code == "ArrowUp" || code == "ArrowLeft" || code == "ArrowRight"));
        this.onEnter$ = this.onkeydown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(({ code }) => code == 'Enter'));
        this.onWordCountChange$ = this.onkeydown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(({ code }) => code == 'Space' || code == 'Backspace'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])($event => {
            return [$event, this.getInputValue($event).trim().split(' ').length];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])((prev, curr) => prev[1] === curr[1]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((val) => {
            return this.getInputValue(val[0]);
        }));
        this.onkeydown$.subscribe(($event) => {
            let { code } = $event;
            if (code == "Space" || code == "Enter") {
                this.nextWord = "";
            }
            else {
                this.nextWord = this.findNextWord($event);
            }
            if (code == "Tab") {
                $event.preventDefault();
                $event.stopPropagation();
                if (this.nextWord) {
                    let aux = this.getInputValue($event).split(' ').filter((x) => x != '');
                    aux.pop();
                    aux.push(this.nextWord.toLowerCase());
                    this.busqueda.nativeElement.value = aux.join(' ');
                    this.nextWord = this.findNextWord($event);
                    this.setCaretToPos(this.busqueda.nativeElement, 10000);
                }
            }
        });
        this.onArrows$.subscribe(($event) => {
            let { code } = $event;
            $event.preventDefault();
            if (this.suggestions.length > 0) {
                if (code == 'ArrowDown') {
                    this.suggestions = this.suggestions.map((x, index) => {
                        if (index == 0 && this.suggestions[this.suggestions.length - 1].selected) {
                            return { selected: true, value: x.value };
                        }
                        if (index == this.suggestions.length - 1 && x.selected) {
                            return { selected: false, value: x.value };
                        }
                        if (index - 1 >= 0 && this.suggestions[index - 1].selected) {
                            return { selected: true, value: x.value };
                        }
                        if (index == 0 && this.suggestions.findIndex(x => x.selected) == -1) {
                            return { selected: true, value: x.value };
                        }
                        return { selected: false, value: x.value };
                    });
                }
                if (code == 'ArrowUp') {
                    this.suggestions = this.suggestions.map((x, index) => {
                        if (index == 0 && x.selected) {
                            this.setCaretToPos(this.busqueda.nativeElement, 10000);
                            return { selected: false, value: x.value };
                        }
                        if (index + 1 <= this.suggestions.length - 1 && this.suggestions[index + 1].selected) {
                            return { selected: true, value: x.value };
                        }
                        if (index == this.suggestions.length - 1 && x.selected) {
                            return { selected: false, value: x.value };
                        }
                        return { selected: false, value: x.value };
                    });
                }
            }
        });
        this.onEnter$.subscribe(val => {
            if (this.suggestions.find(x => x.selected)) {
                this.busqueda.nativeElement.value = this.suggestions.find(x => x.selected).value;
                this.suggestions[this.suggestions.findIndex(x => x.selected)].selected = false;
                this.getSuggestions(this.busqueda.nativeElement.value.trim());
            }
            else if (this.getInputValue()) {
                this.buscar();
            }
        });
        this.onWordCountChange$.subscribe(val => {
            this.getSuggestions(val.trim());
        });
        this.events.onNewQuery$.subscribe(query => {
            this.buscar(query);
        });
    }
    buscar(value) {
        if (value) {
            this.events.newSearch(value);
            this.busqueda.nativeElement.value = value;
            this.api.postSuggestion(value)
                .subscribe(val => {
                console.log('guardado');
            });
        }
        else {
            this.events.newSearch(this.getInputValue());
            this.api.postSuggestion(this.getInputValue())
                .subscribe(val => {
                console.log('guardado');
            });
        }
    }
    getSuggestions(input) {
        //:{selected:boolean,value:string}[]  
        this.api.getSuggestions(input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(x => x.map((y) => {
            return { selected: false, value: y };
        }))).subscribe(x => {
            this.suggestions = x.slice(0, 10);
        });
    }
    onFocus() {
        this.getSuggestions();
    }
    onFocusout() {
        this.suggestions = [];
    }
    setCaretToPos(input, pos) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(pos, pos);
        }
        else if (input.createTextRange) {
            var savedTabIndex = input.getAttribute('tabindex');
            input.setAttribute('tabindex', '-1');
            input.focus();
            input.setAttribute('tabindex', savedTabIndex);
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
    compareWords(x, y) {
        return new RegExp(`^${x.toLowerCase().replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u')}.*$`).test(y.toLowerCase().replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u'))
            && x.toLowerCase().replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u') != y.toLowerCase().replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u');
    }
    getInputValue($event) {
        if ($event && $event.which >= 65 && $event.which <= 90) {
            return this.busqueda.nativeElement.value + $event.key;
        }
        else {
            return this.busqueda.nativeElement.value;
        }
    }
    findNextWord($event) {
        let cantidadPalabras = this.getInputValue($event).split(' ').filter((x) => x != '').length;
        if (cantidadPalabras > 0 && this.getInputValue($event).length > 1) {
            return this.diccionario.find((x) => {
                return this.compareWords(this.getInputValue($event).split(' ')[cantidadPalabras - 1], x);
            });
        }
        else {
            return "";
        }
    }
};
SearchBoxComponent.ctorParameters = () => [
    { type: _services_index__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _services_index__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchBoxComponent.prototype, "nuevaBusqueda", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('busqueda', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SearchBoxComponent.prototype, "busqueda", void 0);
SearchBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-box',
        template: __webpack_require__(/*! raw-loader!./search-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-box/search-box.component.html"),
        styles: [__webpack_require__(/*! ./search-box.component.css */ "./src/app/components/search-box/search-box.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _services_index__WEBPACK_IMPORTED_MODULE_5__["EventsService"]])
], SearchBoxComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/index */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let SearchComponent = class SearchComponent {
    constructor(route, api) {
        this.route = route;
        this.api = api;
        this.busqueda = "";
    }
    ngOnInit() {
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(params => {
            return this.api.getArticles(params);
        })).subscribe((articles) => {
            this.articles = articles;
        });
    }
    ngAfterViewInit() {
        //setTimeout(()=>this._masonry.reOrderItems(),1000);    
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_index__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_index__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/diccionario-ejemplo.ts":
/*!****************************************!*\
  !*** ./src/app/diccionario-ejemplo.ts ***!
  \****************************************/
/*! exports provided: DiccionarioEjemplo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiccionarioEjemplo", function() { return DiccionarioEjemplo; });
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ "./src/app/article.ts");

class DiccionarioEjemplo {
    constructor() {
        this.diccionarioArticles = [
            new _article__WEBPACK_IMPORTED_MODULE_0__["Article"]({
                likes: ["prueba", "prueba", "prueba"],
                disLikes: [],
                id: "1",
                title: "articulo 1",
                content: `"76499"	"0"	"Manual de Comunicaciones"	"Manual , comunicaciones , comunicación , guión , guion , plantilla"	"<p>
        <table cellspacing=""1"" cellpadding=""1"" width=""790"" align=""center"" summary="""" border=""0"">
            <tbody>
                <tr>
                    <td>
                    <p align=""center""><font size=""2"" face=""Arial""><embed type=""application/x-shockwave-flash"" height=""189"" width=""793"" src=""/kb/uploads/editor_todos/line485/Flash/banner marketing azul.swf"" menu=""true"" loop=""true"" play=""true"" scale=""""></embed></font></p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div align=""center"">&nbsp;&nbsp; <font color=""#003366"" size=""4"" face=""Arial""><strong>Manual de Comunicaciones</strong></font></div>
                    <div align=""center"">&nbsp;</div>
                    </td>
                </tr>
                <tr>
                    <td background="""">
                    <table height=""27"" cellspacing=""1"" cellpadding=""1"" width=""300"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td bgcolor=""#003366""><font color=""#ffffff"" size=""2"" face=""Arial""><strong>&nbsp;<font color=""#ffffff"">Informaci&oacute;n B&aacute;sica</font></strong></font></td>
                            </tr>
                        </tbody>
                    </table>
                    <blockquote style=""MARGIN-RIGHT: 0px"" dir=""ltr"">
                    <p><font size=""2"" face=""Arial"">Aqu&iacute; encontrar&aacute;s la gu&iacute;a&nbsp;de comunicaci&oacute;n para Servicios Virtuales.</font></p>
                    </blockquote>
                    <table height=""27"" cellspacing=""1"" cellpadding=""1"" width=""300"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td bgcolor=""#003366""><font color=""#ffffff"" size=""2"" face=""Arial""><strong>&nbsp;<font color=""#ffffff"">Informaci&oacute;n General / Procedimiento</font></strong></font></td>
                            </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                <tr>
                    <td background=""""><!-- Inicio Configuracion acordion --><script>
          $(function() {
            
            $(""a"", ""#accordion"").click(function(){
              elemento = this.parentNode.children[1];
              if( elemento.style.display == 'none'){
                $(elemento).show();
                $(this).removeClass('seccionPlegada');
                $(this).addClass('seccionDesplegada');
              } else {
                $(elemento).hide();
                $(this).removeClass('seccionDesplegada');
                $(this).addClass('seccionPlegada');
              }
            })
            
            $('.contenidoSeccion').hide();
            $('a', '#accordion').addClass('seccionPlegada');
            
            $(""#linkDesplegar"").click(function(){
              $('.contenidoSeccion').show();
            $(""a"", ""#accordion"").addClass('seccionDesplegada');
            $(""a"", ""#accordion"").removeClass('seccionPlegada');
            });
            
            $(""#linkPlegar"").click(function(){
              $('.contenidoSeccion').hide();
            $(""a"", ""#accordion"").addClass('seccionPlegada');
            $(""a"", ""#accordion"").removeClass('seccionDesplegada');
            });
          });
          
        </script><style type=""text/css"">
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        .seccionPlegada {
            BACKGROUND-IMAGE: url(/kb/uploads/editor_todos/line19/Image/2004(4).jpg); PADDING-BOTTOM: 5px; PADDING-LEFT: 20px; PADDING-RIGHT: 0px; BACKGROUND-REPEAT: no-repeat; FONT-WEIGHT: bold; PADDING-TOP: 5px
        }
        .seccionDesplegada {
            BACKGROUND-IMAGE: url(/kb/uploads/editor_todos/line19/Image/2006(4).jpg); PADDING-BOTTOM: 5px; PADDING-LEFT: 20px; PADDING-RIGHT: 0px; BACKGROUND-REPEAT: no-repeat; FONT-WEIGHT: bold; PADDING-TOP: 5px
        }
        #acoordionOptions {
            TEXT-ALIGN: right
        }
        .seccion {
            PADDING-BOTTOM: 5px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; PADDING-TOP: 5px
        }
        A {
            CURSOR: pointer
        }</style><!-- Fin configuracion acoordion -->
                    <div id=""acoordionOptions""><a id=""linkDesplegar"">Desplegar todos</a> | <a id=""linkPlegar"">Plegar todos</a> </div>
                    <div id=""accordion"">
                    <div class=""seccion""><a><strong><font color=""#003366"">Objetivo</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Establecer las pautas de comunicaci&oacute;n digital para las redes sociales de la empresa Marketing Personal.</span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Pautas de interacci&oacute;n</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <ul>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Resolutividad: Soluci&oacute;n en el primer contacto.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Se priorizan mensajes privados por encima de comentarios p&uacute;blicos.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">El tiempo de respuesta es de m&aacute;ximo una (1) hora.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">No contestar comentarios de autopromoci&oacute;n de asesoras en redes. Si en el comentario la marca de Marketing Personal se menciona, este puede permanecer, de lo contrario se oculta.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Los comentarios pueden ir acompa&ntilde;ados de: emoticones, gif, etiquetas e im&aacute;genes</span></strong></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Si alg&uacute;n comentario obsceno afecta la marca, se oculta.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Un comentario de alta gravedad en contra de la empresa, se oculta.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Nunca remitir a las asesoras ante su gerente de zona o &aacute;rea.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">La interacci&oacute;n siempre debe estar acompa&ntilde;ada de un saludo y despedida teniendo en cuenta el contexto del caso.</span></span></font></span></div>
                                    </li>
                                </ul>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""></div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Generalidades</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext"">
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">El <strong>Tono </strong>de comunicaci&oacute;n utilizado en la interacci&oacute;n con los usuarios de redes sociales debe presentar las siguientes caracter&iacute;sticas:</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify"">Personal.</p>
                                <ul>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify"">&nbsp;<span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Cercano</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;""><span style=""mso-list: Ignore""><span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Fresco y juvenil</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Amable</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Respetuoso</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;""><span style=""mso-list: Ignore""><span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Cordial</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Servicial</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;""><span style=""mso-list: Ignore""><span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp; </span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Emocional</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;""><span style=""mso-list: Ignore""><span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Personal</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></div>
                                    </li>
                                </ul>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Las palabras clave que caracterizan el <strong>Lenguaje </strong>de Marketing Personal son:</span></p>
                                <ul>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;<span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Mujer Poderosa</span></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Solo Ganar</span></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Familia MP</span></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Moda al alcance de todos</span></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Marca Innovadora</span></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Emprendedora, exitosa, independiente</span></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;""><span style=""mso-list: Ignore""><span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">MP Sin L&iacute;mites</span></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Evoluci&oacute;n, Innovaci&oacute;n</span></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Calidad y Estilo de Vida</span></span> </li>
                                </ul>
                                </span></td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Identidad de Marketing Personal</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <ul>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Somos una marca innovadora</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Estamos al d&iacute;a en tendencias</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Somos una empresa de moda</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Somos una marca joven</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; BACKGROUND: white; COLOR: #111111; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Queremos conseguir nuevas asesoras</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; BACKGROUND: white; COLOR: #111111; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; BACKGROUND: white; COLOR: #111111; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Nos gusta ser muy cercanos a nuestros p&uacute;blicos</span></span></font></span></div>
                                    </li>
                                </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Pautas de interacci&oacute;n</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <ul>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Resolutividad: Soluci&oacute;n en el primer contacto.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Se priorizan mensajes privados por encima de comentarios p&uacute;blicos.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">El tiempo de respuesta es de m&aacute;ximo una (1) hora.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">No contestar comentarios de autopromoci&oacute;n de asesoras en redes. Si en el comentario la marca de Marketing Personal se menciona, este puede permanecer, de lo contrario se oculta.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Los comentarios pueden ir acompa&ntilde;ados de: emoticones, gif, etiquetas e im&aacute;genes</span></strong></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Si alg&uacute;n comentario obsceno afecta la marca, se oculta.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Un comentario de alta gravedad en contra de la empresa, se oculta.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Nunca remitir a las asesoras ante su gerente de zona o &aacute;rea.</span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">La interacci&oacute;n siempre debe estar acompa&ntilde;ada de un saludo y despedida teniendo en cuenta el contexto del caso.</span></span></font></span></div>
                                    </li>
                                </ul>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Saludos</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Hola _____, te invito a contactarnos por un mensaje privado para darte una Asesor&iacute;a m&aacute;s <strong style=""mso-bidi-font-weight: normal"">personalizada</strong>. :)<o:p></o:p></span></span></font></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Hola, soy (Agente) y para m&iacute; es <strong style=""mso-bidi-font-weight: normal"">un gusto saludarte</strong> el d&iacute;a de hoy :) <o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Hola soy (Agente) y para m&iacute; es un gusto brindarte asesor&iacute;a el d&iacute;a de hoy :) &iquest;c&oacute;mo est&aacute;s?<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Hola ______, hablas con (Agente), espero que est&eacute;s muy bien. =) Cu&eacute;ntame &iquest;c&oacute;mo te puedo ayudar?</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Solicitar C&eacute;dula</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>Informaci&oacute;n:</strong>&nbsp;&nbsp;</span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></font></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;<span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Comp&aacute;rteme el n&uacute;mero de tu c&eacute;dula para brindarte la informaci&oacute;n que necesitas. Recuerda, los datos que nos compartes por aqu&iacute; ser&aacute;n utilizados exclusivamente por nosotros con el fin de atender tus necesidades.</span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span></span></font></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;<strong>Gesti&oacute;n:</strong> </span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span></span></font></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;<span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Comp&aacute;rteme el n&uacute;mero de tu c&eacute;dula <strong style=""mso-bidi-font-weight: normal"">para verificar la informaci&oacute;n y gestionar tu solicitud</strong>. Recuerda, los datos que nos compartes por aqu&iacute; ser&aacute;n utilizados exclusivamente por nosotros con el fin de atender tus necesidades.</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span></span></span></font></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Quiere Comprar</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>Facebook P&uacute;blico:</strong></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></font></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&nbsp;</span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&iexcl;Hola! te contamos que las compras se realizan a trav&eacute;s de nuestras Asesoras de imagen, encontrar la tuya es muy f&aacute;cil, solo ingresa a este enlace -&gt; http://bit.ly/2yi0E0P diligencia tus datos y en un mapa ver&aacute;s tus Asesoras de imagen m&aacute;s cercanas. Comun&iacute;cate con la que desees para realizarle tus pedidos campa&ntilde;a a campa&ntilde;a. :)</span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""></span></span></font></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&nbsp;<o:p></o:p></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Hola _____, nos encanta &lt;3 que est&eacute;s interesada en comprar nuestros productos, lo puedes hacer ingresando al siguiente enlace y diligenciando tus datos te ayudaremos a encontrar una de nuestras Asesoras de imagen m&aacute;s cercanas de ti, con ella podr&aacute;s comprar todas las prendas que quieras. =)http://bit.ly/2yi0E0P</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;<strong>Facebook Privado:</strong> </span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""></span></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Buen d&iacute;a<span style=""mso-spacerun: yes"">&nbsp; </span>:) soy (Agente) y te cuento que las compras se realizan a trav&eacute;s de nuestras Asesoras de imagen, encontrar la tuya es muy f&aacute;cil, solo ingresa a este enlace -&gt; http://bit.ly/2yi0E0P diligencia tus datos y ver&aacute;s un mapa con tus asesoras m&aacute;s cercanas.</span></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span>&nbsp;</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Comun&iacute;cate con la que desees para realizarle tus pedidos campa&ntilde;a a campa&ntilde;a. :)</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><strong>Instagram Publico:</strong> </span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Hola XXX, puedes comprar la prenda que desees con una de nuestras Asesoras. &lt;3 Para encontrar tu Asesora m&aacute;s cercana te invitamos a diligenciar tus datos en la opci&oacute;n &ldquo;&iquest;Quieres comprar?&rdquo; del sitio web <a href=""http://www.marketingpersonal.com/"">www.marketingpersonal.com</a></span></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;<strong>Instagram Privado:</strong> </span></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;<span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Hola XXX, hablas con (Agente), espero que est&eacute;s muy bien. Nos encanta que quieras comprar nuestras prendas. &lt;3 Para encontrar tu Asesora m&aacute;s cercana y comprar todos los productos que desees, te invitamos a diligenciar tus datos en la opci&oacute;n &ldquo;&iquest;Quieres comprar?&rdquo; del sitio web <a href=""http://www.marketingpersonal.com/"">www.marketingpersonal.com</a></span></span></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;</span></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Quiere Vender</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>Publico:</strong></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong></strong></span></font></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>&nbsp;</strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Qu&eacute; bueno que quieras ser parte de esta familia de Mujeres Poderosas MP, te invitamos a que nos escribas por un mensaje privado para contarte el proceso de inscripci&oacute;n. </span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span></span></font></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;<strong>Inicio:</strong> </span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span></span></font></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;<span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Qu&eacute; bueno que quieras ser parte de esta familia de Mujeres Poderosas MP <o:p></o:p></span></span></span></font></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Te cuento que en MP tenemos dos modalidades de asesoras:<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">1.<span style=""mso-tab-count: 1"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Tradicional: Esta Asesora recibe la visita y el acompa&ntilde;amiento presencial de una Gerente de Zona o l&iacute;der; adem&aacute;s realiza cambios y devoluciones el d&iacute;a de la conferencia de cambios. <o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">2.<span style=""mso-tab-count: 1"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Digital: Esta Asesora es m&aacute;s independiente, y maneja su negocio por si misma incluyendo pedidos cambios y devoluciones, adem&aacute;s recibe un total acompa&ntilde;amiento de manera virtual, es decir, por aqu&iacute;.<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&iquest;Cu&eacute;ntame qu&eacute; tipo de asesora te gustar&iacute;a ser?<o:p></o:p></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Qu&eacute; bueno que quieras ser parte de nuestra familia; te cuento que ahora en MP tenemos dos formas para que puedas inscribirte. Una es que te visite una Gerente de Zona y ella te explicar&aacute; y te acompa&ntilde;ar&aacute; en tu proceso. Y la segunda es que t&uacute; misma de manera Digital, te inscribas y nosotros te ayudaremos en este proceso. Cu&eacute;ntame,<span style=""mso-spacerun: yes"">&nbsp; </span>&iquest;deseas qu&eacute; te visitemos o inscribirte de manera virtual?</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;<strong>Asesora Digital:</strong></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><strong></strong></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><strong>&nbsp;</strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Qu&eacute; bueno XXX, ten en cuenta estos requisitos para que puedas ser parte de nuestra compa&ntilde;&iacute;a:<o:p></o:p></span></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">- Tener entre 18 y 70 a&ntilde;os.<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">- No estar reportado en las centrales de riesgo (si est&aacute;s reportada debe hacer los pedidos mediante la modalidad de pago anticipado).<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">- Pagar el valor de la suscripci&oacute;n de s&oacute;lo $14.999 que se cobrar&aacute; &uacute;nicamente en tu primera factura.<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">- Solo se permite una Asesora de Imagen por direcci&oacute;n de residencia.<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Si cumples con ellos, ingresa aqu&iacute; --&gt; https://goo.gl/1YzVqU para registrarte y listo.<span style=""mso-spacerun: yes"">&nbsp; </span>;)<o:p></o:p></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">- Ten presente que desde que realices la solicitud, la respuesta de aprobaci&oacute;n o rechazo del cr&eacute;dito puede tardar cuatro d&iacute;as h&aacute;biles, luego una de nuestras representantes se comunicar&aacute; contigo para brindarte m&aacute;s informaci&oacute;n y finalizar tu inscripci&oacute;n.</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">&nbsp;<strong>Asesora Tradicional:</strong> </span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span>&nbsp;</p>
                                <span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Muy bien, entonces primero debes verificar que cumplas con estos requisitos <o:p></o:p></span></p>
                                <p style=""MARGIN-LEFT: 36pt; TEXT-INDENT: -18pt; mso-list: l0 level1 lfo1; tab-stops: list 36.0pt""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol""><span style=""mso-list: Ignore"">&middot;<span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Tener entre 18 y 70 a&ntilde;os.<o:p></o:p></span></p>
                                <p style=""MARGIN-LEFT: 36pt; TEXT-INDENT: -18pt; mso-list: l0 level1 lfo1; tab-stops: list 36.0pt""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol""><span style=""mso-list: Ignore"">&middot;<span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">No estar reportado en las centrales de riesgo (ingresar&aacute;s en modalidad de pago anticipado).<o:p></o:p></span></p>
                                <p style=""MARGIN-LEFT: 36pt; TEXT-INDENT: -18pt; mso-list: l0 level1 lfo1; tab-stops: list 36.0pt""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol""><span style=""mso-list: Ignore"">&middot;<span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Cancelar el valor de la suscripci&oacute;n de $14.999 que se cobrar&aacute; &uacute;nicamente en tu primera factura.<o:p></o:p></span></p>
                                <p style=""MARGIN-LEFT: 36pt; TEXT-INDENT: -18pt; mso-list: l0 level1 lfo1; tab-stops: list 36.0pt""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: Symbol; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol""><span style=""mso-list: Ignore"">&middot;<span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Tener el documento de identidad actualizado. <o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Si cumples con ellos ind&iacute;canos por favor, cu&aacute;l es tu departamento, ciudad y barrio </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: Wingdings; mso-bidi-font-family: Arial; mso-ascii-font-family: Arial; mso-hansi-font-family: Arial; mso-char-type: symbol; mso-symbol-font-family: Wingdings""><span style=""mso-char-type: symbol; mso-symbol-font-family: Wingdings"">J</span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> <o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Te invito a que te comuniques con nuestra Gerente encargada XXX, su n&uacute;mero es: XXX. Ella te ayudar&aacute; con todo tu proceso de ingreso. =)<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Esperamos que pronto seas parte de nuestra gran familia MP. &lt;3<o:p></o:p></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify"">&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><strong>Asesora Tradicional pregunta por Asesora digital:</strong> </p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Te cuento que Asesoras digitales es una nueva modalidad creada para las personas que por sus ocupaciones no pueden asistir a la conferencias, o reunirse con sus l&iacute;deres y gerentes, por esto tendr&aacute;n un acompa&ntilde;amiento virtual, a diferencia tuya que como Asesora tradicional, tienes un acompa&ntilde;amiento presencial con tu l&iacute;der y gerente.<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Sin embargo, la forma de realizar el pedido, las ganancias y los planes de premios siguen siendo los mismos para ambas modalidades. </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">=)</span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""></span>&nbsp;</p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><strong>Asesora Digital:</strong> </span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><strong>P&uacute;blico:</strong> <span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-ansi-language: ES-CO; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Hola XX, te invitamos a que nos escribas en un mensaje privado, para darte una asesor&iacute;a m&aacute;s personalizada, y contarte toda la informaci&oacute;n que desees conocer.</span></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-ansi-language: ES-CO; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-ansi-language: ES-CO; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><strong>Informaci&oacute;n sobre la marca, y ganancias: </strong></span></span></span></p>
                                <span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: Calibri; mso-ansi-language: ES-CO; mso-fareast-theme-font: minor-latin; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-ansi-language: ES-CO; mso-fareast-language: EN-US; mso-bidi-language: AR-SA""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-ansi-language: ES-CO; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Te cuento que somos una marca innovadora de venta directa por cat&aacute;logo, tenemos prendas y productos para toda la familia, los cuales est&aacute;n dise&ntilde;ados bajo las tendencias del momento. Siendo parte de nuestra gran familia, podr&aacute;s convertirte en una mujer independiente y emprendedora, obteniendo excelentes ganancias y beneficios en cada una de tus campa&ntilde;as.<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Nuestros cat&aacute;logos son:<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">MP Principal<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">MP Home - productos para el hogar<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Atypical - cat&aacute;logo juvenil<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Mujeres Poderosas - cat&aacute;logo con ofertas para nuestras Asesoras<o:p></o:p></span></p>
                                <p style=""MARGIN-LEFT: 36pt; TEXT-INDENT: -18pt; mso-list: l0 level1 lfo1""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: Symbol; COLOR: black; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol""><span style=""mso-list: Ignore"">&middot;<span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;&nbsp;&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Nuestro pedido m&iacute;nimo es de $199.000, puedes ganar premios en todas las campa&ntilde;as cumpliendo con un pedido efectivo seg&uacute;n tu zona, y los art&iacute;culos tienen las siguientes ganancias:<o:p></o:p></span></p>
                                <p style=""MARGIN-LEFT: 36pt; TEXT-INDENT: -18pt; mso-list: l0 level1 lfo1""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: Symbol; COLOR: black; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol""><span style=""mso-list: Ignore"">&middot;<span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Ropa exterior femenina, ropa interior femenina,&nbsp;ropa femenina y masculina Cat&aacute;logo Atypical, ropa exterior masculina, ropa deportiva femenina, ropa infantil MP&nbsp;Kids, todos los &iacute;ndigos,&nbsp;todos los b&aacute;sicos el<span style=""mso-spacerun: yes"">&nbsp; </span>26%</span></p>
                                <p style=""MARGIN-LEFT: 36pt; TEXT-INDENT: -18pt; mso-list: l0 level1 lfo1""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: Symbol; COLOR: black; mso-fareast-font-family: Symbol; mso-bidi-font-family: Symbol""><span style=""mso-list: Ignore"">&middot; <span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Hogar, calzado, cosm&eacute;ticos, bienestar,&nbsp;c</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">ontraportada, oferta ahorra o nunca - oferta inigualable y outlet 10%</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""></span>&nbsp;</p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext"">&nbsp;</span></p>
                                </span></span></span></span></td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Quiere que le realicen el pedido</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Muy bien, entonces vas a escribirme por favor de una forma muy ordenada, una lista con los siguientes items: <o:p></o:p></span></span></font></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Nombre del producto - C&oacute;digo - Cantidad<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><strong>Ejemplo:</strong> </span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Pantal&oacute;n - cod 5674 - pag 47 - x1</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">No ha recibido&nbsp;visita</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Te contamos que desde que realizas la solicitud de ingreso a la</span></strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">compa&ntilde;&iacute;a, la Gerente de tu zona tiene siete d&iacute;as h&aacute;biles para contactarte (sin</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">contar s&aacute;bados, domingos y festivos). &iquest;Hace cu&aacute;nto hiciste tu solicitud de</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">ingreso?</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></span></font></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-themecolor: text1"">Si ya han pasado los 7 d&iacute;as h&aacute;biles se escala el caso a MP</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-themecolor: text1""><o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Te ofrecemos disculpas, gestionaremos tu caso y te llamaremos lo m&aacute;s pronto</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">posible. =)</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Premios</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong><u><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">A partir de C13<o:p></o:p></span></u></strong></span></font></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">Te cuento que desde campa&ntilde;a 13 <span style=""mso-spacerun: yes"">&nbsp;</span>nuestros planes de premios se renuevan y ahora puedes ganar muchos m&aacute;s premios en cada campa&ntilde;a. <o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">Te explicar&eacute; en qu&eacute; consisten nuestros Planes de premios:<o:p></o:p></span></p>
                                <ul>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><strong>&nbsp;Premio por Permanencia</strong>: deber&aacute;s realizar tres pedidos efectivos consecutivos realizando un m&iacute;nimo de (369 o 319) puntos en cada campa&ntilde;a.</span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">&nbsp;<strong>Premio Plata:</strong> se obtiene realizando tres pedidos consecutivos de 699 puntos cada uno; en ese caso obtendr&iacute;as premios plata y premio permanencia.<o:p></o:p></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><strong>&nbsp;Premio Oro:</strong> se obtiene realizando tres pedidos consecutivos de 1149 puntos cada uno; en ese caso obtendr&iacute;as premios oro, plata y premio permanencia.<o:p></o:p></span> </li>
                                    <li><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><strong>Premio Diamante:</strong> se obtiene realizando tres pedidos consecutivos de 1599 puntos cada; en ese caso obtendr&iacute;as premios diamante, oro, plata y premio permanencia.<o:p></o:p></span> </li>
                                </ul>
                                <p><strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Premio por referidos:</span></strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""> el plan de referidos consiste en que t&uacute; recomiendas a una Asesora para ingresar a nuestra compa&ntilde;&iacute;a, y ella al inscribirse debe diligenciar tus datos como referente.<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">Tu referida debe realizar sus tres primeros pedidos efectivos, y t&uacute; tambi&eacute;n debes ser consecutiva y efectiva en esas tres campa&ntilde;as, as&iacute; ambas recibir&aacute;n el fabuloso premio.</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">C&oacute;mo realizar el pedido web</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Para ingresar tu pedido a la plataforma, debes seguir los siguientes pasos, si tienes alguna duda nos cuentas y te voy ayudando.</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></span></font></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>1.</strong> Lo primero que debes hacer es ingresar a nuestro sitio web www.marketingpersonal.com/ y dar clic en la opci&oacute;n <strong>&ldquo;CREA TU PEDIDO&rdquo;</strong> que encontrar&aacute;s en la parte de arriba. </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>2.</strong> Luego ingresa con tu usuario y contrase&ntilde;a (la contrase&ntilde;a generalmente es MP + los 4 &uacute;ltimos d&iacute;gitos de tu c&eacute;dula)</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>3.</strong> Posteriormente da clic en la opci&oacute;n <strong>&ldquo;PEDIDO CR&Eacute;DITO&rdquo;</strong></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>4.</strong> Ingresa los c&oacute;digos de 4 d&iacute;gitos de los productos que deseas solicitar y que encontraras en los cat&aacute;logos, e indica a la derecha, la cantidad deseada. </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>:)</strong> Cada vez que agregues un producto debes dar clic en el bot&oacute;n <strong>&ldquo;ADICIONAR&rdquo;</strong></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>5.</strong> Cuando termines, no olvides dar clic en el bot&oacute;n <strong>&ldquo;ENVIAR PEDIDO FINAL&rdquo;</strong> que aparecer&aacute; bajo la lista de tus productos, si no das clic all&iacute;, tu pedido no se facturar&aacute;.</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>:) </strong>Si deseas eliminar un producto de tu lista, da clic en la imagen de un pote de basura, que aparece a la izquierda de cada producto y luego en &ldquo;SI&rdquo; para confirmar que no deseas dicho producto.</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>:)</strong> Si un producto se encuentra agotado la plataforma te lo indicar&aacute;, y si el producto agotado tiene sustituto la plataforma te dar&aacute; la opci&oacute;n de cargarlo a tu pedido.</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>:)</strong> Si deseas recibir nuestro &ldquo;Combo m&aacute;gico&rdquo; hazlo con el c&oacute;digo &ldquo;0913&rdquo; y para cancelarlo marca el c&oacute;digo &ldquo;0002&rdquo;</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Cu&aacute;nto es mi saldo</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Hola Karina, muy buenas tardes, mi nombre es (Agente) y para m&iacute; es un gusto atenderte, te cuento que tu saldo actual es de $836.288. :) <o:p></o:p></span></span></font></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Tu factura estaba por un valor de $1.673.691, de este valor tienes unos abonos por los siguientes conceptos:<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">XXXX<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Tienes un plazo para realizar el pago hasta el d&iacute;a 16 de julio, recuerda que puedes cancelar en cualquier punto Baloto. :)</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Cu&aacute;ndo llega mi pedido</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Te cuento que tu pedido de campa&ntilde;a XXX, fue facturado el XXX, te lo despachamos el XXX, y te estar&aacute; llegando el XXX. Si deseas t&uacute; tambi&eacute;n puedes realizar el seguimiento de tu pedido, siguiendo estos pasos: <o:p></o:p></span></span></font></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">S&oacute;lo debes ingresar a nuestro sitio web </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><a href=""http://www.marketingpersonal.com/""><span style=""mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><font color=""#0000ff"">www.marketingpersonal.com</font></span></a></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""> y dar clic en la opci&oacute;n &ldquo;Crea tu pedido&rdquo; e ingresas con tu usuario y contrase&ntilde;a, luego das clic en la parte superior derecha en la opci&oacute;n &ldquo;Seguimiento a tu pedido&rdquo; y all&iacute; podr&aacute;s ver: &ldquo;Fecha de ingreso del pedido&rdquo;, &ldquo;Fecha de facturaci&oacute;n&rdquo;, &ldquo;Fecha de despacho&rdquo;, y &ldquo;Fecha m&aacute;xima de entrega de tu pedido&rdquo;</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Cu&aacute;ndo debo pasar el&nbsp;pedido</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Te cuento que tienes hasta el XX a las XXX, para ingresar tu pedido de campa&ntilde;a XXX.</span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Pedido m&iacute;nimo</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Te cuento que puedes realizar tu pedido por $199.000 precio cat&aacute;logo, sin embargo ten presente que con</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">estas ventas no participar&iacute;as en nuestro</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">plan de premios. Para que ganes premios en todas tus campa&ntilde;as tu pedido debe ser por un valor de XXX.</span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Cambios y devoluciones</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>Cambios: </strong></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong></strong></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong></strong></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong></strong></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong></strong></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Los cambios los debes pagar en tu campa&ntilde;a actual y con tu pr&oacute;ximo pedido te llegan las prendas que solicitaste como cambio sin costo, o si son de un valor superior ya solo tendr&iacute;as que pagar el excedente. </span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO"">Ten en cuenta que para realizar tus cambios, puedes hacerlo en la conferencia de cambios de la campa&ntilde;a en la que te lleg&oacute; la prenda y en la conferencia de tu pr&oacute;xima campa&ntilde;a. Los productos que vas a pedir como cambio deben ser por un valor igual o superior. Si el cambio no te llega con tu pr&oacute;ximo pedido, te descontaremos el valor de tu factura. </span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""><strong></strong></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""><strong></strong></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""><strong>Devoluciones:</strong></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""><strong></strong></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""><strong></strong></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""><strong></strong></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""><strong></strong></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""><strong><o:p></o:p></strong></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><strong></strong></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO"">Las devoluciones las puedes realizar en tu conferencia de cambios de la campa&ntilde;a en la que recibiste la prenda, o en la conferencia de tu pr&oacute;xima campa&ntilde;a; el producto que devuelvas se te descontar&aacute; de tu factura. Debes tener en cuenta que para que la devoluci&oacute;n sea aceptada por nuestra &aacute;rea encargada, el producto no debe presentar uso, adem&aacute;s los defectos de calidad que tengan deben ser de producci&oacute;n y no causados por la manipulaci&oacute;n de la prenda.</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO"">Tambi&eacute;n puedes devolver prendas que t&uacute; no hayas solicitado, o productos del combo m&aacute;gico que no logres vender.</span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: ES-CO"">Es muy importante que tengas en cuenta que las devoluciones te restan puntos, excepto cuando son por defectos de calidad.<o:p></o:p></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify"">&nbsp;</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Combo M&aacute;gico</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Respuesta comentario:</span></strong></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></strong></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Hola Xxx, el Combo M&aacute;gico es una ayuda de venta muy &uacute;til para ti, puede darte</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">hasta el 50% de ganancia y sumas puntos para nuestros poderosos premios. En</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">un momento te contaremos todos los detalles por mensaje privado.</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong style=""mso-bidi-font-weight: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Respuesta interna:</span></strong><strong style=""mso-bidi-font-weight: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></strong></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong style=""mso-bidi-font-weight: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></strong></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong style=""mso-bidi-font-weight: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></strong><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Te cuento que nuestro Combo m&aacute;gico, est&aacute; pensado para que las Asesoras de Imagen&nbsp;tengan ingresos extras, te puede dar hasta un 50% de ganancias.&nbsp;Puedes destaparlo y ofrecer los productos a tus clientes, los que no logres vender los puedes cambiar por productos de la pr&oacute;xima campa&ntilde;a.</span></span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Productos que Suman y No Suman Puntos</font></strong></a>
                    <p class=""contenidoSeccion"">
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Te compartimos una lista de los productos que suman y no suman puntos en tus pedidos, para que lo tengas en cuenta y puedas ganar tus premios en todas las campa&ntilde;as:</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>No Suman: </strong></span></span></span></font></span></p>
                                <ul>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>&nbsp;</strong></span></span></span></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Oulet virtual - Oferta web - Oferta del d&iacute;a</span></span></span></span></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></span></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Ayudas de ventas - Ofertas especiales de la revista Negocio de &Eacute;xito </span></span></span></span></span></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></span></span></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Carnaval de fragancias - Kit de &Eacute;xito - Oferta rel&aacute;mpago</span></span></span></span></span></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><font face=""Arial""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;""><span style=""mso-list: Ignore""><span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Flete - Productos agotados de la campa&ntilde;a anterior</span></font></font></span></span></span></span></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Demos - Ofertas de las facturas - Ofertas de conferencias</span></span></span></span></span></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Multa de cartera - Cambios despachados - Agotados anunciados</span></span></span></span></span></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Agotados de campa&ntilde;as anteriores - Devoluci&oacute;n del Combo M&aacute;gico autom&aacute;tico</span></span></span></span></span></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Seguro - Membres&iacute;a de pertenencia</span></span></span></span></span></span></div>
                                    </li>
                                </ul>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;<strong>Suman:</strong></span></span></span></span></span></font></span></p>
                                <ul>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Cat&aacute;logo Principal - Cat&aacute;logo Teenbook - Cat&aacute;logo MP Kids</span></span></span></span></span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">MP Home - Combo M&aacute;gico</span></span></span></span></span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Sustitutos (siempre y cuando no realice devoluci&oacute;n)</span></span></span></span></span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Agotados no anunciados - Cambios en campa&ntilde;a de Origen</span></span></span></span></span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Outlet de cat&aacute;logos MP principal, Teenbook y MP kids </span></span></span></span></span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-ansi-language: ES-CO; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"">Oferta privilegio</span></span></span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></font></span></div>
                                    </li>
                                </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Cobertura de la Compa&ntilde;&iacute;a</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span>Hola Xxx, te contamos que en este momento nuestros productos s&oacute;lo est&aacute;n </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">disponibles en Colombia. Puedes obtenerlos de manera virtual por Dafiti o Linio (Bajo las condiciones de la plataforma).</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Esperamos estar pronto m&aacute;s cerca de ti. #MPSinLimites.</span></span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Reporte Negativo en Centrales de Riesgo</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">Te cuento que tienes un saldo pendiente de campa&ntilde;a XX del a&ntilde;o XX, para conocer el estado de tu deuda y realizar un acuerdo de pago puedes comunicarte con (Brindar el n&uacute;mero de la Agencia de Cobranza que registre en SISAC).</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">&nbsp; </span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><strong>IMPORTANTE:</strong> Dependiendo de la Ciudad correspondiente a la Agencia de Cobranza debes brindar el indicativo y la forma como puede marcar desde un celular, ejemplo: Si el indicativo es el n&uacute;mero (4) desde celular debe marcar (034 xxx).</span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""></span></span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Reintegro de Dinero</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Efectivamente el sistema nos registra un saldo a tu favor por valor de</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">_____ </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">[$Saldo a favor] </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">para solicitar el reintegro del dinero debes enviar la</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">solicitud al correo informacion@marketingpersonal.com con los siguientes datos</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">adjuntos:</span></span></span></font></span></p>
                                <ul>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Carta solicitando el reintegro (Escaneada con firma).</span></span></span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Certificado de cuenta, personal.</span></span></span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Nombres y apellidos completos c&eacute;dula, tel&eacute;fono(s).</span></span></span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Valor exacto a reintegrar.</span></span></span></span></font></span></div>
                                    </li>
                                </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Fidelizaci&oacute;n</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Nos entristece :( que est&eacute;s pensando dejar de ser parte de la familia MP y crecer</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">juntos; cu&eacute;ntanos un poco m&aacute;s los motivos de esta decisi&oacute;n </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">[indagar a</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">profundidad]</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">A continuaci&oacute;n se muestran los posibles argumentos para algunos casos de retiro:</span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>Econ&oacute;mico:</strong></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Xxx sabes que para nosotros eres muy importante; por eso te ofrecemos diferentes formas de GANAR y ser una mujer poderosa. Nuestros cat&aacute;logos te brindan diversas l&iacute;neas de productos con excelentes ganancias, que van desde el 10% hasta el 50%, y recuerda siempre que en cada campa&ntilde;a podr&aacute;s ganar espectaculares premios y generar ingresos extras.</span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>Acompa&ntilde;amiento:</strong> </span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Xxx, en ning&uacute;n momento queremos que te sientas sola. Cu&eacute;ntanos, &iquest;c&oacute;mo te podemos ayudar?, recuerda adem&aacute;s que en MP tenemos diferentes medios para acompa&ntilde;arte en lo que necesites.</span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>Topes de los Pedidos:</strong></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Xxx, queremos llegar a un acuerdo contigo, porque tu permanencia es importante para nosotros. Por eso, te ofrecemos la posibilidad de hacer un pedido m&iacute;nimo por valor de 199.000 pesos en esta campa&ntilde;a para que contin&uacute;es creciendo junto a la familia MP.</span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Xxx, recuerda que si pasas tu pedido por un puntaje de </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">[efectivo de Alfa o Beta]</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">, podr&aacute;s ganar en esta campa&ntilde;a fabulosos premios que tenemos para nuestras Mujeres Poderosas. (Esto depende del record o historial de la AI) </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">[Adem&aacute;s el asesor, podr&aacute; nombrar los premios de la campa&ntilde;a que quiz&aacute;s la A.I PERDER&Aacute;]</span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></span></span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Xxx, los productos que te enviamos vienen con descuentos s&uacute;per especiales, y</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><font color=""#000000""> </font></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">son pensados para incrementar tus ganancias, los puedes aprovechar para</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><font color=""#000000""> </font></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">ponerles el precio que desees y ganar hasta el doble del precio que pagaste por</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><font color=""#000000""> </font></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">ellos, adem&aacute;s en caso de que no logres venderlos los puedes devolver y te los descontaremos de tu factura.</span></span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>Retiro Definitivo:</strong></span></span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>&nbsp;</strong></span></span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Xxx, lamentamos tu decisi&oacute;n, y queremos que sepas que siempre tendr&aacute;s las</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">puertas abiertas en nuestra familia MP. Para tramitar el retiro de la compa&ntilde;&iacute;a, te</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">pedimos que nos env&iacute;es la solicitud de cancelaci&oacute;n de tu c&oacute;digo, con todos tus datos al correo electr&oacute;nico</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><a href=""mailto:informacion@marketingpersonal.com"">informacion@marketingpersonal.com</a></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span></span></span></span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">&nbsp;</span></span></span></span></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; LINE-HEIGHT: 115%; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Por este medio yo tambi&eacute;n enviar&eacute; la notificaci&oacute;n a nuestra &aacute;rea encargada, de que deseas retirarte.</span></span></span></span></span></span></span></span></span></span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Comentarios Positivos</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">
                                <ul>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">@Xxx, gracias por tu comentario, recuerda que cada d&iacute;a trabajamos para </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">brindarte un buen servicio.</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;""><span style=""mso-list: Ignore""><span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Gracias @Xxx, por Mujeres Poderosas como t&uacute; nos motivamos a crecer.</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;""><span style=""mso-list: Ignore""><span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">@Xxx, **PODEROSO COMENTARIO **.</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;""><span style=""mso-list: Ignore""><span style=""FONT: 7pt &quot;Times New Roman&quot;"">&nbsp;</span></span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">@Xxx, y a nosotros nos encanta </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #9a9a9a; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><strong>[dependiendo del adjetivo calificativo que use el usuario]</strong> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">que seas parte de la familia MP. :D :) (y) (emojis).</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">@Xxx, gracias por tu comentario, para MP son muy importantes las opiniones de nuestras Asesoras de imagen, por eso, todos los d&iacute;as trabajamos para innovar y evolucionar en nuestros procesos.</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">@Xxx, nos encanta que compartas tus experiencias con nosotros, tus aportes nos impulsan a seguir trabajando e innovando cada d&iacute;a. :D(emojis)</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">@Xxx, gracias por ser parte de esta gran familia de mujeres emprendedoras, exitosas y poderosas. (emojis)</span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">@Xxx nos encanta tu comentario, estamos para servirte.</span></div>
                                    </li>
                                    <li>
                                    <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">@Xxx agradecemos tu comentario, es un gusto que hagas parte de la familia MP. (emojis) :D :) =)&#56256;&#57204;&#56256;&#57203;</span></p>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">@Xxx muchas gracias por tu comentario, nos llena de alegr&iacute;a saber que eres una MUJER PODEROSA y que cada d&iacute;a luchas por hacer tus sue&ntilde;os realidad.</span></div>
                                    </li>
                                </ul>
                                </span></span></font></span></td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Comentarios Negativos</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">Hola XX, para nosotros es muy importante conocer tus experiencias, por eso te invitamos a que nos cuentes tu caso con m&aacute;s detalle en un mensaje privado, y con mucho gusto te ayudaremos con </span>en lo que necesite.</span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Desea trabajar en MP</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">Muchas <span style=""mso-spacerun: yes"">&nbsp;</span>gracias por pensar en nuestra marca, te invito a que ingreses al sitio web </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><a href=""http://www.marketingpersonal.com/""><span style=""mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><font color=""#0000ff"">www.marketingpersonal.com</font></span></a></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""> y das clic en la opci&oacute;n &ldquo;Trabaja nosotros&rdquo;, all&iacute; podr&aacute;s ver nuestras ofertas laborales disponibles, y podr&aacute;s aplicar a la que m&aacute;s se ajuste tu perfil.</span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Recibir contenido de moda y tendencias</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">En nuestro sitio web </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: #1155cd; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">www.marketingpersonal.com</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""> encontrar&aacute;s la opci&oacute;n</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> <span style=""COLOR: black"">&ldquo;</span></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">suscr&iacute;bete a nuestro bolet&iacute;n&rdquo;, as&iacute; te compartiremos tendencias de moda, belleza,</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">estilos de vida, familia y hogar, que tambi&eacute;n publicamos en nuestras redes</span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""> </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;"">sociales y todos nuestros cat&aacute;logos MP, Teenbook y MPkids de cada campa&ntilde;a.</span></span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Desea ver el cat&aacute;logo</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">Claro que s&iacute;, ac&aacute; te comparto los enlaces de nuestros cat&aacute;logos, para que te enamores de muchas prendas.</span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold"">Claro que s&iacute;, ac&aacute; te comparto los enlaces de nuestros cat&aacute;logos para que los env&iacute;es a tus clientes, si deseas tambi&eacute;n me brindas tu n&uacute;mero de celular y te los env&iacute;o en formato PDF a tu Whatsapp. <strong>=)</strong></span></span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Desea programar llamada</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Si deseas programar una llamada, puedes hacerlo de forma muy sencilla siguiendo estos pasos:<o:p></o:p></span></span></span></font></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><strong>1.</strong> Ingresa a nuestro sitio web www.marketingpersonal.com<o:p></o:p></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><strong>2.</strong> En la parte de abajo a la derecha encontrar&aacute;s el bot&oacute;n --&gt;<strong> CONT&Aacute;CTANOS<o:p></o:p></strong></span></p>
                                <p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><strong>3.</strong> Diligencia all&iacute; tus datos, se&ntilde;alas la opci&oacute;n &quot;Quejas y reclamos&quot; y en la parte que dice &quot;comentarios&quot; cuentas tu situaci&oacute;n y especificas la hora a la que deseas que nos comuniquemos contigo.<span style=""mso-spacerun: yes"">&nbsp; </span></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Actualizaci&oacute;n de&nbsp;Datos</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Para actualizar tus datos, te invito a ingresar a nuestro sitio web www.marketingpersonal.com opci&oacute;n &ldquo;Crea a tu pedido&rdquo; all&iacute; entras con tu Usuario y Contrase&ntilde;a, y das clic en el bot&oacute;n &ldquo;Actualizar datos&rdquo; el cual est&aacute; ubicado en la parte superior izquierda de la p&aacute;gina. <strong>=)</strong></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""></span></span></span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Actualizaci&oacute;n de&nbsp;Direcci&oacute;n</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Para actualizar tu direcci&oacute;n te invito a<strong style=""mso-bidi-font-weight: normal""> </strong>te invito a ingresar a nuestro sitio web www.marketingpersonal.com opci&oacute;n &ldquo;Crea a tu pedido&rdquo; all&iacute;&nbsp;ingresas con tu Usuario y Contrase&ntilde;a, y das clic en el bot&oacute;n &ldquo;Actualizar datos&rdquo; el cual est&aacute; ubicado en la parte superior izquierda de la p&aacute;gina, all&iacute; podr&aacute;s diligenciar tu nueva direcci&oacute;n.</span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&nbsp;</span></span></span></span></span></font></span></p>
                                <span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">
                                <p class=""MsoNormal"" style=""MARGIN: 0cm 0cm 10pt; LINE-HEIGHT: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Recuerda que para realizar esta actualizaci&oacute;n no debes tener saldo pendiente, adem&aacute;s debes hacerla cinco d&iacute;as antes de tu conferencia de cambios, para que la Gerente pueda realizar la aprobaci&oacute;n del cambio.</span></p>
                                <p class=""MsoNormal"" style=""MARGIN: 0cm 0cm 10pt; LINE-HEIGHT: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""></span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Comp&aacute;rteme por favor tu nueva direcci&oacute;n: (Departamento, Ciudad, Barrio y Direcci&oacute;n). &iquest;Me permites ingresar a la plataforma con tu usuario y contrase&ntilde;a para realizar el cambio? </span></span></p>
                                </span></span></span></span></span></font></span></td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">&quot;Quiero ser L&iacute;der&quot; </font></strong></a>&nbsp;
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Te cuento para ser una L&iacute;der MP primero debes ser Asesora nuestra, adem&aacute;s debes ser una persona con actitud pro-activa y comprometida para que ayudes a tu equipo de Asesoras con todo lo que necesiten, debes motivarlas para que sus pedidos sean muy buenos y as&iacute; puedan ganar sus premios en todas las campa&ntilde;as.</span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&nbsp;</span></span></span></span></span></font></span></p>
                                <span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">
                                <p class=""MsoNormal"" style=""MARGIN: 0cm 0cm 10pt; LINE-HEIGHT: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Tambi&eacute;n debes ser un ejemplo como l&iacute;der, ingresando excelentes pedidos en cada campa&ntilde;a y cumpliendo con las metas de pedidos efectivos y de ingresos, que tiene MP para tu zona.<span style=""mso-spacerun: yes"">&nbsp; </span>Es muy importante que est&eacute;s comprometida a incentivar a nuevas Asesoras para que ingresen a la compa&ntilde;&iacute;a y tengan consecutividad.</span></p>
                                <span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">
                                <p class=""MsoNormal"" style=""MARGIN: 0cm 0cm 10pt; LINE-HEIGHT: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Debes disponer de tu tiempo para ser un apoyo incondicional de la Gerente, sobre todo en las conferencias, para brindar acompa&ntilde;amiento al equipo de Asesoras con todas las solicitudes que tengan.</span></p>
                                <span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">
                                <p class=""MsoNormal"" style=""MARGIN: 0cm 0cm 10pt""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%"">Si cumples con lo que te acabo de contar, te invito a que te comuniques con tu Gerente y le cuentes que est&aacute;s muy comprometida y tienes toda la actitud para ser una de nuestras l&iacute;deres.</span></p>
                                </span></span></span></span></span></span></span></font></span></td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Gui&oacute;n de Suplantaci&oacute;n</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">XXX, con lo que nos cuentas sobre el desconocimiento de la relaci&oacute;n comercial existente con y Marketing Personal S.A., te informamos que la empresa tiene todos los soportes que la certifican, raz&oacute;n por la cual en caso de encontrarte absolutamente segura de no ser la persona que firma tales documentos, debes dirigirte a la Fiscal&iacute;a General de la Naci&oacute;n, a interponer la respectiva denuncia, pues es esta la entidad competente para determinar la falsedad de los mismos.</span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&nbsp;</span></span></span></span></span></font></span></p>
                                <span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">
                                <p class=""MsoNormal"" style=""MARGIN: 0cm 0cm 10pt; LINE-HEIGHT: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Una vez tengas copia de la respectiva denuncia, debes enviarla a los correos electr&oacute;nicos <a href=""mailto:informacion@marketingpersonal.com""><font color=""#0000ff"">informacion@marketingpersonal.com</font></a> y <a href=""mailto:jennyffer.tirador@marketingpersonal.com""><font color=""#0000ff"">jennyffer.tirador@marketingpersonal.com</font></a></span></p>
                                <span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">
                                <p class=""MsoNormal"" style=""MARGIN: 0cm 0cm 10pt; LINE-HEIGHT: normal""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Te recuerdo que lo anterior debe tramitarse &uacute;nica y exclusivamente si se encuentra segura de la ausencia de relaci&oacute;n comercial, pues de lo contrario incurrir&iacute;as en el delito de falsa denuncia, establecido en el art&iacute;culo 166 del C&oacute;digo Penal Colombiano.</span></p>
                                <span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">
                                <p class=""MsoNormal"" style=""MARGIN: 0cm 0cm 10pt""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-themecolor: text1"">Tambi&eacute;n te cuento que por este medio realizar&eacute; la alerta a nuestra &aacute;rea encargada, para que tu c&oacute;digo sea bloqueado de forma temporal.</span></p>
                                </span></span></span></span></span></span></span></font></span></td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">&quot;Quiero ser Modelo&quot;</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-themecolor: text1"">Nos encanta que est&eacute;s interesada en nuestra marca, te invito a enviar tu portafolio de fotos al correo </span><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%""><a href=""mailto:informacion@marketingpersonal.com""><font color=""#0000ff"">informacion@marketingpersonal.com</font></a></span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%"">&nbsp;</span></span></span></span></span></font></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%""><strong>Recomendaci&oacute;n:</strong> &quot;</span></span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; LINE-HEIGHT: 115%""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; LINE-HEIGHT: 115%; mso-themecolor: text1"">Te recomiendo que sean unas fotos con mucha actitud, donde muestres tu personalidad y te identifiques con la esencia de la marca&quot;.</span></span></span></span></span></span></font></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div class=""seccion""><a><strong><font color=""#003366"">Situaci&oacute;n Viral en Redes</font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><strong>Gui&oacute;n V&iacute;deo Viral por Mal Comportamiento o Maltrato: </strong></span></span></span></span></font></span></p>
                                <ol>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&nbsp;</span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Te cuento que nuestra &aacute;rea encargada ya tiene conocimiento de la situaci&oacute;n, y el d&iacute;a de hoy se va a realizar una reuni&oacute;n con las l&iacute;deres y gerentes de la zona para comprender mejor la situaci&oacute;n y tomar las medidas correctivas necesarias.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></span></span></font></span></div>
                                    </li>
                                    <li>
                                    <div class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""></span></span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">Te cuento que nuestra &aacute;rea encargada ya tiene conocimiento de la situaci&oacute;n, y se est&aacute;n realizando las investigaciones necesarias para comprender muy bien qu&eacute; pas&oacute; y tomar las medidas correctivas necesarias. <o:p></o:p></span></span></span></span></span></span></font></span>
                                    <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&nbsp;</span></span></span></span></span></font></span></p>
                                    <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""></span></span></span></span></span></font></span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><strong>Dejar Claro:</strong> Desde nuestra compa&ntilde;&iacute;a promovemos el respeto hacia los dem&aacute;s como uno de los valores m&aacute;s importantes para trabajar y crecer juntos. </span></o:p></span></span></span></span></span></font></span></p>
                                    <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;"">&nbsp;</span></o:p></span></span></span></span></span></font></span></p>
                                    <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""><font size=""2""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;; COLOR: black; mso-fareast-font-family: &quot;Arial Unicode MS&quot;; mso-bidi-font-weight: bold""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""><o:p><span style=""FONT-SIZE: 10pt; FONT-FAMILY: &quot;Arial&quot;,&quot;sans-serif&quot;""></span></o:p></span></span></span></span></span></font></span></p>
                                    </div>
                                    </li>
                                </ol>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <table cellspacing=""0"" cellpadding=""0"" width=""200"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    <table height=""27"" cellspacing=""1"" cellpadding=""1"" width=""300"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td bgcolor=""#003366""><font color=""#ffffff"" size=""2"" face=""Arial""><strong><font color=""#ffffff"">Informaci&oacute;n Relacionada</font></strong></font></td>
                            </tr>
                        </tbody>
                    </table>
                    <table cellspacing=""0"" cellpadding=""0"" width=""200"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>&nbsp;&nbsp; </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class=""seccion""><a><strong><font color=""#000080""><font color=""#ff0000"" size=""2"" face=""Arial"">&lt;&lt; Ver control de Cambios &gt;&gt;</font></font></strong></a>
                    <div class=""contenidoSeccion"">
                    <p>
                    <table cellspacing=""0"" cellpadding=""0"" width=""780"" align=""center"" summary="""" border=""0"">
                        <tbody>
                            <tr>
                                <td>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext"">
                                <table class=""MsoNormalTable"" style=""WIDTH: 450pt; mso-yfti-tbllook: 1184; mso-cellspacing: .7pt"" cellspacing=""1"" cellpadding=""0"" width=""600"" align=""center"" border=""1"">
                                    <tbody>
                                        <tr style=""mso-yfti-firstrow: yes; mso-yfti-irow: 0"">
                                            <td style=""BORDER-TOP-COLOR: #e0dfe3; BORDER-LEFT-COLOR: #e0dfe3; PADDING-BOTTOM: 0.75pt; BORDER-BOTTOM-COLOR: #e0dfe3; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-RIGHT-COLOR: #e0dfe3; PADDING-RIGHT: 0.75pt; BACKGROUND-COLOR: transparent"" bgcolor=""#003366"">
                                            <p class=""MsoNoSpacing"" style=""MARGIN: 0cm 0cm 0pt"" align=""center""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: 'Arial','sans-serif'""><strong><font color=""#ff0000"">Fecha del cambio<o:p></o:p></font></strong></span></p>
                                            </td>
                                            <td style=""BORDER-TOP-COLOR: #e0dfe3; BORDER-LEFT-COLOR: #e0dfe3; PADDING-BOTTOM: 0.75pt; BORDER-BOTTOM-COLOR: #e0dfe3; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-RIGHT-COLOR: #e0dfe3; PADDING-RIGHT: 0.75pt; BACKGROUND-COLOR: transparent"" bgcolor=""#003366"">
                                            <p class=""MsoNoSpacing"" style=""MARGIN: 0cm 0cm 0pt"" align=""center""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: 'Arial','sans-serif'""><strong><font color=""#ff0000"">Responsable del cambio<o:p></o:p></font></strong></span></p>
                                            </td>
                                            <td style=""BORDER-TOP-COLOR: #e0dfe3; BORDER-LEFT-COLOR: #e0dfe3; PADDING-BOTTOM: 0.75pt; BORDER-BOTTOM-COLOR: #e0dfe3; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-RIGHT-COLOR: #e0dfe3; PADDING-RIGHT: 0.75pt; BACKGROUND-COLOR: transparent"" bgcolor=""#003366"">
                                            <p class=""MsoNoSpacing"" style=""MARGIN: 0cm 0cm 0pt"" align=""center""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: 'Arial','sans-serif'""><strong><font color=""#ff0000"">Descripci&oacute;n del cambio<o:p></o:p></font></strong></span></p>
                                            </td>
                                        </tr>
                                        <tr style=""mso-yfti-irow: 4; mso-yfti-lastrow: yes"">
                                            <td style=""BORDER-TOP-COLOR: #e0dfe3; BORDER-LEFT-COLOR: #e0dfe3; PADDING-BOTTOM: 0.75pt; BORDER-BOTTOM-COLOR: #e0dfe3; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-RIGHT-COLOR: #e0dfe3; PADDING-RIGHT: 0.75pt; BACKGROUND-COLOR: transparent"">
                                            <p class=""MsoNoSpacing"" style=""MARGIN: 0cm 0cm 0pt""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: 'Arial','sans-serif'"">&nbsp;30/01/2019<o:p></o:p></span></p>
                                            </td>
                                            <td style=""BORDER-TOP-COLOR: #e0dfe3; BORDER-LEFT-COLOR: #e0dfe3; PADDING-BOTTOM: 0.75pt; BORDER-BOTTOM-COLOR: #e0dfe3; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-RIGHT-COLOR: #e0dfe3; PADDING-RIGHT: 0.75pt; BACKGROUND-COLOR: transparent"">
                                            <p class=""MsoNoSpacing"" style=""MARGIN: 0cm 0cm 0pt""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: 'Arial','sans-serif'"">&nbsp;Sandra G&oacute;mez G.<o:p></o:p></span></p>
                                            </td>
                                            <td style=""BORDER-TOP-COLOR: #e0dfe3; BORDER-LEFT-COLOR: #e0dfe3; PADDING-BOTTOM: 0.75pt; BORDER-BOTTOM-COLOR: #e0dfe3; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-RIGHT-COLOR: #e0dfe3; PADDING-RIGHT: 0.75pt; BACKGROUND-COLOR: transparent"">
                                            <p class=""MsoNoSpacing"" style=""MARGIN: 0cm 0cm 0pt""><span style=""FONT-SIZE: 10pt; FONT-FAMILY: 'Arial','sans-serif'"">&nbsp;Ingreso de informaci&oacute;n.</span></p>
                                            </td>
                                        </tr>
                                        <tr style=""mso-yfti-irow: 4; mso-yfti-lastrow: yes"">
                                            <td style=""BORDER-TOP-COLOR: #e0dfe3; BORDER-LEFT-COLOR: #e0dfe3; PADDING-BOTTOM: 0.75pt; BORDER-BOTTOM-COLOR: #e0dfe3; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-RIGHT-COLOR: #e0dfe3; PADDING-RIGHT: 0.75pt; BACKGROUND-COLOR: transparent"">&nbsp;</td>
                                            <td style=""BORDER-TOP-COLOR: #e0dfe3; BORDER-LEFT-COLOR: #e0dfe3; PADDING-BOTTOM: 0.75pt; BORDER-BOTTOM-COLOR: #e0dfe3; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-RIGHT-COLOR: #e0dfe3; PADDING-RIGHT: 0.75pt; BACKGROUND-COLOR: transparent"">&nbsp;</td>
                                            <td style=""BORDER-TOP-COLOR: #e0dfe3; BORDER-LEFT-COLOR: #e0dfe3; PADDING-BOTTOM: 0.75pt; BORDER-BOTTOM-COLOR: #e0dfe3; PADDING-TOP: 0.75pt; PADDING-LEFT: 0.75pt; BORDER-RIGHT-COLOR: #e0dfe3; PADDING-RIGHT: 0.75pt; BACKGROUND-COLOR: transparent"">&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </span><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""></span></p>
                                <p class=""MsoNormal"" style=""TEXT-ALIGN: justify; MARGIN: 0cm 0cm 0pt"" align=""justify""><span style=""FONT-SIZE: 12pt; FONT-FAMILY: Arial; COLOR: windowtext""></span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </p>
                    </div>
                    </div>
                    <div></div>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;&nbsp;&nbsp; </td>
                </tr>
                <tr>
                    <td>
                    <p align=""center""><font size=""2"" face=""Arial""><img alt="""" width=""790"" height=""50"" src=""/kb/uploads/editor_todos/line485/Image/pie-azul.png"" /></font></p>
                    </td>
                </tr>
            </tbody>
        </table>
        </p>"	"1"	"45618"	"29"	"2019-01-28 15:18:09"	"2019-01-30 13:22:33"	"87564"	"0"	"0"	"0"	"0"	"0"	"1"	"0"	\N	\N
        `
            })
        ];
        this.listadoPalabras = [
            'qué',
            "abono",
            "abreviaturas",
            "acceso",
            "acción",
            "acciones",
            "aclaracion",
            "acreditacion",
            "activacion",
            "actividad",
            "actividades",
            "actual",
            "actualización",
            "acuerdo",
            "además",
            "afiliación",
            "afiliaciones",
            "agendamiento",
            "agua",
            "ahora",
            "aire",
            "ajuste",
            "alertas",
            "algo",
            "algún",
            "alguna",
            "algunas",
            "alguno",
            "algunos",
            "alianza",
            "allí",
            "alta",
            "alternativa",
            "alto",
            "ambos",
            "amor",
            "amparo",
            "amparos",
            "anexo",
            "ante",
            "anterior",
            "antes",
            "antonio",
            "anulacion",
            "anular",
            "años",
            "apertura",
            "aplicación",
            "aplicativo",
            "aplicativos",
            "aportes",
            "aquel",
            "aquella",
            "aquellos",
            "aquí",
            "archivo",
            "arte",
            "articulo",
            "asesor",
            "asesores",
            "asesoria",
            "asignación",
            "asistencia",
            "asistencias",
            "atención",
            "atributos",
            "audiorespuesta",
            "aunque",
            "autenticación",
            "autorizacion",
            "autorizaciones",
            "avaya",
            "ayer",
            "ayudas",
            "baja",
            "bajo",
            "bancolombia",
            "barcelona",
            "base",
            "bastantes ",
            "beneficio",
            "beneficios",
            "bien",
            "bloqueo",
            "bloqueos",
            "boletín",
            "bono",
            "buen",
            "buena",
            "bueno",
            "búsqueda",
            "cabeza",
            "cada",
            "calculo",
            "calendario",
            "calidad",
            "calle",
            "cambio",
            "cambios",
            "camino",
            "campaña",
            "campañas",
            "campo",
            "canal",
            "canales",
            "cancelación",
            "capacidad",
            "capital",
            "capitulo",
            "cara",
            "características",
            "carlos",
            "carta",
            "cartas",
            "cartera",
            "casa",
            "casi",
            "caso",
            "casos",
            "catalogo",
            "categoría",
            "causales",
            "central",
            "centro",
            "centros",
            "cerca",
            "certificado",
            "certificados",
            "cesantias",
            "cesion",
            "chat",
            "cheques",
            "ciento",
            "cierre",
            "cierres",
            "cierto",
            "cinco",
            "circular",
            "citas",
            "ciudad",
            "claro",
            "clases",
            "cliente",
            "clientes",
            "club",
            "cobertura",
            "coberturas",
            "cobranzas",
            "cobro",
            "codificación",
            "código",
            "códigos",
            "colecciòn",
            "comisión",
            "comision",
            "comité",
            "cómo",
            "comparativo",
            "compra",
            "comunicado",
            "comunidad",
            "conceptos",
            "concurso",
            "condiciones",
            "conexión",
            "configuración",
            "confirmación",
            "consejo",
            "consignación",
            "consolidado",
            "constancia",
            "consulta",
            "consultar",
            "consultas",
            "contacto",
            "contactos",
            "contingencia",
            "contingencias",
            "contra",
            "control",
            "convenio",
            "convenios",
            "copagos",
            "copia",
            "correccion",
            "correo",
            "correos",
            "cosa",
            "cosas",
            "cotizacion",
            "creación",
            "crear",
            "crédito",
            "creditos",
            "creo",
            "cronograma",
            "cuadro",
            "cuádruple",
            "cuál",
            "cuáles",
            "cuáles",
            "cualquier",
            "cualquiera",
            "cuando",
            "cuánta",
            "cuántas",
            "cuánto",
            "cuántos",
            "cuarta",
            "cuatro",
            "cuenta",
            "cuentas",
            "cuerpo",
            "cultura",
            "cuota",
            "cursos",
            "cuya",
            "cuyo",
            "dado",
            "datos",
            "debe",
            "deben",
            "debito",
            "débitos",
            "decir",
            "decreto",
            "decretos",
            "décuple",
            "deducibles",
            "defensor",
            "definición",
            "definiciones",
            "delima",
            "demás",
            "demasiados",
            "dentro",
            "derecho",
            "desarrollo",
            "desbloqueo",
            "descarga",
            "descripcion",
            "descuento",
            "descuentos",
            "desde",
            "después",
            "deuda",
            "devolución",
            "días",
            "dice",
            "dicho",
            "diez",
            "diferentes",
            "difícil",
            "dijo",
            "diligenciamiento",
            "dinero",
            "dios",
            "dirección",
            "direccionamiento",
            "director",
            "directorio",
            "distribucion",
            "doble",
            "doce",
            "documentacion",
            "documentos",
            "dónde",
            "durante",
            "edad",
            "educación",
            "efecto",
            "ejemplo",
            "eliminación",
            "ella",
            "ellas",
            "ello",
            "ellos",
            "embargo",
            "emision",
            "empresa",
            "empresas",
            "encuesta",
            "endoso",
            "enfoque",
            "entonces",
            "entre",
            "entrega",
            "envio59",
            "equipo",
            "eran",
            "error",
            "errores",
            "esas",
            "escalamiento",
            "escalamientos",
            "escasos",
            "esos",
            "espacio",
            "españa",
            "español",
            "española",
            "especial",
            "especialidades",
            "esquema",
            "esta",
            "está",
            "estaba",
            "estaban",
            "estado",
            "estado",
            "estados",
            "están",
            "estar",
            "estas",
            "éste",
            "esto",
            "estos",
            "estoy",
            "estrategia",
            "estructura",
            "estudio",
            "evaluacion",
            "evento",
            "eventos",
            "evidente",
            "exámenes",
            "exclusiones",
            "existe",
            "expedicion",
            "extensiones",
            "extracto",
            "extractos",
            "factoring",
            "fallas",
            "falta",
            "familia",
            "fecha",
            "fechas",
            "feria",
            "festival",
            "figura",
            "final",
            "financiacion",
            "flash",
            "flash:",
            "fondo",
            "forma",
            "formas",
            "formato",
            "formatos",
            "frente",
            "fuera",
            "fueron",
            "fuerza",
            "funciones",
            "fusión",
            "futuro",
            "generacion",
            "general",
            "generalidades",
            "gente",
            "gestion",
            "giros",
            "glosario",
            "gobierno",
            "gonzález",
            "gran",
            "grandes",
            "grupo",
            "grupos",
            "guerra",
            "guía",
            "guias",
            "guion",
            "guiones",
            "haber",
            "había",
            "habían",
            "hablar",
            "hablemos,",
            "hace",
            "hacer",
            "hacia",
            "hacía",
            "hasta",
            "haya",
            "hecho",
            "hemos",
            "herramienta",
            "hijo",
            "historia",
            "historial",
            "historico",
            "hizo",
            "hoja",
            "hombre",
            "hombres",
            "hora",
            "horario",
            "horarios",
            "horas",
            "hubiera",
            "idea",
            "identificación",
            "igual",
            "imagen",
            "importante",
            "impreso",
            "impuesto",
            "incentivo",
            "incidente",
            "incluso",
            "inconveniente",
            "inconvenientes",
            "incremento",
            "indicativos",
            "índice",
            "información",
            "informe",
            "ingreso",
            "inscripción",
            "instalacion",
            "instituciones",
            "instrucciones",
            "instructivo",
            "instructivos",
            "interés",
            "interior",
            "internacional",
            "inventario",
            "investigación",
            "invitacion",
            "josé",
            "joven",
            "juan",
            "juego",
            "julio",
            "junto",
            "lado",
            "lanzamiento",
            "largo",
            "leasing",
            "levantamiento",
            "libertad",
            "libro",
            "licencia",
            "licuadora",
            "linea",
            "lineas",
            "liquidacion",
            "lista",
            "listado",
            "llamada",
            "llamadas",
            "llegar",
            "llegó",
            "luego",
            "lugar",
            "luis",
            "madre",
            "manejo",
            "manera",
            "mano",
            "manos",
            "mantenimiento",
            "manual",
            "manuales",
            "mañana",
            "mapa",
            "marcación",
            "maría",
            "matriz",
            "mayor",
            "mayoría",
            "media",
            "mediante",
            "medicamentos",
            "medicina",
            "medicos",
            "medida",
            "medio",
            "medios",
            "mejor",
            "menos",
            "mensajes",
            "menu",
            "mercado",
            "meses",
            "métodos",
            "méxico",
            "miembros",
            "mientras",
            "migracion",
            "millones",
            "ministro",
            "minutos",
            "misma",
            "mismo",
            "modelo",
            "modificación",
            "modificaciones",
            "modo",
            "modulo",
            "momento",
            "motivos",
            "movimiento",
            "mucha",
            "muchas",
            "mucho",
            "muchos",
            "muerte",
            "mujer",
            "mujeres",
            "multicase",
            "multiconsulta",
            "mundo",
            "música",
            "nacional",
            "nada",
            "nadie",
            "navegacion",
            "necesario",
            "necesidad",
            "negociacion",
            "ningún",
            "ninguna",
            "ninguno",
            "niño",
            "niños",
            "nivel",
            "noche",
            "nombre",
            "nónuple",
            "normas",
            "normatividad",
            "nosotros",
            "notas",
            "noti",
            "notificacion",
            "novedad",
            "novedades",
            "nuestra",
            "nuestro",
            "nuestros",
            "nueva",
            "nueva",
            "nuevas",
            "nuevas",
            "nueve",
            "nuevo",
            "nuevo",
            "nuevos",
            "nuevos",
            "número",
            "número",
            "números",
            "nunca",
            "objeciones",
            "obra",
            "obras",
            "observaciones",
            "ocho",
            "óctuple",
            "odontología",
            "oferta",
            "ofertas",
            "oficinas",
            "ojos",
            "olla",
            "once",
            "opcion",
            "opciones",
            "operaciones",
            "operadores",
            "orbitel",
            "orden",
            "organización",
            "otra",
            "otras",
            "otro",
            "otros",
            "otros",
            "pacientes",
            "padre",
            "página",
            "páginas",
            "pago",
            "pagos",
            "país",
            "países",
            "palabras",
            "pamd",
            "papel",
            "paquete",
            "paquetes",
            "para",
            "parametrización",
            "parece",
            "parte",
            "partido",
            "partir",
            "pasa",
            "pasado",
            "paso",
            "pasos",
            "pedido",
            "pensión",
            "pérdida",
            "perfil",
            "perfiles",
            "pero",
            "persona",
            "personal",
            "personas",
            "pesar",
            "pesetas",
            "pico",
            "piloto",
            "plan",
            "planeación",
            "planes",
            "planilla",
            "plantilla",
            "plantillas",
            "plus",
            "población",
            "poco",
            "pocos",
            "poder",
            "podía",
            "podría",
            "policía",
            "política",
            "políticas",
            "político",
            "poliza",
            "polizas",
            "porque",
            "portadas",
            "portafolio",
            "portafolio:",
            "portal",
            "posibilidad",
            "posible",
            "precios",
            "preguntas",
            "premios",
            "presencia",
            "presentacion",
            "presentaciones",
            "presidente",
            "preturno",
            "preturnos",
            "primer",
            "primera",
            "primero",
            "primeros",
            "principio",
            "problema",
            "problemas",
            "procedimiento",
            "procedimientos",
            "proceso",
            "procesos",
            "producción",
            "producto",
            "productos",
            "programa",
            "progracion",
            "programas",
            "promocion",
            "promociones",
            "pronto",
            "propia",
            "propio",
            "protección",
            "protocolo",
            "proveedor",
            "proveedores",
            "proyecto",
            "prueba",
            "pruebas",
            "público",
            "pueblo",
            "puede",
            "pueden",
            "puerta",
            "pues",
            "puesto",
            "punto",
            "puntos",
            "queja",
            "quejas",
            "quién",
            "quiénes",
            "quiere",
            "quinta",
            "quinto",
            "quíntuple",
            "radicación",
            "razón",
            "real",
            "realidad",
            "recaudo",
            "recaudos",
            "reclamacion",
            "reclamaciones",
            "reclamos",
            "recomendaciones",
            "reconocimiento",
            "recuperacion",
            "rediseño",
            "referidos",
            "reforma",
            "registro",
            "reglas",
            "reintegro",
            "relación",
            "relaciones",
            "renovación",
            "renta",
            "rentabilidad",
            "reporte",
            "reportes",
            "requisitos",
            "resolucion",
            "respecto",
            "respuesta",
            "resultados",
            "resumen",
            "retención",
            "retiro",
            "retiros",
            "revisión",
            "revista",
            "ruta",
            "rutas",
            "sabe",
            "saber",
            "salario",
            "saldos",
            "salud",
            "sector",
            "sedes",
            "según",
            "segunda",
            "segundo",
            "seguridad",
            "seguro",
            "seguros",
            "seis",
            "semana",
            "sentido",
            "señor",
            "séptima",
            "séptimo",
            "séptuple",
            "sera",
            "será",
            "sería",
            "serie",
            "servicio",
            "servicios",
            "sexta",
            "sexto",
            "séxtuple",
            "sido",
            "siempre",
            "siendo",
            "siete",
            "siglo",
            "sigue",
            "siguiente",
            "siniestros",
            "sino",
            "sistema",
            "situación",
            "sobre",
            "social",
            "sociedad",
            "solicitud",
            "solicitudes",
            "solo",
            "solución",
            "soporte",
            "sucursal",
            "sucursales",
            "suspension",
            "tabla",
            "talleres",
            "también",
            "tampoco",
            "tanto",
            "tantos",
            "tarde",
            "tarifa",
            "tarifas",
            "tarjeta",
            "tarjetas",
            "tasa",
            "tasas",
            "telefonos",
            "telemercadeo",
            "tema",
            "temporada",
            "tener",
            "tengo",
            "tenía",
            "tercer",
            "tercera",
            "tercero",
            "tercio",
            "terminologia",
            "tiempo",
            "tiempos",
            "tiene",
            "tienen",
            "tierra",
            "tipificación",
            "tipo",
            "tipos",
            "tips",
            "toda",
            "todas",
            "todavía",
            "todo",
            "todos",
            "toma",
            "topes",
            "total",
            "trabajo",
            "tramite",
            "tramites",
            "transacciones",
            "transferencia",
            "transferencias",
            "transpromo",
            "tras",
            "traslado",
            "traslados",
            "trata",
            "través",
            "tres",
            "triple",
            "turnos",
            "tuvo",
            "ubicacion",
            "última",
            "último",
            "últimos",
            "unas",
            "único",
            "unidos",
            "unos",
            "urgencias",
            "usted",
            "usuarios",
            "validación",
            "validaciones",
            "valor",
            "valores",
            "varios",
            "veces",
            "vehículos",
            "venta",
            "verdad",
            "verificacion",
            "vida",
            "vigencia",
            "vista",
            "visto",
            "vivamos:",
            "volante",
            "zona",
            "zonas"
        ];
    }
}


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/guards/home.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/home.guard.ts ***!
  \**************************************/
/*! exports provided: HomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function() { return HomeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeGuard = class HomeGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/app']);
            return false;
        }
        else {
            return true;
        }
    }
};
HomeGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeGuard);



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard, HomeGuard, LineGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _home_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.guard */ "./src/app/guards/home.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function() { return _home_guard__WEBPACK_IMPORTED_MODULE_1__["HomeGuard"]; });

/* harmony import */ var _line_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line.guard */ "./src/app/guards/line.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineGuard", function() { return _line_guard__WEBPACK_IMPORTED_MODULE_2__["LineGuard"]; });






/***/ }),

/***/ "./src/app/guards/line.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/line.guard.ts ***!
  \**************************************/
/*! exports provided: LineGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineGuard", function() { return LineGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LineGuard = class LineGuard {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    canActivate(next, state) {
        // https://stackoverflow.com/questions/43698032/angular-how-to-update-queryparams-without-changing-route      
        if (next.queryParamMap.has('line')) {
            return true;
        }
        else {
            return false;
        }
    }
};
LineGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LineGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], LineGuard);



/***/ }),

/***/ "./src/app/local-storage.ts":
/*!**********************************!*\
  !*** ./src/app/local-storage.ts ***!
  \**********************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
class LocalStorage {
    constructor() {
    }
    postSuggestion(suggestion) {
        let suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
        suggestions.push(suggestion);
        localStorage.setItem('suggestions', JSON.stringify(suggestions));
    }
    getSuggestions(input) {
        let suggestions = (JSON.parse(localStorage.getItem('suggestions')) || []);
        if (typeof input == 'string') {
            return suggestions.filter(x => x.match(`^${input}.*$`));
        }
        else if (typeof input == 'number') {
            return suggestions.slice(0, input);
        }
    }
    getArticles(input) {
        let articles = (JSON.parse(localStorage.getItem('articles')) || []);
        return articles;
    }
    getArticle(articleId) {
        let articles = (JSON.parse(localStorage.getItem('articles')) || []);
        return articles.find(article => article.id == articleId);
    }
    postArticles(articles) {
        let articulos = (JSON.parse(localStorage.getItem('articles')) || []);
        localStorage.setItem('articles', JSON.stringify(articulos.concat(articles)));
        return articles;
    }
    postLike(articleId, userid) {
        let articles = (JSON.parse(localStorage.getItem('articles')) || []);
        articles.map(article => {
            if (article.id == articleId) {
                article.likes.push(userid);
            }
            return article;
        });
        localStorage.setItem('articles', JSON.stringify(articles));
        return articles.find(x => x.id == articleId).likes;
    }
    deleteLike(articleId, userid) {
        let articles = (JSON.parse(localStorage.getItem('articles')) || []);
        articles.map(article => {
            if (article.id == articleId) {
                let index = article.likes.findIndex(x => x == userid);
                console.log(index);
                if (index > -1) {
                    article.likes.splice(index, 1);
                }
            }
            return article;
        });
        localStorage.setItem('articles', JSON.stringify(articles));
        return articles.find(x => x.id == articleId).likes;
    }
    postDisLike(articleId, userid) {
        let articles = (JSON.parse(localStorage.getItem('articles')) || []);
        articles.map(article => {
            if (article.id == articleId) {
                article.disLikes.push(userid);
            }
            return article;
        });
        localStorage.setItem('articles', JSON.stringify(articles));
        return articles.find(x => x.id == articleId).disLikes;
    }
    deleteDisLike(articleId, userid) {
        let articles = (JSON.parse(localStorage.getItem('articles')) || []);
        articles.map(article => {
            if (article.id == articleId) {
                let index = article.disLikes.findIndex(x => x == userid);
                if (index > -1) {
                    article.disLikes.splice(index, 1);
                }
            }
            return article;
        });
        localStorage.setItem('articles', JSON.stringify(articles));
        return articles.find(x => x.id == articleId).disLikes;
    }
}


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





var EndPoints;
(function (EndPoints) {
    EndPoints["suggestions"] = "suggestions";
    EndPoints["articles"] = "articles";
    EndPoints["article"] = "articles/:id";
    EndPoints["login"] = "authenticate";
    EndPoints["userLines"] = "users/:id/lines";
    EndPoints["userSubLines"] = "users/:id/lines/:lineId";
    EndPoints["categories"] = "lines/:lineId/subLines/:SublineId/categories";
    EndPoints["likes"] = "articles/:id/likes";
    EndPoints["disLikes"] = "articles/:id/disLikes";
})(EndPoints || (EndPoints = {}));
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    /**
    * Gets a list of common search
    * . If suggestion is defined get related searchs, If not return a list of 10 common searchs
    * @param suggestion string
    * @returns Observable<string[]>
    */
    getSuggestions(suggestion) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => {
            if (suggestion) {
                return this.http.get(EndPoints.suggestions, { params: { input: suggestion }, observe: "body" });
            }
            else {
                return this.http.get(EndPoints.suggestions, { observe: "body" });
            }
        }));
    }
    /**
    * save a new search
    * @param suggestion string
    * @returns Observable<string[]>
    */
    postSuggestion(suggestion) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => this.http.post(EndPoints.suggestions, suggestion, { observe: "body" })));
    }
    /**
    * ### retorna una lista de articulos que se relacionan con la busqueda pasada como argumento
    * ***
    * @param input `string`
    *
    * Testo que se va a utilizar para realizar la busqueda
    * ***
    * @returns Observable<string[]>
    *
    * Observable que retorna un array de articulos
    */
    getArticles(params) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => {
            return this.http.get(EndPoints.articles, { params: params, observe: "body" });
        }));
    }
    getArticle(articleId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => {
            return this.http.get(EndPoints.article.replace(':id', articleId), { observe: "body" });
        }));
    }
    postArticles(articles) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => this.http.post(EndPoints.articles, articles, { observe: "body" })));
    }
    getCategories(lineId, sublineId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => {
            return this.http.get(EndPoints.categories.replace(':lineId', lineId).replace(':SublineId', sublineId), { observe: "body" });
        }));
    }
    login(user, pass) {
        console.log();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => this.http.post('api/' + EndPoints.login, { username: user, password: pass }, { observe: "body" })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(val => {
            if (val.tokem) {
                localStorage.setItem('token', val.tokem);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(val => {
            if (val.tokem) {
                return true;
            }
            else {
                return false;
            }
        }));
    }
    getUserLines(userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => {
            return this.http.get(EndPoints.userLines.replace(':id', userId), { observe: "body" });
        }));
    }
    getUserSubLines(userId, line) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => {
            return this.http.get(EndPoints.userSubLines.replace(':id', userId).replace(':lineId', line), { observe: "body" });
        }));
    }
    postLike(userId, articleId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => this.http.post(EndPoints.likes.replace(':id', articleId), { user: userId }, { observe: "body" })));
    }
    deleteLike(userId, articleId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => this.http.delete(EndPoints.likes.replace(':id', articleId), { params: { user: userId }, observe: "body" })));
    }
    postDisLike(userId, articleId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => this.http.post(EndPoints.disLikes.replace(':id', articleId), { user: userId }, { observe: "body" })));
    }
    deleteDisLike(userId, articleId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => this.http.delete(EndPoints.disLikes.replace(':id', articleId), { params: { user: userId }, observe: "body" })));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiService);



/***/ }),

/***/ "./src/app/services/events.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/events.service.ts ***!
  \********************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let EventsService = class EventsService {
    constructor() {
        this.newSearchSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.newQuerySource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.newSelectedLineSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ line: '', subLine: '' });
        this.onNewSearch$ = this.newSearchSource.asObservable();
        this.onNewQuery$ = this.newQuerySource.asObservable();
        this.onNewSelectedLine$ = this.newSelectedLineSource.asObservable();
    }
    newSearch(input) {
        this.newSearchSource.next(input);
    }
    newQuery(input) {
        this.newQuerySource.next(input);
    }
    newSelectedLine(newLine) {
        this.newSelectedLineSource.next(newLine);
    }
};
EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EventsService);



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: ApiService, EventsService, mockServerService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.service */ "./src/app/services/events.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return _events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"]; });

/* harmony import */ var _mock_back_end_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-back-end.service */ "./src/app/services/mock-back-end.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockServerService", function() { return _mock_back_end_service__WEBPACK_IMPORTED_MODULE_2__["mockServerService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });







/***/ }),

/***/ "./src/app/services/mock-back-end.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/mock-back-end.service.ts ***!
  \***************************************************/
/*! exports provided: mockServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockServerService", function() { return mockServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage */ "./src/app/local-storage.ts");





let MockBackEndService = class MockBackEndService {
    constructor() {
        this.BBDD = new _local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]();
    }
    //let articulos: Tarticles = JSON.parse(localStorage.getItem('articulos')) || [];
    /**
    * Conecta cada url con su respectivo metodo en la base de datos
    * @param req HttpRequest<string>
    * @returns Observable<HttpEvent<string[]>>
    */
    enrutar(req, next) {
        let { url, method, body, params } = req;
        if (url.match('^suggestions$') && method == 'POST') {
            this.BBDD.postSuggestion(body);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: this.BBDD.getSuggestions(10)
            }));
        }
        if (url.match('^suggestions$') && method == 'GET') {
            if (params.has('input')) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                    status: 200,
                    body: this.BBDD.getSuggestions(params.get('input'))
                }));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                    status: 200,
                    body: this.BBDD.getSuggestions(10)
                }));
            }
        }
        if (url.match('^articles$') && method == 'GET') {
            if (params.has('query')) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                    status: 200,
                    body: this.BBDD.getArticles(params.get('query'))
                }));
            }
            else if (params.has('category')) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                    status: 200,
                    body: this.BBDD.getArticles(params.get('category'))
                }));
            }
        }
        if (url.match('^articles$') && method == 'POST') {
            console.log(body);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: this.BBDD.postArticles(body)
            }));
        }
        if (url.startsWith('articles/') && method == 'GET') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: this.BBDD.getArticle(url.split('/')[1])
            }));
        }
        if (url.match('^api/authenticate$') && method == 'POST') {
            return next.handle(req);
            // if(body.user == 'julian' && body.pass == '123'){
            //   return of(new HttpResponse({
            //     status: 200,
            //     body: {tokem:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikp1bGlhbiIsInJvbCI6ImFkbWluIiwibGluZSI6ImFsbCIsInN1YkxpbmUiOiIifQ.SkMKVjzCyzHQTvHq7MvEf_VCBldjhdHnLm6-1WBiodk"}
            //   }))
            // }
        }
        if (url.match("^users/.*/lines$") && method == 'GET') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: ["Bancolombia", "Sura", "DirecTV"]
            }));
        }
        if (url.match("^users/.*/lines/.*$") && method == 'GET') {
            let subLines = [];
            switch (url.split('/')[3]) {
                case 'Bancolombia':
                    subLines = ["Atencion al cliente", "Ventas", "Soporte"];
                    break;
                case 'Sura':
                    subLines = ["Citas", "Urgencias"];
                    break;
                case 'DirecTV':
                    subLines = ["Soporte", "SAC"];
                    break;
                default:
                    subLines = ["Atencion al cliente", "Ventas", "Soporte"];
                    break;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: { name: url.split('/')[3], sublines: subLines }
            }));
        }
        if (url.match("^lines/.*/subLines/.*/categories$") && method == 'GET') {
            let intPrueba = (Math.random() * 100).toPrecision(1);
            let categories = [
                {
                    name: `categoria ${intPrueba}`,
                    order: 1,
                    desplegado: true,
                    subcategories: [{
                            name: "sub Categoria 1",
                            order: 1,
                            desplegado: true
                        }, {
                            name: "sub Categoria 2",
                            order: 1,
                            desplegado: true
                        }
                    ]
                }, {
                    name: "categoria 2",
                    order: 1,
                    desplegado: true,
                    subcategories: [{
                            name: "sub Categoria 1",
                            order: 1,
                            desplegado: true
                        }, {
                            name: "sub Categoria 2",
                            order: 1,
                            desplegado: true
                        }
                    ]
                }, {
                    name: "categoria 3",
                    order: 1,
                    desplegado: true,
                    subcategories: [{
                            name: "sub Categoria 1",
                            order: 1,
                            desplegado: true,
                            subcategories: [{
                                    name: "sub Categoria 1",
                                    order: 1,
                                    desplegado: true,
                                    subcategories: [{
                                            name: "sub Categoria 1",
                                            order: 1,
                                            desplegado: true
                                        }, {
                                            name: "sub Categoria 2",
                                            order: 1,
                                            desplegado: true
                                        }
                                    ]
                                }, {
                                    name: "sub Categoria 2",
                                    order: 1,
                                    desplegado: true
                                }
                            ]
                        }, {
                            name: "sub Categoria 2",
                            order: 1,
                            desplegado: true
                        }
                    ]
                },
            ];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: categories
            }));
        }
        if (url.match('^articles/.*/likes$') && method == 'POST') {
            let articleId = url.split('/')[1];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: this.BBDD.postLike(articleId, body['user'])
            }));
        }
        if (url.match('^articles/.*/disLikes$') && method == 'POST') {
            let articleId = url.split('/')[1];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: this.BBDD.postDisLike(articleId, body['user'])
            }));
        }
        if (url.match('^articles/.*/likes$') && method == 'DELETE') {
            let articleId = url.split('/')[1];
            let userId = params.get('user');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: this.BBDD.deleteLike(articleId, userId)
            }));
        }
        if (url.match('^articles/.*/disLikes$') && method == 'DELETE') {
            let articleId = url.split('/')[1];
            let userId = params.get('user');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                status: 200,
                body: this.BBDD.deleteDisLike(articleId, userId)
            }));
        }
    }
    intercept(req, next) {
        return this.enrutar(req, next);
    }
    ;
};
MockBackEndService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MockBackEndService);
const mockServerService = { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: MockBackEndService, multi: true };


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/app/services/index.ts");




const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
let UserService = class UserService {
    constructor(events) {
        this.events = events;
    }
    get usuario() {
        return helper.decodeToken(localStorage.getItem("token"));
    }
    set selectedSubLine(newSubLine) {
        this._selectedSubLine = newSubLine;
        this.events.newSelectedLine(newSubLine);
    }
    get selectedSubLine() {
        return this._selectedSubLine;
    }
};
UserService.ctorParameters = () => [
    { type: _index__WEBPACK_IMPORTED_MODULE_3__["EventsService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_index__WEBPACK_IMPORTED_MODULE_3__["EventsService"]])
], UserService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\julian.vargas.a\Documents\multiConsulta\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map