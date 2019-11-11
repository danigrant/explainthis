webpackHotUpdate("static/development/pages/_app.js",{

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_Twitter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Twitter */ "./components/Twitter.js");
/* harmony import */ var _components_Twitter__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_components_Twitter__WEBPACK_IMPORTED_MODULE_21__);
















var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__["default"])(MyApp, _App);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__["default"])(MyApp).call(this, props));
    _this.state = {
      authenticated: false
    };
    _this.updateAuth = _this.updateAuth.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__["default"])(MyApp, [{
    key: "updateAuth",
    value: function () {
      var _updateAuth = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_20__["loginWithTwitter"])();

              case 2:
                this.state = {
                  authenticated: !this.state.authenticated
                };

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateAuth() {
        return _updateAuth.apply(this, arguments);
      }

      return updateAuth;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx("div", {
        className: "jsx-1635431161" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_19___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600,700&display=swap",
        rel: "stylesheet",
        className: "jsx-1635431161",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        className: "jsx-1635431161",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "//cdn.quilljs.com/1.2.6/quill.snow.css",
        className: "jsx-1635431161",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({
        updateAuth: this.updateAuth,
        authenticated: this.state.authenticated
      }, pageProps, {
        className: "jsx-1635431161" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_16___default.a, {
        id: "1635431161",
        __self: this
      }, ".wrapper.jsx-1635431161{font-family:-apple-system,'IBM Plex Sans',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmtCLEFBR29FLHFEQUN6RCIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9GaXJlYmFzZSdcbmltcG9ydCB7IGxvZ2luV2l0aFR3aXR0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL1R3aXR0ZXInXG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXV0aGVudGljYXRlZDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy51cGRhdGVBdXRoID0gdGhpcy51cGRhdGVBdXRoLmJpbmQodGhpcylcbiAgfVxuICBhc3luYyB1cGRhdGVBdXRoKCkge1xuICAgIGF3YWl0IGxvZ2luV2l0aFR3aXR0ZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhdXRoZW50aWNhdGVkOiAhdGhpcy5zdGF0ZS5hdXRoZW50aWNhdGVkXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SUJNK1BsZXgrU2Fuczo0MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5xdWlsbGpzLmNvbS8xLjIuNi9xdWlsbC5zbm93LmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50ICB1cGRhdGVBdXRoPXt0aGlzLnVwZGF0ZUF1dGh9IGF1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuYXV0aGVudGljYXRlZH0gey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcblxuICByZXR1cm4geyAuLi5hcHBQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/_app.js */"));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_18___default.a);

MyApp.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2(appContext) {
    var appProps;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_18___default.a.getInitialProps(appContext);

          case 2:
            appProps = _context2.sent;
            return _context2.abrupt("return", _objectSpread({}, appProps));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.b5e9770a86deb8f5c2e7.hot-update.js.map