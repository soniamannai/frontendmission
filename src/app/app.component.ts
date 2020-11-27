import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  user:User;

  constructor(private tokenStorageService: TokenStorageService,private router:Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
    
      
      this.user = this.tokenStorageService.getUser();
      this.tokenStorageService.currentUser.next(this.user);
     // if(user.roles.includes('ROLE_COLLABORATEUR') || user.roles.includes('ROLE_COMMERCIAL'))
      //{
          this.router.navigate(['/missions']);
     // }

    }
    else{
      this.router.navigate(['/login']);
    }
    this.tokenStorageService.currentUser.subscribe(data=>{
      this.user=data;
      console.log(data);
      if(data!=null){
        this.isLoggedIn=true;
      }
      
    })
  }

  public isCollaborateur():boolean{
    return this.user?.roles.includes('ROLE_COLLABORATEUR');
  }
  public isCommercial():boolean{
    return this.user?.roles.includes('ROLE_COMMERCIAL');
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
