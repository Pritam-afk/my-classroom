import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  public userView = [];
  public teacherUser = [];
  public studentUser = [];
  public showUser:string;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userView = this.userService.users;
    this.showUser = "all";
  }

  showAll() {
    this.showUser = "all";
  }
}

