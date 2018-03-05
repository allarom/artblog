import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl;

@Injectable()
export class ArticleService {

  API_URL = 'http://localhost:3010';

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any>  {
   return this.httpClient.get(`${apiUrl}/articles`)
        .toPromise()
  }

  getSingleArticle(entryId):Promise<any> {
    return this.httpClient.get(`${apiUrl}/articles/${entryId}`)
    .toPromise()
    // .then((res: Response) => res.json());
  }

  create(data: any): Promise<any> {
    return this.httpClient.post(`${apiUrl}/articles`, data)
      .toPromise()

  }

  delete(entryId):Promise<any> {
    return this.httpClient.post(`${apiUrl}/articles/${entryId}`, entryId)
      .toPromise()

  }

}
