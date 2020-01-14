import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiUrl = this.config.apiUrl;
  endpoint = '';

  constructor(private config: ConfigService) { }
}
