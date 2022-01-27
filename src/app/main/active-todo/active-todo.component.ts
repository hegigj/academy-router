import { Component, OnInit } from '@angular/core';
import {TodoModel, TodoService} from "../../todo.service";

@Component({
  selector: 'app-active-todo',
  templateUrl: './active-todo.component.html',
  styleUrls: ['./active-todo.component.scss']
})
export class ActiveTodoComponent implements OnInit {
  unsavedChanges: boolean;
  todoList?: TodoModel[];

  constructor(
    private todoService: TodoService
  ) {
    this.unsavedChanges = true;
  }

  ngOnInit(): void {
    this.todoService
      .getList()
      .subscribe(list => this.todoList = list);
  }

}
