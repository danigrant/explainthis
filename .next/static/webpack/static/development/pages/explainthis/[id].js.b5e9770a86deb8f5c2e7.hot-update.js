webpackHotUpdate("static/development/pages/explainthis/[id].js",{

/***/ "./components/Firebase.js":
/*!********************************!*\
  !*** ./components/Firebase.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var firebase = _interopRequireWildcard(__webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js"));

var firebaseConfig = {
  apiKey: "AIzaSyBmeHPOy2Uvargw51ygM30ye9-lrpWoEOU",
  authDomain: "explain-this.firebaseapp.com",
  databaseURL: "https://explain-this.firebaseio.com",
  projectId: "explain-this",
  storageBucket: "explain-this.appspot.com",
  messagingSenderId: "145315125752",
  appId: "1:145315125752:web:4e7c3fe717a051b0471e0d",
  measurementId: "G-2HP7D44T1F"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();
var conceptsRef = db.collection('concepts');
var explanationsRef = db.collection('explanations');
var usersRef = db.collection('users');
var increment = firebase.firestore.FieldValue.increment(1);
var decrement = firebase.firestore.FieldValue.increment(-1); // returns obj with all explanations for one topic, ordered by voteCount

function getConceptExplanations(_x) {
  return _getConceptExplanations.apply(this, arguments);
} // saves explanation to db


function _getConceptExplanations() {
  _getConceptExplanations = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(concept) {
    var snapshot, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return explanationsRef.where('concept', '==', concept).orderBy('score', 'desc').get();

          case 2:
            snapshot = _context2.sent;
            data = {
              "concept": concept,
              "explanations": []
            };
            _context2.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
              data.explanations.push({
                "author": docData.author,
                "datetime": docData.datetime,
                "explanation": docData.explanation,
                "score": docData.score,
                "id": doc.id
              });
            });

          case 6:
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getConceptExplanations.apply(this, arguments);
}

function saveExplanationToDB(_x2, _x3, _x4) {
  return _saveExplanationToDB.apply(this, arguments);
} // up or down votes an explanation


function _saveExplanationToDB() {
  _saveExplanationToDB = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(concept, author, explanation) {
    var newExplanation;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            newExplanation = {
              "concept": concept,
              "author": author,
              "datetime": firebase.firestore.Timestamp.now(),
              "explanation": explanation,
              "score": 0,
              "voteLog": []
            };
            explanationsRef.add(newExplanation);
            incrementUserExplanationCount(author);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _saveExplanationToDB.apply(this, arguments);
}

function addVote(_x5, _x6, _x7) {
  return _addVote.apply(this, arguments);
}

function _addVote() {
  _addVote = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(vote, user, explanationID) {
    var explanationRef, newVote;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            explanationRef = explanationsRef.doc(explanationID);
            newVote = {
              "datetime": firebase.firestore.Timestamp.now(),
              "user": user,
              "vote": vote
            };
            explanationRef.update({
              voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
            });

            if (vote > 0) {
              explanationRef.update({
                score: increment
              });
            } else {
              explanationRef.update({
                score: decrement
              });
            }

            updateUserScore(vote, user);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _addVote.apply(this, arguments);
}

function getAllConcepts() {
  return _getAllConcepts.apply(this, arguments);
}

function _getAllConcepts() {
  _getAllConcepts = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5() {
    var snapshot, data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return conceptsRef.get();

          case 2:
            snapshot = _context5.sent;
            data = [];
            _context5.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
              data.push({
                "concept": {
                  "id": doc.id,
                  "concept": docData.concept
                }
              });
            });

          case 6:
            return _context5.abrupt("return", data);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getAllConcepts.apply(this, arguments);
}

function getUsersExplanations(_x8) {
  return _getUsersExplanations.apply(this, arguments);
} // get specific user id


function _getUsersExplanations() {
  _getUsersExplanations = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(username) {
    var snapshot, data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return explanationsRef.where('author', '==', username).orderBy('score', 'desc').get();

          case 2:
            snapshot = _context6.sent;
            data = {
              "explanations": []
            };
            _context6.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
              data.explanations.push({
                "concept": docData.concept,
                "datetime": docData.datetime,
                "explanation": docData.explanation,
                "score": docData.score,
                "author": username,
                "id": doc.id
              });
            });

          case 6:
            return _context6.abrupt("return", data);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getUsersExplanations.apply(this, arguments);
}

function getUserDocID(_x9) {
  return _getUserDocID.apply(this, arguments);
} // increment/decrement users score by -1 or 1


function _getUserDocID() {
  _getUserDocID = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(username) {
    var id, snapshot;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = "";
            _context7.next = 3;
            return usersRef.where('username', '==', username).get();

          case 3:
            snapshot = _context7.sent;
            _context7.next = 6;
            return snapshot.forEach(function (doc) {
              id = doc.id;
            });

          case 6:
            return _context7.abrupt("return", id);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getUserDocID.apply(this, arguments);
}

function updateUserScore(_x10, _x11) {
  return _updateUserScore.apply(this, arguments);
} // increment users explanations


function _updateUserScore() {
  _updateUserScore = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(value, username) {
    var userRef;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.t0 = usersRef;
            _context8.next = 3;
            return getUserDocID(username);

          case 3:
            _context8.t1 = _context8.sent;
            userRef = _context8.t0.doc.call(_context8.t0, _context8.t1);

            if (value > 0) {
              userRef.update({
                score: increment
              });
            } else {
              userRef.update({
                score: decrement
              });
            }

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _updateUserScore.apply(this, arguments);
}

function incrementUserExplanationCount(_x12) {
  return _incrementUserExplanationCount.apply(this, arguments);
} // get user data aka score and num contributed explanations


function _incrementUserExplanationCount() {
  _incrementUserExplanationCount = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee9(username) {
    var userRef;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.t0 = usersRef;
            _context9.next = 3;
            return getUserDocID(username);

          case 3:
            _context9.t1 = _context9.sent;
            userRef = _context9.t0.doc.call(_context9.t0, _context9.t1);
            userRef.update({
              contributedExplanations: increment
            });

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _incrementUserExplanationCount.apply(this, arguments);
}

function getUserPoints(_x13) {
  return _getUserPoints.apply(this, arguments);
} // get top 10 users by points


function _getUserPoints() {
  _getUserPoints = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee10(username) {
    var data, snapshot;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            data = {};
            _context10.next = 3;
            return usersRef.where('username', '==', username).get();

          case 3:
            snapshot = _context10.sent;
            _context10.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
              data = {
                "points": docData.score,
                "numContributedExplanations": docData.contributedExplanations
              };
            });

          case 6:
            console.log(data);
            return _context10.abrupt("return", data);

          case 8:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _getUserPoints.apply(this, arguments);
}

function getPointsLeaderboard() {
  return _getPointsLeaderboard.apply(this, arguments);
} // get top 10 users by contributed explanations


function _getPointsLeaderboard() {
  _getPointsLeaderboard = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee11() {
    var data, snapshot;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            data = [];
            _context11.next = 3;
            return usersRef.orderBy('score', 'desc').orderBy('contributedExplanations', 'desc').limit(10).get();

          case 3:
            snapshot = _context11.sent;
            _context11.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
              data.push({
                "username": docData.username,
                "points": docData.score,
                "numContributedExplanations": docData.contributedExplanations,
                "id": doc.id
              });
            });

          case 6:
            return _context11.abrupt("return", data);

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _getPointsLeaderboard.apply(this, arguments);
}

function getNumExplanationsLeaderboard() {
  return _getNumExplanationsLeaderboard.apply(this, arguments);
}

function _getNumExplanationsLeaderboard() {
  _getNumExplanationsLeaderboard = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee12() {
    var data, snapshot;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            data = [];
            _context12.next = 3;
            return usersRef.orderBy('contributedExplanations', 'desc').orderBy('score', 'desc').limit(10).get();

          case 3:
            snapshot = _context12.sent;
            _context12.next = 6;
            return snapshot.forEach(function (doc) {
              var docData = doc.data();
              data.push({
                "username": docData.username,
                "points": docData.score,
                "numContributedExplanations": docData.contributedExplanations,
                "id": doc.id
              });
            });

          case 6:
            return _context12.abrupt("return", data);

          case 7:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _getNumExplanationsLeaderboard.apply(this, arguments);
}

var provider = new firebase.auth.TwitterAuthProvider();

function loginWithTwitter() {
  return _loginWithTwitter.apply(this, arguments);
}

function _loginWithTwitter() {
  _loginWithTwitter = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee13() {
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            firebase.auth().signInWithPopup(provider).then(function (result) {
              var token = result.credential.accessToken;
              var secret = result.credential.secret;
              var user = result.user;
            });

          case 1:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _loginWithTwitter.apply(this, arguments);
}

void function () {
  var _main = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
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
module.exports = {
  getConceptExplanations: getConceptExplanations,
  saveExplanationToDB: saveExplanationToDB,
  addVote: addVote,
  getAllConcepts: getAllConcepts,
  getUsersExplanations: getUsersExplanations,
  getUserPoints: getUserPoints,
  getPointsLeaderboard: getPointsLeaderboard,
  getNumExplanationsLeaderboard: getNumExplanationsLeaderboard,
  loginWithTwitter: loginWithTwitter
};

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Header() {
  return __jsx("div", {
    className: "jsx-233957180" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-233957180" + " " + "sizeContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-233957180" + " " + "logo link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: "/images/logo.png",
    className: "jsx-233957180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-233957180" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/leaderboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-233957180" + " " + "link menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-233957180" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "emoji_events_rounded"), __jsx("a", {
    title: "Leaderboard",
    className: "jsx-233957180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Leaderboard"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/explainer/@barackobama",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-233957180" + " " + "avatar link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
    className: "jsx-233957180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })))), __jsx("div", {
    onClick: this.props.updateAuth,
    className: "jsx-233957180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Click me to update")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "233957180",
    __self: this
  }, ".wrapper.jsx-233957180{background-color:white;z-index:1;border-bottom:1px solid #ddd;padding-bottom:15px;position:fixed;top:0;left:0;width:100%;}.sizeContainer.jsx-233957180{width:750px;margin:0 auto;}i.jsx-233957180{width:24px;position:relative;top:5px;}a.jsx-233957180{-webkit-text-decoration:none;text-decoration:none;color:inherit;}a.jsx-233957180{margin-left:5px;}.logo.jsx-233957180{display:inline-block;position:relative;top:9px;}.logo.jsx-233957180 img.jsx-233957180{width:150px;}.menu.jsx-233957180{display:inline-block;}.menu-item.jsx-233957180{display:inline-block;margin-left:50px;color:#5a5a5a;}.avatar.jsx-233957180{display:inline-block;margin-left:400px;}.avatar.jsx-233957180 img.jsx-233957180{display:inline-block;width:30px;border-radius:50px;position:relative;top:10px;}.link.jsx-233957180{cursor:pointer;}.link.jsx-233957180:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-233957180:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJrQixBQUdrQyxBQVVYLEFBSUQsQUFLVSxBQUlMLEFBR0ssQUFLVCxBQUdTLEFBR0EsQUFLQSxBQUlBLEFBT1AsQUFHVSxBQUdBLFdBNUNOLENBSkosQUFxQmhCLEdBc0JBLENBOUJBLEtBR29CLEFBUXBCLEFBR21CLEFBS0MsQUFJUCxFQTlDRCxHQVdaLEdBSVUsR0FnQ1csQ0E5Q1UsSUFlL0IsQ0FzQmdCLENBWE4sQUFnQlYsUUFmQSxHQVRnQixDQTZCSSxDQVRwQixJQWlCQSxBQUdBLE1BekRzQixFQWtCdEIsS0E2QlcsU0FDWCxJQS9DaUIsZUFDVCxNQUNDLE9BQ0ksV0FDYiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXplQ29udGFpbmVyXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIGxpbmtcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sZWFkZXJib2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rIG1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmVtb2ppX2V2ZW50c19yb3VuZGVkPC9pPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiTGVhZGVyYm9hcmRcIj5MZWFkZXJib2FyZDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2V4cGxhaW5lci9AYmFyYWNrb2JhbWFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyIGxpbmtcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMucHJvcHMudXBkYXRlQXV0aH0+Q2xpY2sgbWUgdG8gdXBkYXRlPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5zaXplQ29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tZW51IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgIGNvbG9yOiAjNWE1YTVhO1xuICAgICAgICB9XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNDAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF2YXRhciBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmsge1xuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbms6YWN0aXZlIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTI1JSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Header.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=[id].js.b5e9770a86deb8f5c2e7.hot-update.js.map