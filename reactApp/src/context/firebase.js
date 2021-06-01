import auth from '@react-native-firebase/auth';

class Firebase {
  constructor() {
    this.auth = auth();
  }

  doPhoneSignIn = phone => this.auth.signInWithPhoneNumber(phone);

  doSignOut = () => this.auth.signOut();

  onAuthChangeListener = (next, fallback) => {
    return this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        next(authUser);
      } else {
        fallback();
      }
    });
  };
}

export default Firebase;
