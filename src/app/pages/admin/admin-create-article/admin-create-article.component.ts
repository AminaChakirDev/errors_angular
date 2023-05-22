import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  imageInfos: any;

  imageToDisplay: string =
    'https://res.cloudinary.com/dz632zpoz/image/upload/v1681772772/j0o1jw2cglwz9o1hvxre.png';

  articleForm = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    slug: ['', Validators.required],
    cat: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  createArticle() {
    this.apiService
      .addArticle(
        { ...this.articleForm.value, imageUrl: this.imageInfos.url },
        this.articleForm.value.cat!
      )
      .subscribe((data) => {
        console.log(data);
        this.articleForm.reset();
        this.imageToDisplay =
          'https://res.cloudinary.com/dz632zpoz/image/upload/v1681772772/j0o1jw2cglwz9o1hvxre.png';
      });
  }

  getCategories() {
    this.apiService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'livecoding');
    formData.append('cloud_name', 'doniaq0ov');

    this.http
      .post('https://api.cloudinary.com/v1_1/doniaq0ov/image/upload', formData)
      .subscribe((res) => {
        this.imageInfos = res;
        this.imageToDisplay = this.imageInfos.url;
      });
  }
}
