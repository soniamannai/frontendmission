import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from './mission';
import { TokenStorageService } from './services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

private baseURL= "http://localhost:8080/api/v1/missions";
private  httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':this.tokenStorageService.getToken() })
};
constructor(private httpClient: HttpClient,private tokenStorageService:TokenStorageService) { }
  
getMissionsList(): Observable<Mission[]>{

  return this.httpClient.get<Mission[]>(`${this.baseURL}/missions`,this.httpOptions);
}


createMission(mission: Mission): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}/missions`, mission,this.httpOptions);
}


getMissionById(id: number): Observable<Mission>{
  return this.httpClient.get<Mission>(`${this.baseURL}/missions/${id}`,this.httpOptions);
}

updateMission(id: number, mission: Mission): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/missions/${id}`, mission,this.httpOptions);
}

deleteMission(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/missions/${id}`,this.httpOptions);
}




}