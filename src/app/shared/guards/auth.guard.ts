import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let userInfos = this.authService.loadUserFromLocalStorage();

    //if (userInfos.exp > new Date().toLocaleString()) {
    if (route.data['userType'] === 'userOrAdmin') {
      if (
        this.authService.isLoggedIn() &&
        (userInfos.roles.includes('ROLE_USER') ||
          userInfos.roles.includes('ROLE_ADMIN'))
      ) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    } else if (route.data['userType'] === 'visitorOnly') {
      if (!this.authService.isLoggedIn()) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    } else if (route.data['userType'] === 'user') {
      if (
        this.authService.isLoggedIn() &&
        userInfos.roles.includes('ROLE_USER')
      ) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } else if (route.data['userType'] === 'admin') {
      if (
        this.authService.isLoggedIn() &&
        userInfos.roles.includes('ROLE_ADMIN')
      ) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
    this.router.navigate(['/']);
    return false;
  }
  
}
