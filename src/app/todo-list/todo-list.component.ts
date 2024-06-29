import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { TodoFormComponent } from "../todo-form/todo-form.component";
import {NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    imports: [TodoFormComponent,NgFor,NgIf, RouterModule]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService){}
  
  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  updateTodo(id:number):void {
    // this.todoService.deleteTodo(id);
    // this.todos = this.todoService.getTodos();
  }

}
