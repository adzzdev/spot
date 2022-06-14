import React, { useContext, useState, useEffect } from "react"
import firebase from "../integration/firebase/firebase"

const auth = firebase.authentication.AUTH;
const signInWithEmailAndPassword = firebase.authentication.signInWithEmailAndPassword;
const signOut = firebase.authentication.signOut;
const createUserWithEmailAndPassword = firebase.authentication.createUserWithEmailAndPassword;

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return true;
  }

  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Succesfully signed-in
        const user = userCredential.user;
        setCurrentUser(user);
        //console.log(user);
        
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        throw error;
      });
  }

  async function logout() {
    setLoading(true)
    return signOut(auth).then((val)=>{
      setLoading(false);
      return val;
    });
  }

  function resetPassword(email) {
    return true;
  }

  function updateEmail(email) {
    return true;
  }

  function updatePassword(password) {
    return true;
  }

  //
  /**
   * instance / cleanup for authentication component
   * 20220614: Take note that this is going to be mounted once only which is when the page loads.
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log(user);
      setCurrentUser(user);
      setLoading(false);
    },function(err){
      console.log("There was an error on Auth State Change");
    },function(completed){
      console.log("Auth State changed successfully!");
      console.log(completed)
    })
    return unsubscribe
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {/* {!loading && children} */}
      {!loading && children}
    </AuthContext.Provider>
  )
}