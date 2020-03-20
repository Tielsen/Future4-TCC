import * as firebase from 'firebase/app'

export const setToken = (token) => {
  firebase.auth().signInWithCustomToken(token).then(res => res.user.getIdToken()).then(idToken => {
    localStorage.setItem('token', idToken)
  })
}

export const getToken = () => {
  return localStorage.getItem('token')
}
