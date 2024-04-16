import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomuserApiService {
  private baseUrl='https://randomuser.me'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.baseUrl}/api/`);
  }
}
