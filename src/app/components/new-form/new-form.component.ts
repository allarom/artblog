import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  title: String;
  image: String;
  content: String;
  category: String;
  user: String

  constructor(private router: Router, private articleService: ArticleService, private authService: AuthService ) { }

  ngOnInit() {
    this.user = this.authService.getUser().username;

  }
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    const data = {
      title: this.title,
      image: this.image,
      content: this.content,
      category: this.category,
      autor: this.user

    }
    if (form.valid) {
      this.processing = true;
      this.articleService.create(data)
        .then()
        this.router.navigate(['/'])
        .catch((err) => {
          this.error = err.error.error; 
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}
