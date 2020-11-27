import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technologie } from '../models/technologie';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologieService {


  private baseURL= "http://localhost:8080/api/v1/technologies";
  private  httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':this.tokenStorageService.getToken() })
  };
  constructor(private httpClient:HttpClient,private tokenStorageService:TokenStorageService) { }

  public getAll():Observable<Technologie[]>{
    return this.httpClient.get<Technologie[]>(`${this.baseURL}/technologies`,this.httpOptions);

  }
}
