import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from 'src/app/mission';
import { MissionService } from 'src/app/mission.service';
import { Candidature } from 'src/app/models/candidature';
import { Collaborateur } from 'src/app/models/collaborateur';
import { Technologie } from 'src/app/models/technologie';
import { CandidatureService } from 'src/app/services/candidature.service';
import { TechnologieService } from 'src/app/services/technologie.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-candidature-form',
  templateUrl: './candidature-form.component.html',
  styleUrls: ['./candidature-form.component.css']
})
export class CandidatureFormComponent implements OnInit {

  technologies:Technologie[]=[];
  mission :Mission;
  formGroup:FormGroup;
  loaded:boolean;
  constructor(
    private technologieService:TechnologieService,
    private missionService:MissionService,
    private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder,
    private candidatureService:CandidatureService,
    private tokenStorageService:TokenStorageService
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.missionService.getMissionById(id).subscribe(data=>{
        this.mission=data;
    })
    this.technologieService.getAll().subscribe(data=>{
      this.technologies=data;
      this.initForm();
      this.loaded=true;
    });
  }

  initForm(){
    this.formGroup=this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      diplome:['',Validators.required],
      anneeObtention:[null,Validators.required],
      technologieMatrise:[null,Validators.required],
      experience:['',Validators.required],
      langue:['',Validators.required]
    })
  }

  sendForm(){
    console.log(this.formGroup.value);
    let candidature=new Candidature();
    candidature=Object.assign({},this.formGroup.value);
    let user=this.tokenStorageService.getUser();
    let collaborateur={id:user.id,username:user.username,email:user.email,dateEmbauche:null,salaire:null,candidatureMission:[],roles:null};
    candidature.collaborateur=collaborateur;
    candidature.mission=this.mission;
    console.log(candidature);
    this.candidatureService.add(candidature).subscribe(data=>{
      if(data!=null)
      {
        Swal.fire("Candidature a ete envoyée avec success", "", "success").then(()=>{
          this.router.navigate(['/missions'])
        });
      }
      else{
        Swal.fire("Erreur",   "", "error");
      }
    })
    
  }

}
