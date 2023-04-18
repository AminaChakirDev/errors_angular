import { Component } from '@angular/core';
import { Article } from 'src/app/shared/models/article.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  articles!: Article[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getLastestArticlesFromService();
  }

  getLastestArticlesFromService() {
    this.apiService.getLatestArticles().subscribe((data) => {
      this.articles = data;
    });
  }
}
