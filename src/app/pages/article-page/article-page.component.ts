import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
})
export class ArticlePageComponent {
  articleId!: number;
  article!: Article;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.articleId = params['articleId'];
      this.apiService.getArticleById(this.articleId).subscribe((data) => {
        this.article = data;
      });
    });
  }
}
