import { Injectable } from '@angular/core';
import { UserInfo } from '../login/user.model';

@Injectable({
  providedIn: 'root'
})
export class RouteChangerService {

  public users: UserInfo[] = [];
  public seedData = [
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
