import { Injectable } from '@angular/core';
import { Column } from '../models/column';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl = 'http://localhost:3000/';
  
// used for navbar links:
  links: {href: string, title: string, icon?: string}[] = [
    {href: '/news', title: 'Hírek', icon:"fa fa-align-left" },
    {href: '/popularGames', title: 'Játékok', icon:"fa fa-gamepad" },
    {href: '/members', title: 'Felhasználók', icon:"fa fa-user-circle"},
  ];
//used for create article form:
  cols: {[propname: string]: Column[]} = {
    article: [
      {key: 'title', title: 'Cím', required: true},
      {key: 'description', title: 'Tartalom',  type: 'textarea', required: true},
      {key: 'createDate', title: 'Dátum', type: "date", required: true}
    ],
  };

  giveMeTheCurrentTime() : Date{
    return new Date;
  }

  constructor() { 
  
  }

}
