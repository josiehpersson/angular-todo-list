import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //för att vår NgModel i filter-textbox ska funka

import { AddTodoComponent } from './add-todo/add-todo.component';
import { TextfilterComponent } from './textfilter/textfilter.component';



@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [AddTodoComponent, TextfilterComponent],
  exports: [
    [AddTodoComponent, TextfilterComponent]
  ]
})
export class ComponentsModule { }
