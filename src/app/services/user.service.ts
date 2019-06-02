import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = '/api';
  constructor(private http: HttpClient, ) { }

  getUsers() {
    return this.http.get(`${this.uri}/users/getUsers`)
      .pipe(map(res => res));
  }

  getUserById(id: string) {
    return this.http.get(`${this.uri}/users/getUserById/${id}`)
      .pipe(map(res => res));
  }

  removeUserById(id: string) {
    return this.http.get(`${this.uri}/users/removeUserById/${id}`)
      .pipe(map(res => res));
  }

  addUser(user) {
    let body = JSON.stringify(user);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/users/addUser', body, httpOptions).subscribe();
  }

  updateUser(user) {
    let body = JSON.stringify(user);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/users/addUser', body, httpOptions).subscribe();
  }

}
