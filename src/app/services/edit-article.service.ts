import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  article : Article;

  constructor() { }
//used to transfer the selected article to createArticle 
  transferArticle(TransferArticle : Article){

    this.article = TransferArticle;

  }
}
