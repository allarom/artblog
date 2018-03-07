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
  convertedDate: String;
  loading = true;
  anon: boolean;
  autor: String;
  currentUser: any;
  user: any;
  username: String;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.convertedDate = this.article.created_at.toLocaleString();
    this.currentUser = this.authService.getUser();
    this.autor = this.article.autor;
    this.username; 
    
    // --- slicing the card content for first 30 words
    this.content = this.article.content.split(" ").slice(0, 30).join(" ") + "...";
    }

    onArticleDelete () {
      this.onDelete.emit(this.article._id);
    }
  }




