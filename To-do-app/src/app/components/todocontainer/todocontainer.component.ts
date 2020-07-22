import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-todocontainer',
  templateUrl: './todocontainer.component.html',
  styleUrls: ['./todocontainer.component.css']
})
export class TodocontainerComponent implements OnInit {
  todos: Task[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'My first To-do',
        completed: false
      },
      {
        id: 2,
        title: 'Get my Domain back',
        completed: false
      },
      {
        id: 3,
        title: 'Enjoy the vacation',
        completed: false
      },
    ];
  }
}
