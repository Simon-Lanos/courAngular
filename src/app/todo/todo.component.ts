import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:[];
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  toggle(todo) {
    todo.done = !todo.done;
  }

  clear() {
    this.todos = [];
  }

  delete(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  plus(todo) {
    todo.qty++;
    this.save();
  }

  minus(todo) {
    todo.qty = Math.max(todo.qty - 1, 0);
  }

  add() {
    this.todos.push({
      name: this.name,
      qty: this.qty,
      done: false
    });

    this.name = "";
    this.qty = "";
    this.save();
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
