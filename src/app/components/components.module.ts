import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddTodoComponent],
  exports: [
    [AddTodoComponent]
  ]
})
export class ComponentsModule { }
