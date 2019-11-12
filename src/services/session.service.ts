import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
  })
  export class SessionService {
    private sessionAuthToken: string = "";
    private sessionUserID: string = "";
    private loggedInByKey: string = "";
  
    constructor(
      private cookieService: CookieService
    ) {
     
    }
   
    setSessionAuthToken(auth_token) {
      this.sessionAuthToken = auth_token
      this.cookieService.set('auth_token', auth_token);
    }
  
    getSessionAuthToken() {
      //  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmthbmdlbHBlbmFyYW5kYUBnbWFpbDEyMy5jb20iLCJzdWIiOiJiMjM0MDc2Ny0zOTJhLTQzMzctODk5NS0yMWFkZjAxOTVjMGMiLCJpYXQiOjE1NjQ0NTY4MjUsImV4cCI6MTU2NjI1NjgyNX0.BI8tqYincboJc3n9U-WG753MNhDX9SnL3zSWICMa7Uo"
      if (this.cookieService.get('auth_token')) {
        return this.cookieService.get('auth_token');
      }
      else if (this.sessionAuthToken) {
        return this.sessionAuthToken;
      } else {
        return null;
      }
  
    }
  
    setSessionUserId(userId) {
      this.sessionUserID = userId;
      this.cookieService.set("uId", userId);
    }
  
    getSessionUserId() {
      if (this.cookieService.get('uId')) {
        return this.cookieService.get('uId');
      }
      else if (this.sessionUserID) {
        return this.sessionUserID;
      } else {
        return null;
      }
  
    }
  
    setLoggedInByKey(condition) {
      this.loggedInByKey = condition;
      this.cookieService.set("loggedInByKey", condition);
    }
  
    getLoggedInByKey() {
      if (this.cookieService.get('loggedInByKey')) {
        return this.cookieService.get('loggedInByKey');
      }
      else if (this.loggedInByKey) {
        return this.loggedInByKey;
      } else {
        return null;
      }
    }
  
    deleteAll() {
      this.cookieService.deleteAll();
    }
  }