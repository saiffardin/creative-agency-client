// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

// firebase config
import { firebaseConfig } from "../../firebaseConfig";


// firebase initialize
export const initializeThirdPartyLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleLogin = () => {
    // console.log("google");
    initializeThirdPartyLoginFramework();
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebaseAuth(provider);
}



const firebaseAuth = (provider) => {

    return firebase.auth().signInWithPopup(provider)
        .then((result) => {

            console.log("Successfully Logged In");
            // console.log(result.user);

            // let token = result.credential.accessToken;

            let { displayName, email } = result.user;

            // console.log(displayName);
            // console.log(email);

            const newUserInfo = {
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.displayName,
                isSignedIn: true,
            };

            // console.log(newUserInfo);

            return (newUserInfo);

        })
        .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;

            // The email of the user's account used.
            let email = error.email;

            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;


            console.log("Log In Failed. Look at the Errors");
            console.log("errorCode: ", errorCode);
            console.log("errorMessage: ", errorMessage);
            console.log("Error Email: ", email);
            console.log("Error credential: ", credential);
        });

}

