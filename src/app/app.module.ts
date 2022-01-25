import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {MaterialModule} from "./material.module";

import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {ActiveTodoComponent} from "./main/active-todo/active-todo.component";
import {DoneTodoComponent} from "./main/done-todo/done-todo.component";
import {TodoItemComponent} from "./main/active-todo/todo-item/todo-item.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ActiveTodoComponent,
    DoneTodoComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
