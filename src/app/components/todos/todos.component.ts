import { Component } from '@angular/core';
import { TodoI } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  todos :TodoI[] =[
  { id:"todo-0001",
    title:"Overview Angular",
    status:true},

    { id:"todo-0002",
    title:"Data Binding - Angular",
    status:false},

    { id:"todo-0003",
    title:"Observalbles - Angular",
    status:false},
  ]
}
