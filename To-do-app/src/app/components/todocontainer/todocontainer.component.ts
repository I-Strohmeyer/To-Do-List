import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-todocontainer',
  templateUrl: './todocontainer.component.html',
  styleUrls: ['./todocontainer.component.css']
})
export class TodocontainerComponent implements OnInit {
  todos: Task[];

  constructor(private myTodoService: TodoService) { }

  ngOnInit() {
    this.myTodoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Task) {
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Remove from server
    this.myTodoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Task) {
    // Add(post) to server
    this.myTodoService.addTodo(todo).subscribe( todo => {
      this.todos.unshift(todo);
    });
  }

}
