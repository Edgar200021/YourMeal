/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Services/getData.js":
/*!************************************!*\
  !*** ./src/js/Services/getData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
class GetData {
  async render(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Произошла ошибка, код ошибки${res.status}`);
    }
    return await res.json();
  }
}
const getData = new GetData();

/***/ }),

/***/ "./src/js/components/App/App.js":
/*!**************************************!*\
  !*** ./src/js/components/App/App.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Header */ "./src/js/components/Header/index.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Main */ "./src/js/components/Main/index.js");


class App {
  render() {
    _Header__WEBPACK_IMPORTED_MODULE_0__["default"].render();
    _Main__WEBPACK_IMPORTED_MODULE_1__["default"].render();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App());

/***/ }),

/***/ "./src/js/components/Header/Header.js":
/*!********************************************!*\
  !*** ./src/js/components/Header/Header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ "./src/js/constants/root.js");
/* harmony import */ var _assets_icons_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/header-logo.svg */ "./src/assets/icons/header-logo.svg");
/* harmony import */ var _assets_icons_burger_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/burger.svg */ "./src/assets/icons/burger.svg");



class Header {
  render() {
    const header = `
		<header class="header">
		<div class="header__inner">
			<div class="header__logo-box">
				<a href="#" class="header__logo-link">
				<img src=${_assets_icons_header_logo_svg__WEBPACK_IMPORTED_MODULE_1__} alt="Header logotip" class="header__logo-icon" />
				</a>
			</div>

			<div class="header__content">
				<div class="header__content-img__box">
				<img src=${_assets_icons_burger_svg__WEBPACK_IMPORTED_MODULE_2__} alt="Big Burger" class="header__content-img">
				</div>

				<div class="header__content-info">
				<h1 class="header__title first-title"><span class="header__suptitle">Только самые</span><br>
					<span class="header__subtitle">сочные бургеры!</span>
				</h1>
				<span class="header__descr">Бесплатная доставка от 599₽</span>
				</div>
			</div>
			</div>
		</header>
		`;
    _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT_INDEX.insertAdjacentHTML('beforeend', header);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Header());

/***/ }),

/***/ "./src/js/components/Header/index.js":
/*!*******************************************!*\
  !*** ./src/js/components/Header/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/js/components/Header/Header.js");


/***/ }),

/***/ "./src/js/components/Main/Main.js":
/*!****************************************!*\
  !*** ./src/js/components/Main/Main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Nav */ "./src/js/components/Nav/index.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Products */ "./src/js/components/Products/index.js");
/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/root */ "./src/js/constants/root.js");



class Main {
  async render() {
    const main = `
			<main class="main">
				<div class="main__container">
					${_Nav__WEBPACK_IMPORTED_MODULE_0__["default"].render()}
					${await _Products__WEBPACK_IMPORTED_MODULE_1__["default"].render()} 
				</div>
			</main>
		`;
    _constants_root__WEBPACK_IMPORTED_MODULE_2__.ROOT_INDEX.insertAdjacentHTML('beforeend', main);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Main());

/***/ }),

/***/ "./src/js/components/Main/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/Main/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Main__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/js/components/Main/Main.js");


/***/ }),

/***/ "./src/js/components/NavItem/NavItem.js":
/*!**********************************************!*\
  !*** ./src/js/components/NavItem/NavItem.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class NavItem {
  render(background, text) {
    const item = `
			<li class="nav__item">
				<button style="background-image: url(${background})" class="nav__btn">${text}</button>
			</li>
		`;
    return item;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new NavItem());

/***/ }),

/***/ "./src/js/components/Nav/Nav.js":
/*!**************************************!*\
  !*** ./src/js/components/Nav/Nav.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NavItem/NavItem */ "./src/js/components/NavItem/NavItem.js");
/* harmony import */ var _assets_icons_burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/burger.png */ "./src/assets/icons/burger.png");
/* harmony import */ var _assets_icons_onion_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/onion.png */ "./src/assets/icons/onion.png");
/* harmony import */ var _assets_icons_hotdog_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/hotdog.png */ "./src/assets/icons/hotdog.png");
/* harmony import */ var _assets_icons_fast_food_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/fast-food.png */ "./src/assets/icons/fast-food.png");
/* harmony import */ var _assets_icons_burito_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/burito.png */ "./src/assets/icons/burito.png");
/* harmony import */ var _assets_icons_pizza_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/icons/pizza.png */ "./src/assets/icons/pizza.png");
/* harmony import */ var _assets_icons_noodles_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/icons/noodles.png */ "./src/assets/icons/noodles.png");
/* harmony import */ var _assets_icons_doughnut_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/icons/doughnut.png */ "./src/assets/icons/doughnut.png");
/* harmony import */ var _assets_icons_ketchup_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/icons/ketchup.png */ "./src/assets/icons/ketchup.png");










class Nav {
  render() {
    const nav = `
		<nav class="nav">
			<ul class="nav__list">
				${_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"].render(_assets_icons_burger_png__WEBPACK_IMPORTED_MODULE_1__, 'Бургеры')}
				${_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"].render(_assets_icons_onion_png__WEBPACK_IMPORTED_MODULE_2__, 'Закуски')}
				${_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"].render(_assets_icons_hotdog_png__WEBPACK_IMPORTED_MODULE_3__, 'Хот-доги')}
				${_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"].render(_assets_icons_fast_food_png__WEBPACK_IMPORTED_MODULE_4__, 'Комбо')}
				${_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"].render(_assets_icons_burito_png__WEBPACK_IMPORTED_MODULE_5__, 'Шаурма')}
				${_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"].render(_assets_icons_pizza_png__WEBPACK_IMPORTED_MODULE_6__, 'Пицца')}
				${_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"].render(_assets_icons_noodles_png__WEBPACK_IMPORTED_MODULE_7__, 'Вок')}
				${_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"].render(_assets_icons_doughnut_png__WEBPACK_IMPORTED_MODULE_8__, 'Десерты')}
				${_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_0__["default"].render(_assets_icons_ketchup_png__WEBPACK_IMPORTED_MODULE_9__, 'Соусы')}
			</ul>
		</nav>
		`;
    return nav;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Nav());

/***/ }),

/***/ "./src/js/components/Nav/index.js":
/*!****************************************!*\
  !*** ./src/js/components/Nav/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ "./src/js/components/Nav/Nav.js");


/***/ }),

/***/ "./src/js/components/Products/Products.js":
/*!************************************************!*\
  !*** ./src/js/components/Products/Products.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Services_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/getData */ "./src/js/Services/getData.js");
/* harmony import */ var _constants_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/url */ "./src/js/constants/url.js");
/* harmony import */ var _src_assets_img_burgers_burger_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/assets/img/burgers/burger-1.jpg */ "./src/assets/img/burgers/burger-1.jpg");



class Products {
  async render() {
    const data = await _Services_getData__WEBPACK_IMPORTED_MODULE_0__.getData.render(_constants_url__WEBPACK_IMPORTED_MODULE_1__.PRODUCTS_URL);
    console.log('data', data);
    let productElement = '';
    data.forEach(_ref => {
      let {
        image,
        price,
        title,
        weight,
        category
      } = _ref;
      if (category !== 'burger') {
        return;
      }
      console.log(image);
      productElement += `
				<li class="product">
					<div class="product__img-box">
						<img src="${_src_assets_img_burgers_burger_1_jpg__WEBPACK_IMPORTED_MODULE_2__}" class="product__img">
					</div>
					<div class="product__info">
						<span class="product__price">${price}₽</span>
						<h4 class="product__descr fourth-title">${title}</h4>
						<span class="product__weight">${weight}</span>
					</div>
				</li>
			`;
    });
    const productWrapper = `<ul class="product__container">${productElement}</ul>`;
    return productWrapper;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Products());

/***/ }),

/***/ "./src/js/components/Products/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/Products/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Products__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "./src/js/components/Products/Products.js");


/***/ }),

/***/ "./src/js/constants/root.js":
/*!**********************************!*\
  !*** ./src/js/constants/root.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROOT_INDEX: () => (/* binding */ ROOT_INDEX)
/* harmony export */ });
const ROOT_INDEX = document.querySelector('#root');


/***/ }),

/***/ "./src/js/constants/url.js":
/*!*********************************!*\
  !*** ./src/js/constants/url.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCTS_URL: () => (/* binding */ PRODUCTS_URL)
/* harmony export */ });
const PRODUCTS_URL = 'http://localhost:3000/data';


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/sass/style.sass":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/sass/style.sass ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Nunito-Regular.woff */ "./src/assets/fonts/Nunito-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Nunito-Regular.woff2 */ "./src/assets/fonts/Nunito-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Nunito-SemiBold.woff */ "./src/assets/fonts/Nunito-SemiBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Nunito-SemiBold.woff2 */ "./src/assets/fonts/Nunito-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Nunito-ExtraBold.woff */ "./src/assets/fonts/Nunito-ExtraBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Nunito-ExtraBold.woff2 */ "./src/assets/fonts/Nunito-ExtraBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml, %3Csvg width=%27200%27 height=%27200%27 viewBox=%270 0 200 2--%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%27100%27 fill=%27%23FFAB08%27/%3E%3C/svg%3E */ "data:image/svg+xml, %3Csvg width=%27200%27 height=%27200%27 viewBox=%270 0 200 2--%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%27100%27 fill=%27%23FFAB08%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  -webkit-text-decoration: underline;
  text-decoration: underline; /* 2 */
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  color: #000000;
  background-color: #F9F9F9;
}

h1, h2, h3, h4, h5, h6, p {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  padding: 0;
}

ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
}

img, svg {
  max-width: 100%;
  height: auto;
}

#root {
  display: grid;
  grid-template-rows: minmax(50rem, 60rem) 1fr min-content;
}

@font-face {
  font-family: "nunito";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "nunito";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff");
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "nunito";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff");
  src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff2");
  font-weight: 800;
  font-style: normal;
}
html {
  font-size: 62.5%;
}

body {
  font-family: "nunito", sans-serif;
}

.first-title {
  font-size: 5rem;
  line-height: 120%;
  font-weight: 800;
  font-family: family;
}

.nav {
  grid-column: center-start/center-end;
  overflow: hidden;
  margin-bottom: 5rem;
}
.nav__list {
  display: flex;
  -moz-column-gap: 2.4rem;
       column-gap: 2.4rem;
  overflow-x: auto;
}
.nav__item {
  min-width: 13rem;
  max-width: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.nav__btn {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 8px 14px 8px 50px;
  background-color: #FFAB08;
  background-size: 24px;
  background-repeat: no-repeat;
  background-color: #ffffff;
  border-radius: 50px;
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 400;
  font-family: family;
  background-position: left 14px top 50%;
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.nav__btn:hover {
  transform: scale(0.9);
  background-color: #FFAB08;
}
.nav__btn_active {
  background-color: #FFAB08;
}

.product {
  max-width: 32.4rem;
  padding: 12px;
  display: grid;
  grid-template-rows: minmax(22rem, min-content) 1fr min-content;
}
.product__img-box {
  margin-bottom: 1.6rem;
}
.product__info {
  margin-bottom: 8px;
}
.product__price {
  margin-bottom: 8px;
  font-size: 2.4rem;
  line-height: 100%;
  font-weight: 600;
  font-family: family;
}
.product__descr {
  font-size: 1.6rem;
  line-height: 130%;
  font-weight: 400;
  font-family: family;
}
.product__weight {
  font-size: 1.6rem;
  line-height: 130%;
  font-weight: 600;
  font-family: family;
  color: #B1B1B1;
}

.header {
  padding-top: 2.4rem;
  margin-bottom: 4rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-repeat: no-repeat;
  background-size: 250vw;
  background-position: bottom;
}
.header__inner {
  max-width: 50%;
  margin: 0 auto;
}
.header__logo-box {
  position: relative;
  text-align: center;
  margin-bottom: 5rem;
}
.header__logo-icon {
  transition: transform 0.3s ease;
}
.header__logo-link {
  transition: transform 0.3s ease-in;
}
.header__logo-link:hover {
  display: inline-block;
  transform: scale(1.1);
}
.header__content {
  display: flex;
  align-items: center;
  -moz-column-gap: 6rem;
       column-gap: 6rem;
}
.header__content-img__box {
  position: relative;
}
.header__content-img__box::after {
  content: "";
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 21rem;
  height: 25px;
  background-color: #F2A40C;
  border-radius: 50%;
}
.header__title {
  margin-bottom: 5rem;
  color: #ffffff;
}
.header__subtitle {
  color: #FF7020;
}
.header__descr {
  color: #ffffff;
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 400;
  font-family: family;
}

.main__container {
  display: grid;
  grid-template-columns: [full-start] minmax(7.5rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 16rem) [col-end]) [center-end] minmax(7.5rem, 1fr) [full-end];
}

.btn {
  padding: 12px;
  border: none;
  font-size: 1.6rem;
  line-height: 100%;
  font-weight: 400;
  font-family: family;
  border-radius: 12px;
  background: none;
  background-color: #F2F2F3;
  cursor: pointer;
  transition: transorm 0.3s ease, background-color 0.3s ease;
}
.btn:hover {
  transform: scale(0.9);
  background-color: #bdbdc2;
}`, "",{"version":3,"sources":["webpack://./src/sass/libs/Normalize.scss","webpack://./../../%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0/YourMeal/src/sass/style.sass","webpack://./src/sass/base/_base.sass","webpack://./src/sass/abstract/_variables.sass","webpack://./src/sass/base/_typography.sass","webpack://./src/sass/abstract/_mixins.sass","webpack://./src/sass/components/_nav.sass","webpack://./src/sass/components/_product.sass","webpack://./src/sass/layouts/_header.sass","webpack://./src/sass/layouts/_main-container.sass","webpack://./src/sass/utilities/_utils.sass"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,8BAAA,EAAA,MAAA;ACFF;;ADKA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;ACJF;;ADOA;;EAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;ACNF;;ADSA;+EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACRF;;ADWA;;;EAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;ACTF;;ADYA;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;ACXF;;ADcA;;;EAAA;AAKA;EACE,mBAAA,EAAA,MAAA;EACA,kCAAA;EAAA,0BAAA,EAAA,MAAA;EACA,0BAAA;EAAA,yCAAA;UAAA,iCAAA,EAAA,MAAA;ACZF;;ADeA;;EAAA;AAIA;;EAEE,mBAAA;ACbF;;ADgBA;;;EAAA;AAKA;;;EAGE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;ACdF;;ADiBA;;EAAA;AAIA;EACE,cAAA;ACfF;;ADkBA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;AChBF;;ADmBA;EACE,eAAA;AChBF;;ADmBA;EACE,WAAA;AChBF;;ADmBA;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;AClBF;;ADqBA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;ACpBF;;ADuBA;;;EAAA;AAKA;QACQ,MAAA;EACN,iBAAA;ACrBF;;ADwBA;;;EAAA;AAKA;SACS,MAAA;EACP,oBAAA;ACtBF;;ADyBA;;EAAA;AAIA;;;;EAIE,0BAAA;ACvBF;;AD0BA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;ACxBF;;AD2BA;;EAAA;AAIA;;;;EAIE,8BAAA;ACzBF;;AD4BA;;EAAA;AAIA;EACE,8BAAA;AC1BF;;AD6BA;;;;;EAAA;AAOA;EACE,sBAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AC3BF;;AD8BA;;EAAA;AAIA;EACE,wBAAA;AC5BF;;AD+BA;;EAAA;AAIA;EACE,cAAA;AC7BF;;ADgCA;;;EAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AC9BF;;ADiCA;;EAAA;AAIA;;EAEE,YAAA;AC/BF;;ADkCA;;;EAAA;AAKA;EACE,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AChCF;;ADmCA;;EAAA;AAIA;EACE,wBAAA;ACjCF;;ADoCA;;;EAAA;AAKA;EACE,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;AClCF;;ADqCA;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;ACpCF;;ADuCA;;EAAA;AAIA;EACE,kBAAA;ACrCF;;ADwCA;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;ACvCF;;AD0CA;;EAAA;AAIA;EACE,aAAA;ACxCF;;ACnTA;EACC,sBAAA;ADsTD;;ACpTA;EACC,SAAA;EACA,UAAA;EACA,cCJY;EDKZ,yBCHmB;AF0TpB;;ACrTA;EACC,kBAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;ADwTD;;ACtTA;EACC,gBAAA;EACA,SAAA;EACA,UAAA;ADyTD;;ACvTA;EACC,6BAAA;EAAA,qBAAA;EACA,cAAA;AD0TD;;ACxTA;EACC,eAAA;EACA,YAAA;AD2TD;;ACzTA;EACC,eAAA;EACA,YAAA;AD4TD;;ACzTA;EACC,aAAA;EACA,wDAAA;AD4TD;;AG/VA;EACC,qBAAA;EACA,2DAAA;EACA,4DAAA;EACA,gBAAA;EACA,kBAAA;AHkWD;AG/VA;EACC,qBAAA;EACA,2DAAA;EACA,4DAAA;EACA,gBAAA;EACA,kBAAA;AHiWD;AG9VA;EACC,qBAAA;EACA,2DAAA;EACA,4DAAA;EACA,gBAAA;EACA,kBAAA;AHgWD;AG5VA;EACC,gBAAA;AH8VD;;AG5VA;EACC,iCAAA;AH+VD;;AG7VA;EC9BC,eD+Bc;EC9Bd,iBD8BoB;EC7BpB,gBD6B0B;EC5B1B,mBAAA;AJ+XD;;AKnYA;EACC,oCAAA;EACA,gBAAA;EACA,mBAAA;ALsYD;AKrYC;EACC,aAAA;EACA,uBAAA;OAAA,kBAAA;EACA,gBAAA;ALuYF;AKtYC;EACC,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;ALwYF;AKvYC;EACC,qBAAA;EACA,WAAA;EACA,YAAA;EACA,0BAAA;EACA,yBHpBa;EGqBb,qBAAA;EACA,4BAAA;EACA,yBHpBY;EGqBZ,mBAAA;EDvBD,iBCwBe;EDvBf,mBCuBuB;EDtBvB,gBAHoC;EAIpC,mBAAA;ECsBC,sCAAA;EACA,2DAAA;AL4YF;AK3YE;EACC,qBAAA;EACA,yBH9BY;AF2af;AK5YE;EACC,yBHhCY;AF8af;;AM9aA;EACC,kBAAA;EACA,aAAA;EACA,aAAA;EACA,8DAAA;ANibD;AMhbC;EACC,qBAAA;ANkbF;AMjbC;EACC,kBAAA;ANmbF;AMlbC;EACC,kBAAA;EFTD,iBEUe;EFTf,iBESuB;EFRvB,gBEQ6B;EFP7B,mBAAA;AJ8bD;AMtbC;EFXA,iBEYe;EFXf,iBEWuB;EFVvB,gBAHoC;EAIpC,mBAAA;AJocD;AM1bC;EFbA,iBEce;EFbf,iBEauB;EFZvB,gBEY6B;EFX7B,mBAAA;EEYC,cAAA;AN+bF;;AO/cA;EACC,mBAAA;EACA,mBAAA;EACA,yDAAA;EACA,4BAAA;EACA,sBAAA;EACA,2BAAA;APkdD;AOjdC;EACC,cAAA;EACA,cAAA;APmdF;AOldC;EACC,kBAAA;EACA,kBAAA;EACA,mBAAA;APodF;AOndC;EACC,+BAAA;APqdF;AOpdC;EACC,kCAAA;APsdF;AOrdE;EACC,qBAAA;EACA,qBAAA;APudH;AOtdC;EACC,aAAA;EACA,mBAAA;EACA,qBAAA;OAAA,gBAAA;APwdF;AOvdE;EACC,kBAAA;APydH;AOxdG;EACC,WAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,2BAAA;EACA,YAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;AP0dJ;AOzdC;EACC,mBAAA;EACA,cLpCY;AF+fd;AO1dC;EACC,cLxCiB;AFogBnB;AO3dC;EACC,cLxCY;EEFb,iBG2Ce;EH1Cf,mBG0CuB;EHzCvB,gBAHoC;EAIpC,mBAAA;AJwgBD;;AQ5gBA;EACC,aAAA;EACA,8KAAA;AR+gBD;;ASjhBA;ELQC,aAAA;EACA,YAAA;EARA,iBASc;EARd,iBAQsB;EAPtB,gBAHoC;EAIpC,mBAAA;EAOA,mBAAA;EACA,gBAAA;EACA,yBFRY;EESZ,eAAA;EACA,0DAAA;AJghBD;AI/gBC;EACC,qBAAA;EACA,yBAAA;AJihBF","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n*, *::after, *::before {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  color: #000000;\n  background-color: #F9F9F9;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  font-size: inherit;\n  font-weight: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nul, li {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n}\n\nimg, svg {\n  max-width: 100%;\n  height: auto;\n}\n\n#root {\n  display: grid;\n  grid-template-rows: minmax(50rem, 60rem) 1fr min-content;\n}\n\n@font-face {\n  font-family: \"nunito\";\n  src: url(\"../../assets/fonts/Nunito-Regular.woff\") format(\"woff\");\n  src: url(\"../../assets/fonts/Nunito-Regular.woff2\") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"nunito\";\n  src: url(\"../../assets/fonts/Nunito-SemiBold.woff\") format(\"woff\");\n  src: url(\"../../assets/fonts/Nunito-SemiBold.woff2\") format(\"woff2\");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"nunito\";\n  src: url(\"../../assets/fonts/Nunito-ExtraBold.woff\") format(\"woff\");\n  src: url(\"../../assets/fonts/Nunito-ExtraBold.woff2\") format(\"woff2\");\n  font-weight: 800;\n  font-style: normal;\n}\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: \"nunito\", sans-serif;\n}\n\n.first-title {\n  font-size: 5rem;\n  line-height: 120%;\n  font-weight: 800;\n  font-family: family;\n}\n\n.nav {\n  grid-column: center-start/center-end;\n  overflow: hidden;\n  margin-bottom: 5rem;\n}\n.nav__list {\n  display: flex;\n  column-gap: 2.4rem;\n  overflow-x: auto;\n}\n.nav__item {\n  min-width: 13rem;\n  max-width: 13rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.nav__btn {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  padding: 8px 14px 8px 50px;\n  background-color: #FFAB08;\n  background-size: 24px;\n  background-repeat: no-repeat;\n  background-color: #ffffff;\n  border-radius: 50px;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  font-weight: 400;\n  font-family: family;\n  background-position: left 14px top 50%;\n  transition: transform 0.3s ease, background-color 0.3s ease;\n}\n.nav__btn:hover {\n  transform: scale(0.9);\n  background-color: #FFAB08;\n}\n.nav__btn_active {\n  background-color: #FFAB08;\n}\n\n.product {\n  max-width: 32.4rem;\n  padding: 12px;\n  display: grid;\n  grid-template-rows: minmax(22rem, min-content) 1fr min-content;\n}\n.product__img-box {\n  margin-bottom: 1.6rem;\n}\n.product__info {\n  margin-bottom: 8px;\n}\n.product__price {\n  margin-bottom: 8px;\n  font-size: 2.4rem;\n  line-height: 100%;\n  font-weight: 600;\n  font-family: family;\n}\n.product__descr {\n  font-size: 1.6rem;\n  line-height: 130%;\n  font-weight: 400;\n  font-family: family;\n}\n.product__weight {\n  font-size: 1.6rem;\n  line-height: 130%;\n  font-weight: 600;\n  font-family: family;\n  color: #B1B1B1;\n}\n\n.header {\n  padding-top: 2.4rem;\n  margin-bottom: 4rem;\n  background-image: url(\"data:image/svg+xml, %3Csvg width='200' height='200' viewBox='0 0 200 2--' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23FFAB08'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-size: 250vw;\n  background-position: bottom;\n}\n.header__inner {\n  max-width: 50%;\n  margin: 0 auto;\n}\n.header__logo-box {\n  position: relative;\n  text-align: center;\n  margin-bottom: 5rem;\n}\n.header__logo-icon {\n  transition: transform 0.3s ease;\n}\n.header__logo-link {\n  transition: transform 0.3s ease-in;\n}\n.header__logo-link:hover {\n  display: inline-block;\n  transform: scale(1.1);\n}\n.header__content {\n  display: flex;\n  align-items: center;\n  column-gap: 6rem;\n}\n.header__content-img__box {\n  position: relative;\n}\n.header__content-img__box::after {\n  content: \"\";\n  position: absolute;\n  bottom: -60px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 21rem;\n  height: 25px;\n  background-color: #F2A40C;\n  border-radius: 50%;\n}\n.header__title {\n  margin-bottom: 5rem;\n  color: #ffffff;\n}\n.header__subtitle {\n  color: #FF7020;\n}\n.header__descr {\n  color: #ffffff;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  font-weight: 400;\n  font-family: family;\n}\n\n.main__container {\n  display: grid;\n  grid-template-columns: [full-start] minmax(7.5rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 16rem) [col-end]) [center-end] minmax(7.5rem, 1fr) [full-end];\n}\n\n.btn {\n  padding: 12px;\n  border: none;\n  font-size: 1.6rem;\n  line-height: 100%;\n  font-weight: 400;\n  font-family: family;\n  border-radius: 12px;\n  background: none;\n  background-color: #F2F2F3;\n  cursor: pointer;\n  transition: transorm 0.3s ease, background-color 0.3s ease;\n}\n.btn:hover {\n  transform: scale(0.9);\n  background-color: #bdbdc2;\n}","*,*::after,*::before \r\n\tbox-sizing: border-box\r\n\t\r\nbody \r\n\tmargin: 0\r\n\tpadding: 0\t\r\n\tcolor: $dark-color\r\n\tbackground-color: $light-grey-color\r\n\t\r\nh1, h2, h3, h4, h5, h6, p \r\n\tfont-size: inherit \r\n\tfont-weight: inherit\r\n\tmargin: 0 \r\n\tpadding: 0\r\n\r\nul, li \r\n\tlist-style: none \r\n\tmargin: 0 \r\n\tpadding: 0\r\n\r\na \r\n\ttext-decoration: none \r\n\tcolor: inherit\r\n\r\nbutton \r\n\tcursor: pointer \r\n\tborder: none \r\n\r\nimg, svg \r\n\tmax-width: 100% \r\n\theight: auto\r\n\r\n\r\n#root \r\n\tdisplay: grid \r\n\tgrid-template-rows: minmax(50rem, 60rem) 1fr min-content\r\n\r\n\r\n","$accent-color: #FFAB08\r\n$secondary-color:  #FF7020\r\n$dark-color: #000000\r\n$light-color: #ffffff\r\n$light-grey-color:  #F9F9F9\r\n$grey-color: #F2F2F3\r\n\r\n$br-main: 12px \r\n$br-card: 18px \r\n\r\n\r\n\r\n","@font-face \r\n\tfont-family: 'nunito'\r\n\tsrc: url('../../assets/fonts/Nunito-Regular.woff') format('woff')\r\n\tsrc: url('../../assets/fonts/Nunito-Regular.woff2') format('woff2')\r\n\tfont-weight: 400\r\n\tfont-style: normal\r\n    \r\n\r\n@font-face \r\n\tfont-family: 'nunito'\r\n\tsrc: url('../../assets/fonts/Nunito-SemiBold.woff') format('woff')\r\n\tsrc: url('../../assets/fonts/Nunito-SemiBold.woff2') format('woff2')\r\n\tfont-weight: 600\r\n\tfont-style: normal\r\n    \r\n\r\n@font-face \r\n\tfont-family: 'nunito'\r\n\tsrc: url('../../assets/fonts/Nunito-ExtraBold.woff') format('woff')\r\n\tsrc: url('../../assets/fonts/Nunito-ExtraBold.woff2') format('woff2')\r\n\tfont-weight: 800\r\n\tfont-style: normal\r\n\r\n\r\n\r\nhtml \r\n\tfont-size: 62.5%\r\n\r\nbody \r\n\tfont-family: 'nunito', sans-serif\r\n\r\n.first-title \r\n\t@include font(5rem, 120%, 800)\r\n\r\n\r\n","@mixin font($size, $height, $weight: 400, $family: 'nunito, sans-serif')\r\n\tfont-size: $size \r\n\tline-height: $height \r\n\tfont-weight: $weight \r\n\tfont-family: family\r\n\r\n\r\n@mixin btn($bg-color: $grey-color)\r\n\tpadding: 12px \r\n\tborder: none \r\n\t@include font(1.6rem, 100%)\r\n\tborder-radius: 12px \r\n\tbackground: none\r\n\tbackground-color: $bg-color\r\n\tcursor: pointer \r\n\ttransition: transorm .3s ease, background-color .3s ease\r\n\t&:hover \r\n\t\ttransform: scale(.9)\r\n\t\tbackground-color: darken($bg-color, 20%)",".nav \r\n\tgrid-column: center-start / center-end\r\n\toverflow: hidden\r\n\tmargin-bottom: 5rem\r\n\t&__list \r\n\t\tdisplay: flex\r\n\t\tcolumn-gap: 2.4rem\r\n\t\toverflow-x: auto \r\n\t&__item \r\n\t\tmin-width: 13rem \r\n\t\tmax-width: 13rem \r\n\t\tdisplay: flex \r\n\t\tjustify-content: center \r\n\t\talign-items: center\r\n\t\twidth: 100%\t\t\r\n\t&__btn \r\n\t\tdisplay: inline-block\r\n\t\twidth: 100%\r\n\t\theight: 100%\r\n\t\tpadding: 8px 14px 8px 50px\r\n\t\tbackground-color: $accent-color \r\n\t\tbackground-size: 24px\r\n\t\tbackground-repeat: no-repeat\r\n\t\tbackground-color: $light-color\r\n\t\tborder-radius: 50px\r\n\t\t@include font(1.6rem, 2.2rem)\r\n\t\tbackground-position: left 14px top 50%\r\n\t\ttransition: transform .3s ease, background-color .3s ease\r\n\t\t&:hover \r\n\t\t\ttransform: scale(.9)\r\n\t\t\tbackground-color: $accent-color\r\n\t\t&_active \r\n\t\t\tbackground-color: $accent-color\r\n",".product\r\n\tmax-width: 32.4rem \r\n\tpadding: 12px\r\n\tdisplay: grid \r\n\tgrid-template-rows: minmax(22rem, min-content) 1fr min-content\r\n\t&__img-box \r\n\t\tmargin-bottom: 1.6rem \r\n\t&__info \r\n\t\tmargin-bottom: 8px\r\n\t&__price \r\n\t\tmargin-bottom: 8px \r\n\t\t@include font(2.4rem, 100%, 600)\r\n\t&__descr \r\n\t\t@include font(1.6rem, 130%)\r\n\t&__weight \r\n\t\t@include font(1.6rem, 130%, 600)\r\n\t\tcolor: #B1B1B1\r\n",".header \r\n\tpadding-top: 2.4rem\r\n\tmargin-bottom: 4rem\r\n\tbackground-image: url(\"data:image/svg+xml, %3Csvg width='200' height='200' viewBox='0 0 200 2--' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23FFAB08'/%3E%3C/svg%3E\")\r\n\tbackground-repeat: no-repeat\r\n\tbackground-size: 250vw\r\n\tbackground-position: bottom\r\n\t&__inner\r\n\t\tmax-width: 50% \r\n\t\tmargin: 0 auto\r\n\t&__logo-box\r\n\t\tposition: relative\r\n\t\ttext-align: center\r\n\t\tmargin-bottom: 5rem\r\n\t&__logo-icon \r\n\t\ttransition: transform .3s ease\r\n\t&__logo-link\r\n\t\ttransition: transform .3s ease-in\r\n\t\t&:hover \r\n\t\t\tdisplay: inline-block\r\n\t\t\ttransform: scale(1.1)\r\n\t&__content \r\n\t\tdisplay: flex\r\n\t\talign-items: center\r\n\t\tcolumn-gap: 6rem\r\n\t\t&-img__box \r\n\t\t\tposition: relative\r\n\t\t\t&::after \r\n\t\t\t\tcontent: ''\r\n\t\t\t\tposition: absolute \r\n\t\t\t\tbottom: -60px \r\n\t\t\t\tleft: 50% \r\n\t\t\t\ttransform: translateX(-50%)\r\n\t\t\t\twidth: 21rem \r\n\t\t\t\theight: 25px\r\n\t\t\t\tbackground-color: #F2A40C\r\n\t\t\t\tborder-radius: 50%\r\n\t&__title \r\n\t\tmargin-bottom: 5rem\r\n\t\tcolor: $light-color\r\n\t&__subtitle \r\n\t\tcolor: $secondary-color\r\n\t&__descr \r\n\t\tcolor: $light-color \r\n\t\t@include font(1.6rem, 2.2rem)\r\n\t\t",".main__container \r\n\tdisplay: grid \r\n\tgrid-template-columns: [full-start] minmax(7.5rem, 1fr) [center-start] repeat(8, [col-start]minmax(min-content, 16rem) [col-end])[center-end]  minmax(7.5rem, 1fr)[full-end]",".btn \r\n\t@include btn"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/favicon/apple-touch-icon.png */ "./src/assets/icons/favicon/apple-touch-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/favicon/favicon-32x32.png */ "./src/assets/icons/favicon/favicon-32x32.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/favicon/favicon-16x16.png */ "./src/assets/icons/favicon/favicon-16x16.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/favicon/site.webmanifest */ "./src/assets/icons/favicon/site.webmanifest"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/favicon/safari-pinned-tab.svg */ "./src/assets/icons/favicon/safari-pinned-tab.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\r\n\t<link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\r\n\t<link rel=\"mask-icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" color=\"#5bbad5\">\r\n\t<meta name=\"msapplication-TileColor\" content=\"#da532c\">\r\n\t<meta name=\"theme-color\" content=\"#ffffff\">\r\n\t<title>YourMeal</title>\r\n</head>\r\n<body>\r\n\t<div id=\"root\"></div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/group-css-media-queries-loader/lib/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/sass/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml, %3Csvg width=%27200%27 height=%27200%27 viewBox=%270 0 200 2--%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%27100%27 fill=%27%23FFAB08%27/%3E%3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml, %3Csvg width=%27200%27 height=%27200%27 viewBox=%270 0 200 2--%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%27100%27 fill=%27%23FFAB08%27/%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml, %3Csvg width=%27200%27 height=%27200%27 viewBox=%270 0 200 2--%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%27100%27 fill=%27%23FFAB08%27/%3E%3C/svg%3E";

/***/ }),

/***/ "./src/assets/fonts/Nunito-ExtraBold.woff":
/*!************************************************!*\
  !*** ./src/assets/fonts/Nunito-ExtraBold.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Nunito-ExtraBold.woff";

/***/ }),

/***/ "./src/assets/fonts/Nunito-ExtraBold.woff2":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Nunito-ExtraBold.woff2 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Nunito-ExtraBold.woff2";

/***/ }),

/***/ "./src/assets/fonts/Nunito-Regular.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Nunito-Regular.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Nunito-Regular.woff";

/***/ }),

/***/ "./src/assets/fonts/Nunito-Regular.woff2":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Nunito-Regular.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Nunito-Regular.woff2";

/***/ }),

/***/ "./src/assets/fonts/Nunito-SemiBold.woff":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Nunito-SemiBold.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Nunito-SemiBold.woff";

/***/ }),

/***/ "./src/assets/fonts/Nunito-SemiBold.woff2":
/*!************************************************!*\
  !*** ./src/assets/fonts/Nunito-SemiBold.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Nunito-SemiBold.woff2";

/***/ }),

/***/ "./src/assets/icons/burger.png":
/*!*************************************!*\
  !*** ./src/assets/icons/burger.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/burger.png";

/***/ }),

/***/ "./src/assets/icons/burger.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/burger.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/burger.svg";

/***/ }),

/***/ "./src/assets/icons/burito.png":
/*!*************************************!*\
  !*** ./src/assets/icons/burito.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/burito.png";

/***/ }),

/***/ "./src/assets/icons/doughnut.png":
/*!***************************************!*\
  !*** ./src/assets/icons/doughnut.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/doughnut.png";

/***/ }),

/***/ "./src/assets/icons/fast-food.png":
/*!****************************************!*\
  !*** ./src/assets/icons/fast-food.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fast-food.png";

/***/ }),

/***/ "./src/assets/icons/favicon/apple-touch-icon.png":
/*!*******************************************************!*\
  !*** ./src/assets/icons/favicon/apple-touch-icon.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/apple-touch-icon.png";

/***/ }),

/***/ "./src/assets/icons/favicon/favicon-16x16.png":
/*!****************************************************!*\
  !*** ./src/assets/icons/favicon/favicon-16x16.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon-16x16.png";

/***/ }),

/***/ "./src/assets/icons/favicon/favicon-32x32.png":
/*!****************************************************!*\
  !*** ./src/assets/icons/favicon/favicon-32x32.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon-32x32.png";

/***/ }),

/***/ "./src/assets/icons/favicon/safari-pinned-tab.svg":
/*!********************************************************!*\
  !*** ./src/assets/icons/favicon/safari-pinned-tab.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/safari-pinned-tab.svg";

/***/ }),

/***/ "./src/assets/icons/favicon/site.webmanifest":
/*!***************************************************!*\
  !*** ./src/assets/icons/favicon/site.webmanifest ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/site.webmanifest";

/***/ }),

/***/ "./src/assets/icons/header-logo.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/header-logo.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/header-logo.svg";

/***/ }),

/***/ "./src/assets/icons/hotdog.png":
/*!*************************************!*\
  !*** ./src/assets/icons/hotdog.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hotdog.png";

/***/ }),

/***/ "./src/assets/icons/ketchup.png":
/*!**************************************!*\
  !*** ./src/assets/icons/ketchup.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ketchup.png";

/***/ }),

/***/ "./src/assets/icons/noodles.png":
/*!**************************************!*\
  !*** ./src/assets/icons/noodles.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/noodles.png";

/***/ }),

/***/ "./src/assets/icons/onion.png":
/*!************************************!*\
  !*** ./src/assets/icons/onion.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/onion.png";

/***/ }),

/***/ "./src/assets/icons/pizza.png":
/*!************************************!*\
  !*** ./src/assets/icons/pizza.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pizza.png";

/***/ }),

/***/ "./src/assets/img/burgers/burger-1.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/burgers/burger-1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/burger-1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./src/index.html");
/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.sass */ "./src/sass/style.sass");
/* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App/App */ "./src/js/components/App/App.js");



(() => {
  _components_App_App__WEBPACK_IMPORTED_MODULE_2__["default"].render();
})();
})();

/******/ })()
;
//# sourceMappingURL=main.57f273c1745e7b725fda.js.map