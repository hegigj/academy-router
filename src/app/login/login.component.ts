import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService, UserRole} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  login(): void {
    if (this.loginForm.valid) {
      if (this.authService.authUser(this.loginForm.value)) {
        switch (this.authService.userRole) {
          case UserRole.ADMIN:
            this.router.navigateByUrl('admin-panel');
            break;
          case UserRole.SIMPLE:
            this.router.navigateByUrl('main');
            break;
        }
        // this.router.navigate(['main']);
      }
    }
  }
}
