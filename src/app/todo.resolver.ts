import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {TodoModel, TodoService} from "./todo.service";

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<TodoModel | undefined> {
  constructor(private todoService: TodoService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<TodoModel | undefined> | undefined {
    if (route.paramMap.has('TODO_ITEM_ID')) {
      const id: number = +(route.paramMap.get('TODO_ITEM_ID') as string);
      return this.todoService.getSingle(id);
    }

    this.router.navigate(['..']);
    return undefined;
  }
}
