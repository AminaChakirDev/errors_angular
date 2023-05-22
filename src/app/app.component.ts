import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInfo?: any;

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('USER_INFOS') || '[]');
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
