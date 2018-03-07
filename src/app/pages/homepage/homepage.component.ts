import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  article: any;
  articles: Array<any>;
  anon: boolean;
  user: any;
  username: String;
  loading = true;
  error: any;
  autor: String;


  constructor(private articleService: ArticleService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    

    this.articleService.getList()
    .then((articles)=> {
      this.articles = articles;
      
    })
  }

  handleDeleteArticle(event) {
     
      this.articleService.delete(event)
        .then(() => {
          this.router.navigate(['/']);
        })
        .catch((err) => {
          this.error = err.error.error; 
        });
    
  }


}
