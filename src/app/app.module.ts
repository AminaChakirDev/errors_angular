import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlesListPageComponent } from './pages/articles-list-page/articles-list-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ArticleComponent } from './components/article/article.component';
import { AdminHomePageComponent } from './pages/admin/admin-home-page/admin-home-page.component';
import { AdminArticlePageComponent } from './pages/admin/admin-article-page/admin-article-page.component';
import { AdminCategoryPageComponent } from './pages/admin/admin-category-page/admin-category-page.component';
import { AdminArticlesListPageComponent } from './pages/admin/admin-articles-list-page/admin-articles-list-page.component';
import { AdminCategoriesListPageComponent } from './pages/admin/admin-categories-list-page/admin-categories-list-page.component';
import { AdminCreateArticleComponent } from './pages/admin/admin-create-article/admin-create-article.component';

import { httpInterceptorProviders } from './shared/interceptors';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesListPageComponent,
    ArticlePageComponent,
    PageNotFoundComponent,
    ArticleComponent,
    AdminHomePageComponent,
    AdminArticlePageComponent,
    AdminCategoryPageComponent,
    AdminArticlesListPageComponent,
    AdminCategoriesListPageComponent,
    AdminCreateArticleComponent,
    LoginPageComponent,
    LogoutComponent,
    SignupPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
