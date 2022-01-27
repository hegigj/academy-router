import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

export enum Status {
  ACTIVE,
  DONE
}

export interface TodoModel {
  id: number;
  name: string;
  dueDate: Date;
  status: Status;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: TodoModel[];

  constructor() {
    this.todoList = [
      {
        id: 1,
        name: 'Dinner',
        dueDate: new Date(),
        status: Status.ACTIVE
      },
      {
        id: 2,
        name: 'Lunch',
        dueDate: new Date(),
        status: Status.DONE
      }
    ];
  }

  getList(): Observable<TodoModel[]> {
    return of([...this.todoList]);
  }

  getSingle(id: number): Observable<TodoModel | undefined> {
    return of([...this.todoList])
      .pipe(
        map(list => list.find(item => item.id === id)),
      );
  }
}
