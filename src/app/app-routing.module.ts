import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatureFormComponent } from './components/candidature-form/candidature-form.component';
import { LoginComponent } from './components/login/login.component';
import { AddCollaborateur } from './components/add-collaborateur/add-collaborateur.component';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { UpdateMissionComponent } from './update-mission/update-mission.component';
import { DetailsMissionComponent } from './components/details-mission/details-mission.component';

const routes: Routes = [

  {path: 'missions', component: MissionListComponent},
   {path: 'create-mission', component: CreateMissionComponent},
  {path: '', redirectTo: 'missions', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'add-collaborateur', component: AddCollaborateur },
  { path:'details/:id' ,component:DetailsMissionComponent},
  {path: 'update-mission/:id', component: UpdateMissionComponent},
  {path:'candidature-form/:id',component:CandidatureFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
