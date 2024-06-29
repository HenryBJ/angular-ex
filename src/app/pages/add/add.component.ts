import { Component } from '@angular/core';
import { TodoFormComponent } from "../../todo-form/todo-form.component";

@Component({
    selector: 'app-add',
    standalone: true,
    templateUrl: './add.component.html',
    imports: [TodoFormComponent]
})
export class AddComponent {

}
