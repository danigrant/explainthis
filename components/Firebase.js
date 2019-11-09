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
  let tempConcept = ''

  let snapshot = await conceptsRef.where('concept', '==', concept).get()
  let data = []
  await snapshot.forEach(doc => {
    data.push(doc.data())
  })
  return data

}

export default getConcept


// https://firebase.google.com/docs/firestore/query-data/get-data
