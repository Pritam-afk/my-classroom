import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../login/role.model';
import { User } from '../login/user.model';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public eMail: string;
  public passWord: string;
  public conPassword: string;
  
  constructor( private readonly userService: UserService, private router: Router) { }

  ngOnInit(): void {}

  private routeDashboard(user: User) {
    this.router.navigate(['/dashboard/' + user.role]);
    
  }

  registerUser() {
    let role: Role = new Role(
      2,
      "Student",
      "Some description",
    );
    let user: User = new User(
      this.eMail,
      this.passWord,
      this.firstName,
      this.lastName,
      role,
    ) 
    this.userService.userResgistration(user);
    this.routeDashboard(user);
  }
}
