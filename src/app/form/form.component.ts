import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() transferTodo = new EventEmitter();
  @ViewChild('todoForm') form: NgForm;

  public newTodo = {
    task: '',
    content: ''
  };

  public isInvalid = false;

  /**
   * onSubmitHandler - event handler in form. Form validation for field completeness and reset when properly filled out
   * object is transferred from todo;
   */

  onSubmitHandler() {
    if (this.form.invalid) {
      this.form.resetForm();
      this.isInvalid = true;

      return;
    }

    this.isInvalid = false;
    this.transferTodo.emit(Object.assign({}, this.newTodo));
    this.form.resetForm();
  }
}
