import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from '../models/article';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {
   
   }

  createOrUpdateArticle(article : Article){
    console.log(article)
    let name = article.title;
    return this.db.collection('articles').doc(name).set({
      title: article.title,
      description: article.description,
      createDate: article.createDate,
    });
  }

 

  getArticles(){
  return this.db.collection('articles').valueChanges() as Observable<Article[]>
  }

  getSpecificArticle(title) {
    return this.db.collection('articles').doc(title).valueChanges() as Observable<Article>;
    }

  deleteArticle(articleKey){
    return this.db.collection('articles').doc(articleKey).delete();
  }

}
