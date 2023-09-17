/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from './FirebaseConfig.js'
const provider = new GoogleAuthProvider()



export const entrarConGoogle = () => {
  return signInWithPopup(auth, provider)
}

export const ingresarConCorreoContrasena =(email, password) => {
 return createUserWithEmailAndPassword  (auth,email,password)
}


export const UsuarioConSesionActiva = (email, password) => {
  return signInWithEmailAndPassword  (auth,email,password)
 }

export const enviarInformacionCorreo =  (email, password) => {
  return sendEmailVerification  (auth,email,password)
 } 

