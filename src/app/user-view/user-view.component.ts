import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  public users = [];
  public teachers = [];
  public students = [];
  public showUser: string;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.users = this.userService.users;
    this.showUser = 'all';
  }

  public setView(role: string) {
    if (role == 'all') {
      this.users = this.userService.users;
    } else {
      this.users = this.userService.users.filter(user => user.role.name === role);
    }
  }

}

