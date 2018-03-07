import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css']
})
export class OneArticleComponent implements OnInit {
  articles: any;
  article: Object;
  entryId: String;
  date: String;
  day: String;
  month: String;
  year: String;
  time: String;
  date1: String;
  convertedDate: String;


  constructor( private articleService: ArticleService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.entryId = params['id']);

    this.articleService.getSingleArticle(this.entryId)
    .then((result) => {
     this.article = result;
     // --- formatting date for full-article component
     this.date = result.created_at.toLocaleString();
    })
  }


}
