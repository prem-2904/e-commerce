import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  validateUser(creds: any) {
    return this.http.post(`${BASE_URL}/auth/login`, creds);
  }
}
