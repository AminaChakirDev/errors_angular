import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/article.interface';
import { Category } from 'src/app/shared/models/category.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-admin-create-article',
  templateUrl: './admin-create-article.component.html',
  styleUrls: ['./admin-create-article.component.css'],
})
export class AdminCreateArticleComponent {
  categories!: Category[];

  articleForm = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    slug: ['', Validators.required],
    cat: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  createArticle() {
    this.apiService
      .addArticle(
        this.articleForm.value,
        this.articleForm.value.cat!
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.articleForm.reset();
  }

  getCategories() {
    this.apiService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
