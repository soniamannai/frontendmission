import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collaborateur } from '../models/collaborateur';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  private baseURL= "http://localhost:8080/api/v1/collaborateurs";
  private  httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':this.tokenStorageService.getToken() })
  };
  constructor(private httpClient:HttpClient,private tokenStorageService:TokenStorageService) { }

  //TODO add it in backend
  public findOne(id:number):Observable<Collaborateur>{
    return this.httpClient.get<Collaborateur>(`${this.baseURL}/${id}`,this.httpOptions);
  }
}
