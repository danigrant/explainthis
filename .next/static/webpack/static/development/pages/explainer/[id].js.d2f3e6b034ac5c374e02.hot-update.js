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
            className: "jsx-3424929465" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }, __jsx("div", {
            key: "explanation-".concat(this.props.currentExplanation.id),
            className: "jsx-3424929465" + " " + "explanation",
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
            className: "jsx-3424929465" + " " + "link title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, this.props.currentExplanation.author, " explains ", __jsx("span", {
            className: "jsx-3424929465" + " " + "concept-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, this.props.currentExplanation.concept))), __jsx("div", {
            className: "jsx-3424929465" + " " + "explanationMeat",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, html_react_parser__WEBPACK_IMPORTED_MODULE_7___default()(this.props.currentExplanation.explanation)), __jsx("div", {
            className: "jsx-3424929465" + " " + "explanationActionBar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx("div", {
            onClick: this.props.incrementExplanation,
            className: "jsx-3424929465" + " " + "explanationActionButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-3424929465",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, "Next One"), __jsx("img", {
            src: "/images/just-because.png",
            className: "jsx-3424929465",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
            id: "3424929465",
            __self: this
          }, ".explanationsSection.jsx-3424929465{position:relative;height:560px;}.explanation.jsx-3424929465{border-bottom:1px solid #ddd;margin-bottom:20px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.explanation.jsx-3424929465:last-child{border:none;}.attributionAvatar.jsx-3424929465{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-3424929465{display:inline-block;margin-left:10px;}.explanationMeat.jsx-3424929465{padding-bottom:5px;font-size:30px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.explanationActionBar.jsx-3424929465{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:20px;text-align:center;color:white;}.explanationActionButton.jsx-3424929465{display:inline-block;-webkit-transition:0.3s;transition:0.3s;position:relative;bottom:50px;}.explanationActionButton.jsx-3424929465:nth-of-type(2){margin-left:35px;}.explanationActionButton.jsx-3424929465 img.jsx-3424929465{display:inline-block;width:45px;position:relative;top:15px;position:relative;right:26px;z-index:1;}.explanationActionButton.jsx-3424929465 p.jsx-3424929465{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;background-color:#A3D066;}.get-it-button.jsx-3424929465 p.jsx-3424929465{background-color:#A3D066;}.get-it-button.jsx-3424929465 img.jsx-3424929465{position:relative;left:26px;}.dont-get-it-button.jsx-3424929465 p.jsx-3424929465{background-color:#6EC3E9;}.dont-get-it-button.jsx-3424929465 img.jsx-3424929465{position:relative;right:26px;}.explanationActionButton.jsx-3424929465:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.explanationActionButton.jsx-3424929465:active.jsx-3424929465:first-child{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.score.jsx-3424929465{margin-right:10px;color:#bbb;}.concept-name.jsx-3424929465{font-weight:bold;color:#6462EF;}.link.jsx-3424929465{cursor:pointer;}.link.jsx-3424929465:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-3424929465:active{-webkit-filter:brightness(125%);filter:brightness(125%);}.title.jsx-3424929465{font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9Qcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3dCLEFBR21DLEFBSVcsQUFRakIsQUFHRCxBQU9VLEFBSUYsQUFLRCxBQU1HLEFBTUosQUFHSSxBQVNBLEFBT0ksQUFHUCxBQUlPLEFBR1AsQUFJRyxBQU94QixBQUVxQixBQUlELEFBSUgsQUFHVSxBQUdBLEFBR1QsV0F0RkksQ0FIckIsR0FpRkEsQUFTQSxFQTNEQSxBQThDZ0IsQ0F6RkQsQUFpRUgsQUFPQyxBQWFBLENBM0RJLEVBSkUsQUFlRixBQVNKLEFBU2lCLElBTzlCLEFBT0EsR0FIQSxDQTlEcUIsQUFxRXJCLEFBYUEsQ0F0RXVCLENBZnZCLEFBeUZBLENBM0NvQixFQXBCTixJQUpkLFVBbEJjLENBbURPLENBUlYsQ0EvQlMsS0ErRXBCLEFBR0EsR0FsRG9CLENBM0NMLENBZ0NLLE9BbUJULENBdkNELEVBYU8sSUE2Q1MsRUF6RDFCLEFBK0JhLEFBUWMsRUFuQmIsT0FQTSxDQWtEcEIsQ0EvQlksR0FYWixPQVlBLElBT0EsRUExQmMsQ0FMZCxXQU1BLGtCQTNCUyx5QkFzRWlCLFFBckVGLGdEQXNFUCxlQUNqQixlQXRFQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvUHJvZmlsZUV4cGxhbmF0aW9uc1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xuaW1wb3J0IHsgYWRkVm90ZSB9IGZyb20gJy4vRmlyZWJhc2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnXG5cbmNsYXNzIFByb2ZpbGVFeHBsYW5hdGlvbnNTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9nZ2VkSW5Vc2VyOiAnQGJhcmFja29iYW1hJ1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25zU2VjdGlvblwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25cIiBrZXk9e2BleHBsYW5hdGlvbi0ke3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmlkfWB9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2V4cGxhaW50aGlzLyR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uY29uY2VwdH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmsgdGl0bGVcIj57dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uYXV0aG9yfSBleHBsYWlucyA8c3BhbiBjbGFzc05hbWU9XCJjb25jZXB0LW5hbWVcIj57dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uY29uY2VwdH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25NZWF0XCI+XG4gICAgICAgICAgICAgICAgIHtwYXJzZSh0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5leHBsYW5hdGlvbil9XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25CYXJcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaW5jcmVtZW50RXhwbGFuYXRpb259ID5cbiAgICAgICAgICAgICAgICAgICA8cD5OZXh0IE9uZTwvcD5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvanVzdC1iZWNhdXNlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbnNTZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25NZWF0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQmFyIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjowLjNzO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EzRDA2NjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEMDY2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5nZXQtaXQtYnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRvbnQtZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDM0U5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kb250LWdldC1pdC1idXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmJiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb25jZXB0LW5hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjQ2MkVGO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUV4cGxhbmF0aW9uc1NlY3Rpb25cbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ProfileExplanationsSection.js */"));
        }
      }
    }
  }]);

  return ProfileExplanationsSection;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProfileExplanationsSection);

/***/ })

})
//# sourceMappingURL=[id].js.d2f3e6b034ac5c374e02.hot-update.js.map