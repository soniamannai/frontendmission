import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';
import { Technologie } from '../models/technologie';
import { TechnologieService } from '../services/technologie.service';
@Component({
  selector: 'app-update-mission',
  templateUrl: './update-mission.component.html',
  styleUrls: ['./update-mission.component.css']
})
export class UpdateMissionComponent implements OnInit {

  id: number;
  technologies:Technologie[]=[];
  mission: Mission = new Mission();
  constructor(
    private missionService: MissionService,
    private route: ActivatedRoute,
    private router: Router,
    private technologieService:TechnologieService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.technologieService.getAll().subscribe(data=>{
      this.technologies=data;
      this.missionService.getMissionById(this.id).subscribe(data => {
        this.mission = data;
      }, error => console.log(error));
    });
   
  }

  onSubmit(){

    this.missionService.updateMission(this.id, this.mission).subscribe( data =>{
      if(data!=null)
      {
        Swal.fire("Mission a ete modifié avec success", "", "success").then(()=>{
          this.router.navigate(['/missions'])
        });
      }
      else{
        Swal.fire("Erreur",   "", "error");
      }
    }
    , error => console.log(error));
  }

  goToMissionList(){
    this.router.navigate(['/missions']);
  }
}
