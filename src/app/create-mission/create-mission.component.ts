import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { Technologie } from '../models/technologie';
import { TechnologieService } from '../services/technologie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.css']
})
export class CreateMissionComponent implements OnInit {

  loaded:boolean=false;
  mission: Mission;
  technologies:Technologie[]=[];
  constructor(private missionService: MissionService,
    private technologieService:TechnologieService,
    private router: Router) { }

  ngOnInit(): void {
    this.technologieService.getAll().subscribe((data)=>{
      this.technologies=data;
      this.mission= new Mission();
      this.loaded=true;
    })
  }

  saveMission(){
    this.missionService.createMission(this.mission).subscribe( data =>{
      if(data!=null)
      {
        Swal.fire("Mission a ete créer avec success", "", "success").then(()=>{
          this.router.navigate(['/missions'])
        });
      }
      else{
        Swal.fire("Erreur",   "", "error");
      }
    },
    error => console.log(error));
  }

  goToMissionList(){
    this.router.navigate(['/missions']);
  }


  onSubmit(){
    console.log(this.mission);
    this.saveMission();
  }

}
