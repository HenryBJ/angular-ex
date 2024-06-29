import { Component, EventEmitter, Output } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  title = '';
  description = '';
  complete = false;

  @Output() todoAdded = new EventEmitter<void>();

  constructor(private todoService:TodoService, private router: Router) {}

  addTodo():void {
    const newTodo:Todo = {
      id: '',
      title: this.title,
      description: this.description,
      complete:this.complete,
    };

    this.todoService.addTodo(newTodo).subscribe(()=>
      {
        this.todoAdded.emit();
        this.title = '';
        this.description = '';
        this.router.navigate(['/home']);

      });
    
  }  

}
