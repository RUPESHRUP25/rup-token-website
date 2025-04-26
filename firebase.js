// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// Firebase functions
function getUserId() {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      if (user) {
        resolve(user.uid);
      } else {
        // If not logged in, create anonymous account
        auth.signInAnonymously()
          .then(() => {
            resolve(auth.currentUser.uid);
          })
          .catch(error => {
            console.error("Authentication error:", error);
            resolve('default_user');
          });
      }
    });
  });
}

async function saveDataToFirebase(dataType, data) {
  try {
    const userId = await getUserId();
    await database.ref('users/' + userId + '/' + dataType).set(data);
    console.log(dataType + " saved to Firebase");
  } catch (error) {
    console.error("Error saving " + dataType + ":", error);
  }
}

async function loadDataFromFirebase(dataType) {
  try {
    const userId = await getUserId();
    const snapshot = await database.ref('users/' + userId + '/' + dataType).once('value');
    return snapshot.val();
  } catch (error) {
    console.error("Error loading " + dataType + ":", error);
    return null;
  }
}
