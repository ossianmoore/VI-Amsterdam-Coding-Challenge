import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Creet } from '../Data Models/creet.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //set api URL to variable
  apiUrl =  'https://cors-anywhere.herokuapp.com/https://viamsterdam.dev/coding-challenge/feed.json';  //'http://localhost:4200/api';

  //instantiate http client
  constructor(private _http: HttpClient) { }

  //http get request to api
  getCreets(){
    return this._http.get<Creet[]>(this.apiUrl);
  }
}
