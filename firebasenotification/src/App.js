import React from 'react';
import firebase from "./firebase"

function App() {

  const messaging = firebase.messaging()
 
  messaging.requestPermission().then(() =>{
    return messaging.getToken()
  })
  .then((token)=>{
    alert(token)
    prompt("token",token)
    console.log(token)
  })

  return (
    <div >
      <h4>Firebase push notification!</h4>
    </div>
  );
}

export default App;
