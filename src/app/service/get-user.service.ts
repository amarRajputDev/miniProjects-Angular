import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http : HttpClient) { }

  getUsers(){

    return this.http.get('https://dummyjson.com/users');
  };
}
