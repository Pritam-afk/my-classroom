import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Role } from '../login/role.model';
import { User } from '../login/user.model';
import user from "../../assets/JSON/user.json";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public roles: Role[] = [];
  public users: User[] = [];
  private seedData;

  constructor() {
    this.intializeSeedData();
  }

  private async intializeSeedData() {
    this.seedData = await user;
    console.log(this.seedData);
    for await (const element of this.seedData.roles) {
      const role = new Role(
        element.id,
        element.name,
        element.description,
      );
      this.roles.push(role);
    }
    for await (const element of this.seedData.users) {
      const user = new User(
        element.email,
        element.password,
        element.first_name,
        element.last_name,
        this.getRoleById(element.role_id)
      );
      this.users.push(user);
    }
    console.log(this.users);
  }

  getRoleById(id: number) {
    const results = this.roles.filter(role => role.id === id);
    if (results.length) {
      return results[0];
    }
  }

  userResgistration(user:User) {
    this.users.push(user);
    localStorage.setItem('VERIFIED_USER', JSON.stringify(user));
  }

  // public searchUser(event: any) {
  //   let searchedUser = (<HTMLInputElement>event.target).value;
  //   if(searchedUser && searchedUser.trim() != '')
  //   {
  //       this.users = this.users.filter((user)=>{
  //           return (this.users.role.toLowerCase().indexOf(searchedUser.toLowerCase())>-1)
  //       })
  //   }
  // }
}

