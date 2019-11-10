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
const explanationsRef = db.collection('explanations')

// returns obj with all explanations for one topic, ordered by voteCount
async function getConceptExplanations(concept) {
  let snapshot = await explanationsRef.where('concept', '==', concept).get()
  let data = {
    "concept": concept,
    "explanations": []
  }
  await snapshot.forEach(doc => {
    let docData = doc.data()
    data.explanations.push({
      "author": docData.author,
      "datetime": docData.datetime,
      "explanation": docData.explanation,
      "score": docData.score
    })
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

// saves explanation to db
async function saveExplanationToDB(concept, author, explanation) {
  let newExplanation = {
    "concept": concept,
    "author": author,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": explanation,
    "score": 0,
    "voteLog": []
  }

  explanationsRef.add(newExplanation)
}

// async function saveExplanationToDB(concept, author, explanation) {
//   let docID = await getConceptDocID(concept)
//
//   let conceptRef = conceptsRef.doc(docID)
//
//   let newExplanation = {
//     "author": author,
//     "datetime": firebase.firestore.Timestamp.now(),
//     "explanation": explanation,
//     voteLog: []
//   }
//
//   conceptRef.update({
//     explanations: firebase.firestore.FieldValue.arrayUnion(newExplanation)
//   });
// }

async function addVote(concept, explanationID) {
  let docID = await getConceptDocID(concept)
  let conceptRef = conceptsRef.doc(docID)

  let vote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "user": "@barackobama",
    "vote": 1
  }

  let snapshot = await conceptsRef.get()
  let data = []
  await snapshot.forEach(doc => {
    data.push(doc.id, doc.data(), doc)
  })
  console.log(data);
  return data
}

const provider = new firebase.auth.TwitterAuthProvider();

// todo sign in with twitter

void async function main() {
  // console.log(await getConceptExplanations("emergence"))
}()
module.exports = { getConceptExplanations, saveExplanationToDB }


// https://firebase.google.com/docs/firestore/query-data/get-data
