import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    }

    this.router.navigateByUrl('login');
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    console.log('Child route data:', childRoute.data);

    return this.authService.userRole === childRoute.data.userRole;
  }
}
