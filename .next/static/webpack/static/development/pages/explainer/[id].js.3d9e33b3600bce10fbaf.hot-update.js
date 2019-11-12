webpackHotUpdate("static/development/pages/explainer/[id].js",{

/***/ "./components/ProfileExplanationsSection.js":
/*!**************************************************!*\
  !*** ./components/ProfileExplanationsSection.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Firebase */ "./components/Firebase.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Firebase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");





var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/ProfileExplanationsSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var ProfileExplanationsSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProfileExplanationsSection, _React$Component);

  function ProfileExplanationsSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfileExplanationsSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProfileExplanationsSection).call(this, props));
    _this.state = {
      loggedInUser: '@barackobama'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfileExplanationsSection, [{
    key: "render",
    value: function render() {
      {
        if (!this.props.currentExplanation) {
          return __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          }, "loading...");
        } else {
          return __jsx("div", {
            className: "jsx-1608374182" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }, __jsx("div", {
            key: "explanation-".concat(this.props.currentExplanation.id),
            className: "jsx-1608374182" + " " + "explanation",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: "/explainthis/".concat(this.props.currentExplanation.concept),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-1608374182" + " " + "link title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, this.props.currentExplanation.author, " explains ", __jsx("span", {
            className: "jsx-1608374182" + " " + "concept-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, this.props.currentExplanation.concept))), __jsx("div", {
            className: "jsx-1608374182" + " " + "explanationMeat",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, html_react_parser__WEBPACK_IMPORTED_MODULE_7___default()(this.props.currentExplanation.explanation)), __jsx("div", {
            className: "jsx-1608374182" + " " + "explanationActionBar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx("div", {
            onClick: this.props.incrementExplanation,
            className: "jsx-1608374182" + " " + "explanationActionButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-1608374182",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, "Next One"), __jsx("img", {
            src: "/images/just-because.png",
            className: "jsx-1608374182",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
            id: "1608374182",
            __self: this
          }, ".explanationsSection.jsx-1608374182{position:relative;height:100%;}.explanation.jsx-1608374182{border-bottom:1px solid #ddd;margin-bottom:20px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.explanation.jsx-1608374182:last-child{border:none;}.attributionAvatar.jsx-1608374182{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-1608374182{display:inline-block;margin-left:10px;}.explanationMeat.jsx-1608374182{padding-bottom:5px;font-size:30px;height:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.explanationActionBar.jsx-1608374182{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:20px;text-align:center;color:white;}.explanationActionButton.jsx-1608374182{display:inline-block;-webkit-transition:0.3s;transition:0.3s;position:relative;}.explanationActionButton.jsx-1608374182:nth-of-type(2){margin-left:35px;}.explanationActionButton.jsx-1608374182 img.jsx-1608374182{display:inline-block;width:75px;position:relative;top:25px;position:relative;right:26px;z-index:1;}.explanationActionButton.jsx-1608374182 p.jsx-1608374182{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;background-color:#A3D066;}.get-it-button.jsx-1608374182 p.jsx-1608374182{background-color:#A3D066;}.get-it-button.jsx-1608374182 img.jsx-1608374182{position:relative;left:26px;}.dont-get-it-button.jsx-1608374182 p.jsx-1608374182{background-color:#6EC3E9;}.dont-get-it-button.jsx-1608374182 img.jsx-1608374182{position:relative;right:26px;}.explanationActionButton.jsx-1608374182:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.score.jsx-1608374182{margin-right:10px;color:#bbb;}.concept-name.jsx-1608374182{font-weight:bold;color:#6462EF;}.link.jsx-1608374182{cursor:pointer;}.link.jsx-1608374182:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-1608374182:active{-webkit-filter:brightness(125%);filter:brightness(125%);}.title.jsx-1608374182{font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9Qcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3dCLEFBR21DLEFBSVcsQUFRakIsQUFHRCxBQU9VLEFBSUYsQUFNRCxBQU1HLEFBS0osQUFHSSxBQVNBLEFBT0ksQUFHUCxBQUlPLEFBR1AsQUFJRyxBQU1ILEFBSUQsQUFJSCxBQUdVLEFBR0EsQUFHVCxXQW5GSSxDQUhyQixHQThFQSxBQVNBLEVBeERBLEFBMkNnQixDQXRGRixBQWlFRixBQU9DLEFBVUEsQ0F4REksRUFKRSxBQWdCRixBQVFKLEFBU2lCLElBTzlCLEFBT0EsR0FIQSxDQTlEcUIsQUFxRXJCLEFBVUEsQ0FsRkEsQUFldUIsQ0F1RXZCLENBeENvQixFQXBCTixJQUpkLFFBS2MsRUF2QkEsQ0FtRE8sQ0FSVixDQS9CUyxLQTRFcEIsQUFHQSxHQS9Db0IsQ0EzQ0wsQ0FpQ0ssT0FrQlQsQ0F2Q0QsRUFjTyxJQTRDUyxFQXpEMUIsQUErQmEsQUFRYyxFQWxCM0IsT0FQb0IsRUFrQlIsVUFDWixJQU9BLEVBekJjLFlBQ2QsQ0FOQSxpQkF0QlMseUJBc0VpQixRQXJFRixnREFzRVAsZUFDakIsZUF0RUEiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL1Byb2ZpbGVFeHBsYW5hdGlvbnNTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcbmltcG9ydCB7IGFkZFZvdGUgfSBmcm9tICcuL0ZpcmViYXNlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuXG5jbGFzcyBQcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvZ2dlZEluVXNlcjogJ0BiYXJhY2tvYmFtYSdcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uc1NlY3Rpb25cIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uXCIga2V5PXtgZXhwbGFuYXRpb24tJHt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5pZH1gfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9leHBsYWludGhpcy8ke3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmNvbmNlcHR9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rIHRpdGxlXCI+e3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmF1dGhvcn0gZXhwbGFpbnMgPHNwYW4gY2xhc3NOYW1lPVwiY29uY2VwdC1uYW1lXCI+e3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmNvbmNlcHR9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uTWVhdFwiPlxuICAgICAgICAgICAgICAgICB7cGFyc2UodGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uZXhwbGFuYXRpb24pfVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uQmFyXCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25CdXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmluY3JlbWVudEV4cGxhbmF0aW9ufSA+XG4gICAgICAgICAgICAgICAgICAgPHA+TmV4dCBPbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2p1c3QtYmVjYXVzZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25zU2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25NZWF0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJhciB7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246MC4zcztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EzRDA2NjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEMDY2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5nZXQtaXQtYnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRvbnQtZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDM0U5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kb250LWdldC1pdC1idXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNiYmI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbmNlcHQtbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NDYyRUY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpbms6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTI1JSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvblxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ProfileExplanationsSection.js */"));
        }
      }
    }
  }]);

  return ProfileExplanationsSection;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProfileExplanationsSection);

/***/ })

})
//# sourceMappingURL=[id].js.3d9e33b3600bce10fbaf.hot-update.js.map