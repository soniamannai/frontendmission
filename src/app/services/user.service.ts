import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL= "http://localhost:8080/api/v1/users";
  private  httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':this.tokenStorageService.getToken() })
  };
  constructor(private httpClient:HttpClient,private tokenStorageService:TokenStorageService) { }

  public getById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`,this.httpOptions);
  }
}
