import { Component, OnInit, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() article: any;
  content: String;
  date: String;
  convertedDate: String;
  day: String;
  month: String;
  year: String;
  time: String;
  
  constructor() {

   }

  ngOnInit() {
    this.content = this.article.content.split(" ").slice(0, 30).join(" ") + "...";
    this.date = this.article.created_at.slice(0,10).replace(/-/g," ");
    this.day = this.date.substr(8, 2);
    this.month = this.date.substr(5, 2);
    this.year = this.date.substr(0, 4);
    this.convertedDate = this.day + " " + this.month + " " + this.year;
    this.time = this.article.created_at.substr(11,5);
    
      
    }
  }







// var res = this.article.created_at.slice(0,10);
// function convert() {
//   let converted = [];
//   var convertedDate = this.article.created_at.slice(0,10);
//   res.push(convertedDate);
//   console.log(typeof res);
// }