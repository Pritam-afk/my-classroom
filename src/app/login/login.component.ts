import { Component, OnInit } from '@angular/core';
import { UserInfo } from "./user.model";
import { RouteChangerService } from "../services/route-changer.service";
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
    private readonly routeChangerService: RouteChangerService,
    private routerGaurd: RouterGaurdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('VERIFIED_USER');
  }

  private routeDashboard(user: UserInfo) {
    this.router.navigate(['/dashboard/' + user.role]);
    
  }
  
  public setSessionid(user: UserInfo) {
    user.sessionId = (new Date()).getTime().toString();
  }

  public verify() {
    const users = this.routeChangerService.users;
    const verifiedUsers = users.filter(user => user.password === this.password && user.email  === this.email);
    if (verifiedUsers.length) { 
        this.setSessionid(verifiedUsers[0]);
        localStorage.setItem('VERIFIED_USER', JSON.stringify(verifiedUsers[0]));
        this.routeDashboard(verifiedUsers[0]);
      }
    }
}


