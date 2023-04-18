import { Component } from '@angular/core';
import { Article } from 'src/app/shared/models/article.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-articles-list-page',
  templateUrl: './articles-list-page.component.html',
  styleUrls: ['./articles-list-page.component.css'],
})
export class ArticlesListPageComponent {
  articles: Article[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getArticlesFromService();
  }

  getArticlesFromService() {
    this.apiService.getArticles().subscribe((data) => (this.articles = data));
  }
}
