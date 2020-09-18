import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterGaurdService implements CanActivate{

  private _verification;
  constructor(private router: Router) {
    this._verification = localStorage.getItem('VERIFIED_USER');
  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(localStorage.getItem('VERIFIED_USER')){
      return true;    
    }
    else{
      return false;
    }
    
  }
}
