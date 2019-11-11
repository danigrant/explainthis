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
const usersRef = db.collection('users')

const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);

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
      "score": docData.score,
      "id": doc.id
    })
  })
  return data
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
  incrementUserExplanationCount(author)
}

// up or down votes an explanation
async function addVote(vote, user, explanationID) {
  let explanationRef = explanationsRef.doc(explanationID)

  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "user": user,
    "vote": vote
  }

  explanationRef.update({
    voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
  })

  if (vote > 0) {
    explanationRef.update({ score: increment })
  } else {
    explanationRef.update({ score: decrement })
  }

  updateUserScore(vote, user)
}

async function getAllConcepts() {
  let snapshot = await conceptsRef.get()
  let data = []

  await snapshot.forEach(doc => {
    let docData = doc.data()
    data.push({
      "concept": {
        "id": doc.id,
        "concept": docData.concept
      }
    })
  })

  return data
}

async function getUsersExplanations(username) {
  let snapshot = await explanationsRef.where('author', '==', username).get()
  let data = {
    "explanations": []
  }
  await snapshot.forEach(doc => {
    let docData = doc.data()
    data.explanations.push({
      "concept": docData.concept,
      "datetime": docData.datetime,
      "explanation": docData.explanation,
      "score": docData.score,
      "id": doc.id
    })
  })
  return data
}

// get specific user id
async function getUserDocID(username) {
  let id = ""
  let snapshot = await usersRef.where('username', '==', username).get()
  await snapshot.forEach(doc => {
    id = doc.id
  })
  return id
}

// increment/decrement users score by -1 or 1
async function updateUserScore(value, username) {
  let userRef = usersRef.doc(await getUserDocID(username))

  if (value > 0) {
    userRef.update({ score: increment })
  } else {
    userRef.update({ score: decrement })
  }
}

// increment users explanations
async function incrementUserExplanationCount(username) {
  let userRef = usersRef.doc(await getUserDocID(username))

  userRef.update({ contributedExplanations: increment })
}

// get user data aka score and num contributed explanations
async function getUserPoints(username) {
  let data = {}
  let snapshot = await usersRef.where('username', '==', username).get()
  await snapshot.forEach(doc => {
    let docData = doc.data()
    data = {
      "points": docData.score,
      "numContributedExplanations": docData.contributedExplanations
    }
  })
  console.log(data);
  return data
}

const provider = new firebase.auth.TwitterAuthProvider();

// todo sign in with twitter

void async function main() {
}()

module.exports = { getConceptExplanations, saveExplanationToDB, addVote, getAllConcepts, getUsersExplanations, getUserPoints }
