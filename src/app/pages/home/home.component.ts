import { Component } from '@angular/core';
import { TodoListComponent } from "../../todo-list/todo-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [TodoListComponent]
})
export class HomeComponent {

}
