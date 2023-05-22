import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  user!: any;

  ngOnInit() {
    this.user = JSON.parse(
      localStorage.getItem('USER_INFOS') || '[]'
    );
  }
}
