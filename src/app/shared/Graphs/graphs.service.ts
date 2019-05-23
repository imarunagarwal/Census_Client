import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GraphsService {
  readonly rootUrl = 'http://localhost:61636';
  constructor(private http: HttpClient) { }

  GetGraphData(type:number){
    var reqHeader = new HttpHeaders({'No-Auth': 'True' });
    return this.http.get(this.rootUrl + `/api/GraphPlotter/${type}`, { headers: reqHeader });
  }
}
