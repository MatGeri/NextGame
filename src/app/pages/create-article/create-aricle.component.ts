import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Column } from 'src/app/models/column';
import { FirebaseService } from 'src/app/services/firebase.service';

import { Article } from 'src/app/models/article';
import { Subscription, Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-create-aricle',
  templateUrl: './create-aricle.component.html',
  styleUrls: ['./create-aricle.component.scss']
})
export class CreateAricleComponent implements OnInit {

  cols : Column[] = this.config.cols.article;
  createDate : string = new Date().toISOString();
  article : Article = null;
  sub: Subscription;
  isNew = false;


  constructor( private config : ConfigService, private db : FirebaseService, private firebaseService : FirebaseService, private ar: ActivatedRoute) { 

  }


  ngOnInit() {
  this.sub = this.ar.params.pipe( switchMap(
    params => {
      if (params.title) {
        return this.db.getSpecificArticle(params.title);
      }
      this.isNew = true;
      return of(new Article());
    }
  ))
  .subscribe(
    article => this.article = article
  );
  }
    

  onSubmit() {
    console.log("submitted");
    this.article.createDate = this.createDate;
    this.firebaseService.createOrUpdateArticle(this.article);

  }


}
