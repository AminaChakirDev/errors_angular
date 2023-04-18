import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminArticlePageComponent } from './pages/admin/admin-article-page/admin-article-page.component';
import { AdminArticlesListPageComponent } from './pages/admin/admin-articles-list-page/admin-articles-list-page.component';
import { AdminCreateArticleComponent } from './pages/admin/admin-create-article/admin-create-article.component';
import { AdminHomePageComponent } from './pages/admin/admin-home-page/admin-home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticlesListPageComponent } from './pages/articles-list-page/articles-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminCategoriesListPageComponent } from './pages/admin/admin-categories-list-page/admin-categories-list-page.component';

const routes: Routes = [
  {
    path: '',
    title: "Page d'accueil",
    component: HomePageComponent,
  },
  {
    path: 'articles',
    title: 'Articles du blog',
    component: ArticlesListPageComponent,
  },
  {
    path: 'articles/:articleId',
    component: ArticlePageComponent,
  },
  {
    path: 'admin',
    component: AdminHomePageComponent,
  },
  {
    path: 'admin/articles',
    component: AdminArticlesListPageComponent,
  },
  {
    path: 'admin/articles/create',
    component: AdminCreateArticleComponent,
  },
  {
    path: 'admin/articles/:articleId',
    component: AdminArticlePageComponent,
  },
  {
    path: 'admin/categories',
    component: AdminCategoriesListPageComponent,
  },
  {
    path: 'admin/categories/:categoryId',
    component: AdminArticlePageComponent,
  },
  {
    path: '**',
    title: 'Page non trouvée',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
