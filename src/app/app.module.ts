import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { UpdateMissionComponent } from './update-mission/update-mission.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidatureFormComponent } from './components/candidature-form/candidature-form.component';
import { MaterialModule } from './material/material.module';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { AddCollaborateur } from './components/add-collaborateur/add-collaborateur.component';
import { CommonModule } from '@angular/common';
import { DetailsMissionComponent } from './components/details-mission/details-mission.component';
@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    CreateMissionComponent,
    UpdateMissionComponent,
    CandidatureFormComponent,
    LoginComponent,
    AddCollaborateur,
    DetailsMissionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
