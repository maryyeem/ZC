import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../app/account';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private baseUrl = 'http://localhost:8080/api/v1/accounts';

  constructor(private http: HttpClient) {}

  getAccount(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAccountsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  createAccount(account: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, account);
  }

  updateAccount(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
}
