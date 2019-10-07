import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  url = 'http://localhost:6050/user';
  authToken;
  user;
  options;

  constructor( private http : HttpClient ) { }

  // Register into a new  user
  register(user){
    return this.http.post(`${this.url}/register` , user  , {headers : new HttpHeaders({'Content-Type' : 'application/json'})});
  }

  // Login Into a user
  login(user){
    return this.http.post(`${this.url}/login` , user );
  }

  updateUser(user){
    let url = `${this.url}/update/user`;
    this.craeteAuthHeader();
    return this.http.put(url , user , {headers : this.options}) 
  }

  // Check if the user username available or not
  checkUsername(username){
    return this.http.get(`${this.url}/checkUsername/${username}`);
  }

  // Check if the user Email available or not
  checkEmail(email){
    return this.http.get(`${this.url}/checkEmail/${email}`);
  }

  // get profile for cuurent user
  getProfile(){
    this.craeteAuthHeader();
    return this.http.get(`${this.url}/profile` , {headers : this.options});
  }

    // get profile for cuurent user by Email and username
  getProfileByUserAndEmail(){
    this.craeteAuthHeader();
    return this.http.get(`${this.url}/profile/user` , {headers : this.options});
  }

  //Create Token
  craeteAuthHeader(){
    this.loadToken();
    this.options =  new HttpHeaders({
      'Content-Type' : 'application/json',
      'auth' : this.authToken
    })
  }

  // Set Token for admin token
  loadToken(){
    const token = localStorage.getItem('token');
    this.authToken = token
  }

  // SignOut and clear the local storage
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // Store Data into a localStorage For current User
  storeUserData(token , user){
    localStorage.setItem('token' , token);
    localStorage.setItem('user' , JSON.stringify(user));
    this.authToken = token;
    this.user = user
  }

  


}
