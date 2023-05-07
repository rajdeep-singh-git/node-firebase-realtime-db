const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://learning-firebase-38b4a-default-rtdb.firebaseio.com/"
});

let db = admin.database()

db.ref("/teachers").on('child_added', (snapshot) => {
    console.log(JSON.stringify(snapshot.val(), null, 2));
});

// const ref = db.ref('teachers');

// const newStudentRef = ref.push(); // Generate a new unique key for the student record
// const newStudentKey = newStudentRef.key

// const newStudentData = {
//     id: newStudentKey,
//     name: 'Kuldeep Kaur',
//     age: 28,
//     email: 'kuldeepkaur@gmail.com'
// };

// newStudentRef.set(newStudentData, (error) => {
//     if (error) {
//         console.log('Data could not be saved:', error);
//     } else {
//         console.log('Data saved successfully.');
//     }
// });