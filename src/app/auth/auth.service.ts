import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth  } from '@angular/fire/compat/auth';
import { OAuthProvider, User, user } from '@angular/fire/auth';
import firebase from 'firebase/compat/app'; 
import {Users} from '../models/users';

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
      console.log("Res is goog login "+ res.user);
      var googuser:Users=res.user as Users;
    });
 }//end of doGoogleLogin

 doMSLogin(){
  let provider = new  OAuthProvider('microsoft.com');
  return this.afAuth
  .signInWithPopup(provider).then((res)=>{
    console.log("Res is goog login "+ res);
  });
 }
}
