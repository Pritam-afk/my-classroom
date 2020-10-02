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
  public stars = [1, 2, 3, 4, 5];
  public rating = 0;
  public hoverState = 0;

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

  onStarEnter(starId: number) {
    this.hoverState = starId;
  }
  
  onStarLeave() {
    this.hoverState = 0;
  }

  onStarClicked(starId: number) {
    this.hoverState = starId;
  }

}

