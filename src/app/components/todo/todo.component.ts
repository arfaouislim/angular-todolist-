import { Component, Input } from '@angular/core';
import { TodoI } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo!: TodoI;

  onDeleteTodo (){
    console.log(">>>>>> deleted")
  }

}
