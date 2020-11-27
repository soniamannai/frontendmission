import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from '../models/candidature';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class CandidatureService {

  private baseURL= "http://localhost:8080/api/v1/candidatures";
  private  httpOptions={
    headers: new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json','Authorization':this.tokenStorageService.getToken() })
  };
  constructor(private httpClient:HttpClient,private tokenStorageService:TokenStorageService) { }

  public add(candidature:Candidature):Observable<Candidature>{
    return this.httpClient.post<Candidature>(`${this.baseURL}/candidatures`,candidature,this.httpOptions);
  }
}
