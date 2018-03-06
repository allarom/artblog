import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {
  @Input() article: any;
  @Input() date: String;
  convertedDate: String;
  day: String;
  month: String;
  year: String;
  time: String;

  constructor() { }

  ngOnInit() {
  }

}
