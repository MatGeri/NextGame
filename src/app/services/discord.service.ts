import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  DiscordJSON : Observable<any>;
  JSONstring : string;


  //https://discordapp.com/api/guilds/356230556738125824/members itt még a bejelentkezést meg kell oldani valahogy 

  constructor(private http: HttpClient) {
   }


  loadDiscordWidgetDataInJSON(){
    return this.http.get('https://discordapp.com/api/guilds/388970480297836544/widget.json') as Observable<any>;
  }


}
