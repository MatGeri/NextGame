import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articlesFromDb : Observable<Article[]> = this.db.getArticles();
  news : Array<Article>;

  constructor(private router: Router, private db : FirebaseService) { 
  }

  ngOnInit() {
   this.articlesFromDb.subscribe(
    articles => {this.news = this.sortByDate(articles, '')}
    );   
  }

  sortByDate(arryToSort : Array<Article>, direction) {
    return arryToSort.sort((a : Article, b : Article) => {
        var dateA =  new Date(a.createDate);
        var dateB =  new Date(b.createDate);
        //default is descending
        if (direction == 'asc') {
            return dateA.getTime() - dateB.getTime();
        }
        return dateB.getTime() - dateA.getTime();
    });
};

  onDelete(article){
    console.log(article);
    this.db.deleteArticle(article.title);
    
  }

}
