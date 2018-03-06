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


  constructor(private articleService: ArticleService, private authService: AuthService, private router: Router) {}

  ngOnInit() {

    this.articleService.getList()
    .then((articles)=> {
      this.articles = articles;
      
    })


      this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      if(this.user){
        this.username = this.user.username;
        console.log(this.username);

      }
      this.user = user;
      this.anon = !user;
    });

    // this.articleService.delete(id) {
    //   this.articles = this.articles.filter(
    //     (article) => article.id !== id
    //   );
    // }

  }


  // handleDeleteArticle(event) {
  //   console.log('User want to delete articelissimo' + event);
  // }

  handleDeleteArticle(event) {

      this.articleService.delete(event)
        .then()
        this.router.navigate(['/articles/profile'])
        .catch((err) => {
          this.error = err.error.error; 

        });
    
  }


}
