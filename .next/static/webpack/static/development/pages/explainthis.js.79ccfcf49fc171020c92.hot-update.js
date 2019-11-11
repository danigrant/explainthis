webpackHotUpdate("static/development/pages/explainthis.js",{

/***/ "./components/ExplanationsSection.js":
/*!*******************************************!*\
  !*** ./components/ExplanationsSection.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Firebase */ "./components/Firebase.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Firebase__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var ExplanationsSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ExplanationsSection, _React$Component);

  function ExplanationsSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExplanationsSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ExplanationsSection).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleVote", function (vote, explanationID) {
      Object(_Firebase__WEBPACK_IMPORTED_MODULE_9__["addVote"])(vote, _this.state.loggedInUser, explanationID);
    });

    _this.state = {
      loggedInUser: '@barackobama'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ExplanationsSection, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      });
    }
  }]);

  return ExplanationsSection;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection); // <div className="explanationsSection">
//  {
//    this.props.explanations.map((e) => {
//      return (
//        <div className="explanation" id={`explanation-${e.id}`}>
//          <div className="attribution">
//            <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
//            <p className="attributionUsername">{e.author}</p>
//          </div>
//          <div className="explanationMeat">
//            {parse(e.explanation)}
//          </div>
//          <div className="explanationActionBar">
//            <div className="explanationAction" onClick={() => this.handleVote(1, e.id)}>
//              <img src="/images/get-it-face.png" />
//              {e.score > 0 && <p className="score">+ {e.score}</p>}
//            </div>
//            <div className="explanationAction" onClick={() => this.handleVote(-1, e.id)} >
//              <img src="/images/dont-get-it-face.png"/>
//            </div>
//          </div>
//        </div>
//      )
//    })
//  }
//   <style jsx>{`
//     .explanation {
//       border-bottom: 1px solid #ddd;
//       margin-bottom: 20px;
//     }
//     .explanation:last-child {
//       border: none;
//     }
//     .attributionAvatar {
//       width: 30px;
//       border-radius: 50px;
//       display: inline-block;
//       position: relative;
//       top: 5px;
//     }
//     .attributionUsername {
//       display: inline-block;
//       margin-left: 10px;
//     }
//     .explanationMeat {
//       padding-bottom: 5px;
//     }
//     .explanationActionBar {
//       padding-bottom: 20px;
//     }
//     .explanationAction {
//       display: inline-block;
//       transition:0.3s;
//     }
//     .explanationAction:nth-of-type(2) {
//       margin-left: 35px;
//     }
//     .explanationAction img {
//       display: inline-block;
//       width: 24px;
//       position: relative;
//       top: 5px;
//       margin-right: 5px;
//     }
//     .explanationAction p {
//       display: inline-block;
//     }
//     explanationAction:hover {
//       transform: scale(1.1);
//       transform-origin: center;
//       filter: brightness(115%);
//       cursor: pointer;
//     }
//     .explanationAction:active:first-child {
//       transform: rotate(180deg)
//     }
//     .score {
//       margin-right: 10px;
//       color: #bbb;
//     }
//
//   `}</style>
// </div>

/***/ })

})
//# sourceMappingURL=explainthis.js.79ccfcf49fc171020c92.hot-update.js.map