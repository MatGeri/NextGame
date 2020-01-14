import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../models/article';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public articles : Observable<Article[]>;

  constructor(private db: AngularFirestore) {
    this.readArticle();
   }

  createArticle(article : Article){
    console.log(article)
    let name = article.title;
    return this.db.collection('articles').doc(name).set({
      title: article.title,
      description: article.description,
      createDate: article.createDate,
    });
  }

  readArticle(){
    this.articles = this.db.collection('articles').valueChanges() as Observable<Article[]>;
  }  

  deleteArticle(articleKey){
    return this.db.collection('articles').doc(articleKey).delete();
  }

  updateArticle(article){
    
  }

}
