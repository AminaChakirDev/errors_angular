import { Component } from '@angular/core';
import { Article } from 'src/app/shared/models/article.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-admin-articles-list-page',
  templateUrl: './admin-articles-list-page.component.html',
  styleUrls: ['./admin-articles-list-page.component.css'],
})
export class AdminArticlesListPageComponent {
  articles!: Article[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getArticlesFromService();
  }

  getArticlesFromService() {
    this.apiService.getArticles().subscribe((data) => (this.articles = data));
  }
}
