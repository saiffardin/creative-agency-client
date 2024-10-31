import { firebaseApp } from "@utils/firebase.config";
import { FirebaseAuthUserType } from "./types/firebase-auth-user-types";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

interface HookRetType {
  googleLogin: () => Promise<FirebaseAuthUserType>;
  googleLogout: () => Promise<void>;
}

const useFirebaseAuth = (): HookRetType => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  const googleLogin = async (): Promise<FirebaseAuthUserType> => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL, uid } = result.user;

      return { displayName, email, photoURL, uid, isSignedIn: true };
    } catch (error) {
      console.error("Firebase Auth Error:", error);
      return {
        displayName: null,
        email: null,
        photoURL: null,
        uid: null,
        isSignedIn: false,
      };
    }
  };

  const googleLogout = async () => {
    try {
      await signOut(auth);

      return Promise.resolve();
    } catch (error) {
      console.error("google log out - ERROR:", error);
    }
  };

  return { googleLogin, googleLogout };
};

export default useFirebaseAuth;
