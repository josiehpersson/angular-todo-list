import { Component } from '@angular/core';
import { AppData, Todo} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myTodos: AppData = {
    todos: [
      {content: 'Buy groceries'},
      {content: 'Feed the cat'},
      {content: 'Fold laundry'},
      {content: 'Milk the cows'},
    ]
  };
  filteredTodos = [     
    {content: 'Buy groceries'},
    {content: 'Feed the cat'},
    {content: 'Fold laundry'},
    {content: 'Milk the cows'},
  ];


  addTodo(todo) {
    this.filteredTodos.push({
      content: todo
    });
  }
  filter(data: string) {
    if (data) {
      this.filteredTodos = this.myTodos.todos.filter((todo: Todo) => {
        return (
          todo.content.toLowerCase().indexOf(data.toLowerCase()) > -1
        );
      });
    } else {
      this.filteredTodos = this.myTodos.todos;
    }
  }

  deleteItem(todo) {
    for(let i = 0; i <= this.filteredTodos.length; i++) {
      if(todo === this.filteredTodos[i]) {
        this.filteredTodos.splice(i,1)
      }
    }
  }


}
