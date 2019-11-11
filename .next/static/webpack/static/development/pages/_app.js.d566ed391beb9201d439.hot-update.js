webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Twitter.js":
/*!*******************************!*\
  !*** ./components/Twitter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js"));

var credentials = "".concat(process.env.TWITTER_API_KEY, ":").concat(process.env.TWITTER_API_SECRET);
var credentialsBase64Encoded = new Buffer(credentials).toString('base64');

function getTwitterToken() {
  return _getTwitterToken.apply(this, arguments);
} // pass in username no @ and get avatar


function _getTwitterToken() {
  _getTwitterToken = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var res, json;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _isomorphicUnfetch["default"])("https://api.twitter.com/oauth2/token", {
              body: 'grant_type=client_credentials',
              headers: {
                "Authorization": "Basic ".concat(credentialsBase64Encoded),
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST"
            });

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            json = _context2.sent;
            return _context2.abrupt("return", json.access_token);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTwitterToken.apply(this, arguments);
}

function getTwitterAvatar(_x) {
  return _getTwitterAvatar.apply(this, arguments);
}

function _getTwitterAvatar() {
  _getTwitterAvatar = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(username) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTwitterAvatar.apply(this, arguments);
}

void function () {
  var _main = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getTwitterToken();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function main() {
    return _main.apply(this, arguments);
  }

  return main;
}()();
module.exports = {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=_app.js.d566ed391beb9201d439.hot-update.js.map