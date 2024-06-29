import { Component } from '@angular/core';
import { TodoUpdateComponent } from "../../todo-update/todo-update.component";

@Component({
    selector: 'app-update',
    standalone: true,
    templateUrl: './update.component.html',
    imports: [TodoUpdateComponent]
})
export class UpdateComponent {

}
