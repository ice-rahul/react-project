import React, { useEffect, useContext } from 'react'
import FirebaseContext from '../Firebase/context'

const withAuthentication = (Component) => {
  return (props) => {
    const firebase = useContext(FirebaseContext);

    const saveToLocalStorage = (authUser) => {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    }

    const fallback = () => {
      localStorage.removeItem('authUser');
    }

    const next = (authUser) => {
      saveToLocalStorage(authUser);
    }

    useEffect(()=>{
      firebase.onAuthChangeListener(next, fallback)
    })
    return <Component {...props} />
  }
}

export default withAuthentication;