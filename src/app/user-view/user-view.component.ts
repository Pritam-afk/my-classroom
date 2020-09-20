import { Component, OnInit } from '@angular/core';
import { RouteChangerService } from "../services/route-changer.service";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  public userView = [];

  constructor(
    private routeChangerService: RouteChangerService,
  ) { }

  ngOnInit(): void {
    this.userView = this.routeChangerService.users;
  }

}

