import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  createSession(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSessionValue(key: string) {
    sessionStorage.getItem(key);
  }

  isLoggedIn() {
    if (sessionStorage.getItem('user-session')) return true;
    return false;
  }

  decodeJWTToken(token: string) {
    const decoded = jwtDecode(token);
    console.log('decoded-token', decoded);
    return decoded;
  }
}
