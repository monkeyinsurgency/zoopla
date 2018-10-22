module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Properties/Property.js":
/*!*******************************************!*\
  !*** ./components/Properties/Property.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-currency-format */ "react-currency-format");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jasonslade/Sites/zoopla/app/components/Properties/Property.js";



var Property = function Property(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "row py-2 property-row " + props.activate,
    tabIndex: props.tabIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "property-image col-lg-3 col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "property-details col-lg-6 col-md-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.num_bedrooms, " bed ", props.property_type, " for sale"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: props.price,
    thousandSeparator: true,
    displayType: 'text',
    prefix: '£',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "property-copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "property-agent col-lg-3 card p-3 col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "agent-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.agent_logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "agent-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.agent_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.agent_address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.agent_postcode), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.agent_phone)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Property);

/***/ }),

/***/ "./components/ResultsList/ResultsList.js":
/*!***********************************************!*\
  !*** ./components/ResultsList/ResultsList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Properties_Property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Properties/Property */ "./components/Properties/Property.js");
var _jsxFileName = "/Users/jasonslade/Sites/zoopla/app/components/ResultsList/ResultsList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ResultsList =
/*#__PURE__*/
function (_Component) {
  _inherits(ResultsList, _Component);

  function ResultsList(props) {
    var _this;

    _classCallCheck(this, ResultsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsList).call(this, props));
    _this.state = {
      cursor: 0,
      properties: props.properties
    };
    return _this;
  }

  _createClass(ResultsList, [{
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      var _this$state = this.state,
          cursor = _this$state.cursor,
          properties = _this$state.properties; // arrow up/down button should select next/previous list element

      if (e.keyCode === 38 && cursor > 0) {
        this.setState(function (prevState) {
          return {
            cursor: prevState.cursor - 1
          };
        });
      } else if (e.keyCode === 40 && cursor < properties.length - 1) {
        this.setState(function (prevState) {
          return {
            cursor: prevState.cursor + 1
          };
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keypress", this.handleKeyPress.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          cursor = _this$state2.cursor,
          properties = _this$state2.properties;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        autoFocus: true,
        className: "d-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "property-results px-0",
        id: "results-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, properties.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Properties_Property__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
          key: index
        }, item, {
          activate: cursor === index ? 'active' : '',
          tabIndex: index,
          onKeyDown: _this2.handleKeyPress,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }));
      })));
    }
  }]);

  return ResultsList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResultsList);

/***/ }),

/***/ "./components/SearchBar/SearchBar.js":
/*!*******************************************!*\
  !*** ./components/SearchBar/SearchBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jasonslade/Sites/zoopla/app/components/SearchBar/SearchBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var SearchBar =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBar).call(this, props));
    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SearchBar, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      window.location.href = '/results?postcode=' + this.state.value;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex-nowrap justify-content-between align-items-center text-white rounded bg-dark py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Postcode:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        autoFocus: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })));
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./mock_data/data.json":
/*!*****************************!*\
  !*** ./mock_data/data.json ***!
  \*****************************/
/*! exports provided: result_count, area, listing, default */
/***/ (function(module) {

module.exports = {"result_count":5,"area":"N11","listing":[{"num_bedrooms":"5","agent_address":"4-6 Station Road, New Barnet","property_type":"Detached house","description":" Built in 1949 on the site of the former Friern Barnet junior school this substantial five bedroom home sits on a large corner plot occupying approximately one third of an acre. Situated behind secure electronic gates the property which has a south west","agent_postcode":"EN5 1QW","details_url":"http://www.zoopla.co.uk/for-sale/details/39782877","price":"1800000","agent_name":"Your Move - Spencer & Sener","agent_logo":"http://st.zoocdn.com/zoopla_static_agent_logo_(326525).png","agent_phone":"020 3478 3306","image_url":"http://li.zoocdn.com/91062b96be923536c8505e18a132a53f684360d1_354_255.jpg"},{"num_bedrooms":"7","agent_address":"58-60 Totteridge Lane, Whetstone, London","property_type":"Flat","description":"Set on the ground floor this large duplex Seven bed two Bath apartment with galleried landing and fully fitted kitchen is offered chain free.","agent_postcode":"N20 9QP","details_url":"http://www.zoopla.co.uk/for-sale/details/39323806","price":"1500000","agent_name":"Anscombe & Ringland","agent_logo":"http://st.zoocdn.com/zoopla_static_agent_logo_(58080).jpeg","agent_phone":"020 3478 3239","image_url":"http://li.zoocdn.com/bdf8bcee1c3850bb1ce5c6e7fd3013b50b6bf72d_354_255.jpg"},{"num_bedrooms":"4","agent_address":"61 Highgate High Street, Highgate, London","property_type":"Flat","description":"A stunning duplex apartment in prestigious development","agent_postcode":"N6 5JX","details_url":"http://www.zoopla.co.uk/for-sale/details/39146219","price":"1100000","agent_name":"Day Morris","agent_logo":"http://st.zoocdn.com/zoopla_static_agent_logo_(46792).jpeg","agent_phone":"020 3478 3348","image_url":"http://li.zoocdn.com/ecb30fde5f377d7f9f3aa7128faab13282bdd73d_354_255.jpg"},{"num_bedrooms":"4","agent_address":"36 Muswell Hill Broadway, Muswell Hill","property_type":"Detached house","description":"Situated within good school catchment, close to Bounds Green tube station (Piccadilly Line), a rare opportunity to purchase this immaculately presented detached family home. (contd...)","agent_postcode":"N10 3RT","details_url":"http://www.zoopla.co.uk/for-sale/details/40273571","price":"1000000","agent_name":"Bairstow Eves - Muswell Hill Sales","agent_logo":"http://st.zoocdn.com/zoopla_static_agent_logo_(326283).png","agent_phone":"020 3463 0154","image_url":"http://li.zoocdn.com/e772def64a643bef4939d539ca5450a17b40faf3_354_255.jpg"},{"num_bedrooms":"4","agent_address":"98 High Street, High Barnet","property_type":"Semi-detached house","description":" Set on a quiet street this fantastic four bedroom semi-detached house offers bright and spacious rooms, fantastic kitchen/dining room, downstairs cloakroom, master bedroom with en suite, and off-street parking. The property is set in a fantastic ...","agent_postcode":"EN5 5XQ","details_url":"http://www.zoopla.co.uk/for-sale/details/41461918","price":"975000","agent_name":"Foxtons - Barnet","agent_logo":"http://st.zoocdn.com/zoopla_static_agent_logo_(161658).png","agent_phone":"020 7768 0386","image_url":"http://li.zoocdn.com/47200bfab26d1e67cf23d78d229af60564f13fd3_354_255.jpg"}]};

/***/ }),

/***/ "./pages/results.js":
/*!**************************!*\
  !*** ./pages/results.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBar/SearchBar */ "./components/SearchBar/SearchBar.js");
/* harmony import */ var _components_ResultsList_ResultsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResultsList/ResultsList */ "./components/ResultsList/ResultsList.js");
/* harmony import */ var _mock_data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock_data/data */ "./mock_data/data.json");
var _mock_data_data__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mock_data/data */ "./mock_data/data.json", 1);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/jasonslade/Sites/zoopla/app/pages/results.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Results =
/*#__PURE__*/
function (_Component) {
  _inherits(Results, _Component);

  _createClass(Results, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, qs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                qs = query;
                return _context.abrupt("return", {
                  qs: qs
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Results(props) {
    var _this;

    _classCallCheck(this, Results);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Results).call(this, props));
    _this.state = {
      results: false,
      postCode: false,
      properties: [],
      result_count: 0,
      area: ''
    };
    return _this;
  }

  _createClass(Results, [{
    key: "resolveSearch",
    value: function resolveSearch(postcode) {
      if (!postcode || postcode === '') {
        this.setState({
          postCode: false
        });
      } else {
        this.setState({
          postCode: postcode
        });
        var processedResults = _mock_data_data__WEBPACK_IMPORTED_MODULE_5__.area === postcode ? _mock_data_data__WEBPACK_IMPORTED_MODULE_5__ : false;

        if (processedResults) {
          this.setState({
            results: true,
            properties: _mock_data_data__WEBPACK_IMPORTED_MODULE_5__.listing.map(function (item) {
              return {
                num_bedrooms: item.num_bedrooms,
                agent_address: item.agent_address,
                property_type: item.property_type,
                description: item.description,
                agent_postcode: item.agent_postcode,
                details_url: item.details_url,
                price: item.price,
                agent_name: item.agent_name,
                agent_logo: item.agent_logo,
                agent_phone: item.agent_phone,
                image_url: item.image_url
              };
            }),
            result_count: _mock_data_data__WEBPACK_IMPORTED_MODULE_5__.result_count,
            area: _mock_data_data__WEBPACK_IMPORTED_MODULE_5__.area
          });
        }
      }
    }
  }, {
    key: "getListings",
    value: function getListings() {
      this.resolveSearch(this.props.qs.postcode.toUpperCase());
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getListings();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          postCode = _this$state.postCode,
          results = _this$state.results,
          properties = _this$state.properties,
          result_count = _this$state.result_count,
          area = _this$state.area;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row flex-nowrap justify-content-between align-items-center text-white rounded bg-dark py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, postCode ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Searching in ", postCode) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Please return to the", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Search Page")), ' ', "and enter a valid postcode to see results.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, results ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "results-count",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, result_count, " properties found"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ResultsList_ResultsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        properties: properties,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "No results.  Please try a different post code."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })))));
    }
  }]);

  return Results;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/results.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/results.js */"./pages/results.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-currency-format":
/*!****************************************!*\
  !*** external "react-currency-format" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-currency-format");

/***/ })

/******/ });
//# sourceMappingURL=results.js.map