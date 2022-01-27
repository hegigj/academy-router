import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {AuthGuard} from "./auth.guard";
import {ActiveTodoComponent} from "./main/active-todo/active-todo.component";
import {DoneTodoComponent} from "./main/done-todo/done-todo.component";
import {TodoItemComponent} from "./main/active-todo/todo-item/todo-item.component";
import {UserRole} from "./auth.service";
import {Status} from "./todo.service";
import {TodoResolver} from "./todo.resolver";

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
    path: 'admin-panel',
    canLoad: [AuthGuard],
    data: {
      userRole: UserRole.ADMIN
    },
    loadChildren: () => import('./admin-panel/admin-panel.module')
      .then(m => m.AdminPanelModule)
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'active',
        component: ActiveTodoComponent,
        canActivateChild: [AuthGuard],
        // canDeactivate: [AuthGuard],
        data: {
          title: 'Active Todos',
          userRole: UserRole.SIMPLE
        },
        children: [
          {
            path: ':TODO_ITEM_ID',
            component: TodoItemComponent,
            data: {
              statusOptions: [
                Status.ACTIVE,
                Status.DONE
              ],
              userRole: UserRole.SIMPLE
            },
            resolve: {
              todoItem: TodoResolver
            }
          }
        ]
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
// /login
// /feed
// /feed?pageNo=1
// /feed/0
// /feed/0/user
// FeedModel
// {
//   title: '',
//   desc: '',
//   thumbnail: '',
//   createdDate: Date,
//   user: {
//     name: '',
//     surname: '',
//     totalPosts: 4
// }

