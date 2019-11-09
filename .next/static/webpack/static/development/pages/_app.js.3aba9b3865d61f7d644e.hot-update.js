webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Firebase.js":
/*!********************************!*\
  !*** ./components/Firebase.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

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

if (!firebase__WEBPACK_IMPORTED_MODULE_0__["apps"].length) {
  firebase__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig);
}

var db = firebase__WEBPACK_IMPORTED_MODULE_0__["firestore"]();
var conceptsRef = db.collection('concepts');

var getConcept = function getConcept(concept) {
  var tempConcept = '';
  conceptsRef.where('concept', '==', concept).get().then(function (snapshot) {
    if (snapshot.empty) {
      console.log('nothing');
      return;
    }

    snapshot.forEach(function (doc) {
      console.log('here', doc.data());
      tempConcept = doc.data();
    });
  })["catch"](function (err) {
    console.log(err);
  });
  return tempConcept;
};

console.log(getConcept('emergence'));
/* harmony default export */ __webpack_exports__["default"] = (getConcept); // https://firebase.google.com/docs/firestore/query-data/get-data

/***/ })

})
//# sourceMappingURL=_app.js.3aba9b3865d61f7d644e.hot-update.js.map