import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Lists } from '../app/rest/lists'
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/Items";
  getLists() {
    return this.http.get<Lists[]>(this.url);
  }
}
