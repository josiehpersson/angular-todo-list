import { Component } from '@angular/core';
import { AppData} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: AppData = {
    todos: [
      {content: 'Buy groceries'},
      {content: 'Feed the cat'},
      {content: 'Fold laundry'},
      {content: 'Milk the cows'},
    ]
  };

  addTodo(todo) {
    this.data.todos.push({
      content: todo
    });
  }

  deleteItem(todo) {
    for(let i = 0; i <= this.data.todos.length; i++) {
      if(todo === this.data.todos[i]) {
        this.data.todos.splice(i,1)
      }
    }
  }


}
