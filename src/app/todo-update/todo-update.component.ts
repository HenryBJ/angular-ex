import { Component ,OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-update',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './todo-update.component.html',
})
export class TodoUpdateComponent  implements OnInit {
  id: string = '';
  title: string = '';
  description: string = '';
  complete: boolean = false;


  constructor(private todoService:TodoService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ??'';
    this.todoService.getById(this.id).subscribe(item=>{
      this.title = item.title;
      this.description = item.description;
      this.complete = item.complete;
    });
    

  }

  updateTodo():void {
    this.todoService.updateTodo(this.id,{id:this.id,title:this.title,description:this.description,complete:this.complete})
    .subscribe(()=>{
      this.router.navigate(['/home']);
    });  
  }  

}
