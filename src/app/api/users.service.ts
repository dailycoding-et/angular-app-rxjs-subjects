import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://letstalk-be.herokuapp.com"
  public userDetailsSubject = new BehaviorSubject(null);

  constructor(private http:HttpClient) { }


  public getUsers(){
    return this.http.get(`${this.url}/public/users`);
  }

  public getUserById(id){
    return this.http.get(`${this.url}/public/users/${id}`);
  }
}
