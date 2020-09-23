import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public eMail: string;
  public passWord: string;
  public conPassword: string;
  constructor() { }

  ngOnInit(): void {
  }

}
