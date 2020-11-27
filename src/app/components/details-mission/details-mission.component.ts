import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from 'src/app/mission';
import { MissionService } from 'src/app/mission.service';

@Component({
  selector: 'app-details-mission',
  templateUrl: './details-mission.component.html',
  styleUrls: ['./details-mission.component.css']
})
export class DetailsMissionComponent implements OnInit {

  mission:Mission;
  loaded:boolean=false;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private missionService:MissionService
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.missionService.getMissionById(id).subscribe((data)=>{
      this.loaded=true;
        this.mission=data;
        console.log(data);
        

    });
  }

}
