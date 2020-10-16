import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public verifiedUser: any;
  public isModalOpen: boolean;
  public userName: string;
  public userRole: string;
  public userEmail: string;
  public userDescription: string;

  constructor() { }

  ngOnInit(): void {
    this.verifiedUser = JSON.parse(localStorage.getItem('VERIFIED_USER'))
    console.log(this.verifiedUser);
    
  }

  public onLogout() {
    localStorage.removeItem('VERIFIED_USER');
  }

  public openUserModal(userName: string, userRole: string, userEmail: string, userDescription: string) {
    this.isModalOpen = true;
    this.userName = userName;
    this.userRole = userRole;
    this.userEmail = userEmail;
    this.userDescription = userDescription;
    console.log(this.userRole);
  }

  public closeUserModal() {
    this.isModalOpen = false;
    this.userName = "";
    this.userRole = "";
    this.userEmail = "";
    this.userDescription = "";
  }
}
