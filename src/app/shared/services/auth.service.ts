import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  signup(signupForm: any) {
    return this.http.post<any>(AUTH_API + '/signup', signupForm);
  }

  login(email: string, password: string) {
    return this.http.post<any>(AUTH_API + '/signin', {
      email: email,
      password: password,
    });
  }

  public setSession(userInfo: any) {
    const jwt: any = jwt_decode(userInfo.accessToken);

    const expiresAt = new Date(jwt.exp * 1000).toLocaleString();

    localStorage.setItem(
      'USER_INFOS',
      JSON.stringify({
        username: userInfo.username,
        email: userInfo.email,
        roles: userInfo.roles,
        access_token: userInfo.accessToken,
        expires_at: expiresAt,
      })
    );
  }

  loadUserFromLocalStorage(): any {
    let userInfoFromLocalStorage = localStorage.getItem('USER_INFOS');
    if (userInfoFromLocalStorage) {
      let userInfo = JSON.parse(userInfoFromLocalStorage);
      return userInfo;
    }
  }

  logout() {
    localStorage.removeItem('USER_INFOS');
    this.router.navigate(['/']);
    location.reload();
  }

  public isLoggedIn() {
    const userInfoFromLocalStorage = localStorage.getItem('USER_INFOS');
    if (userInfoFromLocalStorage) {
      let userInfo = JSON.parse(userInfoFromLocalStorage);
      if (userInfo.expires_at.toLocaleString() > new Date().toLocaleString()) {
        return true;
      } else {
        this.logout();
        return false;
      }
    }
    return false;
  }

  public getToken() {
    const userInfoFromLocalStorage = localStorage.getItem('USER_INFOS');
    if (userInfoFromLocalStorage) {
      let userInfo = JSON.parse(userInfoFromLocalStorage);
      let token = userInfo.access_token;
      return token;
    }
  }
}
