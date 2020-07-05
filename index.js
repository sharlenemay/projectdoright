const firebaseConfig = {
  apiKey: "AIzaSyBqSDO-5tvoPJ33RJA4INzN8fkCc1Wte7s",
  authDomain: "fcmtest-b289f.firebaseapp.com",
  databaseURL: "https://fcmtest-b289f.firebaseio.com",
  projectId: "fcmtest-b289f",
  storageBucket: "fcmtest-b289f.appspot.com",
  messagingSenderId: "137370103262",
  appId: "1:137370103262:web:edca2045b242d065c9c14f",
  AccessToken: "https://firebasestorage.googleapis.com/v0/b/fcmtest-b289f.appspot.com/o/happy_jo.png?alt=media&token=6ddbbbf0-2ace-4016-8283-96d5da4ddc55"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

const companyName = document.querySelector(".companyName");
const summary = document.getElementById('summary');
const findOutMore = document.querySelector(".infoBtnLink");
const headline = document.querySelector(".headline");
const imageUrl = document.getElementById("image");

const statusObj = {
  "Warning": {
        "title": "This water is poisonous",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fcmtest-b289f.appspot.com/o/sad_jo.png?alt=media&token=de008fb6-9ca5-4cdd-aa5b-e0406d8b04f7"
      },
  "Neutral": {
      "title": "Jo is living the life",
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/fcmtest-b289f.appspot.com/o/happy_jo.png?alt=media&token=6ddbbbf0-2ace-4016-8283-96d5da4ddc55"
      }
  }

document.addEventListener('DOMContentLoaded', (event) => {
  chrome.tabs.query({ active: true }, function (tabs) {
    const currentTabId = tabs[0].id;
    
    chrome.pageAction.getTitle({ tabId: currentTabId }, function (result) {
      const docRef = db.collection('JoTheFishData').doc(result);
      docRef.get().then((doc) => {
        if (doc.exists) {
          const data =  doc.data()
          companyName.textContent = data["Company name"]
          const generalLevel = data.Level;
          const status = statusObj[generalLevel];
          headline.textContent = status.title;
          summary.textContent = data.Summary;
          imageUrl.src = status? status.imageUrl: statusObj.Neutral.imageUrl
          findOutMore.href = data["Link to source 1"]

        } else {
          console.log('No data loaded >>>');
        }
      })
      .catch((error) => {
        console.log('Err >>>', error);
      });
    });
  });
});
