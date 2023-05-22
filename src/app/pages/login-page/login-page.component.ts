import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    const loginForm = this.form.value;

    if (loginForm.email && loginForm.password) {
      this.authService.login(loginForm.email, loginForm.password).subscribe(
        (userInfo) => {
          this.authService.setSession(userInfo);
          this.router.navigate(['/']);
          location.reload();
        }
      );
    }
  }
}
