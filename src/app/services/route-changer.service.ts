import { Injectable } from '@angular/core';
import { UserInfo } from '../login/user.model';

@Injectable({
  providedIn: 'root'
})
export class RouteChangerService {

  public users: UserInfo[] = [];
  public seedData = [
  {
      email: 'Pritvi',
      password: 'hash',
      first_name: 'name',
      last_name: 'name 1',
      role_id: 2
  },
  {
      email: 'Pritam',
      password: 'hash',
      first_name: 'name',
      last_name: 'name 1',
      role_id: 2
  },
  {
    email: 'Consilious',
    password: 'hash',
    first_name: 'name',
    last_name: 'name 1',
    role_id: 1
  },
  ] 
  constructor() { 
    this.seedData.forEach(element => {
      const user = new UserInfo(
        element.email,
        element.password,
        element.first_name,
        element.last_name,
        element.role_id
      );
      this.users.push(user);
    });
    console.log(this.users);
  }

}
