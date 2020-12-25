import firebase from "firebase"

// Your web app's Firebase configuration
 var config = {
    apiKey: "AIzaSyDF_Cd0NOfukj45Lzsq1UBk90nvdRLgPz8",
    authDomain: "pushnotificationapp-77f1c.firebaseapp.com",
    databaseURL: "https://pushnotificationapp-77f1c.firebaseio.com",
    projectId: "pushnotificationapp-77f1c",
    storageBucket: "pushnotificationapp-77f1c.appspot.com",
    messagingSenderId: "865981456961",
    appId: "1:865981456961:web:aea11091f95402548e1cc0"
};

// Initialize Firebase
firebase.initializeApp(config);
export default firebase