const firebaseConfig = {
  apiKey: "AIzaSyBqSDO-5tvoPJ33RJA4INzN8fkCc1Wte7s",
  authDomain: "fcmtest-b289f.firebaseapp.com",
  databaseURL: "https://fcmtest-b289f.firebaseio.com",
  projectId: "fcmtest-b289f",
  storageBucket: "fcmtest-b289f.appspot.com",
  messagingSenderId: "137370103262",
  appId: "1:137370103262:web:edca2045b242d065c9c14f"
};

firebase.initializeApp(firebaseConfig);
console.log('Firebase >>>', firebase);

const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', (event) => {
  const summary = document.getElementById('summary');

  chrome.tabs.query({ active: true }, function (tabs) {
    const currentTabId = tabs[0].id;

    chrome.pageAction.getTitle({ tabId: currentTabId }, function (result) {
      const docRef = db.collection('JoTheFishData').doc(result);
      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log('Here >>>', doc.data());
          summary.innerHTML = doc.data().Summary;
        } else {
          console.log('No doc >>>');
        }
      })
      .catch((error) => {
        console.log('Err >>>', error);
      });
    });
  });
});
