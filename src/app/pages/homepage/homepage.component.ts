import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  articles: Array<any>;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getList()
    .then((articles)=> {
      this.articles = articles;
      
    })
  }

}
