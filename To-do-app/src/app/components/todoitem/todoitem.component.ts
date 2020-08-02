import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo: Task;

  constructor() { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  // Remove todo-Item on click
  onDelete(todo) {
    console.log('delete')
  }

}
