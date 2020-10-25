import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false,
      // id: Math.floor(Math.random() * Math.floor(100))
    };

    console.log(todo);
    this.addTodo.emit(todo);
    this.title = '';
  }

}
