webpackHotUpdate("static/development/pages/explainthis.js",{

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
            return explanationsRef.where('concept', '==', concept).get();

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

          case 2:
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

          case 4:
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
            return explanationsRef.where('author', '==', username).get();

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
} // increment/decrement users score


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
              explanationRef.update({
                score: increment
              });
            } else {
              explanationRef.update({
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
}

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

var provider = new firebase.auth.TwitterAuthProvider(); // todo sign in with twitter

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
  getUsersExplanations: getUsersExplanations
};

/***/ })

})
//# sourceMappingURL=explainthis.js.0a65154d57049f4ee39f.hot-update.js.map