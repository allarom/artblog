import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() article: any;
  @Output() onDelete = new EventEmitter<string>();
  content: String;
  date: String;
  convertedDate: String;
  day: String;
  month: String;
  year: String;
  time: String;
  loading = true;
  anon: boolean;
  autor: String;
  currentUser: String;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.currentUser = this.authService.getUser();
    this.autor = this.article.autor;

    this.content = this.article.content.split(" ").slice(0, 30).join(" ") + "...";
    this.date = this.article.created_at.slice(0,10).replace(/-/g," ");
    this.day = this.date.substr(8, 2);
    this.month = this.date.substr(5, 2);
    this.year = this.date.substr(0, 4);
    this.convertedDate = this.day + " " + this.month + " " + this.year;
    this.time = this.article.created_at.substr(11,5);

    }

    onArticleDelete () {
      this.onDelete.emit(this.article._id);
    }
  }




