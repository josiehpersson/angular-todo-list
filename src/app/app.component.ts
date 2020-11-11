import { Component } from '@angular/core';
import { Todo ,AppData} from './interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: AppData = {
    todos: [
    ]
  };

  addTodo(todo) {
    this.data.todos.push({
      title: todo,
      completed: false
    });
  }


}
