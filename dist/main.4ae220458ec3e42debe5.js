/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use({
  Pagination: swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]
});

var page = function page() {
  var variables = {
    swipers: [],
    swiperContainers: ['.brands__swiper', '.periphery__swiper', '.price__swiper'],
    swiperButtons: document.querySelectorAll('.button-show-content'),
    modalCallTitle: document.querySelector('.modal-call__title'),
    modalFeedbackTitle: document.querySelector('.modal-feedback__title'),
    scrollWidth: window.innerWidth - document.body.clientWidth
  };

  var swiper = function swiper() {
    var priceTitles = document.querySelectorAll('.service-item__title');
    var breakpoint = window.matchMedia('(min-width:768px)');
    var swiperCount = variables.swiperContainers.length;

    var breakpointChecker = function breakpointChecker() {
      var ifHasSwipers = variables.swipers.length;

      if (breakpoint.matches) {
        togglePriceTitles(true);
      }

      if (breakpoint.matches && ifHasSwipers) {
        return destroySwiper();
      } else if (!breakpoint.matches) {
        togglePriceTitles();
        return createSwiper();
      }
    };

    function togglePriceTitles(hide) {
      if (hide) {
        priceTitles.forEach(function (title) {
          title.classList.add('visually-hidden');
        });
      } else {
        priceTitles.forEach(function (title) {
          title.classList.remove('visually-hidden');
        });
      }
    }

    function destroySwiper() {
      for (var i = 0; i < swiperCount; i++) {
        variables.swipers[i].destroy();
      }
    }

    function createSwiper() {
      var newSwiper = function newSwiper(container) {
        var newSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](container, {
          modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: '.swiper__pagination',
            type: 'bullets',
            clickable: true
          }
        });
        return newSwiper;
      };

      for (var i = 0; i < swiperCount; i++) {
        variables.swipers[i] = newSwiper(variables.swiperContainers[i]);
      }
    }

    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();
  };

  var overlay = function overlay() {
    var burgerButton = document.querySelector('.burger-menu');
    var overlay = document.querySelector('.overlay');
    var aside = document.querySelector('.aside');
    var asideButtonClose = aside.querySelector('.aside__button-close');
    var modalCall = document.querySelector('.page__modal-call');
    var modalCallButtonClose = modalCall.querySelector('.modal-call__button-close');
    var modalFeedback = document.querySelector('.page__modal-feedback');
    var modalFeedbackButtonClose = modalFeedback.querySelector('.modal-feedback__button-close');
    var buttonCall = document.querySelectorAll('.contacts__button--call');
    var buttonFeedback = document.querySelectorAll('.contacts__button-feedback');
    var pageHeight = document.documentElement.scrollHeight;
    var arrayPopupsForListener = [{
      button: burgerButton,
      section: aside,
      activeClass: 'aside--active'
    }, {
      button: buttonCall,
      section: modalCall,
      activeClass: 'modal-call--active',
      needCloseMenu: true
    }, {
      button: buttonFeedback,
      section: modalFeedback,
      activeClass: 'modal-feedback--active',
      needCloseMenu: true
    }];

    var openPopup = function openPopup(section, sectionClassActive, needCloseMenu) {
      document.body.style.overflow = 'hidden';
      section.style.maxHeight = "".concat(pageHeight, "px");
      section.classList.add(sectionClassActive);
      overlay.classList.add('overlay--active');

      if (needCloseMenu) {
        closeMenu();
        overlay.style.zIndex = 3;
      }
    };

    var closePopup = function closePopup(needCloseMenu) {
      ;

      _toConsumableArray(document.forms).forEach(function (form) {
        form.classList.remove('visually-hidden');
        form.style.opacity = 1;
      });

      variables.modalCallTitle.style.opacity = 1;
      variables.modalFeedbackTitle.style.opacity = 1;
      variables.modalCallTitle.classList.remove('visually-hidden');
      variables.modalFeedbackTitle.classList.remove('visually-hidden');
      modalFeedback.classList.remove('modal-feedback--active');
      modalCall.classList.remove('modal-call--active');
      overlay.classList.remove('overlay--active');
      overlay.style.zIndex = '';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (needCloseMenu) closeMenu();
    };

    var closeMenu = function closeMenu() {
      aside.classList.remove('aside--active');
    };

    var openButtonsListeners = function openButtonsListeners(data) {
      data.forEach(function (popup) {
        if (popup.button.length) {
          return popup.button.forEach(function (button) {
            button.addEventListener('click', function () {
              openPopup(popup.section, popup.activeClass, popup.needCloseMenu);
            });
          });
        }

        popup.button.addEventListener('click', function () {
          openPopup(popup.section, popup.activeClass, popup.needCloseMenu);
        });
      });
    };

    var closeButtonsListener = function closeButtonsListener() {
      for (var _len = arguments.length, buttons = new Array(_len), _key = 0; _key < _len; _key++) {
        buttons[_key] = arguments[_key];
      }

      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          closePopup();
          if (button === asideButtonClose) closeMenu();
        });
      });
    };

    openButtonsListeners(arrayPopupsForListener);
    closeButtonsListener(asideButtonClose, modalCallButtonClose, modalFeedbackButtonClose);
    overlay.addEventListener('click', function (event) {
      if (event.target.classList.contains('overlay')) closePopup('and-close-menu-please');
    });
  };

  function addFormSubmitHandlers() {
    var forms = document.querySelectorAll('form');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
      });
    });
  }

  var addSectionListeners = function addSectionListeners(sectionName, sectionContainer, sectionButton) {
    var about = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var sectnContainer = document.querySelector(sectionContainer);
    var sectnButton = document.querySelector(sectionButton);
    var sectnButtonShowContentImg = sectnButton.firstElementChild;
    var sectnButtonShowContentText = sectnButton.lastElementChild;
    variables["".concat(sectionName, "Container")] = sectnContainer;
    variables["".concat(sectionName, "Button")] = sectnButton;
    var sectnContent = toggleConditionContent();
    sectnButton.addEventListener('click', function () {
      if (!sectnContent.activeContent) {
        sectnContent.showContent(sectnContainer, sectnButtonShowContentImg, sectnButtonShowContentText);
      } else {
        if (about) {
          sectnContent.hideContent(sectnContainer, sectnButtonShowContentImg, sectnButtonShowContentText, true);
        } else {
          sectnContent.hideContent(sectnContainer, sectnButtonShowContentImg, sectnButtonShowContentText);
        }
      }
    });
  };

  var toggleConditionContent = function toggleConditionContent() {
    return {
      activeContent: false,
      showContent: function showContent(container, imgButton, textButton) {
        container.classList.toggle('swiper--opened');
        imgButton.style.transform = 'scale(1, -1)';
        textButton.textContent = 'Скрыть все';
        this.activeContent = true;
      },
      hideContent: function hideContent(container, imgButton, textButton, about) {
        container.classList.toggle('swiper--opened');

        if (about) {
          textButton.textContent = 'Читать далее';
        } else {
          textButton.textContent = 'Показать все';
        }

        imgButton.style.transform = '';
        this.activeContent = false;
      }
    };
  };

  var init = function init() {
    overlay();
    swiper();
    addSectionListeners('about', '.about__desc', '.about__button-show-content', true);
    addSectionListeners('brands', '.brands__list', '.brands__button-show-content');
    addSectionListeners('periphery', '.periphery__list', '.periphery__button-show-content');
    addFormSubmitHandlers();
  };

  init();
};

page();

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.4ae220458ec3e42debe5.js.map