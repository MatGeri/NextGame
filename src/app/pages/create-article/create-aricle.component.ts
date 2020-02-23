import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Column } from 'src/app/models/column';
import { FirebaseService } from 'src/app/services/firebase.service';

import { Article } from 'src/app/models/article';
import { EditArticleService } from 'src/app/services/edit-article.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-create-aricle',
  templateUrl: './create-aricle.component.html',
  styleUrls: ['./create-aricle.component.scss']
})
export class CreateAricleComponent implements OnInit {

  cols : Column[] = this.config.cols.article;
  createDate : string = new Date().toISOString();
  article : Article = new Article;
  isEdit : boolean = false;
  

  constructor( private config : ConfigService, private firebaseService : FirebaseService, private transferArticle : EditArticleService) { 

  }


  ngOnInit() {
    console.log(this.article.title)
  }

  onSubmit(){
    console.log("submitted");
    this.article.createDate = this.createDate;
    this.firebaseService.createArticle(this.article);

  }

}
