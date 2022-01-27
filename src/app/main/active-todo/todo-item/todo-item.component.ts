import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Status} from "../../../todo.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  statusOptions: Status[];
  todoForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.statusOptions = activatedRoute.snapshot.data.statusOptions;
    this.todoForm = new FormGroup({
      name: new FormControl(),
      dueDate: new FormControl(),
      status: new FormControl()
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(({ todoItem }) => {
        const { name, dueDate, status} = todoItem;
        this.todoForm.patchValue({
          name,
          dueDate,
          status
        });
      });
  }
}
