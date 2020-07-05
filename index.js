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

const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const companyName = document.querySelector(".companyName");
const joeStatus =  document.querySelector(".joeStatus");
const summary = document.getElementById('summary');
const findOutMore = document.querySelector(".findOutMore");
const headline = document.querySelector(".headline");
const imageUrl = document.getElementById("image");
const tempUrl = "file:///Users/awesome/projectDoright/images"   //TODO host and fetch the files on amazon s3 bucket


const statusObj = {
  "Warning": {
        "title": "This water is poisonous",
        "imageUrl": "/sad_jo.png"
      },
  "Neutral": {
      "title": "Jo is living the life",
      "imageUrl": "/happy_jo.png"
      }
  }

document.addEventListener('DOMContentLoaded', (event) => {
  
  chrome.tabs.query({ active: true }, function (tabs) {
    const currentTabId = tabs[0].id;
    
    chrome.pageAction.getTitle({ tabId: currentTabId }, function (result) {
      const docRef = db.collection('JoTheFishData').doc(result);
      docRef.get().then((doc) => {
        if (doc.exists) {
          companyName.textContent = doc.data()["Company name"]
          const generalLevel = doc.data().Level;
          const status = statusObj[generalLevel];
          headline.textContent = status.title;
          summary.textContent = doc.data().Summary;
          imageUrl.src = tempUrl+status.imageUrl || tempUrl+"/happy_jo_icon.png"
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
