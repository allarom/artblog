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

  getSingleArticle(entryId):Promise<any> {
    return this.httpClient.get(`${this.API_URL}/articles/${entryId}`)
    .toPromise()
    // .then((res: Response) => res.json());
  }

  create(data: any): Promise<any> {
    return this.httpClient.post(`${this.API_URL}/articles`, data)
      .toPromise()

  }

}
