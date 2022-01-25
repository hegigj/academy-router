import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {ActiveTodoComponent} from "./main/active-todo/active-todo.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<ActiveTodoComponent> {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(x: ActivatedRouteSnapshot): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    }

    this.router.navigateByUrl('login');
    return false;
  }

  canActivateChild(x: ActivatedRouteSnapshot): boolean {
    // console.log(x);
    // console.log('Child route data:', x.data);

    return this.authService.userRole === x.data.userRole;
  }

  canDeactivate(component: ActiveTodoComponent, currentRoute: ActivatedRouteSnapshot): boolean {
    if (component.unsavedChanges) {
      return confirm('You have unsaved changes!\nDo you want to go back?');
    }

    return false;
  }
}
