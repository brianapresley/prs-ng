import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = 'http://localhost:50362/api/user';
  constructor(
    private http: HttpClient
  ) {}

  login(uname: string, pwd: string): Observable<User> {
    return this.http.get(this.url+"/"+uname+"/"+pwd) as Observable<User>;
  }
  list(): Observable<User[]> {
    return this.http.get(this.url) as Observable<User[]>;
  }
  get( id: number ): Observable<User> {
    return this.http.get(this.url+"/"+id) as Observable<User>;
  }
  create(user: User ): Observable<any> {
    return this.http.post(this.url, user) as Observable<any>;
  }
  edit(user: User ): Observable<any> {
    return this.http.put(this.url+"/"+user.id, user) as Observable<any>;
  }
  delete(id: number ): Observable<any> {
    return this.http.delete(this.url+"/"+id);
  }
}
