import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
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

async function getConcept(concept) {
  let snapshot = await conceptsRef.where('concept', '==', concept).get()
  let data = []
  await snapshot.forEach(doc => {
    data.push(doc.data())
  })
  return data
}

async function getConceptDocID(concept) {
  let snapshot = await conceptsRef.where('concept', '==', concept).get()
  let data = []
  await snapshot.forEach(doc => {
    data.push(doc.id)
  })
  return data[0]
}

async function saveExplanationToDB(concept, author, explanation) {
  let docID = await getConceptDocID(concept)

  let conceptRef = conceptsRef.doc(docID)

  let newExplanation = {
    "author": author,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": explanation,
    voteLog: []
  }

  conceptRef.update({
    explanations: firebase.firestore.FieldValue.arrayUnion(newExplanation)
  });
}

const provider = new firebase.auth.TwitterAuthProvider();

// todo sign in with twitter

void async function main() {
  // saveExplanationToDB("emergence", "@barackobama", "this is my second best explanation")
}()
module.exports = { getConcept, saveExplanationToDB }


// https://firebase.google.com/docs/firestore/query-data/get-data
