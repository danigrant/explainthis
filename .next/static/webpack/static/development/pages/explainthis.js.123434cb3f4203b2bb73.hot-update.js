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
var explanationsRef = db.collection('explanations'); // returns obj with all explanations for one topic, ordered by voteCount

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
    var explanationRef, newVote, increment, decrement;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('vote: ', vote);
            explanationRef = explanationsRef.doc(explanationID);
            newVote = {
              "datetime": firebase.firestore.Timestamp.now(),
              "user": user,
              "vote": vote
            };
            explanationRef.update({
              voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
            });
            increment = firebase.firestore.FieldValue.increment(1);
            decrement = firebase.firestore.FieldValue.increment(-1);

            if (vote > 0) {
              explanationRef.update({
                score: increment
              });
            } else {
              explanationRef.update({
                score: decrement
              });
            }

          case 7:
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
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            data = [];
            conceptsRef.get().then(function (snapshot) {
              if (snapshot.empty) {
                console.log('No matching documents.');
                return;
              }

              snapshot.forEach(function (doc) {
                var docData = doc.data();
                var concept = {
                  "id": doc.id,
                  "concept": docData.concept
                };
                console.log("concept: ", concept);
                data.push(concept);
              });
            });
            console.log("data in getAllConcepts: ".concat(data));
            return _context5.abrupt("return", data);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getAllConcepts.apply(this, arguments);
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
            getAllConcepts();

          case 1:
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
  getAllConcepts: getAllConcepts
};

/***/ })

})
//# sourceMappingURL=explainthis.js.123434cb3f4203b2bb73.hot-update.js.map