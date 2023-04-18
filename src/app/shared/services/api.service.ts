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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getArticles = () => {
    return this.http.get<any>(`${this.url}articles`);
  };

  getLatestArticles = () => {
    return this.http.get<any>(`${this.url}articles/latest`);
  };

  getArticleById = (articleId: number) => {
    return this.http
      .get<any>(`${this.url}articles/${articleId}`)
      .pipe(catchError(this.handleError));
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
