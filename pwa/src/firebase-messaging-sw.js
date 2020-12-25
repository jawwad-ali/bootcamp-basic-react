importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAiRFiqRe4sTCbPBqUss8EY5LzS2FyFw-8",
    authDomain: "pushnotificationapp-ab00a.firebaseapp.com",
    databaseURL: "https://pushnotificationapp-ab00a.firebaseio.com",
    projectId: "pushnotificationapp-ab00a",
    storageBucket: "pushnotificationapp-ab00a.appspot.com",
    messagingSenderId: "372992057612",
    appId: "1:372992057612:web:c4b42ac0437f675e1aa929"
};

firebase.intializeApp(firebaseConfig)
firebase.messaging()