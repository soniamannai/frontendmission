import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { Collaborateur } from '../models/collaborateur';
import { Commercial } from '../models/commercial';
import { User } from '../models/user';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

missions: Mission[];
user:User;
id:number;

  constructor(
    private missionService: MissionService,
    private userService:UserService,
    private tokenStorageService:TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMissions();

    
  }
  public isCollaborateur():boolean{
    return this.tokenStorageService.getUser().roles.includes('ROLE_COLLABORATEUR');
  }
  public isCommercial():boolean{
    return this.tokenStorageService.getUser().roles.includes('ROLE_COMMERCIAL');
  }

  private getMissions(){
    this.missionService.getMissionsList().subscribe(data => {
      this.missions = data;
    });
  }
  

  updateMission(id: number){
    this.router.navigate(['update-mission', id]);
  }

  public toPostule(id:number){
    this.router.navigate(['candidature-form', id]);
  }

  public detailMission(id:number){
    this.router.navigate(['details',id]);
  }


  deleteMission(id: number){
    this.missionService.deleteMission(id).subscribe( data => {
      console.log(data);
      this.getMissions();
    })
  }

}
