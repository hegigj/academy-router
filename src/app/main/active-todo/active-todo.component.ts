import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-todo',
  templateUrl: './active-todo.component.html',
  styleUrls: ['./active-todo.component.scss']
})
export class ActiveTodoComponent implements OnInit {
  unsavedChanges: boolean;

  constructor() {
    this.unsavedChanges = true;
  }

  ngOnInit(): void {
  }

}
