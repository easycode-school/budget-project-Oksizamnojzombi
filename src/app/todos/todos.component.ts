import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  public data = [];

  /**
   * todoAddHandler - method to intercept values from child
   * adds the todo object passed to the array
   */

  todoHandler(value) {
    this.data.push(value);
  }
}
