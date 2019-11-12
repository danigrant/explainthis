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
            className: "jsx-694307654" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }, __jsx("div", {
            key: "explanation-".concat(this.props.currentExplanation.id),
            className: "jsx-694307654" + " " + "explanation",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }, this.props.profilepage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: "/explainthis/".concat(this.props.currentExplanation.concept),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-694307654" + " " + "link conceptName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, "".concat(this.props.currentExplanation.author, " explains ").concat(this.props.currentExplanation.concept))), __jsx("div", {
            className: "jsx-694307654" + " " + "explanationMeat",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, html_react_parser__WEBPACK_IMPORTED_MODULE_7___default()(this.props.currentExplanation.explanation)), __jsx("div", {
            className: "jsx-694307654" + " " + "explanationActionBar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, __jsx("div", {
            onClick: this.props.incrementExplanation,
            className: "jsx-694307654" + " " + "explanationActionButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-694307654",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, "Next One"), __jsx("img", {
            src: "/images/dont-get-it-cat.png",
            className: "jsx-694307654",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
            id: "694307654",
            __self: this
          }, ".explanationsSection.jsx-694307654{position:relative;height:560px;}.explanation.jsx-694307654{border-bottom:1px solid #ddd;margin-bottom:20px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.explanation.jsx-694307654:last-child{border:none;}.attributionAvatar.jsx-694307654{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-694307654{display:inline-block;margin-left:10px;}.explanationMeat.jsx-694307654{padding-bottom:5px;font-size:30px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.explanationActionBar.jsx-694307654{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:20px;text-align:center;color:white;}.explanationActionButton.jsx-694307654{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationActionButton.jsx-694307654:nth-of-type(2){margin-left:35px;}.explanationActionButton.jsx-694307654 img.jsx-694307654{display:inline-block;width:45px;position:relative;top:15px;z-index:1;}.explanationActionButton.jsx-694307654 p.jsx-694307654{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;}.get-it-button.jsx-694307654 p.jsx-694307654{background-color:#A3D066;}.get-it-button.jsx-694307654 img.jsx-694307654{position:relative;left:26px;}.dont-get-it-button.jsx-694307654 p.jsx-694307654{background-color:#6EC3E9;}.dont-get-it-button.jsx-694307654 img.jsx-694307654{position:relative;right:26px;}.explanationActionButton.jsx-694307654:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.explanationActionButton.jsx-694307654:active.jsx-694307654:first-child{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.score.jsx-694307654{margin-right:10px;color:#bbb;}.conceptName.jsx-694307654{font-weight:bold;font-size:24px;}.link.jsx-694307654{cursor:pointer;}.link.jsx-694307654:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-694307654:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9Qcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3dCLEFBR21DLEFBSVcsQUFRakIsQUFHRCxBQU9VLEFBSUYsQUFLRCxBQU1HLEFBSUosQUFHSSxBQU9BLEFBTUksQUFHUCxBQUlPLEFBR1AsQUFJRyxBQU94QixBQUVxQixBQUlELEFBSUgsQUFHVSxBQUdBLFdBOUVMLENBSHJCLEdBNEVBLEVBL0NBLEFBMkNpQixDQXBGRixBQTRESCxBQU9DLEFBYUEsQ0F0REksRUFKRSxBQWVGLEFBT0osQUFPaUIsSUFNOUIsQUFPQSxHQUhBLENBekRxQixBQWdFckIsQUFhQSxDQWpFdUIsQ0FmdkIsQ0E0Q29CLEFBd0NwQixFQTFEYyxJQUpkLFVBbEJjLENBK0NPLENBTlYsQ0E3QlMsS0EwRXBCLEFBR0EsR0EvQ1ksQ0F6Q0csQ0FnQ2YsT0FlVyxDQW5DRCxBQThCVixFQWpCaUIsSUF3Q1MsRUFwRDFCLEFBbUNBLFNBdEJvQixDQTZDcEIsaUJBNUNjLENBTGQsV0FNQSxrQkEzQlMseUJBaUVpQixRQWhFRixnREFpRVAsZUFDakIsZUFqRUEiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL1Byb2ZpbGVFeHBsYW5hdGlvbnNTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcbmltcG9ydCB7IGFkZFZvdGUgfSBmcm9tICcuL0ZpcmViYXNlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuXG5jbGFzcyBQcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvZ2dlZEluVXNlcjogJ0BiYXJhY2tvYmFtYSdcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uc1NlY3Rpb25cIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uXCIga2V5PXtgZXhwbGFuYXRpb24tJHt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5pZH1gfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJvZmlsZXBhZ2UgJiZcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2V4cGxhaW50aGlzLyR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uY29uY2VwdH1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluayBjb25jZXB0TmFtZVwiPntgJHt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5hdXRob3J9IGV4cGxhaW5zICR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uY29uY2VwdH1gfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbk1lYXRcIj5cbiAgICAgICAgICAgICAgICAge3BhcnNlKHRoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmV4cGxhbmF0aW9uKX1cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvbkJhclwiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uXCIgb25DbGljaz17dGhpcy5wcm9wcy5pbmNyZW1lbnRFeHBsYW5hdGlvbn0gPlxuICAgICAgICAgICAgICAgICAgIDxwPk5leHQgT25lPC9wPlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kb250LWdldC1pdC1jYXQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uc1NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbk1lYXQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CYXIge1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuM3M7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEMDY2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5nZXQtaXQtYnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRvbnQtZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDM0U5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kb250LWdldC1pdC1idXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmJiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb25jZXB0TmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUV4cGxhbmF0aW9uc1NlY3Rpb25cbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ProfileExplanationsSection.js */"));
        }
      }
    }
  }]);

  return ProfileExplanationsSection;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProfileExplanationsSection);

/***/ })

})
//# sourceMappingURL=[id].js.06e04e27ae895e02e1eb.hot-update.js.map