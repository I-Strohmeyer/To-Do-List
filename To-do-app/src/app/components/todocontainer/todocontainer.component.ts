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
    this.todos = this.myTodoService.getTodos();
  }
}
