import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {AuthGuard} from "./auth.guard";
import {ActiveTodoComponent} from "./main/active-todo/active-todo.component";
import {DoneTodoComponent} from "./main/done-todo/done-todo.component";

const MAIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'active',
        component: ActiveTodoComponent,
        data: {
          userRole: 'SIMPLE_USER'
        },
      },
      {
        path: 'done',
        component: DoneTodoComponent,
        data: {
          userRole: 'ADMIN_USER'
        },
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(MAIN_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
