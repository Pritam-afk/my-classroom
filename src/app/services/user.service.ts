import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Role } from '../login/role.model';
import { User } from '../login/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private roles: Role[] = [];
  public users: User[] = [];
  private seedData = {
    users: [
      {
        email: 'pritvi@',
        password: 'hash',
        first_name: 'Pritvi',
        last_name: 'Majumder',
        role_id: 2
      },
      {
        email: 'pritam@',
        password: 'hash',
        first_name: 'Pritam',
        last_name: 'Roy',
        role_id: 2
      },
      {
        email: 'consilious@',
        password: 'hash',
        first_name: 'Consilious',
        last_name: 'Systems',
        role_id: 1
      },
    ],
    roles: [{
      id: 1,
      name: 'Teacher',
      description: 'Some description'
    },
    {
      id: 2,
      name: 'Student',
      description: 'Some description'
    },
    {
      id: 3,
      name: 'Admin',
      description: 'Some description'
    }]
  };
  constructor() {
    this.seedData.roles.forEach(element => {
      const role = new Role(
        element.id,
        element.name,
        element.description,
      )
      this.roles.push(role);
    });
    this.seedData.users.forEach(element => {
      const user = new User(
        element.email,
        element.password,
        element.first_name,
        element.last_name,
        this.getRoleById(element.role_id)
      );

      this.users.push(user);
    });
    console.log(this.users);
  }

  getRoleById(id: number) {
    const results = this.roles.filter(role => role.id === id);
    if (results.length) {
      return results[0];
    }
  }

}
