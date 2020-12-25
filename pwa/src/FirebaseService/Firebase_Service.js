import firebase from ".firebase"

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
const messaging = firebase.messaging()

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)

        if (permission === "granted") {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    sendTokenToServer(currentToken);
                    updateUIForPushEnabled(currentToken);
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.');
                    // Show permission UI.
                    updateUIForPushPermissionRequired();
                    setTokenSentToServer(false);
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                showToken('Error retrieving Instance ID token. ', err);
                setTokenSentToServer(false);
            });
        }

    })
}