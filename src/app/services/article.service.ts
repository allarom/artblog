import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ArticleService {

  API_URL = 'http://localhost:3010';

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any>  {
   return this.httpClient.get(`${this.API_URL}/articles`)
        .toPromise()

  }

}
