import firebase, { auth } from "firebase";
import * as firebaseui from "firebaseui";
import firebaseConfig from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start("#firebaseui-login-container", {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID  ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        console.log(authResult);
        console.log("User: ",authResult.user);
        console.log("Display Name: ",authResult.user.displayName);
        console.log("Email: ",authResult.user.email);
        console.log("Phone Number: ",authResult.user.phoneNumber);
        console.log("Photo URL: ",authResult.user.photoURL);
        console.log("User UID: ",authResult.user.uid);
        authResult.user.getIdToken().then(function(idToken) {
          console.log("ID Token: ",idToken);
        });
        console.log("Credential: ",authResult.credential);
        console.log("Provider ID: ",authResult.additionalUserInfo.providerId);
        console.log("Operation Type: ",authResult.operationType);
        return false;
      }
    },
});