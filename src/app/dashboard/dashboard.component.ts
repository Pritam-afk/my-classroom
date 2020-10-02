import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public teacherMode: boolean;
  public verifiedUser;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // let role = this.activatedRoute.snapshot.paramMap.get("id"); 
    // if(parseInt(role) === 1) {
    //   this.teacherMode = true;     
    // } else{
    //   this.teacherMode = false;
    // }
    // console.log(this.teacherMode);
    this.verifiedUser = JSON.parse(localStorage.getItem('VERIFIED_USER'))
    console.log(this.verifiedUser);
    
  }

}
