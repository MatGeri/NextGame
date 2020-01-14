import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';
import { EditArticleService } from 'src/app/services/edit-article.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news : Observable<Article[]> = this.db.articles;

  constructor(private router: Router, private db : FirebaseService, private edit :EditArticleService) { 
  
  
  }

  ngOnInit() {
   
   console.log(this.news);
  }

  onDelete(article){
    console.log(article);
    this.db.deleteArticle(article.title);
    
  }

  onEdit(article){
    this.edit.transferArticle(article);
  }

  // get sortNews() {
  //   return this.news.sort((a, b) => {
  //     return <any>new Date(b.CREATE_TS) - <any>new Date(a.CREATE_TS);
  //   });
  // }


}
