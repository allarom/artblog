import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css']
})
export class OneArticleComponent implements OnInit {
  article: Object;
  entryId: String;

  constructor( private articleService: ArticleService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.entryId = params['id']);

    this.articleService.getSingleArticle(this.entryId)
    .then((result) => this.article =result);
  }

}
