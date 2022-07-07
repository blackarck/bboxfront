import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
  public router: Router,public afAuth: AngularFireAuth ) {
   
   }

   doGoogleLogin(){
  
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.addScope('profile');
    provider.addScope('email'); 
  
    return   this.afAuth
    .signInWithPopup(provider).then((res)=>{
      console.log("Res is goog login "+ res);
    });
 }//end of doGoogleLogin
}
