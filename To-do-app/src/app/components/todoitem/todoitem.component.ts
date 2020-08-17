import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todo: Task;
  @Output() deleteTodo: EventEmitter<Task> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  // Remove todo-Item on click
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

  // Checkoff todo-item on click
  onCheck(todo) {
    // UI checkoff
    todo.completed = !todo.completed;

    // Server checkoff
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }

}
