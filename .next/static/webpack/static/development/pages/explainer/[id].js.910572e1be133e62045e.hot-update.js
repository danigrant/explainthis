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
            className: "jsx-3516747205" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }, __jsx("div", {
            key: "explanation-".concat(this.props.currentExplanation.id),
            className: "jsx-3516747205" + " " + "explanation",
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
            className: "jsx-3516747205" + " " + "link title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, this.props.currentExplanation.author, " explains ", __jsx("span", {
            className: "jsx-3516747205" + " " + "concept-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, this.props.currentExplanation.concept))), __jsx("div", {
            className: "jsx-3516747205" + " " + "explanationMeat",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, html_react_parser__WEBPACK_IMPORTED_MODULE_7___default()(this.props.currentExplanation.explanation)), __jsx("div", {
            className: "jsx-3516747205" + " " + "explanationActionBar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx("div", {
            onClick: this.props.incrementExplanation,
            className: "jsx-3516747205" + " " + "explanationActionButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-3516747205",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, "Next One"), __jsx("img", {
            src: "/images/just-because.png",
            className: "jsx-3516747205",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
            id: "3516747205",
            __self: this
          }, ".explanationsSection.jsx-3516747205{position:relative;height:100%;}.explanation.jsx-3516747205{border-bottom:1px solid #ddd;margin-bottom:20px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.explanation.jsx-3516747205:last-child{border:none;}.attributionAvatar.jsx-3516747205{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-3516747205{display:inline-block;margin-left:10px;}.explanationMeat.jsx-3516747205{padding-bottom:5px;font-size:30px;height:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.explanationActionBar.jsx-3516747205{position:relative;bottom:100px;font-size:20px;text-align:center;color:white;}.explanationActionButton.jsx-3516747205{display:inline-block;-webkit-transition:0.3s;transition:0.3s;position:relative;}.explanationActionButton.jsx-3516747205:nth-of-type(2){margin-left:35px;}.explanationActionButton.jsx-3516747205 img.jsx-3516747205{display:inline-block;width:75px;position:relative;top:25px;position:relative;right:26px;z-index:1;}.explanationActionButton.jsx-3516747205 p.jsx-3516747205{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;background-color:#A3D066;}.get-it-button.jsx-3516747205 p.jsx-3516747205{background-color:#A3D066;}.get-it-button.jsx-3516747205 img.jsx-3516747205{position:relative;left:26px;}.dont-get-it-button.jsx-3516747205 p.jsx-3516747205{background-color:#6EC3E9;}.dont-get-it-button.jsx-3516747205 img.jsx-3516747205{position:relative;right:26px;}.explanationActionButton.jsx-3516747205:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.score.jsx-3516747205{margin-right:10px;color:#bbb;}.concept-name.jsx-3516747205{font-weight:bold;color:#6462EF;}.link.jsx-3516747205{cursor:pointer;}.link.jsx-3516747205:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-3516747205:active{-webkit-filter:brightness(125%);filter:brightness(125%);}.title.jsx-3516747205{font-size:24px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9Qcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3dCLEFBR21DLEFBSVcsQUFRakIsQUFHRCxBQU9VLEFBSUYsQUFNRCxBQU9HLEFBS0osQUFHSSxBQVNBLEFBT0ksQUFHUCxBQUlPLEFBR1AsQUFJRyxBQU1ILEFBSUQsQUFJSCxBQUdVLEFBR0EsQUFHVCxXQXBGSSxDQUhyQixHQStFQSxBQVNBLEVBeERBLEFBMkNnQixDQXZGRixBQWdDQyxBQWtDSCxBQU9DLEFBVUEsQ0F6REksRUFKRSxBQWlCRixBQVFKLEFBU2lCLElBTzlCLEFBT0EsR0FIQSxDQS9EcUIsQUFzRXJCLEFBVUEsQ0FuRkEsQUFldUIsQ0FpQk4sQUF1RGpCLENBeENvQixFQXJCTixJQUpkLFFBS2MsQUFNTSxFQTdCTixDQW9ETyxDQVJWLENBaENTLEtBNkVwQixBQUdBLEdBL0NvQixDQTVDTCxDQWtDSyxHQUxOLElBdUJILENBeENELE1BMkRnQixDQXpDMUIsQ0FqQkEsQUFnQ2EsQUFRYyxFQWxCM0IsU0FXWSxVQUNaLElBT0EsZUEvQkEsaUJBdEJTLHlCQXVFaUIsUUF0RUYsZ0RBdUVQLGVBQ2pCLGVBdkVBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9Qcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5pbXBvcnQgeyBhZGRWb3RlIH0gZnJvbSAnLi9GaXJlYmFzZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcblxuY2xhc3MgUHJvZmlsZUV4cGxhbmF0aW9uc1NlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2dnZWRJblVzZXI6ICdAYmFyYWNrb2JhbWEnXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbnNTZWN0aW9uXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvblwiIGtleT17YGV4cGxhbmF0aW9uLSR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uaWR9YH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXhwbGFpbnRoaXMvJHt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5jb25jZXB0fWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluayB0aXRsZVwiPnt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5hdXRob3J9IGV4cGxhaW5zIDxzcGFuIGNsYXNzTmFtZT1cImNvbmNlcHQtbmFtZVwiPnt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5jb25jZXB0fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbk1lYXRcIj5cbiAgICAgICAgICAgICAgICAge3BhcnNlKHRoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmV4cGxhbmF0aW9uKX1cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvbkJhclwiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uXCIgb25DbGljaz17dGhpcy5wcm9wcy5pbmNyZW1lbnRFeHBsYW5hdGlvbn0gPlxuICAgICAgICAgICAgICAgICAgIDxwPk5leHQgT25lPC9wPlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9qdXN0LWJlY2F1c2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uc1NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hdHRyaWJ1dGlvblVzZXJuYW1lIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uTWVhdCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CYXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246MC4zcztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EzRDA2NjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEMDY2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5nZXQtaXQtYnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRvbnQtZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDM0U5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kb250LWdldC1pdC1idXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNiYmI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbmNlcHQtbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NDYyRUY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpbms6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTI1JSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvblxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ProfileExplanationsSection.js */"));
        }
      }
    }
  }]);

  return ProfileExplanationsSection;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProfileExplanationsSection);

/***/ })

})
//# sourceMappingURL=[id].js.910572e1be133e62045e.hot-update.js.map