module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppContainer.js":
/*!************************************!*\
  !*** ./components/AppContainer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/AppContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const AppContainer = props => __jsx("div", {
  className: "jsx-231428355" + " " + "appContainerStyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3703324234",
  __self: undefined
}, ".appContainerStyle.jsx-231428355{padding:20px;padding-left:40px;border-radius:30px;background-color:white;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex:1;-ms-flex:1;flex:1;margin-top:20px;width:130%;background-color:white;height:700px;}@media (max-width:600px){.appContainerStyle.jsx-231428355{width:90%;margin:0 auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BcHBDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2MsQUFHb0IsQUFpQkQsVUFDSSxHQWpCRSxXQWtCbEIsT0FqQm1CLG1CQUNJLHVCQUNYLFlBQ0MsMEVBQ1MsOEVBQ1YsdUVBQ0kscUVBQ1QsaUNBQ1MsZ0JBQ0wsV0FDWSx1QkFDVixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BcHBDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcHBDb250YWluZXIgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXBwQ29udGFpbmVyU3R5bGVcIj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuYXBwQ29udGFpbmVyU3R5bGUge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgd2lkdGg6IDEzMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgLmFwcENvbnRhaW5lclN0eWxlIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgYm9keSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2MkVGO1xuICAgIH1cbiAgICBodG1sLFxuICAgIGJvZHkge1xuICAgIFx0aGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/AppContainer.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1333032288",
  __self: undefined
}, "body{background-color:#6462EF;}html,body{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BcHBDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJxQixBQUdnQyxBQUlkLFlBQ2IsYUFKQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXBwQ29udGFpbmVyID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFwcENvbnRhaW5lclN0eWxlXCI+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8c3R5bGUganN4PntgXG4gICAgLmFwcENvbnRhaW5lclN0eWxlIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICBmbGV4OiAxO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiAxMzAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIC5hcHBDb250YWluZXJTdHlsZSB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIGJvZHkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NjJFRjtcbiAgICB9XG4gICAgaHRtbCxcbiAgICBib2R5IHtcbiAgICBcdGhlaWdodDogMTAwJTtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250YWluZXI7XG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/AppContainer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./components/Firebase.js":
/*!********************************!*\
  !*** ./components/Firebase.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var firebase = _interopRequireWildcard(__webpack_require__(/*! firebase */ "firebase"));

const firebaseConfig = {
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

const db = firebase.firestore();
const conceptsRef = db.collection('concepts');
const explanationsRef = db.collection('explanations');
const usersRef = db.collection('users');
const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1); // returns obj with all explanations for one topic, ordered by voteCount

async function getConceptExplanations(concept) {
  let snapshot = await explanationsRef.where('concept', '==', concept).orderBy('score', 'desc').get();
  let data = {
    "concept": concept,
    "explanations": []
  };
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.explanations.push({
      "author": docData.author,
      "datetime": docData.datetime,
      "explanation": docData.explanation,
      "score": docData.score,
      "id": doc.id
    });
  });
  return data;
} // saves explanation to db


async function saveExplanationToDB(concept, author, explanation) {
  let newExplanation = {
    "concept": concept,
    "author": author,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": explanation,
    "score": 0,
    "voteLog": []
  };
  explanationsRef.add(newExplanation);
  incrementUserExplanationCount(author);
} // up or down votes an explanation


async function addVote(vote, user, explanationID) {
  let explanationRef = explanationsRef.doc(explanationID);
  let newVote = {
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
}

async function getAllConcepts() {
  let snapshot = await conceptsRef.get();
  let data = [];
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.push({
      "concept": {
        "id": doc.id,
        "concept": docData.concept
      }
    });
  });
  return data;
}

async function getUsersExplanations(username) {
  let snapshot = await explanationsRef.where('author', '==', username).orderBy('score', 'desc').get();
  let data = {
    "explanations": []
  };
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.explanations.push({
      "concept": docData.concept,
      "datetime": docData.datetime,
      "explanation": docData.explanation,
      "score": docData.score,
      "author": username,
      "id": doc.id
    });
  });
  return data;
} // get specific user id


async function getUserDocID(username) {
  let id = "";
  let snapshot = await usersRef.where('username', '==', username).get();
  await snapshot.forEach(doc => {
    id = doc.id;
  });
  return id;
} // increment/decrement users score by -1 or 1


async function updateUserScore(value, username) {
  let userRef = usersRef.doc((await getUserDocID(username)));

  if (value > 0) {
    userRef.update({
      score: increment
    });
  } else {
    userRef.update({
      score: decrement
    });
  }
} // increment users explanations


async function incrementUserExplanationCount(username) {
  let userRef = usersRef.doc((await getUserDocID(username)));
  userRef.update({
    contributedExplanations: increment
  });
} // get user data aka score and num contributed explanations


async function getUserPoints(username) {
  let data = {};
  let snapshot = await usersRef.where('username', '==', username).get();
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data = {
      "points": docData.score,
      "numContributedExplanations": docData.contributedExplanations
    };
  });
  console.log(data);
  return data;
} // get top 10 users by points


async function getPointsLeaderboard() {
  let data = [];
  let snapshot = await usersRef.orderBy('score', 'desc').orderBy('contributedExplanations', 'desc').limit(10).get();
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.push({
      "username": docData.username,
      "points": docData.score,
      "numContributedExplanations": docData.contributedExplanations,
      "id": doc.id
    });
  });
  return data;
} // get top 10 users by contributed explanations


async function getNumExplanationsLeaderboard() {
  let data = [];
  let snapshot = await usersRef.orderBy('contributedExplanations', 'desc').orderBy('score', 'desc').limit(10).get();
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.push({
      "username": docData.username,
      "points": docData.score,
      "numContributedExplanations": docData.contributedExplanations,
      "id": doc.id
    });
  });
  return data;
}

const provider = new firebase.auth.TwitterAuthProvider();

async function loginWithTwitter() {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    let token = result.credential.accessToken;
    let secret = result.credential.secret;
    let user = result.user;
  });
}

void async function main() {}();
module.exports = {
  getConceptExplanations,
  saveExplanationToDB,
  addVote,
  getAllConcepts,
  getUsersExplanations,
  getUserPoints,
  getPointsLeaderboard,
  getNumExplanationsLeaderboard,
  loginWithTwitter
};

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MenuContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MenuContainer */ "./components/MenuContainer.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Loading() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "loading...")));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/MenuContainer.js":
/*!*************************************!*\
  !*** ./components/MenuContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/MenuContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MenuContainer() {
  return __jsx("div", {
    className: "jsx-1363016480" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1363016480" + " " + "sizeContainer",
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
    className: "jsx-1363016480" + " " + "logo link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: "/images/logo.png",
    className: "jsx-1363016480",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1363016480" + " " + "menu",
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
    className: "jsx-1363016480" + " " + "link menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1363016480" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "emoji_events_rounded"), __jsx("a", {
    title: "Leaderboard",
    className: "jsx-1363016480",
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
    className: "jsx-1363016480" + " " + "link menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1363016480" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "account_circle_rounded"), __jsx("a", {
    title: "Leaderboard",
    className: "jsx-1363016480",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Profile"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1363016480",
    __self: this
  }, ".wrapper.jsx-1363016480{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex:0.2;-ms-flex:0.2;flex:0.2;color:white;margin-top:20px;}i.jsx-1363016480{width:24px;position:relative;top:5px;color:white;margin-right:5px;}a.jsx-1363016480{-webkit-text-decoration:none;text-decoration:none;color:inherit;}a.jsx-1363016480{margin-left:5px;}.logo.jsx-1363016480{display:inline-block;position:relative;margin-top:20px;margin-left:20px;}.logo.jsx-1363016480 img.jsx-1363016480{width:150px;}.menu.jsx-1363016480{display:inline-block;}.menu-item.jsx-1363016480:first-child{margin-top:50px;}.menu-item.jsx-1363016480{margin-left:20px;margin-top:30px;}.avatar.jsx-1363016480{display:inline-block;}.avatar.jsx-1363016480 img.jsx-1363016480{display:inline-block;width:30px;border-radius:50px;position:relative;top:10px;}.link.jsx-1363016480{cursor:pointer;}.link.jsx-1363016480:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-1363016480:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9NZW51Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHd0IsQUFRRixBQU9VLEFBSUwsQUFHSyxBQU1ULEFBR1MsQUFHTCxBQUdDLEFBSUksQUFHQSxBQU9QLEFBR1UsQUFHQSxXQWhETixDQW9CcEIsR0F1QkEsQ0FoQ0EsQUFlQSxDQUdrQixJQWZFLEFBU3BCLEFBVUEsQUFHYSxRQW5DSCxHQW9DVyxDQVByQixJQTVCYyxFQWFJLFVBWkMsQ0FJSCxDQStCSSxJQXRCRCxDQThCbkIsQUFHQSxRQXpDQSxFQUpBLEdBbUNXLEdBdEJYLEVBekJ3QixJQWdEeEIsMEVBL0NrQixxRUFDUCx1Q0FDRyxZQUNJLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvTWVudUNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIE1lbnVDb250YWluZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpemVDb250YWluZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gbGlua1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2xlYWRlcmJvYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmsgbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfZXZlbnRzX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJMZWFkZXJib2FyZFwiPkxlYWRlcmJvYXJkPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwbGFpbmVyL0BiYXJhY2tvYmFtYVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rIG1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFjY291bnRfY2lyY2xlX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJMZWFkZXJib2FyZFwiPlByb2ZpbGU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICBmbGV4OiAwLjI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tZW51IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAubGluayB7XG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgfVxuICAgICAgICAubGluazphY3RpdmUge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVDb250YWluZXJcblxuLy8gPExpbmsgaHJlZj1cIi9leHBsYWluZXIvQGJhcmFja29iYW1hXCI+XG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyIGxpbmtcIj5cbi8vICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbi8vICAgPC9kaXY+XG4vLyA8L0xpbms+XG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/MenuContainer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuContainer); // <Link href="/explainer/@barackobama">
//   <div className="avatar link">
//     <img src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
//   </div>
// </Link>

/***/ }),

/***/ "./components/TopWrapper.js":
/*!**********************************!*\
  !*** ./components/TopWrapper.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/TopWrapper.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const TopWrapper = props => __jsx("div", {
  className: "jsx-2702179555" + " " + "topWrapperStyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2702179555",
  __self: undefined
}, ".topWrapperStyle.jsx-2702179555{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;height:100%;min-height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9Ub3BXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdjLEFBR29CLDBFQUNNLHFFQUNKLHlEQUNKLFdBQ0MsWUFDSSxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL1RvcFdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb3BXcmFwcGVyID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRvcFdyYXBwZXJTdHlsZVwiPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPHN0eWxlIGpzeD57YFxuICAgIC50b3BXcmFwcGVyU3R5bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUb3BXcmFwcGVyXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/TopWrapper.js */"));

/* harmony default export */ __webpack_exports__["default"] = (TopWrapper);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/leaderboard.js":
/*!******************************!*\
  !*** ./pages/leaderboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TopWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TopWrapper */ "./components/TopWrapper.js");
/* harmony import */ var _components_MenuContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MenuContainer */ "./components/MenuContainer.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/leaderboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Leaderboard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: []
    };
    this.handleRankByPoints = this.handleRankByPoints.bind(this);
    this.handleRankByNumExplanations = this.handleRankByNumExplanations.bind(this);
  }

  async componentDidMount() {
    let futureLeaderboard = await Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_5__["getPointsLeaderboard"])();
    console.log(futureLeaderboard); // this is the full array

    this.setState({
      leaderboard: futureLeaderboard
    });
    console.log(this.state.leaderboard); // this is an empty array
  }

  async handleRankByPoints() {
    this.setState({
      leaderboard: await Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_5__["getPointsLeaderboard"])()
    });
  }

  async handleRankByNumExplanations() {
    this.setState({
      leaderboard: await Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_5__["getNumExplanationsLeaderboard"])()
    });
  }

  render() {
    {
      if (this.state.leaderboard.length == 0) {
        return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          className: "jsx-781318462" + " " + "wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-781318462" + " " + "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Leaderboard"), __jsx("table", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("th", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "Rank"), __jsx("th", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Name"), __jsx("th", {
          onClick: this.handleRankByPoints,
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "Points"), __jsx("th", {
          onClick: this.handleRankByNumExplanations,
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "Contributed")), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "1"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, this.state.leaderboard[0].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, this.state.leaderboard[0].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, this.state.leaderboard[0].numContributedExplanations)), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "2"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, this.state.leaderboard[1].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, this.state.leaderboard[1].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, this.state.leaderboard[1].numContributedExplanations)), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "3"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, this.state.leaderboard[2].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, this.state.leaderboard[2].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, this.state.leaderboard[2].numContributedExplanations)), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "4"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, this.state.leaderboard[3].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, this.state.leaderboard[3].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, this.state.leaderboard[3].numContributedExplanations)), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "5"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, this.state.leaderboard[4].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, this.state.leaderboard[4].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, this.state.leaderboard[4].numContributedExplanations)), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "6"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, this.state.leaderboard[5].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, this.state.leaderboard[5].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, this.state.leaderboard[5].numContributedExplanations)), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "7"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, this.state.leaderboard[6].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, this.state.leaderboard[6].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, this.state.leaderboard[6].numContributedExplanations)), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "8"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, this.state.leaderboard[7].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, this.state.leaderboard[7].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, this.state.leaderboard[7].numContributedExplanations)), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "9"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, this.state.leaderboard[8].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, this.state.leaderboard[8].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, this.state.leaderboard[8].numContributedExplanations)), __jsx("tr", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "10"), __jsx("td", {
          className: "jsx-781318462",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, this.state.leaderboard[9].username), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, this.state.leaderboard[9].points), __jsx("td", {
          className: "jsx-781318462" + " " + "centered-table-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, this.state.leaderboard[9].numContributedExplanations))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "781318462",
          __self: this
        }, ".wrapper.jsx-781318462{width:100%;}.title.jsx-781318462{text-align:center;padding:10px;font-weight:900;width:750px;font-size:28px;border-radius:4px 4px 0 0;margin:0 auto;margin-top:20px;margin-bottom:20px;}table.jsx-781318462{background-color:white;width:750px;text-align:left;border-collapse:collapse;font-size:24px;border-radius:0 0 2px 2px;margin:0 auto;}tr.jsx-781318462{border:none;}td.jsx-781318462{border-top:solid 1px #ddd;border-bottom:solid 1px #ddd;padding:8px;}th.jsx-781318462{padding:8px;}.centered-table-row.jsx-781318462{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvbGVhZGVyYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0h3QixBQUc0QixBQUdPLEFBV0ssQUFTWCxBQUdjLEFBS2QsQUFJZixXQWxDQyxDQXVCQSxBQVFBLE1BNUJlLEFBK0JmLEtBcEJjLEdBWWlCLEtBdEJiLElBV0EsWUFWSixJQVdhLElBV2IsSUFyQkcsUUFzQmpCLE9BckI0QixFQVVYLGVBQ1csU0FWWixjQUNFLEdBVUYsYUFUSyxDQVVyQixrQkFUQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL3BhZ2VzL2xlYWRlcmJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvcFdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ub3BXcmFwcGVyJ1xuaW1wb3J0IE1lbnVDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51Q29udGFpbmVyJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgeyBnZXRQb2ludHNMZWFkZXJib2FyZCwgZ2V0TnVtRXhwbGFuYXRpb25zTGVhZGVyYm9hcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuXG5cbmNsYXNzIExlYWRlcmJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGVhZGVyYm9hcmQ6IFtdXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlUmFua0J5UG9pbnRzID0gdGhpcy5oYW5kbGVSYW5rQnlQb2ludHMuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUmFua0J5TnVtRXhwbGFuYXRpb25zID0gdGhpcy5oYW5kbGVSYW5rQnlOdW1FeHBsYW5hdGlvbnMuYmluZCh0aGlzKVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCBmdXR1cmVMZWFkZXJib2FyZCA9IGF3YWl0IGdldFBvaW50c0xlYWRlcmJvYXJkKClcbiAgICBjb25zb2xlLmxvZyhmdXR1cmVMZWFkZXJib2FyZCk7IC8vIHRoaXMgaXMgdGhlIGZ1bGwgYXJyYXlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxlYWRlcmJvYXJkOiBmdXR1cmVMZWFkZXJib2FyZFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5sZWFkZXJib2FyZCk7IC8vIHRoaXMgaXMgYW4gZW1wdHkgYXJyYXlcbiAgfVxuICBhc3luYyBoYW5kbGVSYW5rQnlQb2ludHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFkZXJib2FyZDogYXdhaXQgZ2V0UG9pbnRzTGVhZGVyYm9hcmQoKVxuICAgIH0pXG4gIH1cbiAgYXN5bmMgaGFuZGxlUmFua0J5TnVtRXhwbGFuYXRpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGVhZGVyYm9hcmQ6IGF3YWl0IGdldE51bUV4cGxhbmF0aW9uc0xlYWRlcmJvYXJkKClcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5sZWFkZXJib2FyZC5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8VG9wV3JhcHBlcj5cbiAgICAgICAgICAgIDxNZW51Q29udGFpbmVyIC8+XG4gICAgICAgICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5SYW5rPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCIgb25DbGljaz17dGhpcy5oYW5kbGVSYW5rQnlQb2ludHN9PlBvaW50czwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJhbmtCeU51bUV4cGxhbmF0aW9uc30+Q29udHJpYnV0ZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbMF0udXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzBdLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbMF0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzFdLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFsxXS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzFdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFsyXS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbMl0ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFsyXS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbM10udXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzNdLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbM10ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD41PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzRdLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs0XS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzRdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+NjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs1XS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbNV0ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs1XS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjc8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbNl0udXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzZdLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbNl0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD44PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzddLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs3XS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzddLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+OTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs4XS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbOF0ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs4XS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjEwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzldLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs5XS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzldLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Ub3BXcmFwcGVyPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2RkZDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RkZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2VudGVyZWQtdGFibGUtcm93IHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/leaderboard.js */"));
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard);

/***/ }),

/***/ 6:
/*!************************************!*\
  !*** multi ./pages/leaderboard.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danigrant/Projects/explainthis/pages/leaderboard.js */"./pages/leaderboard.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=leaderboard.js.map