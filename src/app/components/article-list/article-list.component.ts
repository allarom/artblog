import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() article: any;
  
  constructor() {

   }

  ngOnInit() {

      
    }
  }







// var res = this.article.created_at.slice(0,10);
// function convert() {
//   let converted = [];
//   var convertedDate = this.article.created_at.slice(0,10);
//   res.push(convertedDate);
//   console.log(typeof res);
// }