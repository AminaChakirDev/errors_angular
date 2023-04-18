import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/shared/models/article.interface';
import { Category } from 'src/app/shared/models/category.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-admin-article-page',
  templateUrl: './admin-article-page.component.html',
  styleUrls: ['./admin-article-page.component.css'],
})
export class AdminArticlePageComponent {
  articleId!: number;
  article!: Article;

  categories!: Category[];

  articleForm = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    slug: ['', Validators.required],
    cat: [null],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCategories();
    this.route.params.subscribe((params) => {
      this.articleId = parseInt(params['articleId']);
      this.apiService.getArticleById(this.articleId).subscribe((data) => {
        this.article = data;
        this.articleForm.patchValue({
          title: data.title,
          content: data.content,
          slug: data.slug,
          cat: data.category.id,
        });
      });
    });
  }

  updateArticle() {
    this.apiService
      .updateArticle(
        this.articleForm.value,
        this.article.id,
        this.articleForm.value.cat!
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteArticle() {
    this.apiService.deleteArticle(this.article.id).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/admin/articles']);
    });
  }

  getCategories() {
    this.apiService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
