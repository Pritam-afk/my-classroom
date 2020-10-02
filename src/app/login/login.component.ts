import { Component, OnInit } from '@angular/core';
import { User } from "./user.model";
import { UserService } from "../services/user.service";
import { RouterGaurdService } from "../services/router-gaurd.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";
  public verification: boolean;

  public constructor(
    private readonly userService: UserService,
    private routerGaurd: RouterGaurdService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  private routeDashboard(user: User) {
    this.router.navigate(['/dashboard/' + user.role]);
    
  }
  
  public setSessionid(user: User) {
    user.sessionId = (new Date()).getTime().toString();
  }

  public verify() {
    const users = this.userService.users;
    const verifiedUsers = users.filter(user => user.password === btoa(this.password) && user.email  === this.email);
    if (verifiedUsers.length) { 
        this.setSessionid(verifiedUsers[0]);
        localStorage.setItem('VERIFIED_USER', JSON.stringify(verifiedUsers[0]));
        this.routeDashboard(verifiedUsers[0]);
      }
    }
}


