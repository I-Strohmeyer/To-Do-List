import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'My first To-do',
        completed: true
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
