webpackHotUpdate("static/development/pages/explainthis/[id].js",{

/***/ "./components/Editor.js":
/*!******************************!*\
  !*** ./components/Editor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Firebase */ "./components/Firebase.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Firebase__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});

var Editor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Editor, _React$Component);

  function Editor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Editor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Editor).call(this, props));
    _this.state = {
      text: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleSave = _this.handleSave.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.quillRef.getModule('toolbar').addHandler('image', imageHandler);
      // , handlers: { 'image': this.imageHandler }
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        text: value
      });
    }
  }, {
    key: "handleSave",
    value: function () {
      var _handleSave = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_Firebase__WEBPACK_IMPORTED_MODULE_11__["saveExplanationToDB"])("emergence", "@barackobama", this.state.text);

              case 2:
                this.setState({
                  text: ''
                });
                this.props.handleSubmitAnswer();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSave() {
        return _handleSave.apply(this, arguments);
      }

      return handleSave;
    }()
  }, {
    key: "imageHandler",
    value: function () {
      var _imageHandler = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(image) {
        var res, json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('in image handler');
                _context2.next = 3;
                return fetch('https://api.imgur.com/3/upload', {
                  method: 'POST',
                  headers: {
                    'Authorization': "Client-ID ".concat(process.env.IMGUR_CLIENT_ID)
                  },
                  body: "image=".concat(image)
                });

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return res.json();

              case 6:
                json = _context2.sent;
                console.log(json);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function imageHandler(_x) {
        return _imageHandler.apply(this, arguments);
      }

      return imageHandler;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-3989938028" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3989938028" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3989938028" + " " + "attribution",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("img", {
        src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
        className: "jsx-3989938028" + " " + "attributionAvatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-3989938028" + " " + "attributionUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "@barackobama")), __jsx("div", {
        onClick: this.handleSave,
        className: "jsx-3989938028" + " " + "submit-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "submit!")), __jsx(ReactQuill, {
        ref: function ref(el) {
          return _this2.quillRef = el;
        },
        className: "editor",
        modules: {
          toolbar: ['link', 'image', 'video']
        },
        value: this.state.text,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "228845664",
        __self: this
      }, ".wrapper.jsx-3989938028{border:1px solid #ddd;border-radius:5px;width:100%;margin-top:30px;}.header.jsx-3989938028{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-3989938028{position:relative;top:5px;left:5px;display:inline-block;}.attributionAvatar.jsx-3989938028{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-3989938028{display:inline-block;margin-left:10px;position:relative;bottom:15px;}.editor.jsx-3989938028{padding:5px 20px 5px 20px;border-radius:0 0 5px 5px;}.submit-button.jsx-3989938028{display:inline-block;padding:0.7em 1.4em;margin:0 0.3em 0.3em 0;border-radius:0.15em;box-sizing:border-box;-webkit-text-decoration:none;text-decoration:none;font-family:'Roboto',sans-serif;text-transform:uppercase;font-weight:400;color:#FFFFFF;background-color:#3369ff;box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);text-align:center;position:relative;float:right;top:15px;}.submit-button.jsx-3989938028:active{-webkit-filter:brightness(90%);filter:brightness(90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUdtQyxBQU1ILEFBT0QsQUFNUCxBQUtVLEFBTUssQUFJTixBQWtCRyxXQWhDSixPQU5YLENBUFEsRUFrQkMsQUFVRSxDQWxDRCxJQWNULEFBZ0JpQixJQVZMLEtBYkwsQUFRSyxHQVVILEVBeEJQLENBa0NXLFVBakNOLEFBTVUsQUFhNUIsQ0FVQSxFQXFCQSxFQXBDQSxBQVVjLFFBVVEsR0FqQ3RCLENBd0JBLFNBbEIrQixRQTRCUCxxQkEzQnhCLENBNEJzQixrREFDVyxnQ0FDUCx5QkFDVCxnQkFDRixjQUNXLHlCQUM0QixxREFDbkMsa0JBQ0Esa0JBQ0wsWUFDSCxTQUNYIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBzYXZlRXhwbGFuYXRpb25Ub0RCIH0gZnJvbSAnLi9GaXJlYmFzZSdcblxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGV4dDogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTYXZlID0gdGhpcy5oYW5kbGVTYXZlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIHRoaXMucXVpbGxSZWYuZ2V0TW9kdWxlKCd0b29sYmFyJykuYWRkSGFuZGxlcignaW1hZ2UnLCBpbWFnZUhhbmRsZXIpO1xuICAgIC8vICwgaGFuZGxlcnM6IHsgJ2ltYWdlJzogdGhpcy5pbWFnZUhhbmRsZXIgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IHZhbHVlIH0pXG4gIH1cblxuICBhc3luYyBoYW5kbGVTYXZlKCkge1xuICAgIGF3YWl0IHNhdmVFeHBsYW5hdGlvblRvREIoXCJlbWVyZ2VuY2VcIiwgXCJAYmFyYWNrb2JhbWFcIiwgdGhpcy5zdGF0ZS50ZXh0KVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGV4dDogJydcbiAgICB9KVxuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0QW5zd2VyKClcbiAgfVxuXG4gIGFzeW5jIGltYWdlSGFuZGxlcihpbWFnZSkge1xuICAgIGNvbnNvbGUubG9nKCdpbiBpbWFnZSBoYW5kbGVyJyk7XG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5pbWd1ci5jb20vMy91cGxvYWQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQ2xpZW50LUlEICR7cHJvY2Vzcy5lbnYuSU1HVVJfQ0xJRU5UX0lEfWBcbiAgICAgIH0sXG4gICAgICBib2R5OiBgaW1hZ2U9JHtpbWFnZX1gXG4gICAgfSlcbiAgICBsZXQganNvbiA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uQXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25Vc2VybmFtZVwiPkBiYXJhY2tvYmFtYTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9PnN1Ym1pdCE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxSZWFjdFF1aWxsIHJlZj17KGVsKSA9PiB0aGlzLnF1aWxsUmVmID0gZWx9IGNsYXNzTmFtZT1cImVkaXRvclwiIG1vZHVsZXM9e3sgdG9vbGJhcjogWydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10gfX0gdmFsdWU9e3RoaXMuc3RhdGUudGV4dH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM5cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvblVzZXJuYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWRpdG9yIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzowLjdlbSAxLjRlbTtcbiAgICAgICAgICAgIG1hcmdpbjowIDAuM2VtIDAuM2VtIDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjAuMTVlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICBjb2xvcjojRkZGRkZGO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzM2OWZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzppbnNldCAwIC0wLjZlbSAwIC0wLjM1ZW0gcmdiYSgwLDAsMCwwLjE3KTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJtaXQtYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93LCAucWwtY29udGFpbmVyLnFsLXNub3cge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "233154949",
        __self: this
      }, ".ql-toolbar.ql-snow,.ql-container.ql-snow{border:none;}.ql-toolbar.ql-snow{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0gyQixBQUd5QixBQUdpQixZQUYvQixpQkFHQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgc2F2ZUV4cGxhbmF0aW9uVG9EQiB9IGZyb20gJy4vRmlyZWJhc2UnXG5cbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2F2ZSA9IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnF1aWxsUmVmLmdldE1vZHVsZSgndG9vbGJhcicpLmFkZEhhbmRsZXIoJ2ltYWdlJywgaW1hZ2VIYW5kbGVyKTtcbiAgICAvLyAsIGhhbmRsZXJzOiB7ICdpbWFnZSc6IHRoaXMuaW1hZ2VIYW5kbGVyIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9KVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlU2F2ZSgpIHtcbiAgICBhd2FpdCBzYXZlRXhwbGFuYXRpb25Ub0RCKFwiZW1lcmdlbmNlXCIsIFwiQGJhcmFja29iYW1hXCIsIHRoaXMuc3RhdGUudGV4dClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdEFuc3dlcigpXG4gIH1cblxuICBhc3luYyBpbWFnZUhhbmRsZXIoaW1hZ2UpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gaW1hZ2UgaGFuZGxlcicpO1xuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvdXBsb2FkJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYENsaWVudC1JRCAke3Byb2Nlc3MuZW52LklNR1VSX0NMSUVOVF9JRH1gXG4gICAgICB9LFxuICAgICAgYm9keTogYGltYWdlPSR7aW1hZ2V9YFxuICAgIH0pXG4gICAgbGV0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfT5zdWJtaXQhPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UmVhY3RRdWlsbCByZWY9eyhlbCkgPT4gdGhpcy5xdWlsbFJlZiA9IGVsfSBjbGFzc05hbWU9XCJlZGl0b3JcIiBtb2R1bGVzPXt7IHRvb2xiYXI6IFsnbGluaycsICdpbWFnZScsICd2aWRlbyddIH19IHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzOXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVkaXRvciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6MC43ZW0gMS40ZW07XG4gICAgICAgICAgICBtYXJnaW46MCAwLjNlbSAwLjNlbSAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czowLjE1ZW07XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgICAgICAgY29sb3I6I0ZGRkZGRjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzMzNjlmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6aW5zZXQgMCAtMC42ZW0gMCAtMC4zNWVtIHJnYmEoMCwwLDAsMC4xNyk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VibWl0LWJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLnFsLXRvb2xiYXIucWwtc25vdywgLnFsLWNvbnRhaW5lci5xbC1zbm93IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnFsLXRvb2xiYXIucWwtc25vdyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Editor);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=[id].js.26c8ffd860cd3700baab.hot-update.js.map