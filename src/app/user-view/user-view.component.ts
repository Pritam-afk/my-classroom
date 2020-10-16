import { Component, OnInit } from '@angular/core';
import { Role } from '../login/role.model';
import { User } from '../login/user.model';
import { UserService } from "../services/user.service";


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  public filteredUsers: User[] = [];
  public roles: Role[] = [];
  public currentRole: Role;
  public isModalOpen: boolean = false;
  public name: string = "";
  public userRole: string = "";
  public userEmail: string = "";
  public userDescription: string = "";

  constructor(
    private userService: UserService,
  ) {
    this.roles = this.userService.roles;
  }

  ngOnInit(): void {
    this.filteredUsers = this.userService.users;
  }

  public setView(roleId: number = 0) {
    if (roleId == 0) {
      this.filteredUsers = this.userService.users;
      this.currentRole = null;
    } else {
      this.filteredUsers = this.userService.users.filter(user => user.role.id === roleId);
      this.currentRole = this.roles.find(role => role.id === roleId)
    }
  }

  public searchUser(event: Event) {
    let searchedQuery = (<HTMLInputElement>event.target).value;

    this.filteredUsers = (searchedQuery && searchedQuery.trim().length)
      ? this.getFilteredUsers(searchedQuery, this.currentRole)
      : this.userService.users.filter(user => this.currentRole.id == user.role.id);
  }

  private getFilteredUsers(searchedQuery: string, role: Role) {
    return this.userService.users.filter((user: User) => {
      const formattedName = user.fullName.toLowerCase();
      return (formattedName.indexOf(searchedQuery.toLowerCase()) > -1 && user.role.id == role.id)
    });
  }

  public openModal(name: string, userRole: string, userEmail: string, userDescription: string) {
    this.isModalOpen = true;
    this.name = name;
    this.userRole = userRole;
    this.userEmail = userEmail;
    this.userDescription = userDescription;
  }

  public closeModal() {
    this.isModalOpen = false;
    this.name = "";
    this.userRole = "";
    this.userEmail = "";
    this.userDescription = "";
  }
}

