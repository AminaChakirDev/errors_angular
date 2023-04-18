import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Article } from '../models/article.interface';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:8080/';

  getArticles = () => {
    return this.http.get<any>(`${this.url}articles`);
  };

  getLatestArticles = () => {
    return this.http.get<any>(`${this.url}articles/latest`);
  };

  getArticleById = (articleId: number) => {
    return this.http
      .get<any>(`${this.url}articles/${articleId}`);
  };

  addArticle(
    article: any,
    category: number,
  ): Observable<any> {
    return this.http.post<Article>(
      `${this.url}articles?category=${category}`,
      article
    );
  }

  updateArticle(article: any, articleId: number, category: number) {
    return this.http.put<Article>(
      `${this.url}articles/${articleId}?category=${category}`,
      article
    );
  }

  deleteArticle(articleId: number) {
    return this.http.delete<any>(`${this.url}articles/${articleId}`);
  }

  getCategories() {
    return this.http.get<any>(`${this.url}categories`);
  }
}
