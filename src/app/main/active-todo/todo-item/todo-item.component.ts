import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('TodoItemComponent init');
    console.log('[Snapshot]: I\'m todo', this.activatedRoute.snapshot.params.TODO_ITEM_ID);
    this.activatedRoute.params.subscribe((param) => console.log('[Watching]: I\'m todo', param.TODO_ITEM_ID));
    this.activatedRoute.queryParams.subscribe((param) => console.log('[Watching]: I\'m todo (query)', param));
  }

  ngOnDestroy(): void {
    console.log('TodoItemComponent destroyed');
  }

  goToPage(pageNo: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        pageNo
      }
    });
  }
}
