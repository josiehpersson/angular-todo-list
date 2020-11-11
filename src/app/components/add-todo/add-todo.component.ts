import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['../../app.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  
  addTodo(todo) {
    console.log(todo);
    this.addTodoChange.next(todo);
  }
  
  @Output() addTodoChange= new EventEmitter();
}
